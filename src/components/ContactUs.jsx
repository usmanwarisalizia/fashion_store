import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email",
            details: "support@fashionstore.com",
            subtitle: "We reply within 24 hours"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Phone",
            details: "+1 (555) 123-4567",
            subtitle: "Mon-Fri from 9am to 6pm"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Office",
            details: "123 Fashion Street, New York, NY 10001",
            subtitle: "Visit our showroom"
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Hours",
            details: "Monday - Friday: 9am - 6pm",
            subtitle: "Saturday: 10am - 4pm"
        }
    ];

    return (
        <section className="container mx-auto px-4 py-12">
        
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Get in Touch
                </h1>
                <p className="text-lg text-gray-600">
                    Have questions? We're here to help. Reach out to us through any of the channels below.
                </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
               
                <div className="lg:col-span-1">
                    <div className="bg-linear-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                            <MessageSquare className="w-6 h-6 text-indigo-600" />
                            Contact Information
                        </h2>

                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="bg-white p-3 rounded-xl shadow-sm">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{info.title}</h3>
                                        <p className="text-gray-800 mt-1">{info.details}</p>
                                        <p className="text-sm text-gray-500 mt-1">{info.subtitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        
                        <div className="mt-12">
                            <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                            <div className="flex gap-4">
                                {['Facebook', 'Instagram', 'Twitter', 'Pinterest'].map((platform) => (
                                    <a
                                        key={platform}
                                        href="#"
                                        className="bg-white px-4 py-2 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium"
                                    >
                                        {platform}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

               
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h2>
                        <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you soon.</p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                                    placeholder="How can we help you?"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors resize-none"
                                    placeholder="Your message here..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2"
                            >
                                <Send size={20} />
                                Send Message
                            </button>
                        </form>
                    </div>

                  
                    <div className="mt-12">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
                        <div className="space-y-4">
                            {[
                                {
                                    q: "What is your return policy?",
                                    a: "We offer a 30-day return policy for all unworn items with tags attached."
                                },
                                {
                                    q: "How long does shipping take?",
                                    a: "Standard shipping takes 5-7 business days. Express shipping is available for 2-3 business days."
                                },
                                {
                                    q: "Do you ship internationally?",
                                    a: "Yes, we ship to over 50 countries worldwide with various shipping options."
                                }
                            ].map((faq, index) => (
                                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                                    <h4 className="font-semibold text-gray-900 mb-2">{faq.q}</h4>
                                    <p className="text-gray-600">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;