import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { HiArrowRight, HiOutlineLightningBolt } from "react-icons/hi";

const SpecialOffer = () => {
    const [timeLeft, setTimeLeft] = useState({
        hours: 24,
        minutes: 59,
        seconds: 59,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const endOfDay = new Date();
            endOfDay.setHours(23, 59, 59);
            const diff = endOfDay - now;

            if (diff > 0) {
                setTimeLeft({
                    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((diff / 1000 / 60) % 60),
                    seconds: Math.floor((diff / 1000) % 60),
                });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);
    return (
        <section className="py-10 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 border-t border-l border-blue-500/10 rounded-[2.5rem] p-10 md:p-14 relative shadow shadow-blue-500/5"
                    >
                     
                        <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                            Special Offer <br />
                            <span className="text-blue-500 italic">Just For You!</span>
                        </h2>

                        <p className="text-lg text-gray-400 mb-10 leading-relaxed font-medium">
                            Refresh your home atmosphere with our premium
                            <span className=" text-blue-600 font-bold px-1 italic">Indoor Collection</span>.
                            Buy now and claim a massive
                            <span className="text-3xl font-black text-blue-600 block mt-2">60% DISCOUNT!</span>
                        </p>

                        <div className="flex flex-wrap items-center gap-8">
                            <Link to="/products">
                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(132, 204, 22, 0.3)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-3 bg-blue-700 hover:bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow shadow-blue-500/20"
                                >
                                    Explore Offers <HiArrowRight size={25} />
                                </motion.button>
                            </Link>

                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Ending Soon</span>
                                <div className="flex gap-2 text-2xl font-black tabular-nums">
                                    <div className="flex flex-col items-center">
                                        <span>{timeLeft.hours.toString().padStart(2, '0')}</span>
                                        <span className="text-[8px] -mt-1 text-gray-400">HRS</span>
                                    </div>
                                    <span className="text-blue-500">:</span>
                                    <div className="flex flex-col items-center">
                                        <span>{timeLeft.minutes.toString().padStart(2, '0')}</span>
                                        <span className="text-[8px] -mt-1 text-gray-400">MIN</span>
                                    </div>
                                    <span className="text-blue-500">:</span>
                                    <div className="flex flex-col items-center">
                                        <span>{timeLeft.seconds.toString().padStart(2, '0')}</span>
                                        <span className="text-[8px] -mt-1 text-gray-400">SEC</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 relative w-full group"
                    >
                        <div className="absolute inset-0 rounded-full blur-[100px]  transition-all duration-700"></div>

                        <div className="relative backdrop-blur-sm rounded-[3.5rem] p-10   overflow-hidden">
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="w-full group-hover:scale-105 transition-transform duration-500"
                            >
                              <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-h-[400px]">
                                <circle cx="200" cy="200" r="180" fill="#EFF6FF" opacity="0.8"/>
                                {/* Shirt/garment shape */}
                                <path d="M120 100 L160 80 L200 100 L240 80 L280 100 L260 140 L240 130 L240 310 L160 310 L160 130 L140 140Z" fill="#3B82F6" opacity="0.9"/>
                                <path d="M160 80 L180 95 L200 85 L220 95 L240 80" stroke="#1D4ED8" strokeWidth="3" strokeLinecap="round"/>
                                {/* Collar */}
                                <path d="M185 100 Q200 115 215 100" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                                {/* Buttons */}
                                <circle cx="200" cy="150" r="5" fill="white" opacity="0.8"/>
                                <circle cx="200" cy="170" r="5" fill="white" opacity="0.8"/>
                                <circle cx="200" cy="190" r="5" fill="white" opacity="0.8"/>
                                {/* Pocket */}
                                <rect x="162" y="185" width="30" height="22" rx="4" fill="#1D4ED8" opacity="0.6"/>
                                {/* Stars around */}
                                <path d="M80 80 L83 90 L93 93 L83 96 L80 106 L77 96 L67 93 L77 90Z" fill="#FCD34D"/>
                                <path d="M320 120 L322 128 L330 130 L322 132 L320 140 L318 132 L310 130 L318 128Z" fill="#FCD34D" opacity="0.8"/>
                                <path d="M330 280 L332 288 L340 290 L332 292 L330 300 L328 292 L320 290 L328 288Z" fill="#FCD34D" opacity="0.6"/>
                                {/* Sparkle dots */}
                                <circle cx="100" cy="250" r="6" fill="#93C5FD"/>
                                <circle cx="310" cy="200" r="8" fill="#93C5FD" opacity="0.7"/>
                                <circle cx="150" cy="50" r="5" fill="#60A5FA"/>
                                {/* Tag */}
                                <rect x="208" y="95" width="30" height="18" rx="4" fill="white"/>
                                <text x="223" y="107" fontSize="8" fontWeight="bold" fill="#3B82F6" textAnchor="middle">60% OFF</text>
                              </svg>
                            </motion.div>

                            <motion.div
                                initial={{ rotate: 12 }}
                                whileHover={{ rotate: 0, scale: 1.1 }}
                                className="absolute -top-4 -right-4 p-5 rounded-3xl shadow border border-blue-500/50 flex flex-col items-center cursor-default"
                            >
                                <span className="text-gray-400 text-sm line-through font-bold">$120.00</span>
                                <span className="text-3xl font-black text-blue-600 leading-none">$48.00</span>
                                <span className="text-[10px] font-black text-white bg-blue-500 px-2 py-0.5 rounded-full mt-2">SAVE 60%</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SpecialOffer;