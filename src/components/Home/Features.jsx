import { motion } from "framer-motion";
import { ShieldCheck, Clock, ThumbsUp, Users, ArrowRight } from "lucide-react";

const features = [
  {
    title: "Trusted by Buyers",
    desc: "Join 10,000+ garment buyers managing bulk orders with confidence.",
    icon: <Users size={26} />,
    borderColor: "hover:border-blue-400",
    iconBg: "bg-blue-50 text-blue-600 shadow-sm shadow-blue-100"
  },
  {
    title: "Premium Standards",
    desc: "Every product is SGS-verified and quality-checked before shipping.",
    icon: <ShieldCheck size={26} />,
    borderColor: "hover:border-blue-400",
    iconBg: "bg-blue-50 text-blue-600 shadow-sm shadow-blue-100"
  },
  {
    title: "Express Logistics",
    desc: "Fast, sustainable freight solutions covering global shipping routes.",
    icon: <Clock size={26} />,
    borderColor: "hover:border-orange-400",
    iconBg: "bg-orange-50 text-orange-600 shadow-sm shadow-orange-100"
  },
  {
    title: "Dedicated Support",
    desc: "Our factory experts are available 24/7 for production queries.",
    icon: <ThumbsUp size={26} />,
    borderColor: "hover:border-purple-400",
    iconBg: "bg-purple-50 text-purple-600 shadow-sm shadow-purple-100"
  },
];

const WhyChooseUs = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className=" overflow-hidden">
      <div className="container mx-auto px-6">
        <header className="mb-14 text-center space-y-5">
          <h2 className="text-3xl md:text-5xl font-black leading-[1.1] tracking-tight">
            Building Trust, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Stitch by Stitch.</span>
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed font-medium">
            We don’t just track orders — we build end-to-end transparency into every production step, from cutting to delivery.
          </p>
        </header>
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >

            <div className="relative group">
              <svg viewBox="0 0 480 440" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="w-full rounded-[2.5rem] drop-shadow-[0_20px_50px_rgba(59,130,246,0.15)] transition-transform duration-500 group-hover:scale-[1.02]">
                <rect width="480" height="440" rx="40" fill="#EFF6FF"/>
                {/* Central figure */}
                <circle cx="240" cy="160" r="55" fill="#DBEAFE"/>
                <circle cx="240" cy="145" r="30" fill="#93C5FD"/>
                <path d="M200 200 Q240 230 280 200 L290 300 L190 300Z" fill="#3B82F6" opacity="0.8"/>
                {/* Arms */}
                <path d="M200 220 L155 255" stroke="#93C5FD" strokeWidth="12" strokeLinecap="round"/>
                <path d="M280 220 L325 255" stroke="#93C5FD" strokeWidth="12" strokeLinecap="round"/>
                {/* Left hand holding chart */}
                <rect x="110" y="245" width="60" height="45" rx="8" fill="white" stroke="#BFDBFE" strokeWidth="2"/>
                <path d="M122 278 L132 262 L142 270 L152 255 L162 265" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                {/* Right hand holding checkmark */}
                <circle cx="325" cy="270" r="28" fill="white" stroke="#BFDBFE" strokeWidth="2"/>
                <path d="M313 270 L321 278 L337 262" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                {/* Star decorations */}
                <path d="M90 120 L93 132 L105 135 L93 138 L90 150 L87 138 L75 135 L87 132Z" fill="#FCD34D"/>
                <path d="M380 100 L382 109 L391 111 L382 113 L380 122 L378 113 L369 111 L378 109Z" fill="#FCD34D"/>
                <path d="M430 250 L432 257 L439 259 L432 261 L430 268 L428 261 L421 259 L428 257Z" fill="#FCD34D" opacity="0.7"/>
                {/* Bottom features row */}
                <rect x="60" y="330" width="100" height="72" rx="14" fill="#DBEAFE"/>
                <rect x="190" y="330" width="100" height="72" rx="14" fill="#DBEAFE"/>
                <rect x="320" y="330" width="100" height="72" rx="14" fill="#DBEAFE"/>
                <path d="M100 362 L110 354 L120 362 L115 375 L85 375Z" fill="#3B82F6" opacity="0.8"/>
                <path d="M230 355 Q240 348 250 355 L256 375 L224 375Z" fill="#3B82F6" opacity="0.8"/>
                <circle cx="370" cy="365" r="15" fill="#3B82F6" opacity="0.8"/>
                <path d="M365 365 L369 369 L378 360" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                {/* Connecting lines */}
                <path d="M160 366 L190 366" stroke="#93C5FD" strokeWidth="2" strokeDasharray="4 3"/>
                <path d="M290 366 L320 366" stroke="#93C5FD" strokeWidth="2" strokeDasharray="4 3"/>
              </svg>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-0 md:-right-8  backdrop-blur-md px-7 py-5 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.1)] border border-white/20 flex gap-5 items-center"
              >
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-3.5 rounded-2xl text-white shadow-lg shadow-blue-500/20">
                  <ThumbsUp size={24} />
                </div>
                <div>
                  <p className="text-3xl font-black tracking-tight">99%</p>
                  <p className="text-[13px] text-gray-500 font-bold uppercase tracking-wider">Satisfaction</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2">

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`p-8  border border-slate-200/10 ${f.borderColor} rounded-[2.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all duration-500 group`}
                >
                  <div className={`w-14 h-14 ${f.iconBg} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-[360deg]`}>
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-bold  mb-3 tracking-tight">
                    {f.title}
                  </h3>
                  <p className="text-slate-400 text-[14px] leading-relaxed font-medium">
                    {f.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;