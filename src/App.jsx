import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProductsCategory from './components/ProductsCategory';
import ContactUs from './components/ContactUs';
import Cart from './components/Cart';
import Footer from './components/Footer';

const App = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeSection, setActiveSection] = useState('home');
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

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

    const addToCart = (product) => {
        setCartItems(prev => {
            const existingItem = prev.find(item => item._id === product._id);
            if (existingItem) {
                return prev.map(item =>
                    item._id === product._id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId) => {
        setCartItems(prev => prev.filter(item => item._id !== productId));
    };

    const updateQuantity = (productId, quantity) => {
        if (quantity < 1) {
            removeFromCart(productId);
            return;
        }
        setCartItems(prev =>
            prev.map(item =>
                item._id === productId ? { ...item, quantity } : item
            )
        );
    };

    const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 via-blue-50 to-purple-50">
            <Navbar
                activeSection={activeSection}
                setActiveSection={setActiveSection}
                cartItems={cartItems}
                setIsCartOpen={setIsCartOpen}
            />

            {isCartOpen && (
                <Cart
                    cartItems={cartItems}
                    removeFromCart={removeFromCart}
                    updateQuantity={updateQuantity}
                    cartTotal={cartTotal}
                    setIsCartOpen={setIsCartOpen}
                />
            )}

            <main>
                {activeSection === 'home' && (
                    <>
                        <Hero setActiveSection={setActiveSection} />
                        <ProductsCategory
                            products={products}
                            loading={loading}
                            error={error}
                            addToCart={addToCart}
                        />
                    </>
                )}

                {activeSection === 'about' && <About />}
                {activeSection === 'products' && (
                    <ProductsCategory
                        products={products}
                        loading={loading}
                        error={error}
                        addToCart={addToCart}
                    />
                )}
                {activeSection === 'contact' && <ContactUs />}
            </main>

            <Footer setActiveSection={setActiveSection} />
        </div>
    );
};

export default App;