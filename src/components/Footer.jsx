import React from 'react';
import { ShoppingBag, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = ({ setActiveSection }) => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        Shop: [
            { label: "New Arrivals", onClick: () => setActiveSection('products') },
            { label: "Men's Collection", onClick: () => setActiveSection('products') },
            { label: "Women's Collection", onClick: () => setActiveSection('products') },
            { label: "Accessories", onClick: () => setActiveSection('products') },
            { label: "Sale", onClick: () => setActiveSection('products') }
        ],
        Company: [
            { label: "About Us", onClick: () => setActiveSection('about') },
            { label: "Our Story", onClick: () => setActiveSection('about') },
            { label: "Careers", onClick: () => setActiveSection('about') },
            { label: "Press", onClick: () => setActiveSection('about') },
            { label: "Sustainability", onClick: () => setActiveSection('about') }
        ],
        Help: [
            { label: "Contact Us", onClick: () => setActiveSection('contact') },
            { label: "FAQ", onClick: () => setActiveSection('contact') },
            { label: "Shipping Info", onClick: () => setActiveSection('contact') },
            { label: "Returns & Exchanges", onClick: () => setActiveSection('contact') },
            { label: "Size Guide", onClick: () => setActiveSection('contact') }
        ]
    };

    const socialLinks = [
        { icon: <Facebook size={20} />, label: "Facebook" },
        { icon: <Instagram size={20} />, label: "Instagram" },
        { icon: <Twitter size={20} />, label: "Twitter" },
        { icon: <Youtube size={20} />, label: "YouTube" }
    ];

    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-white p-2 rounded-lg">
                                <ShoppingBag className="w-6 h-6 text-gray-900" />
                            </div>
                            <span className="text-2xl font-bold">FashionStore</span>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Premium fashion for the modern lifestyle. Quality, style, and sustainability combined.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h3 className="text-lg font-semibold mb-6">{category}</h3>
                            <ul className="space-y-3">
                                {links.map((link, index) => (
                                    <li key={index}>
                                        <button
                                            onClick={link.onClick}
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                   
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <MapPin className="w-5 h-5 text-indigo-400" />
                                <span className="text-gray-400">123 Fashion Street, New York, NY 10001</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-indigo-400" />
                                <span className="text-gray-400">+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-indigo-400" />
                                <span className="text-gray-400">support@fashionstore.com</span>
                            </li>
                        </ul>

                       
                        <div className="mt-8">
                            <h4 className="font-semibold mb-4">Subscribe to our newsletter</h4>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="bg-gray-800 text-white px-4 py-2 rounded-l-lg flex-1 focus:outline-none"
                                />
                                <button className="bg-indigo-600 px-4 py-2 rounded-r-lg hover:bg-indigo-700 transition-colors">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} FashionStore. All rights reserved.
                        </p>
                        <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;