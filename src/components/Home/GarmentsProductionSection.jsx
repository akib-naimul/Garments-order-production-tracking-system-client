import { motion } from "framer-motion";
import { Factory, CheckCircle, PackageSearch, ArrowRight, Zap, Target, Activity } from "lucide-react";
import { Link } from "react-router";

const GarmentsProductionSection = () => {
    return (
        <section className="py-5 -mb-10 overflow-hidden">
            <div className="container mx-auto px-2">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                            </span>
                            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-400">
                                Real-time Intelligence
                            </span>
                        </div>

                        <h2 className="text-2xl lg:text-3xl font-black  leading-[1.05] mb-4 tracking-tighter">
                            Production
                            <span className="text-blue-400 ml-2">
                                Control Center
                            </span>
                        </h2>

                        <p className="text-xl text-gray-400 mb-5 leading-relaxed font-medium max-w-lg">
                            Ditch the spreadsheets. Orchestrate your factory floor with a unified system designed for speed, precision, and zero waste.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            {[
                                { icon: <Activity size={22} />, title: "Live Tracking", color: "bg-blue-50 text-blue-600" },
                                { icon: <Target size={22} />, title: "Smart Planning", color: "bg-orange-50 text-orange-600" },
                                { icon: <PackageSearch size={22} />, title: "Inventory AI", color: "bg-purple-50 text-purple-600" },
                                { icon: <CheckCircle size={22} />, title: "QC Mastery", color: "bg-blue-50 text-blue-600" }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ x: 10 }}
                                    className="flex items-center gap-4 group cursor-pointer"
                                >
                                    <div className={`p-4 rounded-2xl ${item.color} transition-all duration-300 group-hover:scale-110 shadow-sm`}>
                                        {item.icon}
                                    </div>
                                    <span className="font-bold text-gray-400 tracking-tight">{item.title}</span>
                                </motion.div>
                            ))}
                        </div>

                        <Link to="/dashboard">
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                className="group flex items-center gap-4 bg-blue-700 text-white px-10 py-5 rounded-2xl font-bold text-sm tracking-widest uppercase transition-all shadow hover:bg-blue-600 shadow-blue-100"
                            >
                                Start Dashboard
                                <div className="bg-white/10 p-1 rounded-full group-hover:translate-x-1 transition-transform">
                                    <ArrowRight size={20} />
                                </div>
                            </motion.button>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 relative"
                    >
                        <div className="absolute -inset-6 bg-blue-500/10 rounded-full blur-3xl opacity-40"></div>
                        <svg viewBox="0 0 560 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative w-full rounded-[3rem] border border-blue-200/30">
                          <rect width="560" height="480" rx="48" fill="#0F172A"/>
                          {/* Grid lines background */}
                          <line x1="0" y1="96" x2="560" y2="96" stroke="#1E293B" strokeWidth="1"/>
                          <line x1="0" y1="192" x2="560" y2="192" stroke="#1E293B" strokeWidth="1"/>
                          <line x1="0" y1="288" x2="560" y2="288" stroke="#1E293B" strokeWidth="1"/>
                          <line x1="0" y1="384" x2="560" y2="384" stroke="#1E293B" strokeWidth="1"/>
                          <line x1="112" y1="0" x2="112" y2="480" stroke="#1E293B" strokeWidth="1"/>
                          <line x1="224" y1="0" x2="224" y2="480" stroke="#1E293B" strokeWidth="1"/>
                          <line x1="336" y1="0" x2="336" y2="480" stroke="#1E293B" strokeWidth="1"/>
                          <line x1="448" y1="0" x2="448" y2="480" stroke="#1E293B" strokeWidth="1"/>
                          {/* Dashboard header bar */}
                          <rect x="24" y="24" width="512" height="52" rx="12" fill="#1E293B"/>
                          <circle cx="52" cy="50" r="14" fill="#3B82F6" opacity="0.8"/>
                          <rect x="78" y="43" width="80" height="14" rx="4" fill="#334155"/>
                          <rect x="390" y="38" width="60" height="24" rx="8" fill="#3B82F6" opacity="0.9"/>
                          <rect x="460" y="38" width="60" height="24" rx="8" fill="#1E3A8A" opacity="0.9"/>
                          {/* Stat cards row */}
                          <rect x="24" y="94" width="118" height="80" rx="12" fill="#1E293B"/>
                          <rect x="154" y="94" width="118" height="80" rx="12" fill="#1E293B"/>
                          <rect x="284" y="94" width="118" height="80" rx="12" fill="#1E293B"/>
                          <rect x="414" y="94" width="122" height="80" rx="12" fill="#1E293B"/>
                          <rect x="36" y="106" width="40" height="8" rx="3" fill="#334155"/>
                          <rect x="36" y="120" width="70" height="20" rx="4" fill="#3B82F6" opacity="0.7"/>
                          <rect x="36" y="148" width="50" height="10" rx="3" fill="#22C55E" opacity="0.7"/>
                          <rect x="166" y="106" width="40" height="8" rx="3" fill="#334155"/>
                          <rect x="166" y="120" width="70" height="20" rx="4" fill="#F59E0B" opacity="0.7"/>
                          <rect x="296" y="106" width="40" height="8" rx="3" fill="#334155"/>
                          <rect x="296" y="120" width="70" height="20" rx="4" fill="#8B5CF6" opacity="0.7"/>
                          <rect x="426" y="106" width="40" height="8" rx="3" fill="#334155"/>
                          <rect x="426" y="120" width="70" height="20" rx="4" fill="#EC4899" opacity="0.7"/>
                          {/* Chart area */}
                          <rect x="24" y="190" width="340" height="200" rx="12" fill="#1E293B"/>
                          <rect x="36" y="202" width="80" height="12" rx="3" fill="#334155"/>
                          <path d="M40 355 L100 310 L160 330 L220 280 L280 295 L340 240" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M40 355 L100 310 L160 330 L220 280 L280 295 L340 240 L340 370 L40 370Z" fill="#3B82F6" opacity="0.1"/>
                          <path d="M40 370 L100 345 L160 355 L220 320 L280 340 L340 300" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6 3"/>
                          {/* Pie/donut chart */}
                          <rect x="376" y="190" width="160" height="200" rx="12" fill="#1E293B"/>
                          <circle cx="456" cy="290" r="60" fill="none" stroke="#334155" strokeWidth="30"/>
                          <circle cx="456" cy="290" r="60" fill="none" stroke="#3B82F6" strokeWidth="30" strokeDasharray="120 257" strokeDashoffset="0"/>
                          <circle cx="456" cy="290" r="60" fill="none" stroke="#8B5CF6" strokeWidth="30" strokeDasharray="70 257" strokeDashoffset="-120"/>
                          <circle cx="456" cy="290" r="60" fill="none" stroke="#F59E0B" strokeWidth="30" strokeDasharray="67 257" strokeDashoffset="-190"/>
                          <circle cx="456" cy="290" r="33" fill="#0F172A"/>
                          {/* Table rows */}
                          <rect x="24" y="406" width="512" height="50" rx="12" fill="#1E293B"/>
                          <rect x="36" y="422" width="30" height="18" rx="4" fill="#334155"/>
                          <rect x="80" y="422" width="100" height="8" rx="3" fill="#334155"/>
                          <rect x="80" y="434" width="60" height="6" rx="3" fill="#1E3A8A"/>
                          <rect x="340" y="422" width="60" height="18" rx="6" fill="#22C55E" opacity="0.3"/>
                          <rect x="420" y="422" width="50" height="18" rx="6" fill="#3B82F6" opacity="0.5"/>
                          {/* Glowing dot accent */}
                          <circle cx="520" cy="50" r="6" fill="#3B82F6">
                            <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
                          </circle>
                        </svg>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default GarmentsProductionSection;