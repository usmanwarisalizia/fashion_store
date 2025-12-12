import React, { useState } from 'react';
import { Star, Zap, Filter, Grid, List, Plus } from 'lucide-react';
import ProductCard from './Products/ProductCard';

const ProductsCategory = ({ products, loading, error, addToCart }) => {
    const [viewMode, setViewMode] = useState('grid');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortBy, setSortBy] = useState('featured');

    const categories = ['all', 'Men', 'Women', 'Kids', 'Accessories'];

    const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter(product => product.category === selectedCategory);

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (sortBy) {
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'rating':
                return (b.rating || 0) - (a.rating || 0);
            default:
                return 0;
        }
    });

    if (loading) {
        return (
            <div className="container mx-auto px-4 py-12">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mx-auto"></div>
                    <p className="mt-4 text-lg text-gray-600">Loading products...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mx-auto px-4 py-12 text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-10 h-10 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Failed to Load Products</h3>
                <p className="text-gray-600">{error}</p>
            </div>
        );
    }

    return (
        <section className="container mx-auto px-4 py-12">

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900">Our Products</h2>
                    <p className="text-gray-600 mt-2">Discover our premium collection</p>
                </div>

                <div className="flex flex-wrap gap-4">

                    <div className="flex items-center gap-2 border border-gray-200 rounded-lg p-1">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`p-2 rounded ${viewMode === 'grid' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-500'}`}
                        >
                            <Grid size={20} />
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`p-2 rounded ${viewMode === 'list' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-500'}`}
                        >
                            <List size={20} />
                        </button>
                    </div>


                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:border-indigo-500"
                    >
                        <option value="featured">Featured</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="rating">Top Rated</option>
                    </select>
                </div>
            </div>


            <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                            ? 'bg-indigo-600 text-white shadow-md'
                            : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                            }`}
                    >
                        {category === 'all' ? 'All Products' : category}
                    </button>
                ))}
            </div>


            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
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
                    <p className="text-sm text-gray-500">Avg Rating</p>
                    <p className="text-2xl font-bold text-blue-600">
                        {filteredProducts.length > 0
                            ? (filteredProducts.reduce((sum, p) => sum + (p.rating || 0), 0) / filteredProducts.length).toFixed(1)
                            : '0.0'}
                    </p>
                </div>
            </div>


            {sortedProducts.length === 0 ? (
                <div className="text-center py-16">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Filter className="w-12 h-12 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
                    <p className="text-gray-500">Try selecting a different category</p>
                </div>
            ) : (
                <div className={`${viewMode === 'grid'
                    ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                    : 'space-y-6'}`}
                >
                    {sortedProducts.map((product) => (
                        <ProductCard
                            key={product._id}
                            product={product}
                            viewMode={viewMode}
                            addToCart={addToCart}
                        />
                    ))}
                </div>
            )}
        </section>
    );
};

export default ProductsCategory;