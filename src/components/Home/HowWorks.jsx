import { motion } from "framer-motion";
import {
  HiOutlineSearchCircle,
  HiOutlineShoppingBag,
  HiOutlineCreditCard,
  HiOutlineTruck
} from "react-icons/hi";
import Container from "../../components/Shared/Container";

const steps = [
  {
    step: 1,
    title: "Select Product",
    desc: "Browse our premium inventory and choose your favorite items.",
    icon: <HiOutlineSearchCircle className="text-4xl text-blue-600" />
  },
  {
    step: 2,
    title: "Place Order",
    desc: "Confirm your booking with our wholesale minimum quantities.",
    icon: <HiOutlineShoppingBag className="text-4xl text-blue-600" />
  },
  {
    step: 3,
    title: "Make Payment",
    desc: "Complete your transaction securely via cash or online methods.",
    icon: <HiOutlineCreditCard className="text-4xl text-blue-600" />
  },
  {
    step: 4,
    title: "Delivery",
    desc: "Get your products delivered quickly at your doorstep.",
    icon: <HiOutlineTruck className="text-4xl text-blue-600" />
  },
];

const HowItWorks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-2 overflow-hidden">
      <Container>
        <div className="text-center mb-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black mb-4"
          >
            How It <span className="text-blue-500">Works</span>
          </motion.h2>
          <p className="text-gray-400 font-medium max-w-xl mx-auto">
            Our streamlined process makes wholesale ordering simple and efficient for your business.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative flex items-center justify-center"
          >
            <div className="absolute -inset-4 bg-blue-500/10 rounded-full blur-3xl opacity-50 animate-pulse"></div>
            <svg viewBox="0 0 520 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative w-full max-h-[460px] drop-shadow-2xl">
              <circle cx="260" cy="240" r="210" fill="#EFF6FF" opacity="0.6"/>
              <circle cx="260" cy="240" r="160" fill="#DBEAFE" opacity="0.4"/>
              <rect x="80" y="230" width="360" height="180" rx="8" fill="#1D4ED8" opacity="0.9"/>
              <rect x="80" y="200" width="360" height="40" rx="4" fill="#2563EB"/>
              <rect x="105" y="250" width="50" height="45" rx="4" fill="#93C5FD" opacity="0.8"/>
              <rect x="175" y="250" width="50" height="45" rx="4" fill="#93C5FD" opacity="0.8"/>
              <rect x="295" y="250" width="50" height="45" rx="4" fill="#93C5FD" opacity="0.8"/>
              <rect x="365" y="250" width="50" height="45" rx="4" fill="#93C5FD" opacity="0.8"/>
              <rect x="220" y="330" width="80" height="80" rx="4" fill="#1E3A8A"/>
              <circle cx="292" cy="372" r="4" fill="#60A5FA"/>
              <rect x="140" y="140" width="28" height="70" rx="4" fill="#3B82F6"/>
              <rect x="220" y="110" width="28" height="100" rx="4" fill="#3B82F6"/>
              <rect x="300" y="150" width="28" height="60" rx="4" fill="#3B82F6"/>
              <circle cx="154" cy="125" r="18" fill="#BFDBFE" opacity="0.7"/>
              <circle cx="168" cy="108" r="14" fill="#BFDBFE" opacity="0.5"/>
              <circle cx="234" cy="96" r="20" fill="#BFDBFE" opacity="0.7"/>
              <circle cx="250" cy="78" r="15" fill="#BFDBFE" opacity="0.5"/>
              <circle cx="314" cy="132" r="16" fill="#BFDBFE" opacity="0.7"/>
              <rect x="50" y="408" width="420" height="12" rx="6" fill="#BFDBFE" opacity="0.5"/>
              <path d="M80 200 L260 140 L440 200Z" fill="#1E40AF" opacity="0.7"/>
              <line x1="260" y1="90" x2="260" y2="145" stroke="#60A5FA" strokeWidth="3"/>
              <path d="M260 90 L295 102 L260 114Z" fill="#60A5FA"/>
              <path d="M420 80 L424 92 L436 96 L424 100 L420 112 L416 100 L404 96 L416 92Z" fill="#FCD34D" opacity="0.8"/>
              <path d="M60 300 L63 309 L72 312 L63 315 L60 324 L57 315 L48 312 L57 309Z" fill="#FCD34D" opacity="0.6"/>
            </svg>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-8"
          >
            {steps.map((s, index) => (
              <motion.div
                key={s.step}
                variants={itemVariants}
                className="group flex items-start gap-6 p-6 rounded-3xl hover:shadow hover:shadow-blue-500/10 border border-transparent hover:border-blue-100/50 transition-all duration-300"
              >
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl shadow flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                    {s.icon}
                  </div>
                  <span className="absolute -top-1 -right-1 w-7 h-7 bg-blue-500 text-white/60 text-xs font-black flex items-center justify-center rounded-full border-2 border-white/50">
                    {s.step}
                  </span>
                  {index !== steps.length - 1 && (
                    <div className="hidden lg:block absolute top-20 left-1/2 w-0.5 h-12 bg-gradient-to-b from-blue-200 to-transparent"></div>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-black mb-2 group-hover:text-blue-600 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed font-medium">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
