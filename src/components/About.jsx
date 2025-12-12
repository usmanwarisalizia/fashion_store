import React from 'react';
import { Award, Users, Globe, Heart } from 'lucide-react';

const About = () => {
    const features = [
        {
            icon: <Award className="w-8 h-8" />,
            title: "Premium Quality",
            description: "We source only the finest materials for our products"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Customer First",
            description: "Dedicated to providing exceptional shopping experience"
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Global Shipping",
            description: "Fast and reliable delivery worldwide"
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Ethical Sourcing",
            description: "Committed to sustainable and ethical practices"
        }
    ];

    return (
        <section className="container mx-auto px-4 py-12">
       
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    About FashionStore
                </h1>
                <p className="text-lg text-gray-600">
                    We're passionate about bringing you the latest fashion trends while maintaining the highest quality standards and ethical practices.
                </p>
            </div>

           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {features.map((feature, index) => (
                    <div key={index} className="text-center">
                        <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>

          
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                    <p className="text-gray-600 mb-4">
                        Founded in 2010, FashionStore began as a small boutique with a big vision: to make premium fashion accessible to everyone. Over the years, we've grown into a trusted name in the fashion industry, known for our commitment to quality and customer satisfaction.
                    </p>
                    <p className="text-gray-600">
                        Today, we serve customers worldwide with our carefully curated collections that blend timeless style with modern trends. Our team of fashion experts works tirelessly to bring you the best products from around the globe.
                    </p>
                </div>
                <div className="rounded-2xl overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                        alt="Our Store"
                        className="w-full h-96 object-cover"
                    />
                </div>
            </div>

            {/* Team Section */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { name: "Sarah Chen", role: "Creative Director", image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
                        { name: "Michael Rodriguez", role: "Head of Design", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
                        { name: "Emma Wilson", role: "Customer Experience", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
                    ].map((member, index) => (
                        <div key={index} className="text-center">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                            />
                            <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                            <p className="text-gray-600">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;