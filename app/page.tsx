"use client";

import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import {
  motion,
  AnimatePresence,
  useInView
} from 'framer-motion';
import {
  Play, BookOpen, Library, Quote, Search,
  Shield, Star, ChevronDown,
  ChevronLeft, ChevronRight, Apple,
  LayoutGrid, FileText, Zap, X, Check,
  Mic, Timer, Target
} from 'lucide-react';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- UTILS ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- ASSETS ---
const IMAGES = {
  heroCenter: "/hero-center.png",
  heroLeft: "/hero-left.png",
  heroRight: "/hero-right.png",
  library1: "/feature-library-1.png",
  library2: "/feature-library-2.png",
  notes1: "/feature-notes-1.png",
  notes2: "/feature-notes-2.png",
};

// --- COMPONENTS ---

const Button = ({ children, className, variant = 'primary', href, ...props }: any) => {
  const baseStyle = "inline-flex items-center justify-center rounded-full font-medium transition-all active:scale-95 duration-200";
  const variants = {
    primary: "bg-slate-900 text-white hover:bg-slate-800 h-14 px-8 py-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5",
    outline: "border border-slate-200 hover:bg-slate-50 h-12 px-6 py-2 text-slate-900",
    ghost: "hover:bg-slate-100 h-10 px-4 py-2 text-slate-900",
    secondary: "bg-white text-slate-900 border border-slate-200 shadow-sm hover:bg-slate-50 h-14 px-8"
  };

  if (href) {
    return (
      <a href={href} className={cn(baseStyle, variants[variant as keyof typeof variants], className)} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={cn(baseStyle, variants[variant as keyof typeof variants], className)} {...props}>
      {children}
    </button>
  );
};



// 2. SCROLL REVEAL
const ScrollReveal = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// 3. INTERACTIVE TABS (Fixed Mobile Interaction)
const FeatureTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      id: 'library',
      label: 'Library',
      icon: <LayoutGrid className="w-4 h-4" />,
      title: "Your collection, organized.",
      text: "Visualize your reading journey. Create custom collections and never lose track of a book again.",
      image: IMAGES.library1
    },
    {
      id: 'details',
      label: 'Insights',
      icon: <FileText className="w-4 h-4" />,
      title: "Deep dive into every page.",
      text: "Track start dates, finish dates, and page progress. Understand your reading habits.",
      image: IMAGES.library2
    },
    {
      id: 'notes',
      label: 'Wisdom',
      icon: <Quote className="w-4 h-4" />,
      title: "Capture thoughts.",
      text: "Save highlights instantly. Add personal notes to quotes and review them later.",
      image: IMAGES.notes1
    },
  ];

  return (
    <div className="flex flex-col items-center w-full">
      {/* Tab Navigation - Stacked nicely on mobile */}
      <div className="w-full overflow-x-auto pb-4 no-scrollbar flex justify-center">
        <div className="flex flex-nowrap items-center gap-2 mb-8 md:mb-12 bg-slate-100/80 p-1.5 rounded-full backdrop-blur-sm mx-4">
          {features.map((f, idx) => (
            <button
              key={f.id}
              onClick={() => setActiveTab(idx)}
              className={cn(
                "flex items-center whitespace-nowrap gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full text-sm font-bold transition-all duration-200 touch-manipulation",
                activeTab === idx
                  ? "bg-white text-slate-900 shadow-md ring-1 ring-slate-200"
                  : "text-slate-500 hover:text-slate-700"
              )}
            >
              {f.icon}
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-5xl mx-auto w-full">

        {/* Mobile Layout: Phone First, then Text */}

        {/* Phone Display */}
        <div className="relative order-1 flex justify-center w-full h-[450px] md:h-[580px]">
          <div className="relative w-[220px] md:w-[280px] h-full z-10">
            <div className="absolute inset-0 rounded-[2.5rem] md:rounded-[3rem] border-[6px] md:border-[8px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={features[activeTab].image}
                  src={features[activeTab].image}
                  alt="Feature"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-sky-300/30 to-purple-300/30 blur-3xl rounded-full transform scale-125 -z-0" />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left px-6 order-2 pb-8 md:pb-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">{features[activeTab].title}</h3>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
                {features[activeTab].text}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

// 4. CAROUSEL (Mobile Swipe Optimized)
const PotentialCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const cards = [
    { title: "Reading Stats", desc: "Visualize habits & finish books.", img: IMAGES.library2, color: "bg-sky-50" },
    { title: "Save Wisdom", desc: "Extract insights instantly.", img: IMAGES.notes1, color: "bg-purple-50" },
    { title: "Daily Motivation", desc: "Quotes to keep streaks alive.", img: IMAGES.heroCenter, color: "bg-green-50" },
    { title: "Clean Library", desc: "Organize your digital shelf.", img: IMAGES.library1, color: "bg-orange-50" },
  ];

  return (
    <div className="relative group">
      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto pb-8 md:pb-12 px-6 md:px-12 snap-x snap-mandatory hide-scrollbar touch-pan-x"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="min-w-[85vw] md:min-w-[350px] snap-center"
            whileHover={{ y: -5 }}
          >
            <div className={cn("h-[400px] md:h-[450px] rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 relative flex items-center justify-center mb-6 transition-colors", card.color)}>
              <img src={card.img} alt={card.title} className="h-[85%] w-auto object-contain shadow-xl rounded-2xl rotate-[-2deg] hover:rotate-0 transition-transform duration-500" />
            </div>
            <div className="text-left px-2">
              <h3 className="font-bold text-xl mb-2 text-slate-900">{card.title}</h3>
              <p className="text-slate-500 leading-relaxed">{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desktop Nav */}
      <div className="flex justify-center md:justify-end gap-4 px-12 mt-4">
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
    <div className="w-full overflow-hidden py-12 md:py-16 bg-white">
      <div className="text-center mb-8 md:mb-10 text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Trusted by readers from</div>
      <div className="relative flex overflow-hidden group select-none">
        <motion.div
          className="flex gap-12 md:gap-20 min-w-full justify-around items-center opacity-40 grayscale px-4"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <h3 className="text-2xl md:text-3xl font-serif font-bold">Goodreads</h3>
          <h3 className="text-2xl md:text-3xl font-sans font-black tracking-tighter">TheVerge</h3>
          <h3 className="text-2xl md:text-3xl font-serif italic">Medium</h3>
          <h3 className="text-2xl md:text-3xl font-mono font-bold">ProductHunt</h3>
          <h3 className="text-2xl md:text-3xl font-sans font-bold">TechCrunch</h3>
          {/* Duplicate for smooth loop */}
          <h3 className="text-2xl md:text-3xl font-serif font-bold">Goodreads</h3>
          <h3 className="text-2xl md:text-3xl font-sans font-black tracking-tighter">TheVerge</h3>
          <h3 className="text-2xl md:text-3xl font-serif italic">Medium</h3>
        </motion.div>
      </div>
    </div>
  );
};

// 6. WAITLIST MODAL
const WaitlistModal = ({ onClose }: { onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative"
      onClick={(e) => e.stopPropagation()}
    >
      <button onClick={onClose} className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors">
        <X className="w-6 h-6" />
      </button>

      <h3 className="text-2xl font-bold mb-4 text-slate-900">You're on the list!</h3>

      <div className="flex items-center gap-3 bg-green-50 text-green-700 p-4 rounded-xl mb-6">
        <div className="bg-green-500 rounded-full p-1">
          <Check className="w-4 h-4 text-white" />
        </div>
        <span className="font-medium">You're already on the waitlist!</span>
      </div>

      <p className="text-slate-500 leading-relaxed">
        We'll notify you as soon as the web version is ready.
      </p>
    </motion.div>
  </motion.div>
);

// --- MAIN PAGE ---

export default function ChapterlyLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [showWaitlistModal, setShowWaitlistModal] = useState(false);



  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-sky-200 overflow-x-hidden">
      <Head>
        <title>Chapterly - Your Story, Your Way</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>

      <AnimatePresence>
        {showWaitlistModal && <WaitlistModal onClose={() => setShowWaitlistModal(false)} />}
      </AnimatePresence>

      <motion.main initial="hidden" animate="visible">

        {/* --- HERO SECTION --- */}
        <section className="relative bg-[#F0F8FF] pt-12 md:pt-20 pb-20 md:pb-32 overflow-hidden">
          {/* Mobile Background Blur Blobs */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] right-[-20%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-sky-200/40 rounded-full blur-3xl" />
            <div className="absolute bottom-[10%] left-[-20%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-200/40 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 text-center z-10 relative">
            <div className="flex flex-col items-center">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mx-auto mb-6 md:mb-8 flex items-center justify-center"
              >
                <img src="/image.png" alt="Chapterly Logo" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-7xl font-bold tracking-tight mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-br from-slate-900 to-slate-600"
              >
                Meet Chapterly
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mx-auto max-w-xl md:max-w-2xl text-base md:text-xl text-slate-600 mb-8 md:mb-10 leading-relaxed px-4"
              >
                The ultimate offline-first reading companion.
                Track progress, save wisdom, and organize your digital library.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col w-full max-w-xs md:max-w-none md:flex-row items-center justify-center gap-4 md:gap-6 mb-8"
              >
                <Button
                  href="https://apps.apple.com/ca/app/chapterly/id6755092891"
                  target="_blank"
                  className="w-full md:w-auto h-14 px-8 bg-sky-500 text-white gap-3 text-lg hover:bg-white-600 shadow-2xl"
                >
                  <img src="/apple.png" alt="Apple Logo" className="w-6 h-6 object-contain" /> Download on iOS
                </Button>


              </motion.div>
            </div>

            {/* HERO ANIMATION: Scaled for Mobile */}
            <div className="relative mx-auto max-w-5xl h-[320px] md:h-[650px] flex justify-center items-end mt-8 md:mt-12 perspective-1000">
              {/* Left Phone */}
              <motion.div
                initial={{ x: 0, rotate: 0, opacity: 0, y: 100 }}
                animate={{ x: "-45%", rotate: -12, opacity: 1, y: 40 }}
                transition={{ delay: 0.4, duration: 1.2, type: "spring" }}
                className="absolute bottom-0 w-[160px] md:w-[300px] z-10 origin-bottom-right"
              >
                <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden border-[4px] md:border-[8px] border-white shadow-2xl">
                  <img src={IMAGES.heroLeft} alt="Login" className="w-full" />
                </div>
              </motion.div>

              {/* Right Phone */}
              <motion.div
                initial={{ x: 0, rotate: 0, opacity: 0, y: 100 }}
                animate={{ x: "45%", rotate: 12, opacity: 1, y: 40 }}
                transition={{ delay: 0.4, duration: 1.2, type: "spring" }}
                className="absolute bottom-0 w-[160px] md:w-[300px] z-10 origin-bottom-left"
              >
                <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden border-[4px] md:border-[8px] border-white shadow-2xl">
                  <img src={IMAGES.heroRight} alt="Splash" className="w-full" />
                </div>
              </motion.div>

              {/* Center Phone */}
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 1, type: "spring" }}
                className="relative w-[180px] md:w-[320px] z-20"
              >
                <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden border-[4px] md:border-[8px] border-white shadow-2xl">
                  <img src={IMAGES.heroCenter} alt="Home" className="w-full" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- SECTION: INTERACTIVE FEATURE TABS --- */}
        <section className="py-20 md:py-32 bg-white">
          <ScrollReveal className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-slate-900">
                Built for readers
              </h2>
              <p className="max-w-xl mx-auto text-slate-600 text-base md:text-lg">
                Tap to see how Chapterly adapts to your reading style.
              </p>
            </div>

            <FeatureTabs />

          </ScrollReveal>
        </section>

        {/* --- SECTION: BENEFITS --- */}
        <section className="py-20 md:py-32 bg-slate-50">
          <ScrollReveal className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-20">
              <span className="text-green-600 font-bold tracking-widest text-xs uppercase mb-3 block">Benefits</span>
              <h2 className="text-3xl md:text-6xl font-bold text-slate-900">Why Chapterly?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto px-2">
              {[
                { icon: Quote, title: "Save Quotes", text: "Capture wisdom instantly. Scan pages or type them out." },
                { icon: Mic, title: "Voice to Text", text: "Dictate your thoughts and notes directly into the app." },
                { icon: Timer, title: "Pomodoro Timer", text: "Stay focused with built-in reading sessions." },
                { icon: Target, title: "Reading Goals", text: "Set annual or monthly goals to keep yourself on track." },
                { icon: Library, title: "Infinite Shelves", text: "Create unlimited lists. Sort by genre, mood, or priority." },
                { icon: Zap, title: "Offline Sync", text: "No internet? No problem. Works everywhere." },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-slate-100"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-4 md:mb-6">
                    <item.icon className="w-5 h-5 md:w-6 md:h-6 text-slate-900" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* --- SECTION: CAROUSEL --- */}
        <section className="py-20 md:py-32 bg-white overflow-hidden">
          <ScrollReveal className="container mx-auto px-0 md:px-4">
            <div className="text-center mb-10 md:mb-16 px-4">
              <span className="text-orange-500 font-bold tracking-widest text-xs uppercase mb-3 block">POTENTIAL</span>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">Unlock your reading potential</h2>
            </div>

            <PotentialCarousel />

          </ScrollReveal>
        </section>

        {/* --- FAQ --- */}
        <section className="py-20 md:py-24 bg-white border-t border-slate-50">
          <ScrollReveal className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl font-bold">Common Questions</h2>
            </div>

            <div className="space-y-3 md:space-y-4">
              {[
                { q: "Is Chapterly free?", a: "Yes! The core library and tracking features are completely free forever." },
                { q: "How does the offline mode work?", a: "We store your data locally on your device. It syncs only when you want it to." },
                { q: "Can I import from Goodreads?", a: "We are building a CSV importer right now." },
              ].map((item, idx) => (
                <div key={idx} className="border border-slate-100 rounded-2xl overflow-hidden">
                  <button
                    className="flex items-center justify-between w-full p-5 md:p-6 text-left font-medium text-base md:text-lg bg-white hover:bg-slate-50 transition-colors active:bg-slate-100"
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
                        <p className="p-5 md:p-6 pt-0 text-slate-500 leading-relaxed text-sm md:text-base">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* --- FOOTER --- */}
        <section className="bg-[#111] text-white py-16 md:py-24 rounded-t-[2rem] md:rounded-t-[3rem] mt-8 md:mt-12">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight">Ready to read?</h2>
              <p className="text-gray-400 text-base md:text-xl mb-10 md:mb-12 px-4">
                Join thousands of readers organizing their intellectual life.
              </p>

              <div className="flex flex-col items-center gap-4 px-4">
                <Button
                  href="https://apps.apple.com/ca/app/chapterly/id6755092891"
                  target="_blank"
                  className="w-full md:w-auto h-16 px-10 bg-white text-black hover:bg-gray-200 gap-3 text-lg rounded-2xl"
                >
                  <img src="/apple-logo.png" alt="Apple Logo" className="w-6 h-6 object-contain" /> Download on App Store
                </Button>

              </div>
            </div>

            <div className="mt-16 md:mt-24 pt-12 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-6 md:gap-0">
              <div className="flex items-center gap-2">
                <img src="/image.png" alt="Chapterly Logo" className="w-6 h-6 object-contain" />
                <span className="text-white font-bold text-base">Chapterly</span>
              </div>
              <div className="flex gap-6 md:gap-8">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
              </div>
              <div>
                © 2025 Chapterly Inc.
              </div>
            </div>
          </div>
        </section>

      </motion.main>
    </div>
  );
}