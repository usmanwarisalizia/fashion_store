import React from 'react';
import { X, ShoppingBag, Trash2, Plus, Minus } from 'lucide-react';

const Cart = ({ cartItems, removeFromCart, updateQuantity, cartTotal, setIsCartOpen }) => {
    return (
        <div className="fixed inset-0 z-50 overflow-hidden">

            <div
                className="absolute inset-0 bg-black/50"
                onClick={() => setIsCartOpen(false)}
            />


            <div className="absolute inset-y-0 right-0 flex max-w-full">
                <div className="relative w-screen max-w-md">
                    <div className="h-full flex flex-col bg-white shadow-xl">

                        <div className="flex items-center justify-between px-4 py-6 border-b border-gray-200">
                            <div className="flex items-center gap-3">
                                <ShoppingBag className="w-6 h-6 text-indigo-600" />
                                <h2 className="text-xl font-bold text-gray-900">Your Cart</h2>
                                <span className="bg-indigo-100 text-indigo-600 text-sm font-semibold px-2 py-1 rounded-full">
                                    {cartItems.length} items
                                </span>
                            </div>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X size={24} className="text-gray-500" />
                            </button>
                        </div>


                        <div className="flex-1 overflow-y-auto px-4 py-6">
                            {cartItems.length === 0 ? (
                                <div className="text-center py-12">
                                    <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                    <p className="text-gray-500">Your cart is empty</p>
                                    <button
                                        onClick={() => setIsCartOpen(false)}
                                        className="mt-4 text-indigo-600 hover:text-indigo-700 font-medium"
                                    >
                                        Continue Shopping
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {cartItems.map((item) => (
                                        <div
                                            key={item._id}
                                            className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg"
                                        >

                                            <img
                                                src={item.image && item.image[0]}
                                                alt={item.name}
                                                className="w-20 h-20 object-cover rounded-lg"
                                            />


                                            <div className="flex-1">
                                                <h4 className="font-medium text-gray-900">{item.name}</h4>
                                                <p className="text-sm text-gray-500">{item.category}</p>
                                                <p className="font-bold text-gray-900 mt-1">${item.price.toFixed(2)}</p>
                                            </div>


                                            <div className="flex flex-col items-end gap-2">
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        onClick={() => updateQuantity(item._id, item.quantity - 1)}
                                                        className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-50"
                                                    >
                                                        <Minus size={16} />
                                                    </button>
                                                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item._id, item.quantity + 1)}
                                                        className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-50"
                                                    >
                                                        <Plus size={16} />
                                                    </button>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item._id)}
                                                    className="text-red-500 hover:text-red-700 text-sm flex items-center gap-1"
                                                >
                                                    <Trash2 size={14} />
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>


                        {cartItems.length > 0 && (
                            <div className="border-t border-gray-200 p-6">
                                <div className="space-y-4">

                                    <div className="flex justify-between text-lg font-semibold">
                                        <span>Subtotal:</span>
                                        <span>${cartTotal.toFixed(2)}</span>
                                    </div>


                                    <div className="flex justify-between text-sm text-gray-500">
                                        <span>Shipping:</span>
                                        <span>{cartTotal > 100 ? 'Free' : '$10.00'}</span>
                                    </div>


                                    <div className="flex justify-between text-xl font-bold border-t border-gray-200 pt-4">
                                        <span>Total:</span>
                                        <span>${(cartTotal + (cartTotal > 100 ? 0 : 10)).toFixed(2)}</span>
                                    </div>


                                    <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                                        Proceed to Checkout
                                    </button>


                                    <button
                                        onClick={() => setIsCartOpen(false)}
                                        className="w-full text-center text-gray-600 hover:text-gray-800 font-medium py-2"
                                    >
                                        Continue Shopping
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;