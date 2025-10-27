import React from "react";

/**
 * Enhanced LandingPage - professional, modern landing page using TailwindCSS
 * Improved layout, visual hierarchy, and user experience
 */

const FeatureCard = ({ title, desc, icon, gradient }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
        <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white text-xl ${gradient}`}>
            {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-800">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
);

const StepCard = ({ number, title, desc, isLast }) => (
    <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg mb-4">
            {number}
        </div>
        <div className="text-center">
            <h5 className="font-bold text-lg mb-2">{title}</h5>
            <p className="text-gray-600 text-sm">{desc}</p>
        </div>
        {!isLast && (
            <div className="hidden md:block h-0.5 w-full bg-gradient-to-r from-blue-200 to-indigo-200 mt-8"></div>
        )}
    </div>
);

const TestimonialCard = ({ quote, name, role, avatar }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-start mb-4">
            <div className="text-amber-400 text-xl mr-1">★</div>
            <div className="text-amber-400 text-xl mr-1">★</div>
            <div className="text-amber-400 text-xl mr-1">★</div>
            <div className="text-amber-400 text-xl mr-1">★</div>
            <div className="text-amber-400 text-xl">★</div>
        </div>
        <p className="text-gray-600 mb-6 italic">"{quote}"</p>
        <div className="flex items-center">
            <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover mr-3" />
            <div>
                <div className="font-semibold text-slate-800">{name}</div>
                <div className="text-xs text-gray-500">{role}</div>
            </div>
        </div>
    </div>
);

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
            {/* Background elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-100 rounded-full opacity-20 blur-3xl"></div>
            </div>

            {/* Main content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8">
                <div className="max-w-7xl mx-auto">
                    {/* Top Nav */}
                    <div className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm mb-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md">CK</div>
                            <div>
                                <h1 className="text-2xl font-bold text-slate-800">CareerKey</h1>
                                <p className="text-xs text-gray-500 -mt-0.5">Blockchain & AI — FYP</p>
                            </div>
                        </div>

                        <div className="hidden md:flex items-center gap-6">
                            <a className="text-sm font-medium text-gray-600 hover:text-blue-600 transition" href="#">Home</a>
                            <a className="text-sm font-medium text-gray-600 hover:text-blue-600 transition" href="#features">Features</a>
                            <a className="text-sm font-medium text-gray-600 hover:text-blue-600 transition" href="#how-it-works">How It Works</a>
                            <a className="text-sm font-medium text-gray-600 hover:text-blue-600 transition" href="/verify">Verify Degree</a>
                            <a className="ml-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium shadow-md hover:shadow-lg transition-all" href="/student/login">Student Portal</a>
                        </div>

                        {/* Mobile menu button */}
                        <button className="md:hidden p-2 rounded-lg bg-gray-100">
                            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                    {/* Hero Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 py-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium mb-4">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                    Final Year Project - BCS (Hons)
                                </div>
                                <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-800 leading-tight">
                                    Secure Degree Attestation. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Smart Career Guidance.</span>
                                </h2>
                                <p className="text-gray-600 max-w-xl mt-4 text-lg leading-relaxed">
                                    CareerKey combines blockchain-based degree verification with an AI-powered career recommendation engine.
                                    Issue tamper-proof credentials, verify instantly with QR & transaction IDs, and get personalized job suggestions.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <a href="/verify" className="inline-flex items-center px-6 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-800 font-semibold shadow-sm hover:shadow-md transition-all hover:border-blue-300">
                                    Verify Your Degree
                                </a>

                                <a href="/student/login" className="inline-flex items-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-md hover:shadow-lg transition-all hover:opacity-95">
                                    Student Portal
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>

                            <div className="flex flex-wrap gap-6 mt-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-100 to-blue-100 flex items-center justify-center text-blue-600">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-slate-800">Trusted by Universities</div>
                                        <div className="text-xs text-gray-500">Secure attestation & instant verification</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-100 to-indigo-100 flex items-center justify-center text-indigo-600">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-slate-800">AI Job Matches</div>
                                        <div className="text-xs text-gray-500">Curated from major job portals</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hero image / mock certificate */}
                        <div className="flex items-center justify-center">
                            <div className="w-full max-w-md bg-gradient-to-br from-white to-slate-50 border border-slate-100 rounded-2xl p-6 shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-800">Verified Degree</h3>
                                        <p className="text-xs text-gray-500">PDF • IPFS hash • Tx ID</p>
                                    </div>

                                    <div className="text-right">
                                        <div className="text-xs text-gray-400">Status</div>
                                        <div className="flex items-center text-sm font-semibold text-green-600">
                                            <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                                            Verified
                                        </div>
                                    </div>
                                </div>

                                <div className="relative mb-4 rounded-lg overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1581091012184-5b0a1e5cd6d1?w=900&q=60&auto=format&fit=crop" alt="certificate" className="w-full object-cover h-44" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                    <div className="absolute bottom-3 left-3 text-white text-xs font-medium">
                                        Degree Certificate
                                    </div>
                                </div>

                                <div className="text-sm text-gray-600 space-y-2">
                                    <div className="flex justify-between">
                                        <span className="font-medium">Student:</span>
                                        <span>A. Student</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="font-medium">Degree:</span>
                                        <span>BCS (Hons)</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="font-medium">Transaction:</span>
                                        <span className="font-mono">0x...9f3a</span>
                                    </div>
                                </div>

                                <div className="mt-6 flex justify-end">
                                    <a className="inline-flex items-center px-4 py-2.5 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:opacity-90 transition-all shadow-md" href="/verify">
                                        Open Verification
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="px-6 py-12 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm mb-12">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-slate-800">50+</div>
                                <div className="text-sm text-gray-500">Universities</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-slate-800">10K+</div>
                                <div className="text-sm text-gray-500">Verified Degrees</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-slate-800">95%</div>
                                <div className="text-sm text-gray-500">Faster Verification</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-slate-800">4.8/5</div>
                                <div className="text-sm text-gray-500">User Rating</div>
                            </div>
                        </div>
                    </div>

                    {/* Features Section */}
                    <div id="features" className="px-6 py-16 bg-slate-50/50 rounded-2xl mb-12">
                        <div className="text-center max-w-2xl mx-auto mb-12">
                            <h2 className="text-3xl font-bold text-slate-800 mb-4">What CareerKey Offers</h2>
                            <p className="text-gray-600">Our platform combines cutting-edge technologies to revolutionize degree verification and career guidance</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <FeatureCard
                                icon={"🔒"}
                                title="Blockchain Verification"
                                desc="Tamper-proof credential hashes stored on-chain; public verification via transaction ID and QR codes for instant validation."
                                gradient="bg-gradient-to-r from-blue-500 to-cyan-500"
                            />
                            <FeatureCard
                                icon={"🤖"}
                                title="AI Career Recommendations"
                                desc="Personalized job & learning path suggestions using advanced NLP and transformers on profile + academic data."
                                gradient="bg-gradient-to-r from-purple-500 to-pink-500"
                            />
                            <FeatureCard
                                icon={"⚡"}
                                title="Instant Attestation"
                                desc="Students can apply, pay, and receive verified result cards instantly without long administrative delays."
                                gradient="bg-gradient-to-r from-green-500 to-teal-500"
                            />
                        </div>
                    </div>

                    {/* How it works */}
                    <div id="how-it-works" className="px-6 py-16 mb-12">
                        <div className="text-center max-w-2xl mx-auto mb-12">
                            <h2 className="text-3xl font-bold text-slate-800 mb-4">How It Works</h2>
                            <p className="text-gray-600">Simple three-step process to get your degrees verified and career recommendations</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <StepCard
                                number="1"
                                title="Upload & Apply"
                                desc="Student uploads degree/result PDF and provides required details through our secure portal."
                            />
                            <StepCard
                                number="2"
                                title="Attestation"
                                desc="University/HEC issues attestation; cryptographic hash recorded on blockchain for permanent verification."
                            />
                            <StepCard
                                number="3"
                                title="Verify & Apply"
                                desc="Anyone can verify with QR/Tx ID. AI recommends jobs based on profile and qualifications."
                                isLast={true}
                            />
                        </div>
                    </div>

                    {/* Testimonials */}
                    <div className="px-6 py-16 bg-slate-50/50 rounded-2xl mb-12">
                        <div className="text-center max-w-2xl mx-auto mb-12">
                            <h2 className="text-3xl font-bold text-slate-800 mb-4">What Our Users Say</h2>
                            <p className="text-gray-600">Hear from students, recruiters, and graduates who have used CareerKey</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <TestimonialCard
                                quote="Verification was instant — saved me weeks of waiting compared to traditional methods."
                                name="Sarah Johnson"
                                role="Computer Science Graduate"
                                avatar="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&q=80&auto=format&fit=crop"
                            />
                            <TestimonialCard
                                quote="As a recruiter, the trust and speed of verification is invaluable for our hiring process."
                                name="Michael Chen"
                                role="HR Manager, TechCorp"
                                avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80&auto=format&fit=crop"
                            />
                            <TestimonialCard
                                quote="The AI job matches helped me find roles I never considered but were perfect for my skills."
                                name="Priya Sharma"
                                role="Data Science Graduate"
                                avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80&auto=format&fit=crop"
                            />
                        </div>
                    </div>

                    {/* FAQ + CTA */}
                    <div className="px-6 py-16 mb-12">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h2 className="text-2xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
                                <div className="space-y-6">
                                    <div className="pb-4 border-b border-gray-200">
                                        <h3 className="font-semibold text-slate-800 mb-2">Is this service secure?</h3>
                                        <p className="text-gray-600 text-sm">Yes — only cryptographic hashes are stored on-chain; PDFs are kept securely off-chain (IPFS/encrypted cloud storage). Your data remains private and tamper-proof.</p>
                                    </div>
                                    <div className="pb-4 border-b border-gray-200">
                                        <h3 className="font-semibold text-slate-800 mb-2">Can employers verify for free?</h3>
                                        <p className="text-gray-600 text-sm">Yes — public verification via QR codes and transaction IDs is completely free for employers and anyone needing to verify credentials.</p>
                                    </div>
                                    <div className="pb-4 border-b border-gray-200">
                                        <h3 className="font-semibold text-slate-800 mb-2">Is this an actual deployed service?</h3>
                                        <p className="text-gray-600 text-sm">This is a Final Year Project (FYP) demo showcasing the complete workflow. Backend integration with blockchain and AI components will follow in implementation phase.</p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-800 mb-2">Which universities are supported?</h3>
                                        <p className="text-gray-600 text-sm">We're currently working with multiple universities in Pakistan with plans to expand nationwide. Contact us to get your institution onboard.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white flex flex-col justify-between shadow-xl">
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
                                    <p className="text-blue-100 mb-6">Join thousands of students and employers using CareerKey for secure verification and smart career guidance.</p>

                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6">
                                        <div className="flex items-center mb-2">
                                            <svg className="w-5 h-5 text-green-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="font-medium">Instant degree verification</span>
                                        </div>
                                        <div className="flex items-center mb-2">
                                            <svg className="w-5 h-5 text-green-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="font-medium">AI-powered career matches</span>
                                        </div>
                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 text-green-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="font-medium">Secure blockchain technology</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3">
                                    <a href="/verify" className="px-5 py-3 bg-white text-indigo-700 rounded-xl font-semibold text-center shadow-md hover:bg-gray-50 transition">
                                        Verify Degree
                                    </a>
                                    <a href="/student/login" className="px-5 py-3 bg-indigo-800/40 border border-white/30 rounded-xl font-medium text-center hover:bg-indigo-800/60 transition">
                                        Student Login
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="px-6 py-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold">CK</div>
                                <div>
                                    <h3 className="font-bold text-slate-800">CareerKey</h3>
                                    <p className="text-xs text-gray-500">Blockchain & AI — FYP</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap justify-center gap-6">
                                <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition">Home</a>
                                <a href="#features" className="text-sm text-gray-600 hover:text-blue-600 transition">Features</a>
                                <a href="#how-it-works" className="text-sm text-gray-600 hover:text-blue-600 transition">How It Works</a>
                                <a href="/verify" className="text-sm text-gray-600 hover:text-blue-600 transition">Verify Degree</a>
                                <a href="/student/login" className="text-sm text-gray-600 hover:text-blue-600 transition">Student Portal</a>
                            </div>

                            <div className="text-sm text-gray-600 text-center md:text-right">
                                <div>© {new Date().getFullYear()} CareerKey — Final Year Project (BCS)</div>
                                <div className="text-xs mt-1">Built with React, Tailwind, Spring Boot & Blockchain</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;