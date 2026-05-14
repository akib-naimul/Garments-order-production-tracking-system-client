import { motion } from "framer-motion";

const partners = [
    {
        name: "H&M",
        svg: <svg viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-10 object-contain"><text x="5" y="32" fontFamily="Arial Black,sans-serif" fontWeight="900" fontSize="28" fill="currentColor">H&M</text></svg>
    },
    {
        name: "Zara",
        svg: <svg viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-10 object-contain"><text x="8" y="30" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="22" fill="currentColor" letterSpacing="3">ZARA</text></svg>
    },
    {
        name: "Levis",
        svg: <svg viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-10 object-contain"><text x="5" y="30" fontFamily="Arial,sans-serif" fontWeight="900" fontSize="20" fill="currentColor" letterSpacing="1">LEVI'S</text></svg>
    },
    {
        name: "Nike",
        svg: <svg viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-10 object-contain"><path d="M8 28C15 20 50 10 72 15C55 22 30 28 8 28Z" fill="currentColor"/></svg>
    },
    {
        name: "Adidas",
        svg: <svg viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-10 object-contain"><path d="M22 30L40 8L58 30H50L40 16L30 30Z" fill="currentColor" opacity="0.3"/><path d="M14 30L40 4L66 30" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
    },
    {
        name: "Gap",
        svg: <svg viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-10 object-contain"><rect x="8" y="6" width="64" height="28" rx="4" fill="currentColor" opacity="0.15"/><text x="16" y="27" fontFamily="Arial,sans-serif" fontWeight="900" fontSize="22" fill="currentColor" letterSpacing="2">GAP</text></svg>
    },
];

const GlobalPartner = () => {
    return (
        <section className="py-2  overflow-hidden">
            <div className="container mx-auto p-2">

                <div className="flex flex-col items-center mb-8 text-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-600 mb-3"
                    >
                        Trusted by Industry Leaders
                    </motion.span>
                    <motion.h2
                        className="text-2xl md:text-3xl font-black tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        Our Global Partners
                    </motion.h2>
                    <div className="h-1.5 w-80 bg-blue-400 mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
                    {partners.map((p, i) => (
                        <motion.div
                            key={i}
                            className="group relative flex items-center justify-center p-6 rounded-2xl border border-gray-500/40 hover:border-blue-200 hover:shadow-lg transition-all duration-500 text-gray-400 hover:text-blue-600"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, delay: i * 0.2, ease: "easeInOut" }}
                        >
                            {p.svg}
                            <div className="absolute inset-x-0 -bottom-2 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="w-6 h-1 bg-blue-500 rounded-full"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GlobalPartner;
