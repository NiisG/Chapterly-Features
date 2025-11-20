"use client";

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, FileText, Mail } from 'lucide-react';

export default function TermsAndConditions() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-sky-200">
            <Head>
                <title>Terms and Conditions - Chapterly</title>
                <meta name="description" content="Terms and Conditions for Chapterly App" />
            </Head>

            {/* --- NAVIGATION --- */}
            <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-slate-200 z-50 h-16">
                <div className="container mx-auto px-4 h-full flex items-center justify-between max-w-4xl">
                    <Link href="/" className="flex items-center gap-2 group">
                        <ArrowLeft className="w-5 h-5 text-slate-500 group-hover:text-slate-900 transition-colors" />
                        <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">Back to Home</span>
                    </Link>

                    <div className="flex items-center gap-2">
                        <img src="/image.png" alt="Chapterly Logo" className="w-8 h-8 object-contain" />
                        <span className="font-bold text-lg">Chapterly</span>
                    </div>
                </div>
            </nav>

            {/* --- MAIN CONTENT --- */}
            <motion.main
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="container mx-auto px-4 pt-24 pb-16 max-w-3xl"
            >
                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12">

                    {/* Header */}
                    <div className="mb-10 border-b border-slate-100 pb-8">
                        <div className="inline-flex items-center justify-center mb-6">
                            <img src="/image.png" alt="Terms and Conditions" className="w-16 h-16 object-contain" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Terms and Conditions</h1>
                        <p className="text-slate-500 font-medium">Last updated: November 5, 2025</p>
                    </div>

                    {/* Content */}
                    <div className="space-y-10 text-slate-600 leading-relaxed">

                        <section>
                            <p className="text-lg mb-4">
                                Welcome to <strong className="text-slate-900">Chapterly</strong>!
                            </p>
                            <p>
                                These Terms and Conditions (“Terms”) govern your use of the Chapterly mobile application (“App,” “we,” “us,” or “our”). By creating an account or using Chapterly, you agree to be bound by these Terms. If you do not agree, please do not use the App.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4">1. Overview</h2>
                            <p className="mb-4">
                                <strong className="text-slate-900">Chapterly</strong> allows users to add and manage their favorite <strong className="text-slate-900">books and quotes</strong>.
                            </p>
                            <p>
                                Currently, users can add text-based entries. In future versions, we may introduce additional features such as adding photos.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4">2. Eligibility</h2>
                            <p className="mb-4">
                                You must be at least <strong className="text-slate-900">14 years old</strong> to use Chapterly.
                            </p>
                            <p>
                                By using the App, you confirm that you meet this minimum age requirement.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4">3. Account Registration</h2>
                            <p className="mb-4">To use Chapterly, you must create an account using your <strong className="text-slate-900">email address</strong>.</p>
                            <ul className="list-disc pl-5 space-y-2 marker:text-sky-500">
                                <li>You are responsible for maintaining the security of your account.</li>
                                <li>You agree to provide accurate and up-to-date information.</li>
                                <li>You can delete your account at any time through the <strong className="text-slate-900">Settings</strong> section of the app.</li>
                            </ul>
                            <p className="mt-4 p-4 bg-slate-50 rounded-xl text-sm border border-slate-100">
                                We currently do <strong className="text-slate-900">not</strong> support sign-in with Apple, Google, or other third-party logins.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4">4. User Content</h2>
                            <p className="mb-4">
                                You are responsible for any content you add to the App, including book titles, quotes, or any other text-based entries.
                            </p>
                            <p className="mb-4">
                                By posting or saving content in Chapterly, you retain ownership of your data. However, you grant us a limited right to store and display your content within the App for your personal use.
                            </p>
                            <p className="mb-4">You agree not to upload or share content that:</p>
                            <ul className="list-disc pl-5 space-y-2 marker:text-sky-500">
                                <li>Violates any laws or third-party rights</li>
                                <li>Contains hate speech, harassment, or explicit content</li>
                            </ul>
                            <p className="mt-4">
                                We reserve the right to remove inappropriate or illegal content if necessary.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4">5. Privacy</h2>
                            <p className="mb-4">We value your privacy.</p>
                            <p className="mb-4">
                                We collect only your <strong className="text-slate-900">email address</strong> (and your name if it can be derived from your email).
                            </p>
                            <p className="mb-4">We do <strong className="text-slate-900">not</strong>:</p>
                            <ul className="list-disc pl-5 space-y-2 marker:text-sky-500">
                                <li>Track your activity</li>
                                <li>Collect geolocation data</li>
                                <li>Send push notifications</li>
                                <li>Use analytics or advertising tools</li>
                            </ul>
                            <p className="mt-4">
                                To learn more, please review our <Link href="/privacy" className="text-sky-600 underline hover:text-sky-800">Privacy Policy</Link>.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4">6. Intellectual Property</h2>
                            <p className="mb-4">
                                All rights, titles, and interests in the <strong className="text-slate-900">Chapterly</strong> app — including the name, logo, design, and software — belong to the developer.
                            </p>
                            <p>
                                You may not copy, modify, distribute, or reverse-engineer any part of the app.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4">7. Termination</h2>
                            <p className="mb-4">
                                You may delete your account at any time from the <strong className="text-slate-900">Settings</strong> page.
                            </p>
                            <p>
                                We reserve the right to suspend or terminate your account if you violate these Terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4">8. Disclaimer</h2>
                            <p className="mb-4">
                                Chapterly is provided “as is” and “as available.”
                            </p>
                            <p>
                                We do not guarantee uninterrupted or error-free operation. You use the app at your own risk.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4">9. Limitation of Liability</h2>
                            <p>
                                To the maximum extent permitted by law, Chapterly and its developer will not be liable for any damages resulting from:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 marker:text-sky-500">
                                <li>Use or inability to use the App</li>
                                <li>Loss of data</li>
                                <li>Unauthorized access to your account</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4">10. Changes to These Terms</h2>
                            <p className="mb-4">
                                We may update these Terms from time to time.
                            </p>
                            <p>
                                If changes are made, we’ll update the “Last Updated” date at the top of this page. Continued use of the app means you accept the new Terms.
                            </p>
                        </section>

                        <section className="pt-8 border-t border-slate-100">
                            <h2 className="text-xl font-bold text-slate-900 mb-4">11. Contact Us</h2>
                            <p className="mb-4">
                                If you have any questions or feedback about these Terms, you can contact us at:
                            </p>
                            <a
                                href="mailto:gautamniish@gmail.com"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-colors"
                            >
                                <Mail className="w-4 h-4" />
                                gautamniish@gmail.com
                            </a>
                        </section>

                    </div>
                </div>

                {/* Footer */}
                <div className="mt-8 text-center text-slate-400 text-sm">
                    <p>© 2025 Chapterly Inc. All rights reserved.</p>
                </div>
            </motion.main>
        </div>
    );
}