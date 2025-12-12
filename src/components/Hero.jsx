import React from 'react';
import { ChevronRight, Sparkles, Shield, Truck } from 'lucide-react';

const Hero = ({ setActiveSection }) => {
    return (
        <section className="container mx-auto px-4 py-12 md:py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
               
                <div>
                    <div className="inline-flex items-center gap-2 bg-linear-to-r from-indigo-100 to-purple-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Sparkles size={16} />
                        New Collection 2024
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Premium Fashion
                        <span className="block text-indigo-600">For Every Occasion</span>
                    </h1>

                    <p className="text-lg text-gray-600 mb-8 max-w-lg">
                        Discover our curated collection of high-quality clothing that combines style, comfort, and sustainability for the modern lifestyle.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button
                            onClick={() => setActiveSection('products')}
                            className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2"
                        >
                            Shop Now
                            <ChevronRight size={20} />
                        </button>
                        <button
                            onClick={() => setActiveSection('about')}
                            className="bg-white text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors border border-gray-300"
                        >
                            Learn More
                        </button>
                    </div>

            
                    <div className="grid grid-cols-3 gap-6 mt-12">
                        <div className="text-center">
                            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Truck className="w-6 h-6 text-blue-600" />
                            </div>
                            <p className="text-sm font-medium">Free Shipping</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Shield className="w-6 h-6 text-green-600" />
                            </div>
                            <p className="text-sm font-medium">Quality Guarantee</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Sparkles className="w-6 h-6 text-purple-600" />
                            </div>
                            <p className="text-sm font-medium">Premium Materials</p>
                        </div>
                    </div>
                </div>

               
                <div className="relative">
                    <div className="bg-linear-to-br from-indigo-500 to-purple-600 rounded-3xl h-96 lg:h-[500px] overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                            alt="Fashion Collection"
                            className="w-full h-full object-cover mix-blend-overlay opacity-90"
                        />
                    </div>
                    <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
                        <p className="font-bold text-gray-900">"Best fashion store I've shopped at!"</p>
                        <p className="text-sm text-gray-500 mt-2">- Sarah Johnson, Customer</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;