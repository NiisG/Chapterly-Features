'use client';

import React from 'react';
import Head from 'next/head';
import {
  Download,
  Play,
  BookOpen,
  PenTool,
  Library,
  Quote,
  Search,
  Shield,
  Smartphone,
  Zap,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

// UI Components (Simulating Shadcn for a single-file solution)
const Button = ({ children, className, variant = 'primary', ...props }: any) => {
  const baseStyle = "inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-white";
  const variants = {
    primary: "bg-slate-900 text-white hover:bg-slate-800 h-12 px-8 py-2",
    outline: "border border-slate-200 hover:bg-slate-100 h-10 px-4 py-2 text-slate-900",
    ghost: "hover:bg-slate-100 h-10 px-4 py-2 text-slate-900",
  };
  return (
    <button className={`${baseStyle} ${variants[variant as keyof typeof variants]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const AccordionItem = ({ question, answer, isOpen, onClick }: any) => (
  <div className="border-b border-slate-200">
    <button
      className="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline w-full text-left"
      onClick={onClick}
    >
      {question}
      <ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
    </button>
    <div className={`overflow-hidden text-sm transition-all duration-300 ${isOpen ? "max-h-96 mb-4" : "max-h-0"}`}>
      <div className="text-slate-500">
        {answer}
      </div>
    </div>
  </div>
);

export default function ChapterlyLanding() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  // Placeholder image paths - REPLACE THESE with your actual screenshot paths
  // You should crop your screenshots to just show the phone content or the phone frame
  const images = {
    heroCenter: "/hero-center.png", // Good Morning Reader screen
    heroLeft: "/hero-left.png",     // Login Screen
    heroRight: "/hero-right.png",   // Splash Screen
    library1: "/feature-library-1.png", // My Books
    library2: "/feature-library-2.png", // Book Details
    notes1: "/feature-notes-1.png", // My Notes
    notes2: "/feature-notes-2.png", // Track Library
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-sky-100">
      <Head>
        <title>Chapterly - Your Story, Your Way</title>
        <meta name="description" content="Track your library, save quotes, and organize your reading list." />
      </Head>

      {/* --- HERO SECTION --- */}
      <section className="relative bg-[#F0F8FF] pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center z-10 relative">
          {/* Logo Icon Placeholder */}
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
            <BookOpen className="h-8 w-8 text-slate-900" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Meet Chapterly
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600 mb-10">
            The ultimate reading companion that becomes your digital library.
            Helping you track progress, save wisdom, and stay organized effortlessly.
          </p>

          <div className="flex justify-center mb-4">
            <Button>
              <Play className="mr-2 h-4 w-4 fill-current" /> Download Now
            </Button>
          </div>
          <p className="text-sm text-sky-600 hover:underline cursor-pointer mb-16">
            Web version coming soon. <span className="font-medium">Join the waitlist</span>
          </p>

          {/* Floating Phones Hero */}
          <div className="relative mx-auto max-w-5xl h-[400px] md:h-[600px] flex justify-center items-end">
            {/* Left Phone */}
            <div className="absolute left-[10%] md:left-[20%] bottom-0 w-[200px] md:w-[280px] transform -rotate-6 translate-y-10 shadow-2xl rounded-[3rem] overflow-hidden border-8 border-white z-10 transition-transform hover:-translate-y-2">
              <img src={images.heroLeft} alt="Login" className="w-full h-auto" />
            </div>
            {/* Right Phone */}
            <div className="absolute right-[10%] md:right-[20%] bottom-0 w-[200px] md:w-[280px] transform rotate-6 translate-y-10 shadow-2xl rounded-[3rem] overflow-hidden border-8 border-white z-10 transition-transform hover:-translate-y-2">
              <img src={images.heroRight} alt="Splash" className="w-full h-auto" />
            </div>
            {/* Center Phone */}
            <div className="relative w-[220px] md:w-[300px] shadow-2xl rounded-[3rem] overflow-hidden border-8 border-white z-20 transform hover:-translate-y-4 transition-transform">
              <img src={images.heroCenter} alt="Home" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: LIBRARY MANAGEMENT (Matches "AI Voice Recorder") --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">track your library</h2>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-600 mb-8">
              <span className="flex items-center"><Library className="w-4 h-4 mr-2" /> Manage Books</span>
              <span className="flex items-center"><Search className="w-4 h-4 mr-2" /> Track Progress</span>
              <span className="flex items-center"><BookOpen className="w-4 h-4 mr-2" /> Book Details</span>
            </div>

            <p className="max-w-2xl mx-auto text-slate-600 mb-10 leading-relaxed">
              Organize your reading list, track your progress page-by-page, and never forget a book you've finished.
              Chapterly helps you explore new horizons and keep your digital bookshelf pristine.
            </p>

            {/* Dual Phones */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
              <div className="w-[280px] rounded-[2.5rem] shadow-xl border-8 border-slate-100 overflow-hidden">
                <img src={images.library1} alt="My Books" className="w-full" />
              </div>
              <div className="w-[280px] rounded-[2.5rem] shadow-xl border-8 border-slate-100 overflow-hidden">
                <img src={images.library2} alt="Book Details" className="w-full" />
              </div>
            </div>

            <div className="mt-12">
              <Button>
                <Play className="mr-2 h-4 w-4 fill-current" /> Download Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: QUOTES & WISDOM (Matches "AI Live Audio") --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-10">daily wisdom & notes</h2>

          {/* Toggle UI */}
          <div className="inline-flex bg-slate-900 rounded-full p-1 mb-12">
            <button className="px-6 py-2 rounded-full bg-slate-700 text-white text-sm font-medium flex items-center">
              <Quote className="w-4 h-4 mr-2" /> Highlights
            </button>
            <button className="px-6 py-2 rounded-full text-slate-400 text-sm font-medium flex items-center hover:text-white">
              <PenTool className="w-4 h-4 mr-2" /> Journaling
            </button>
          </div>

          <p className="max-w-2xl mx-auto text-slate-600 mb-12">
            Save your favorite quotes, capture spontaneous thoughts, and get daily inspiration.
            Keep the wisdom from every book you read right at your fingertips.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-12">
            <div className="w-[280px] rounded-[2.5rem] shadow-xl border-8 border-slate-100 overflow-hidden">
              <img src={images.notes1} alt="Notes" className="w-full" />
            </div>
            <div className="w-[280px] rounded-[2.5rem] shadow-xl border-8 border-slate-100 overflow-hidden">
              <img src={images.notes2} alt="Onboarding" className="w-full" />
            </div>
          </div>

          <Button>
            <Play className="mr-2 h-4 w-4 fill-current" /> Download Now
          </Button>
        </div>
      </section>

      {/* --- SECTION 4: BENEFITS GRID (Matches "It does a lot of things") --- */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-green-600 font-bold tracking-wider text-sm uppercase">Benefits</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-12">it does a lot of things</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Benefit Card 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-slate-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Library className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">Unlimited Books</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Create and organize unlimited lists. Separate your "Want to Read" from your "Completed" piles effortlessly.
              </p>
            </div>

            {/* Benefit Card 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-slate-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">Reading Streaks</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Keep the momentum going. Visual trackers help you maintain your daily reading habit.
              </p>
            </div>

            {/* Benefit Card 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-slate-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">Offline Access</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Access your notes, quotes, and book lists even without an internet connection.
              </p>
            </div>

            {/* Large Feature Card Spanning 2 cols */}
            <div className="col-span-1 md:col-span-2 bg-white p-8 rounded-3xl shadow-sm flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="bg-slate-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-slate-700" />
                </div>
                <h3 className="text-xl font-bold mb-3">Complete Privacy</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Your reading data stays secure on your device. We believe your intellectual journey is personal.
                </p>
              </div>
              {/* Simulated mini UI for privacy */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 w-full md:w-1/2">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs font-bold text-slate-700">Encrypted Locally</span>
                </div>
                <div className="h-2 bg-slate-200 rounded-full w-3/4"></div>
              </div>
            </div>

            {/* Benefit Card 4 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-slate-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quote Generator</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Create beautiful, shareable images of your favorite text highlights instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: POTENTIAL (What you can do) --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-bold tracking-wider text-sm uppercase">POTENTIAL</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">what you can do with chapterly</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="rounded-3xl overflow-hidden shadow-lg mb-6 bg-sky-50 border-4 border-slate-50 h-[400px] flex items-center justify-center">
                <img src={images.library2} alt="Track" className="h-full object-contain" />
              </div>
              <h3 className="font-bold text-xl mb-2">track reading stats</h3>
              <p className="text-slate-500 px-4">Visualize your habits, see pages read, and finish more books.</p>
            </div>
            <div className="text-center">
              <div className="rounded-3xl overflow-hidden shadow-lg mb-6 bg-purple-50 border-4 border-slate-50 h-[400px] flex items-center justify-center">
                <img src={images.notes1} alt="Save" className="h-full object-contain" />
              </div>
              <h3 className="font-bold text-xl mb-2">save wisdom instantly</h3>
              <p className="text-slate-500 px-4">Extract key insights and save them as cards to review later.</p>
            </div>
            <div className="text-center">
              <div className="rounded-3xl overflow-hidden shadow-lg mb-6 bg-green-50 border-4 border-slate-50 h-[400px] flex items-center justify-center">
                <img src={images.heroCenter} alt="Morning" className="h-full object-contain" />
              </div>
              <h3 className="font-bold text-xl mb-2">start your day right</h3>
              <p className="text-slate-500 px-4">Get daily curated quotes and motivation to keep the streak alive.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 6: FAQ --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-green-600 font-bold tracking-wider text-sm uppercase">FAQ</span>
            <h2 className="text-4xl font-bold mt-2">common questions</h2>
          </div>

          <div className="space-y-2">
            {[
              { q: "Is Chapterly free to use?", a: "Yes, Chapterly offers a robust free plan for tracking your library and quotes." },
              { q: "Does it work offline?", a: "Absolutely. Chapterly is designed to be your offline-first reading companion." },
              { q: "Can I import my books from Goodreads?", a: "We are working on an import feature to make your transition seamless." },
              { q: "Is my data private?", a: "Yes. Your notes and reading history are stored securely on your device." },
            ].map((item, idx) => (
              <AccordionItem
                key={idx}
                question={item.q}
                answer={item.a}
                isOpen={openFaq === idx}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA & FOOTER --- */}
      <section className="pb-24 pt-12 bg-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-800">Get Chapterly Now!</h2>
        <div className="flex justify-center mb-16">
          <Button className="h-14 px-10 text-lg">
            <Play className="mr-2 h-5 w-5 fill-current" /> Download Now
          </Button>
        </div>

        <div className="border-t border-slate-100 pt-12 pb-8">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <BookOpen className="h-5 w-5" />
              <span className="font-semibold">Chapterly</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-900">Contact</a>
              <a href="#" className="hover:text-slate-900">Privacy</a>
              <a href="#" className="hover:text-slate-900">Terms</a>
            </div>
            <div className="mt-4 md:mt-0">
              © 2025 Chapterly. All rights reserved.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}