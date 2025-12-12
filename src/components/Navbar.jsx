import React, { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

const Navbar = ({ activeSection, setActiveSection, cartItems, setIsCartOpen }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'products', label: 'Products' },
        { id: 'about', label: 'About' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                   
                    <div className="flex items-center gap-2">
                        <div className="bg-indigo-600 p-2 rounded-lg">
                            <ShoppingBag className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-gray-900">FashionStore</span>
                    </div>

                   
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveSection(item.id)}
                                className={`font-medium transition-colors ${activeSection === item.id
                                    ? 'text-indigo-600 border-b-2 border-indigo-600'
                                    : 'text-gray-700 hover:text-indigo-600'
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>

                  
                    <div className="flex items-center gap-4">
                       
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="relative p-2 text-gray-700 hover:text-indigo-600 transition-colors"
                        >
                            <ShoppingBag className="w-6 h-6" />
                            {cartItems.length > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                    {cartItems.length}
                                </span>
                            )}
                        </button>


                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 text-gray-700 hover:text-indigo-600"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>


                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
                        <div className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        setActiveSection(item.id);
                                        setIsMenuOpen(false);
                                    }}
                                    className={`text-left px-4 py-2 rounded-lg transition-colors ${activeSection === item.id
                                        ? 'bg-indigo-50 text-indigo-600'
                                        : 'text-gray-700 hover:bg-gray-50'
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;