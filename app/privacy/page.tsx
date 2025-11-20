"use client";

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Mail, Shield } from 'lucide-react';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-sky-200">
            <Head>
                <title>Privacy Policy - Chapterly</title>
                <meta name="description" content="Privacy Policy for Chapterly App" />
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
                            <img src="/image.png" alt="Privacy Policy" className="w-16 h-16 object-contain" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
                        <p className="text-slate-500 font-medium">Last updated: November 5, 2025</p>
                    </div>

                    {/* Content */}
                    <div className="space-y-10 text-slate-600 leading-relaxed">

                        <section>
                            <p className="text-lg mb-4">
                                Thank you for using <strong className="text-slate-900">Chapterly</strong>!
                            </p>
                            <p>
                                Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our mobile application (“App,” “we,” “us,” or “our”). By using Chapterly, you agree to this Privacy Policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4">1. Information We Collect</h2>
                            <p className="mb-4">We collect only the minimal information necessary to operate the app:</p>
                            <ul className="list-disc pl-5 space-y-2 marker:text-sky-500">
                                <li><strong className="text-slate-900">Email Address:</strong> When you create an account, we collect your email address.</li>
                                <li><strong className="text-slate-900">Name (optional):</strong> Your name may be derived from your email address for display purposes.</li>
                            </ul>
                            <p className="mt-4 p-4 bg-slate-50 rounded-xl text-sm border border-slate-100">
                                We do <strong className="text-slate-900">not</strong> collect any other personal information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4">2. How We Use Your Information</h2>
                            <p className="mb-4">We use your information to:</p>
                            <ul className="list-disc pl-5 space-y-2 marker:text-sky-500">
                                <li>Create and manage your account</li>
                                <li>Personalize your user experience (e.g., display your name)</li>
                                <li>Communicate with you if you reach out to us directly</li>
                            </ul>
                            <p className="mt-4">
                                We do <strong className="text-slate-900">not</strong> sell, share, or rent your data to any third parties.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4">3. No Tracking or Analytics</h2>
                            <p>
                                Chapterly does <strong className="text-slate-900">not</strong> use tracking technologies, analytics tools, or advertising SDKs. We do <strong className="text-slate-900">not</strong> monitor your activity or collect behavioral data.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4">4. No Location Data</h2>
                            <p>
                                We do <strong className="text-slate-900">not</strong> collect, store, or access your device’s geolocation.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4">5. No Push Notifications</h2>
                            <p>
                                We currently do <strong className="text-slate-900">not</strong> send push notifications or in-app messages.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4">6. Account Deletion</h2>
                            <p className="mb-4">
                                You can delete your account at any time through the <strong className="text-slate-900">Settings</strong> section of the app.
                            </p>
                            <p>
                                When you delete your account, your profile and associated data (such as saved books and quotes) are permanently deleted from our servers.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4">7. Data Security</h2>
                            <p className="mb-4">
                                We use reasonable technical and organizational measures to protect your information against unauthorized access, alteration, or destruction.
                            </p>
                            <p>
                                However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4">8. Children’s Privacy</h2>
                            <p>
                                Chapterly is intended for users <strong className="text-slate-900">aged 14 and older</strong>. We do not knowingly collect information from anyone under 14. If we learn that we have collected such data, we will delete it promptly.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4">9. International Users</h2>
                            <p>
                                Chapterly is available worldwide. By using the app, you acknowledge that your information may be transferred and processed in countries where our servers or service providers are located.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4">10. Changes to This Policy</h2>
                            <p>
                                We may update this Privacy Policy from time to time. If we make material changes, we’ll update the “Last Updated” date at the top of this page.
                            </p>
                        </section>

                        <section className="pt-8 border-t border-slate-100">
                            <h2 className="text-xl font-bold text-slate-900 mb-4">11. Contact Us</h2>
                            <p className="mb-4">
                                If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:
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