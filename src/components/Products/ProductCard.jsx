import React from 'react';
import { Star, Zap, Calendar, Plus, ShoppingBag } from 'lucide-react';

const ProductCard = ({ product, viewMode, addToCart }) => {
    const formatDate = (timestamp) => {
        return new Date(timestamp).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    return (
        <div className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''}`}>

            <div className={`relative overflow-hidden ${viewMode === 'list' ? 'md:w-64' : 'h-64'}`}>
                <img
                    src={product.image && product.image.length > 0 ? product.image[0] : 'https://via.placeholder.com/300'}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />


                {product.bestseller && (
                    <div className="absolute top-3 left-3">
                        <span className="bg-linear-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-md">
                            <Zap size={12} />
                            Bestseller
                        </span>
                    </div>
                )}


                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs text-gray-700 flex items-center gap-1">
                        <Calendar size={10} />
                        {formatDate(product.date)}
                    </span>
                </div>


                <button
                    onClick={() => addToCart(product)}
                    className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-lg hover:bg-indigo-600 hover:text-white transition-colors"
                    title="Add to Cart"
                >
                    <ShoppingBag size={18} />
                </button>
            </div>


            <div className={`p-5 ${viewMode === 'list' ? 'md:flex-1' : ''}`}>
                <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                        <h3 className="font-bold text-lg text-gray-900 mb-1 line-clamp-1 group-hover:text-indigo-600 transition-colors">
                            {product.name}
                        </h3>
                        <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                            {product.description}
                        </p>
                    </div>
                    <span className="bg-indigo-50 text-indigo-700 text-sm font-semibold px-3 py-1 rounded-full whitespace-nowrap ml-2">
                        {product.category}
                    </span>
                </div>


                <div className="flex items-center justify-between mb-4">
                    <div>
                        <p className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
                        <div className="flex items-center gap-1 mt-1">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={14}
                                    className={i < Math.floor(product.rating || 0) ? "text-amber-400 fill-amber-400" : "text-gray-300"}
                                />
                            ))}
                            <span className="text-xs text-gray-500 ml-1">
                                ({product.rating || 0})
                            </span>
                        </div>
                    </div>
                </div>


                <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">Available Sizes:</p>
                    <div className="flex flex-wrap gap-2">
                        {product.sizes && product.sizes.map((size, index) => (
                            <span
                                key={index}
                                className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md text-sm font-medium hover:border-indigo-500 hover:text-indigo-600 transition-colors cursor-pointer"
                            >
                                {size}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                        ID: {product._id?.substring(0, 8) || 'N/A'}
                    </span>
                    <button
                        onClick={() => addToCart(product)}
                        className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors flex items-center gap-1"
                    >
                        <Plus size={16} />
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;