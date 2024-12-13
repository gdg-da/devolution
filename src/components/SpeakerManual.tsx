"use client";

import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { PCWindow, AnimatedBox, GlitchText } from './UIComponents'
import { TypeAnimation } from 'react-type-animation'

export default function SpeakerManual() {
    return (
        <div className="min-h-screen bg-[#f5e6d3] font-mono text-[#1a1a1a] overflow-x-hidden">
            <div className="zigzag-bg fixed inset-0 z-0 opacity-20 pointer-events-none"></div>
            <header className="sticky top-0 z-50 bg-[#ff6b6b] text-[#1a1a1a] p-4 border-b-4 border-[#1a1a1a]">
                <nav className="container mx-auto flex justify-between items-center px-16">
                    <Link href="/" className="flex items-center md:space-x-1">
                        <span className="text-2xl md:text-4xl font-bold retro-text text-[#1a1a1a]">
                            DEV
                        </span>
                        <Image
                            src="/planet.png"
                            alt="Planet"
                            width={40}
                            height={40}
                            className="ml-0.5 w-8 h-8 md:w-10 md:h-10 animate-spin"
                            style={{ animation: "spin 10s linear infinite" }}
                        />
                        <span className="text-2xl md:text-4xl font-bold retro-text text-[#1a1a1a]">
                            LUTION
                        </span>
                    </Link>
                </nav>
            </header>
            <main className="container mx-auto px-4 py-16 relative z-10 lg:px-16">
                <section className="text-center mb-32">
                    <div className="flex justify-center items-center mb-8">
                        <GlitchText
                            text="DEV"
                            className="text-6xl md:text-8xl font-bold retro-text text-[#1a1a1a]"
                        />
                        <Image
                            src="/planet.png"
                            alt="Planet"
                            width={96}
                            height={96}
                            className="mx-1 w-16 h-16 md:w-24 md:h-24 animate-spin"
                            style={{ animation: "spin 10s linear infinite" }}
                        />
                        <GlitchText
                            text="LUTION"
                            className="text-6xl md:text-8xl font-bold retro-text text-[#1a1a1a]"
                        />
                    </div>
                    <TypeAnimation
                        sequence={["Speaker Manual", 500, "Call for Speakers", 500, "Dev-o-lution 2025"]}
                        wrapper="span"
                        speed={50}
                        style={{ display: "inline-block" }}
                        repeat={0}
                        className="text-xl md:text-3xl mb-8 myfont"
                    />
                </section>
                <PCWindow title="Welcome to Dev-o-lution!" className="mb-16">
                    <p className="text-lg mb-4">
                        We are thrilled to announce the <strong>Call for Speakers (CFP)</strong> for our inaugural event. If you are passionate about your work and want to share your experiences with one of the largest tech audiences in Gandhinagar, you&apos;ve come to the right place.
                    </p>
                </PCWindow>
                <PCWindow title="Target Audience" className="mb-16">
                    <p className="mb-4">Our primary audience consists of <strong>college students and budding technologists</strong> eager to learn and explore new technologies. This includes:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Web, Mobile, and Backend Developers</li>
                        <li>Designers</li>
                        <li>Machine Learning Engineers</li>
                        <li>Data Scientists</li>
                        <li>Entrepreneurs</li>
                        <li>Startup Ecosystem Enablers</li>
                    </ul>
                </PCWindow>
                <PCWindow title="Session Formats" className="mb-16">
                    <div className="space-y-4">
                        <AnimatedBox className="bg-[#ff6b6b] p-4 border-2 border-[#1a1a1a]">
                            <h3 className="text-xl font-bold mb-2">1. Talks (30–45 minutes)</h3>
                            <p>A detailed presentation on any of the suggested topics listed below.</p>
                        </AnimatedBox>
                        <AnimatedBox className="bg-[#ff6b6b] p-4 border-2 border-[#1a1a1a]">
                            <h3 className="text-xl font-bold mb-2">2. Workshops (90–120 minutes)</h3>
                            <p>A hands-on, interactive session to dive deep into specific technologies.</p>
                        </AnimatedBox>
                    </div>
                </PCWindow>
                <PCWindow title="Suggested Topics" className="mb-16">
                    <div className="space-y-8">
                        {[
                            {
                                title: "1. App/Web Development",
                                topics: [
                                    "Angular", "Firebase", "Progressive Web Apps (PWA)", "Chrome Developer Tools",
                                    "Performance Optimization", "Accessibility", "TensorFlow.js",
                                    "Modern Web Application Capabilities", "UI/UX Trends",
                                    "Flutter/Android Scalable Architecture Best Practices",
                                    "Kotlin Multiplatform and Flutter: Code once, deploy across platforms",
                                    "Optimizing Apps for Android Go Edition",
                                    "No-code and Pro-code Platforms for Rapid App Development",
                                    "Adaptive Layouts and Latest UI/UX Design Trends"
                                ]
                            },
                            {
                                title: "2. Artificial Intelligence & Machine Learning (AI/ML)",
                                topics: [
                                    "Generative AI", "Large Language Models", "Stable Diffusion", "Midjourney",
                                    "Prompt Engineering", "TensorFlow", "Vertex AI", "AutoML", "Dataflow",
                                    "Firebase for ML Applications", "ML Kit"
                                ]
                            },
                            {
                                title: "3. Cloud Computing",
                                topics: [
                                    "Natural Language Processing on the Cloud", "Google Kubernetes Engine (GKE)",
                                    "Compute Engine", "Cloud Storage", "BigQuery", "Cloud Functions"
                                ]
                            },
                            {
                                title: "4. Web3 and Blockchain Technologies",
                                topics: ["Blockchain Development", "NFTs", "Web3 Development"]
                            },
                            {
                                title: "5. Startups & Emerging Technologies",
                                topics: [
                                    "Preparing a Pitch Deck for Tech Startups",
                                    "Raising Funds for Tech Startups",
                                    "Real-world Case Studies: Product Demos and Technological Solutions",
                                    "Emerging Technologies: EV Charging, Blockchain, etc.",
                                    "Why Startups Fail: Lessons and Insights",
                                    "Key Insights on Building a Startup"
                                ]
                            }
                        ].map((category, index) => (
                            <div key={index}>
                                <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                                <ul className="list-disc list-inside space-y-2">
                                    {category.topics.map((topic, topicIndex) => (
                                        <li key={topicIndex}>{topic}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </PCWindow>
                <PCWindow title="Guidelines for CFP Submission" className="mb-16">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">DOs</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Elaborate on your topic to ensure clarity and better review of your proposal.</li>
                                <li>Provide details of your previous talks, including links to presentations, videos, or other materials.</li>
                                <li>Highlight the critical takeaways of your session and explain how it will benefit the audience.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4">DON&apos;Ts</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Avoid promotional pitches or marketing for a product or company. While you can mention your company, the focus should remain on technology.</li>
                                <li>Do not plagiarize. Your talk must reflect your original ideas and work.</li>
                                <li>Ensure your topic is relevant, practical, and current.</li>
                            </ul>
                        </div>
                    </div>
                </PCWindow>
                <PCWindow title="Why Speak at Dev-o-lution?" className="mb-16">
                    <div className="space-y-4">
                        <AnimatedBox className="bg-[#ff6b6b] p-4 border-2 border-[#1a1a1a]">
                            <h3 className="text-xl font-bold mb-2">1️⃣ Advance Your Career</h3>
                            <p>Showcase your expertise to potential collaborators, employers, or business partners.</p>
                        </AnimatedBox>
                        <AnimatedBox className="bg-[#ff6b6b] p-4 border-2 border-[#1a1a1a]">
                            <h3 className="text-xl font-bold mb-2">2️⃣ Represent Your Organization</h3>
                            <p>Add credibility to your company&apos;s public image through your presentation.</p>
                        </AnimatedBox>
                        <AnimatedBox className="bg-[#ff6b6b] p-4 border-2 border-[#1a1a1a]">
                            <h3 className="text-xl font-bold mb-2">3️⃣ Exclusive Networking Opportunities</h3>
                            <p>Engage with other speakers and top experts in the industry.</p>
                        </AnimatedBox>
                    </div>
                </PCWindow>
                <PCWindow title="Speaker Perks" className="mb-16">
                    <ul className="list-disc list-inside space-y-2">
                        <li>Full-day access to the conference.</li>
                        <li>Networking opportunities with 500+ developers and technologists.</li>
                        <li>Social media exposure through GDG Ahmedabad&apos;s official platforms.</li>
                        <li>Assistance from the GDG Ahmedabad team in preparing your talk.</li>
                    </ul>
                </PCWindow>
                <PCWindow title="Key Dates" className="mb-16">
                    <p className="text-xl font-bold">Call for Speakers Deadline: December 31, 2024</p>
                </PCWindow>
                <PCWindow title="Contact Us" className="mb-16">
                    <p className="text-lg mb-4">
                        For any questions or further clarifications, feel free to reach out to us at <a href="mailto:dsc@daiict.ac.in" className="text-[#ff6b6b] hover:underline">dsc@daiict.ac.in</a>.
                    </p>
                    <p className="text-lg font-bold">
                        We look forward to hearing from you and hosting an incredible event together!
                    </p>
                </PCWindow>
                <PCWindow title="Submit Speaker Proposal" className="mb-16">
                    <div className="bg-[#4ecdc4] p-8 border-4 border-[#1a1a1a] shadow-neo">
                        <h2 className="text-3xl font-bold mb-4 retro-text text-center">Ready to Share Your Expertise?</h2>
                        <p className="text-lg mb-6 text-center">
                            Take the first step towards being a part of Dev-o-lution! Submit your speaker proposal and join us in shaping the future of technology.
                        </p>
                        <div className="text-center">
                            <Button asChild className="bg-[#ff6b6b] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#f5e6d3] text-2xl px-12 py-6 rounded-none border-4 border-[#1a1a1a] transform hover:translate-x-2 hover:-translate-y-2 transition-transform shadow-neo">
                                <a href="https://forms.gle/da1VpuiYiZoB5rLB6" target="_blank" rel="noopener noreferrer">
                                    Submit Your Proposal Now
                                </a>
                            </Button>
                        </div>
                    </div>
                </PCWindow>
                <div className="text-center">
                    <Button asChild className="bg-[#4ecdc4] text-[#1a1a1a] hover:bg-[#ff6b6b] text-lg px-8 py-4 rounded-none border-4 border-[#1a1a1a] transform hover:translate-x-2 hover:-translate-y-2 transition-transform shadow-neo">
                        <Link href="/">Back to Home</Link>
                    </Button>
                </div>
            </main>
            <footer className="bg-gray-950 text-[#f5e6d3] py-8 z-20 relative">
                <div className="container mx-auto">
                    <p className="lg:text-center md:text-center">
                        &copy; 2025 Dev-o-lution | Organized by GDG on Campus DA-IICT
                    </p>
                    <div className="flex text-center flex-col lg:flex-row lg:justify-center mt-4 gap-2 z-20">
                        <div className="sm:text-center sm:block flex-col flex gap-1">
                            <Link
                                target="_blank"
                                href="https://github.com/ossdaiict"
                                className="text-[#4ecdc4] hover:text-[#ff6b6b] transition-colors hover-lift p-2">
                                OSS-GitHub
                            </Link>
                            <Link
                                target="_blank"
                                href="https://github.com/gdg-da"
                                className="text-[#4ecdc4] hover:text-[#ff6b6b] transition-colors hover-lift p-2">
                                GDG-GitHub
                            </Link>
                        </div>
                        <div className="sm:text-center sm:block flex-col flex gap-1">
                            <Link
                                target="_blank"
                                href="https://www.linkedin.com/company/gdg-on-campus-daiict/"
                                className="text-[#4ecdc4] hover:text-[#ff6b6b] transition-colors hover-lift p-2">
                                LinkedIn
                            </Link>
                            <Link
                                target="_blank"
                                href="https://www.instagram.com/gdg.daiict/"
                                className="text-[#4ecdc4] hover:text-[#ff6b6b] transition-colors hover-lift p-2">
                                Instagram
                            </Link>
                            <Link
                                target="_blank"
                                href="https://x.com/gdgdaiict"
                                className="text-[#4ecdc4] hover:text-[#ff6b6b] transition-colors hover-lift p-2">
                                X(Twitter)
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}