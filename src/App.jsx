import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
    Star,
    ShoppingBag,
    Calendar,
    Tag,
    Zap,
    ChevronRight,
    Filter,
    Grid,
    List
} from 'lucide-react';

const App = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        axios.get('/api/products')
            .then((response) => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error:', error);
                setError('Failed to load products');
                setLoading(false);
            });
    }, []);

    const formatDate = (timestamp) => {
        return new Date(timestamp).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const categories = ['all', 'Men', 'Women', 'Kids'];
    const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter(product => product.category === selectedCategory);

    if (loading) {
        return (
            <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mx-auto"></div>
                    <p className="mt-4 text-lg text-gray-600">Loading products...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4">
                <div className="text-center max-w-md">
                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ShoppingBag className="w-10 h-10 text-red-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Failed to Load Products</h3>
                    <p className="text-gray-600 mb-6">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 via-blue-50 to-purple-50">
            <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-200">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Fashion Store</h1>
                            <p className="text-gray-600 mt-1">Premium clothing for everyone</p>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-500 hover:bg-gray-100'}`}
                                >
                                    <Grid size={20} />
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-500 hover:bg-gray-100'}`}
                                >
                                    <List size={20} />
                                </button>
                            </div>

                            <div className="hidden md:flex items-center gap-2 text-sm">
                                <Filter size={16} />
                                <span>Filter by:</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


            <div className="container mx-auto px-4 py-6">
                <div className="flex flex-wrap gap-2 mb-6">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                                ? 'bg-indigo-600 text-white shadow-md'
                                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}`}
                        >
                            {category === 'all' ? 'All Products' : category}
                        </button>
                    ))}
                </div>


                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <p className="text-sm text-gray-500">Total Products</p>
                        <p className="text-2xl font-bold text-gray-900">{filteredProducts.length}</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <p className="text-sm text-gray-500">Bestsellers</p>
                        <p className="text-2xl font-bold text-amber-600">
                            {filteredProducts.filter(p => p.bestseller).length}
                        </p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <p className="text-sm text-gray-500">Categories</p>
                        <p className="text-2xl font-bold text-emerald-600">
                            {[...new Set(filteredProducts.map(p => p.category))].length}
                        </p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <p className="text-sm text-gray-500">Avg Price</p>
                        <p className="text-2xl font-bold text-blue-600">
                            ${filteredProducts.length > 0
                                ? Math.round(filteredProducts.reduce((sum, p) => sum + p.price, 0) / filteredProducts.length)
                                : 0}
                        </p>
                    </div>
                </div>


                {filteredProducts.length === 0 ? (
                    <div className="text-center py-16">
                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Tag className="w-12 h-12 text-gray-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
                        <p className="text-gray-500">Try selecting a different category</p>
                    </div>
                ) : (
                    <div className={`${viewMode === 'grid'
                        ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                        : 'space-y-4'}`}>
                        {filteredProducts.map((product) => (
                            <div
                                key={product._id}
                                className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group ${viewMode === 'list' ? 'flex' : ''}`}
                            >

                                <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-48 shrink-0' : 'h-64'}`}>
                                    <img
                                        src={product.image && product.image.length > 0 ? product.image[0] : ''}
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


                                    {product.image && product.image.length > 1 && (
                                        <div className="absolute top-3 right-3 bg-black/50 text-white px-2 py-1 rounded-md text-xs">
                                            +{product.image.length - 1}
                                        </div>
                                    )}
                                </div>


                                <div className={`p-5 ${viewMode === 'list' ? 'grow' : ''}`}>
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h3 className="font-bold text-lg text-gray-900 mb-1 line-clamp-1 group-hover:text-indigo-600 transition-colors">
                                                {product.name}
                                            </h3>
                                            <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                                                {product.description}
                                            </p>
                                        </div>
                                        <span className="bg-indigo-50 text-indigo-700 text-sm font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                                            {product.category}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <p className="text-2xl font-bold text-gray-900">${product.price}</p>
                                            <p className="text-xs text-gray-500 mt-1">{product.subCategory}</p>
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
                                        <div className="flex items-center gap-4 text-sm text-gray-500">
                                            <span>ID: {product._id.substring(0, 8)}</span>
                                            <span className="flex items-center gap-1">
                                                <Star size={14} className="text-amber-400 fill-amber-400" />
                                                {product.bestseller ? 'Top Rated' : 'Standard'}
                                            </span>
                                        </div>
                                        <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium flex items-center gap-1">
                                            View Details
                                            <ChevronRight size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}


                <footer className="mt-12 pt-8 border-t border-gray-200">
                    <div className="text-center text-gray-500 text-sm">
                        <p>Showing {filteredProducts.length} of {products.length} products</p>
                        <p className="mt-2">© {new Date().getFullYear()} Fashion Store. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default App;