import React, { useState, useEffect } from 'react';
import { ChevronRight, Sparkles, Shield, Truck, Star, Heart, Check } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';

const Hero = ({ setActiveSection }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0);
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    const clipPathStyle = {
        clipPath: "polygon(0px 16.9336px, 0px 16.9336px, 0.20941315px 14.338315752px, 0.8156912px 11.876360336px, 1.78589205px 9.580675744px, 3.0870736px 7.484203968px, 4.68629375px 5.619887px, 6.5506104px 4.020666832px, 8.64708145px 2.719485456px, 10.9427648px 1.749284864px, 13.40471835px 1.143007048px, 16px 0.933594px, calc(100% - 16px) 0.933594px, calc(100% - 16px) 0.933594px, calc(100% - 13.404609px) 1.143007048px, calc(100% - 10.942592px) 1.749284864px, calc(100% - 8.646883px) 2.719485456px, calc(100% - 6.550416px) 4.020666832px, calc(100% - 4.686125px) 5.619887px, calc(100% - 3.086944px) 7.484203968px, calc(100% - 1.785807px) 9.580675744px, calc(100% - 0.81564800000001px) 11.876360336px, calc(100% - 0.20940100000001px) 14.338315752px, calc(100% - 0px) 16.9336px, calc(100% - 0px) 54.9336px, calc(100% - 0px) 54.9336px, calc(100% - 0.2094009999999px) 57.5288695px, calc(100% - 0.8156479999999px) 59.990816px, calc(100% - 1.785807px) 62.2864965px, calc(100% - 3.0869439999999px) 64.382968px, calc(100% - 4.686125px) 66.2472875px, calc(100% - 6.550416px) 67.846512px, calc(100% - 8.646883px) 69.1476985px, calc(100% - 10.942592px) 70.117904px, calc(100% - 13.404609px) 70.7241855px, calc(100% - 16px) 70.9336px, calc(100% - 16px) 70.9336px, calc(100% - 18.595391px) 71.1430118px, calc(100% - 21.057408px) 71.7492864px, calc(100% - 23.353117px) 72.7194826px, calc(100% - 25.449584px) 74.0206592px, calc(100% - 27.313875px) 75.619875px, calc(100% - 28.913056px) 77.4841888px, calc(100% - 30.214193px) 79.5806594px, calc(100% - 31.184352px) 81.8763456px, calc(100% - 31.790599px) 84.3383062px, calc(100% - 32px) 86.9336px, calc(100% - 32px) 164.934px, calc(100% - 32px) 164.934px, calc(100% - 31.790599px) 167.529148px, calc(100% - 31.184352px) 169.991024px, calc(100% - 30.214193px) 172.286676px, calc(100% - 28.913056px) 174.383152px, calc(100% - 27.313875px) 176.2475px, calc(100% - 25.449584px) 177.846768px, calc(100% - 23.353117px) 179.148004px, calc(100% - 21.057408px) 180.118256px, calc(100% - 18.595391px) 180.724572px, calc(100% - 16px) 180.934px, calc(100% - 16px) 180.934px, calc(100% - 13.404609px) 181.143401px, calc(100% - 10.942592px) 181.749648px, calc(100% - 8.646883px) 182.719807px, calc(100% - 6.550416px) 184.020944px, calc(100% - 4.686125px) 185.620125px, calc(100% - 3.086944px) 187.484416px, calc(100% - 1.785807px) 189.580883px, calc(100% - 0.81564800000001px) 191.876592px, calc(100% - 0.20940100000001px) 194.338609px, calc(100% - 0px) 196.934px, calc(100% - 0px) calc(100% - 40.066px), calc(100% - 0px) calc(100% - 40.066px), calc(100% - 0.2094009999999px) calc(100% - 37.470852px), calc(100% - 0.8156479999999px) calc(100% - 35.008976px), calc(100% - 1.785807px) calc(100% - 32.713324px), calc(100% - 3.0869439999999px) calc(100% - 30.616848px), calc(100% - 4.686125px) calc(100% - 28.7525px), calc(100% - 6.550416px) calc(100% - 27.153232px), calc(100% - 8.646883px) calc(100% - 25.851996px), calc(100% - 10.942592px) calc(100% - 24.881744px), calc(100% - 13.404609px) calc(100% - 24.275428px), calc(100% - 16px) calc(100% - 24.066px), calc(100% - 58px) calc(100% - 24.066px), calc(100% - 58px) calc(100% - 24.066px), calc(100% - 59.946361px) calc(100% - 23.908956px), calc(100% - 61.792768px) calc(100% - 23.454288px), calc(100% - 63.514507px) calc(100% - 22.726692px), calc(100% - 65.086864px) calc(100% - 21.750864px), calc(100% - 66.485125px) calc(100% - 20.5515px), calc(100% - 67.684576px) calc(100% - 19.153296px), calc(100% - 68.660503px) calc(100% - 17.580948px), calc(100% - 69.388192px) calc(100% - 15.859152px), calc(100% - 69.842929px) calc(100% - 14.012604px), calc(100% - 70px) calc(100% - 12.066px), calc(100% - 70px) calc(100% - 12.066px), calc(100% - 70.157071px) calc(100% - 10.119639px), calc(100% - 70.611808px) calc(100% - 8.2732319999999px), calc(100% - 71.339497px) calc(100% - 6.551493px), calc(100% - 72.315424px) calc(100% - 4.9791359999999px), calc(100% - 73.514875px) calc(100% - 3.580875px), calc(100% - 74.913136px) calc(100% - 2.381424px), calc(100% - 76.485493px) calc(100% - 1.405497px), calc(100% - 78.207232px) calc(100% - 0.67780800000003px), calc(100% - 80.053639px) calc(100% - 0.22307099999995px), calc(100% - 82px) calc(100% - 0.065999999999974px), 16px calc(100% - 0.065999999999974px), 16px calc(100% - 0.065999999999974px), 13.40471592px calc(100% - 0.27542799999992px), 10.94276096px calc(100% - 0.88174399999986px), 8.64707704px calc(100% - 1.8519959999999px), 6.55060608px calc(100% - 3.1532319999999px), 4.68629px calc(100% - 4.7524999999999px), 3.08707072px calc(100% - 6.616848px), 1.78589016px calc(100% - 8.7133239999999px), 0.81569024px calc(100% - 11.008976px), 0.20941288px calc(100% - 13.470852px), 0px calc(100% - 16.066px), 0px 16.9336px)"
    };
    const heroImages = [
        {
            id: 1,
            src: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            alt: "Summer Collection",
            title: "Summer Collection 2024",
            description: "Light and breezy outfits for warm days",
            color: "from-blue-400 to-teal-500",
            badge: "New"
        },
        {
            id: 2,
            src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            alt: "Winter Essentials",
            title: "Winter Essentials",
            description: "Cozy and warm winter wear",
            color: "from-purple-500 to-pink-500",
            badge: "Trending"
        },
        {
            id: 3,
            src: "https://plus.unsplash.com/premium_photo-1679056835084-7f21e64a3402?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D",
            alt: "Casual Wear",
            title: "Casual Everyday Wear",
            description: "Comfort meets style for daily outfits",
            color: "from-orange-400 to-red-500",
            badge: "Popular"
        }
    ];
    const stats = [
        { value: "5K+", label: "Happy Customers", icon: <Heart className="w-4 h-4" /> },
        { value: "100+", label: "Designers", icon: <Sparkles className="w-4 h-4" /> },
        { value: "50+", label: "Awards", icon: <Star className="w-4 h-4" /> },
        { value: "24/7", label: "Support", icon: <Check className="w-4 h-4" /> }
    ];

    return (
        <section className="relative overflow-hidden bg-linear-to-br from-gray-50 via-white to-indigo-50">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-r from-purple-300 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-r from-blue-300 to-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-linear-to-r from-green-300 to-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-4 py-8 md:py-12 lg:py-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-6 md:gap-10 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="order-2 lg:order-1 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 bg-linear-to-r from-indigo-500/10 to-purple-500/10 text-indigo-600 px-4 py-2 rounded-full text-sm font-medium mb-4 md:mb-6 animate-pulse">
                            <Sparkles size={16} className="animate-spin-slow" />
                            <span className="animate-bounce">New Collection 2024</span>
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight animate-fade-in-up animation-delay-200">
                            Premium Fashion
                            <span className="block text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600 animate-gradient-x">
                                For Every Occasion
                            </span>
                        </h1>

                        <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-lg leading-relaxed animate-fade-in-up animation-delay-400">
                            Discover our curated collection of high-quality clothing that combines style, comfort, and sustainability for the modern lifestyle.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 md:mb-8 animate-fade-in-up animation-delay-600">
                            {stats.map((stat, index) => (
                                <div key={index} className="bg-white/50 backdrop-blur-sm p-3 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-center gap-2 text-indigo-600 mb-1">
                                        {stat.icon}
                                        <span className="text-lg md:text-xl font-bold text-gray-900">{stat.value}</span>
                                    </div>
                                    <p className="text-xs md:text-sm text-gray-600">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-3 md:gap-4 mb-8 md:mb-12 animate-fade-in-up animation-delay-800">
                            <button
                                onClick={() => setActiveSection('products')}
                                className="group bg-linear-to-r from-indigo-600 to-purple-600 text-white px-6 md:px-8 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-indigo-200 transition-all duration-300 flex items-center gap-2 text-sm md:text-base transform hover:-translate-y-1"
                            >
                                <span>Shop Now</span>
                                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={() => setActiveSection('about')}
                                className="group bg-white text-gray-700 px-6 md:px-8 py-3 rounded-xl font-medium hover:bg-gray-50 transition-all duration-300 border border-gray-200 hover:border-indigo-200 hover:shadow-lg text-sm md:text-base transform hover:-translate-y-1"
                            >
                                <span>Learn More</span>
                            </button>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-3 gap-4 md:gap-6 animate-fade-in-up animation-delay-1000">
                            <div className="text-center group hover:scale-105 transition-transform duration-300">
                                <div className="bg-linear-to-br from-blue-100 to-blue-50 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:shadow-lg transition-shadow">
                                    <Truck className="w-6 h-6 md:w-7 md:h-7 text-blue-600" />
                                </div>
                                <p className="text-xs md:text-sm font-medium text-gray-700">Free Shipping</p>
                                <p className="text-xs text-gray-500 mt-1">Over $100</p>
                            </div>
                            <div className="text-center group hover:scale-105 transition-transform duration-300">
                                <div className="bg-linear-to-br from-green-100 to-green-50 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:shadow-lg transition-shadow">
                                    <Shield className="w-6 h-6 md:w-7 md:h-7 text-green-600" />
                                </div>
                                <p className="text-xs md:text-sm font-medium text-gray-700">Quality Guarantee</p>
                                <p className="text-xs text-gray-500 mt-1">30 Days Return</p>
                            </div>
                            <div className="text-center group hover:scale-105 transition-transform duration-300">
                                <div className="bg-linear-to-br from-purple-100 to-purple-50 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:shadow-lg transition-shadow">
                                    <Sparkles className="w-6 h-6 md:w-7 md:h-7 text-purple-600" />
                                </div>
                                <p className="text-xs md:text-sm font-medium text-gray-700">Premium Materials</p>
                                <p className="text-xs text-gray-500 mt-1">Eco-friendly</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Image with Swiper Carousel */}
                    <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
                        <div
                            className="relative h-64 sm:h-80 md:h-96 lg:h-[550px] overflow-hidden group"
                            style={isMobile ? {} : clipPathStyle}
                        >
                            {/* Mobile-friendly container */}
                            <div className="absolute inset-0 bg-linear-to-br from-indigo-500 to-purple-600 rounded-3xl lg:rounded-none overflow-hidden">
                                {/* Swiper Carousel - Disabled on mobile */}
                                {!isMobile ? (
                                    <Swiper
                                        spaceBetween={0}
                                        slidesPerView={1}
                                        effect={'fade'}
                                        autoplay={{
                                            delay: 4000,
                                            disableOnInteraction: false,
                                        }}
                                        loop={true}
                                        modules={[Autoplay, EffectFade]}
                                        className="w-full h-full"
                                        allowTouchMove={false}
                                        simulateTouch={false}
                                        onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
                                    >
                                        {heroImages.map((image) => (
                                            <SwiperSlide key={image.id}>
                                                <div className="relative w-full h-full">
                                                    <img
                                                        src={image.src}
                                                        alt={image.alt}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                    />
                                                    <div className={`absolute inset-0 bg-linear-to-br ${image.color} opacity-60 mix-blend-overlay transition-opacity duration-500`}></div>

                                                    {/* Image Overlay Text */}
                                                    <div className="absolute bottom-8 left-8 right-8 text-white transform transition-transform duration-500 group-hover:translate-y-0 translate-y-4 opacity-0 group-hover:opacity-100">
                                                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full mb-3">
                                                            <span className="text-sm font-semibold">{image.badge}</span>
                                                        </div>
                                                        <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                                                        <p className="text-white/90">{image.description}</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                ) : (
                                    // Static image for mobile
                                    <div className="relative w-full h-full">
                                        <img
                                            src={heroImages[activeSlide].src}
                                            alt={heroImages[activeSlide].alt}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className={`absolute inset-0 bg-linear-to-br ${heroImages[activeSlide].color} opacity-60 mix-blend-overlay`}></div>
                                    </div>
                                )}
                            </div>

                            {/* Mobile Navigation Arrows */}
                            {isMobile && (
                                <div className="absolute inset-0 flex items-center justify-between px-4">
                                    <button
                                        onClick={() => setActiveSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
                                        className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
                                    >
                                        <ChevronRight className="w-6 h-6 text-white rotate-180" />
                                    </button>
                                    <button
                                        onClick={() => setActiveSlide((prev) => (prev + 1) % heroImages.length)}
                                        className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
                                    >
                                        <ChevronRight className="w-6 h-6 text-white" />
                                    </button>
                                </div>
                            )}

                          

                            {/* Swiper Navigation Dots */}
                            <div className="absolute bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-1 md:gap-2">
                                {heroImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => !isMobile && setActiveSlide(index)}
                                        className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${activeSlide === index
                                            ? 'bg-white scale-125'
                                            : 'bg-white/60 hover:bg-white/80'
                                            }`}
                                    />
                                ))}
                            </div>

                            {/* Sale Badge */}
                            <div className="absolute top-4 right-4 bg-linear-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full shadow-lg z-10 animate-bounce-slow">
                                <span className="text-sm font-bold">UP TO 50% OFF</span>
                            </div>
                        </div>

                        {/* Animated Decorative Elements */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-linear-to-r from-indigo-400 to-purple-400 rounded-full animate-ping opacity-20"></div>
                        <div className="absolute bottom-8 -right-4 w-6 h-6 bg-linear-to-r from-pink-400 to-rose-400 rounded-full animate-ping opacity-20 animation-delay-1000"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;