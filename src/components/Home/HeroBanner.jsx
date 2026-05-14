// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";
import heroImage1 from "../../assets/images/new1.avif";
import heroImage2 from "../../assets/images/new2.avif";
import heroImage3 from "../../assets/images/new3.avif";
import heroImage4 from "../../assets/images/new4.avif";

const slides = [
    {
        id: 1,
        heading: "Welcome to G.O.P.T.S.",
        description: "Efficiently manage orders and track production in real-time with our advanced tracking system.",
        image: heroImage1,
        accent: "text-blue-500"
    },
    {
        id: 2,
        heading: "Monitor Every Stitch",
        description: "Get live updates from the production floor directly to your dashboard. Stay informed, always.",
        image: heroImage2,
        accent: "text-blue-400"
    },
    {
        id: 3,
        heading: "Supply Chain Mastered",
        description: "Handle bulk orders and complex delivery schedules effortlessly with automated logistics.",
        image: heroImage3,
        accent: "text-orange-400"
    },
    {
        id: 4,
        heading: "Quality Assurance",
        description: "Maintain international standards with our integrated automated quality control modules.",
        image: heroImage4,
        accent: "text-red-400"
    },
];

const HeroBanner = () => {
    const [current, setCurrent] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full h-70 md:h-[90vh] -mt-9 overflow-hidden bg-black/90">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2 }}
                    className="absolute inset-0"
                >
                    <motion.div
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 7, ease: "easeOut" }}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${slides[current].image})` }}
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent" />
                    <div className="absolute inset-0 bg-black/20" />
                </motion.div>
            </AnimatePresence>

            {/* SVG Decorative Floating Stickers */}
            <div className="absolute top-16 right-8 z-20 hidden lg:block">
                <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 flex items-center gap-3 shadow-xl">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="36" height="36" rx="10" fill="#3B82F6" fillOpacity="0.2"/>
                        <path d="M18 8L22 14H26L22 20L24 28L18 24L12 28L14 20L10 14H14L18 8Z" fill="#60A5FA" stroke="#3B82F6" strokeWidth="1.5" strokeLinejoin="round"/>
                    </svg>
                    <div>
                        <p className="text-white font-black text-lg leading-none">1,200+</p>
                        <p className="text-white/60 text-[10px] font-bold uppercase tracking-wider">Orders Tracked</p>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-24 right-12 z-20 hidden lg:block">
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 flex items-center gap-3 shadow-xl">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="36" height="36" rx="10" fill="#10B981" fillOpacity="0.2"/>
                        <path d="M10 22L15 16L19 20L24 13L26 15" stroke="#34D399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="26" cy="15" r="2" fill="#34D399"/>
                    </svg>
                    <div>
                        <p className="text-white font-black text-lg leading-none">98.5%</p>
                        <p className="text-white/60 text-[10px] font-bold uppercase tracking-wider">Delivery Rate</p>
                    </div>
                </motion.div>
            </div>

            {/* SVG Geometric background accent */}
            <svg className="absolute top-0 right-0 opacity-10 hidden lg:block" width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="350" cy="50" r="200" stroke="#3B82F6" strokeWidth="1"/>
                <circle cx="350" cy="50" r="150" stroke="#3B82F6" strokeWidth="0.5"/>
                <circle cx="350" cy="50" r="100" stroke="#3B82F6" strokeWidth="0.5"/>
                <line x1="150" y1="50" x2="400" y2="300" stroke="#3B82F6" strokeWidth="0.5"/>
                <line x1="200" y1="0" x2="350" y2="250" stroke="#3B82F6" strokeWidth="0.5"/>
            </svg>

            <div className="relative z-10 h-full container mx-auto px-6 flex items-center">
                <div className="max-w-3xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            {/* SVG Badge sticker */}
                            <motion.div
                                initial={{ scale: 0, rotate: -10 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.3, type: "spring" }}
                                className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/40 rounded-full px-4 py-1.5 mb-4"
                            >
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="7" fill="#3B82F6"/><path d="M4 7l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                <span className="text-blue-300 text-[10px] font-black uppercase tracking-[0.2em]">Live Production System</span>
                            </motion.div>

                            <h1 className="text-2xl md:text-5xl font-black leading-tight text-white/70 mb-5 tracking-tight">
                                {slides[current].heading.split(" ").map((word, i) => (
                                    <span key={i} className={word === "G.O.P.T.S." ? "text-blue-500" : ""}>
                                        {word}{" "}
                                    </span>
                                ))}
                            </h1>

                            <p className="text-gray-300 text-base md:text-2xl mb-4 max-w-xl leading-relaxed font-medium">
                                {slides[current].description}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/products"
                                    className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-5 py-2 rounded-xl shadow-xl transition-all flex items-center gap-2 active:scale-95"
                                >
                                    Explore Products
                                    <FaArrowRight size={14} />
                                </Link>

                                <Link
                                    to="/about"
                                    className="bg-white/10 backdrop-blur-md border border-white/20 hidden md:flex text-white px-8 py-3.5 rounded-xl hover:bg-white/20 transition-all font-semibold"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <div className="absolute bottom-2 -right-10 -translate-x-1/2 flex gap-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-1.5 rounded-full transition-all duration-500 ${current === index ? "w-12 bg-blue-500" : "w-3 bg-white/30 hover:bg-white/60"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-1 z-20">
                <span className="text-[12px] uppercase tracking-widest font-bold">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <FaChevronDown size={22} />
                </motion.div>
            </div>
        </section>
    );
};

export default HeroBanner;