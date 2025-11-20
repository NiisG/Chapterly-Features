"use client";

import React, { useState, useRef } from 'react';
import Head from 'next/head';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useInView
} from 'framer-motion';
import {
  Play, BookOpen, Library, Quote, Search,
  Shield, Smartphone, Zap, ChevronDown,
  ChevronLeft, ChevronRight, Star,
  Apple, LayoutGrid, FileText, X
} from 'lucide-react';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- UTILS ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- ASSETS ---
// Ensure these images exist in your /public folder
const IMAGES = {
  heroCenter: "/hero-center.png",
  heroLeft: "/hero-left.png",
  heroRight: "/hero-right.png",
  library1: "/feature-library-1.png",
  library2: "/feature-library-2.png",
  notes1: "/feature-notes-1.png",
  notes2: "/feature-notes-2.png",
};

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// --- COMPONENTS ---

const Button = ({ children, className, variant = 'primary', ...props }: any) => {
  const baseStyle = "inline-flex items-center justify-center rounded-full font-medium transition-all active:scale-95 duration-200";
  const variants = {
    primary: "bg-slate-900 text-white hover:bg-slate-800 h-12 px-8 py-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5",
    outline: "border border-slate-200 hover:bg-slate-50 h-12 px-6 py-2 text-slate-900",
    ghost: "hover:bg-slate-100 h-10 px-4 py-2 text-slate-900",
    secondary: "bg-white text-slate-900 border border-slate-200 shadow-sm hover:bg-slate-50 h-12 px-8"
  };
  return (
    <button className={cn(baseStyle, variants[variant as keyof typeof variants], className)} {...props}>
      {children}
    </button>
  );
};

// 2. SCROLL REVEAL WRAPPER
const ScrollReveal = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// 3. INTERACTIVE TABS (Video Reference: "Submind AI" section)
const FeatureTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      id: 'library',
      label: 'Library',
      icon: <LayoutGrid className="w-4 h-4" />,
      title: "Your entire collection, beautifully organized.",
      text: "Visualize your reading journey. Create custom collections, separate 'Want to Read' from 'Finished', and never lose track of a book again.",
      image: IMAGES.library1
    },
    {
      id: 'details',
      label: 'Insights',
      icon: <FileText className="w-4 h-4" />,
      title: "Deep dive into every page.",
      text: "Track start dates, finish dates, and page progress. Chapterly gives you the metadata you need to understand your reading habits.",
      image: IMAGES.library2
    },
    {
      id: 'notes',
      label: 'Wisdom',
      icon: <Quote className="w-4 h-4" />,
      title: "Capture thoughts, not just words.",
      text: "Save highlights instantly. Add personal notes to quotes and review them later to retain more of what you read.",
      image: IMAGES.notes1
    },
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-12 bg-slate-100/50 p-2 rounded-full backdrop-blur-sm">
        {features.map((f, idx) => (
          <button
            key={f.id}
            onClick={() => setActiveTab(idx)}
            className={cn(
              "flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 active:scale-95",
              activeTab === idx
                ? "bg-white text-slate-900 shadow-md scale-105 ring-1 ring-slate-200"
                : "text-slate-500 hover:text-slate-700 hover:bg-white/50"
            )}
          >
            {f.icon}
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        {/* Left: Text Content */}
        <div className="text-left px-4 order-2 md:order-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-3xl font-bold mb-4">{features[activeTab].title}</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {features[activeTab].text}
              </p>
              <div className="flex items-center text-sky-600 font-medium cursor-pointer group">
                Learn more about {features[activeTab].label}
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: Phone Display */}
        <div className="relative order-1 md:order-2 flex justify-center">
          <motion.div
            className="relative w-[280px] h-[580px] z-10 cursor-pointer"
            whileTap={{ scale: 0.95, rotate: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="absolute inset-0 rounded-[3rem] border-[8px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={features[activeTab].image}
                  src={features[activeTab].image}
                  alt="Feature"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
          </motion.div>
          {/* Decorative Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-sky-300/30 to-purple-300/30 blur-3xl rounded-full transform scale-150 -z-0" />
        </div>
      </div>
    </div>
  );
};

// 4. CAROUSEL
const PotentialCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const cards = [
    { title: "Track Reading Stats", desc: "Visualize your habits and finish more books.", img: IMAGES.library2, color: "bg-sky-50" },
    { title: "Save Wisdom Instantly", desc: "Extract key insights to review later.", img: IMAGES.notes1, color: "bg-purple-50" },
    { title: "Start Your Day Right", desc: "Get daily curated quotes and motivation.", img: IMAGES.heroCenter, color: "bg-green-50" },
    { title: "Manage Library", desc: "Keep your reading list clean and organized.", img: IMAGES.library1, color: "bg-orange-50" },
  ];

  return (
    <div className="relative group">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-12 px-4 md:px-12 snap-x snap-mandatory hide-scrollbar touch-pan-x"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="min-w-[300px] md:min-w-[350px] snap-center cursor-pointer"
            whileHover={{ y: -10 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className={cn("h-[450px] rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 relative flex items-center justify-center mb-6 transition-colors", card.color)}>
              <img src={card.img} alt={card.title} className="h-[85%] w-auto object-contain shadow-xl rounded-2xl rotate-[-2deg] hover:rotate-0 transition-transform duration-500" />
            </div>
            <div className="text-left px-2">
              <h3 className="font-bold text-xl mb-2 text-slate-900">{card.title}</h3>
              <p className="text-slate-500 leading-relaxed">{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="hidden md:flex justify-end gap-4 px-12 mt-4">
        <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

// 5. LOGO MARQUEE
const LogoMarquee = () => {
  return (
    <div className="w-full overflow-hidden py-16 bg-white">
      <div className="text-center mb-10 text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Trusted by readers from</div>
      <div className="relative flex overflow-hidden group select-none">
        <motion.div
          className="flex gap-20 min-w-full justify-around items-center opacity-40 grayscale"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {/* Text Placeholders - Replace with SVGs */}
          <h3 className="text-3xl font-serif font-bold">Goodreads</h3>
          <h3 className="text-3xl font-sans font-black tracking-tighter">TheVerge</h3>
          <h3 className="text-3xl font-serif italic">Medium</h3>
          <h3 className="text-3xl font-mono font-bold">ProductHunt</h3>
          <h3 className="text-3xl font-sans font-bold">TechCrunch</h3>
          <h3 className="text-3xl font-serif font-bold">Goodreads</h3>
          <h3 className="text-3xl font-sans font-black tracking-tighter">TheVerge</h3>
          <h3 className="text-3xl font-serif italic">Medium</h3>
        </motion.div>
        <motion.div
          className="flex gap-20 min-w-full justify-around items-center opacity-40 grayscale absolute top-0 left-full pl-20"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <h3 className="text-3xl font-serif font-bold">Goodreads</h3>
          <h3 className="text-3xl font-sans font-black tracking-tighter">TheVerge</h3>
          <h3 className="text-3xl font-serif italic">Medium</h3>
          <h3 className="text-3xl font-mono font-bold">ProductHunt</h3>
          <h3 className="text-3xl font-sans font-bold">TechCrunch</h3>
          <h3 className="text-3xl font-serif font-bold">Goodreads</h3>
          <h3 className="text-3xl font-sans font-black tracking-tighter">TheVerge</h3>
          <h3 className="text-3xl font-serif italic">Medium</h3>
        </motion.div>
      </div>
    </div>
  );
};

// --- MAIN PAGE ---

export default function ChapterlyLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-sky-200 overflow-x-hidden">
      <Head>
        <title>Chapterly - Your Story, Your Way</title>
      </Head>

      <motion.main initial="hidden" animate="visible">

        {/* --- HERO SECTION --- */}
        <section className="relative bg-[#F0F8FF] pt-20 pb-12 md:pb-32 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-sky-200/40 rounded-full blur-3xl" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 text-center z-10 relative">
            <motion.div variants={staggerContainer} className="flex flex-col items-center">
              <motion.div variants={fadeInUp} className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-white/80 backdrop-blur shadow-xl rotate-3 hover:rotate-12 transition-transform duration-500 cursor-pointer">
                <BookOpen className="h-10 w-10 text-slate-900" />
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-slate-900 to-slate-600">
                Meet Chapterly
              </motion.h1>

              <motion.p variants={fadeInUp} className="mx-auto max-w-2xl text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
                The ultimate offline-first reading companion.
                Track progress, save wisdom, and organize your digital library without distractions.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Button className="h-14 px-8 bg-black text-white gap-3 text-lg hover:bg-gray-900">
                  <Apple className="w-6 h-6 fill-current" /> Download on iOS
                </Button>
                <Button variant="secondary" className="h-14 px-8 gap-3 text-lg text-slate-400 cursor-not-allowed hover:bg-white" disabled>
                  <Play className="w-5 h-5 fill-current" /> Play Store (Soon)
                </Button>
              </motion.div>
            </motion.div>

            {/* HERO ANIMATION: Fan Out Effect */}
            <div className="relative mx-auto max-w-5xl h-[400px] md:h-[650px] flex justify-center items-end mt-12 perspective-1000">
              {/* Left Phone */}
              <motion.div
                initial={{ x: 0, rotate: 0, opacity: 0, y: 100, scale: 0.9 }}
                animate={{ x: -130, rotate: -12, opacity: 1, y: 40, scale: 0.95 }}
                transition={{ delay: 0.4, duration: 1.2, type: "spring", bounce: 0.3 }}
                className="absolute bottom-0 w-[220px] md:w-[300px] hidden md:block z-10 origin-bottom-right"
              >
                <div className="rounded-[3rem] overflow-hidden border-[8px] border-white shadow-2xl">
                  <img src={IMAGES.heroLeft} alt="Login" className="w-full" />
                </div>
              </motion.div>

              {/* Right Phone */}
              <motion.div
                initial={{ x: 0, rotate: 0, opacity: 0, y: 100, scale: 0.9 }}
                animate={{ x: 130, rotate: 12, opacity: 1, y: 40, scale: 0.95 }}
                transition={{ delay: 0.4, duration: 1.2, type: "spring", bounce: 0.3 }}
                className="absolute bottom-0 w-[220px] md:w-[300px] hidden md:block z-10 origin-bottom-left"
              >
                <div className="rounded-[3rem] overflow-hidden border-[8px] border-white shadow-2xl">
                  <img src={IMAGES.heroRight} alt="Splash" className="w-full" />
                </div>
              </motion.div>

              {/* Center Phone */}
              <motion.div
                initial={{ y: 300, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 1, type: "spring", bounce: 0.2 }}
                className="relative w-[240px] md:w-[320px] z-20"
              >
                <div className="rounded-[3rem] overflow-hidden border-[8px] border-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)]">
                  <img src={IMAGES.heroCenter} alt="Home" className="w-full" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- SECTION: INTERACTIVE FEATURE TABS --- */}
        <section className="py-32 bg-white">
          <ScrollReveal className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                built for readers
              </motion.h2>
              <p className="max-w-2xl mx-auto text-slate-600 text-lg mb-12">
                Swipe between features to see how Chapterly adapts to your reading style.
              </p>
            </div>

            <FeatureTabs />

          </ScrollReveal>
        </section>

        {/* --- SECTION: BENEFITS --- */}
        <section className="py-32 bg-slate-50">
          <ScrollReveal className="container mx-auto px-4">
            <div className="text-center mb-20">
              <span className="text-green-600 font-bold tracking-widest text-xs uppercase mb-4 block">Benefits</span>
              <h2 className="text-4xl md:text-6xl font-bold text-slate-900">why chapterly?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {[
                { icon: Library, title: "Infinite Shelves", text: "Create unlimited lists. Sort by genre, mood, or priority." },
                { icon: Zap, title: "Offline Sync", text: "No internet? No problem. Your library works everywhere you go." },
                { icon: Shield, title: "Privacy First", text: "We don't sell your data. Your reading habits are your business." },
                { icon: Search, title: "Deep Search", text: "Find that one specific quote you saved three months ago in seconds." },
                { icon: Star, title: "Daily Streaks", text: "Gamify your reading habit. Don't break the chain." },
                { icon: Quote, title: "Social Sharing", text: "Generate beautiful quote cards for Instagram or X instantly." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:border-transparent transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-slate-900" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-slate-900">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* --- SECTION: CAROUSEL --- */}
        <section className="py-32 bg-white overflow-hidden">
          <ScrollReveal className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-orange-500 font-bold tracking-widest text-xs uppercase mb-4 block">POTENTIAL</span>
              <h2 className="text-4xl md:text-5xl font-bold">unlock your reading potential</h2>
            </div>

            <PotentialCarousel />

          </ScrollReveal>
        </section>

        {/* --- FAQ --- */}
        <section className="py-24 bg-white border-t border-slate-50">
          <ScrollReveal className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold">Common Questions</h2>
            </div>

            <div className="space-y-4">
              {[
                { q: "Is Chapterly free?", a: "Yes! The core library and tracking features are completely free forever." },
                { q: "How does the offline mode work?", a: "We store your data locally on your device. It syncs only when you want it to." },
                { q: "Can I import from Goodreads?", a: "We are building a CSV importer right now. Join the waitlist to be notified!" },
              ].map((item, idx) => (
                <div key={idx} className="border border-slate-100 rounded-2xl overflow-hidden">
                  <button
                    className="flex items-center justify-between w-full p-6 text-left font-medium text-lg bg-white hover:bg-slate-50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  >
                    <span>{item.q}</span>
                    <ChevronDown className={cn("transition-transform duration-300 text-slate-400", openFaq === idx ? "rotate-180" : "")} />
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="overflow-hidden bg-slate-50/50"
                      >
                        <p className="p-6 pt-0 text-slate-500 leading-relaxed">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* --- CTA & FOOTER --- */}
        <section className="bg-[#111] text-white py-24 rounded-t-[3rem] mt-12">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">Ready to read?</h2>
              <p className="text-gray-400 text-xl mb-12">Join thousands of readers organizing their intellectual life with Chapterly.</p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button className="h-16 px-10 bg-white text-black hover:bg-gray-200 gap-3 text-lg rounded-2xl">
                  <Apple className="w-6 h-6 fill-current" /> Download on App Store
                </Button>
                <div className="flex flex-col items-center">
                  <Button className="h-16 px-10 bg-transparent border border-gray-700 text-gray-400 cursor-not-allowed gap-3 text-lg rounded-2xl hover:bg-transparent">
                    <Play className="w-5 h-5 fill-current" /> Google Play
                  </Button>
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 mt-2">Coming Soon</span>
                </div>
              </div>
            </motion.div>

            <div className="mt-24 pt-12 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
              <div className="flex items-center gap-2 mb-4 md:mb-0">
                <BookOpen className="w-6 h-6 text-white" />
                <span className="text-white font-bold text-lg">Chapterly</span>
              </div>
              <div className="flex gap-8">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
              </div>
              <div className="mt-4 md:mt-0">
                © 2025 Chapterly Inc.
              </div>
            </div>
          </div>
        </section>

      </motion.main>
    </div>
  );
}