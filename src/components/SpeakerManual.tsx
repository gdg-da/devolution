"use client";

import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { PCWindow, AnimatedBox, PCWindow2 } from './UIComponents'
import SpaceStrip from './ui/spacebutton';
import NeoBrutalismBenefits from './SpeakerBenefits';

export default function SpeakerManual() {
    return (
        <div className="min-h-screen bg-[#f5e6d3] font-mono text-[#1a1a1a] overflow-x-hidden">
            <div className="zigzag-bg fixed inset-0 z-0 opacity-20 pointer-events-none"></div>
            <SpaceStrip />
            <header className="fixed top-7 z-50 bg-[#ff6b6b] text-[#1a1a1a] p-4 border-b-4 border-[#1a1a1a] w-full">
                <nav className="container mx-auto flex justify-between items-center px-16">
                    <Link href="/" className="flex items-center md:space-x-1  retro-text">
                        <span className="text-xl md:text-3xl font-bold text-[#1a1a1a]">DEV</span>
                        <Image src="/planet.png" alt="Planet" width={40} height={40} className="ml-0.5 w-6 h-6 md:w-9 md:h-9 animate-spin" style={{ animation: "spin 10s linear infinite" }} />
                        <span className="text-xl md:text-3xl font-bold text-[#1a1a1a]">LUTION</span>
                    </Link>
                    <Button asChild>
                        <Link href="/" className=" bg-[#1a1a1a] text-[#f5e6d3] hover:bg-[#4ecdc4] hover:text-[#1a1a1a] transition-colors border hover:border-2 border-slate-200 hover:border-[#1a1a1a]">
                            Home
                        </Link>
                    </Button>
                </nav>
            </header>
            <main className="container mx-auto px-4 py-16 relative z-10 lg:px-16 mt-24">
                <section className="text-center mb-16">
                    <h1 className="text-4xl lg:text-6xl font-bold retro-text text-[#1a1a1a]">
                        We&apos;re looking for speakers
                    </h1>
                </section>
                <PCWindow title="Welcome to Dev-o-lution!" className="mb-16">
                    <p className="text-lg mb-4">
                        We are thrilled to announce the <strong>Call for Speakers (CFS)</strong> for our event. If you are passionate about your work and want to share your experiences with one of the largest tech audiences in Gandhinagar, you&apos;ve come to the right place.
                    </p>
                </PCWindow>
                <PCWindow2 title="Target Audience" className="mb-16">
                    <p className="mb-4">Our primary audience consists of <strong>college students and budding technologists</strong> eager to learn and explore new technologies. This includes:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Web, Mobile, and Backend Developers</li>
                        <li>Designers</li>
                        <li>Machine Learning Engineers</li>
                        <li>Data Scientists</li>
                        <li>Entrepreneurs</li>
                        <li>Startup Ecosystem Enablers</li>
                    </ul>
                </PCWindow2>
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
                <PCWindow2 title="Suggested Topics" className="mb-16">
                    <div className="space-y-8">
                        {[
                            {
                                title: "1. Web3 and Blockchain Technologies",
                                topics: ["Blockchain Development", "NFTs", "Web3 Development"]
                            },
                            {
                                title: "2. Artificial Intelligence & Machine Learning (AI/ML)",
                                topics: [
                                    "Generative AI", "Large Language Models", "Stable Diffusion", "AI Agents", "Gemma",
                                    "Prompt Engineering", "Natural Language Processing", "Machine Learning", "AI Ethics",
                                    "Recommendation Systems", "Computer Vision", "Deep Learning", "Reinforcement Learning"
                                ]
                            },
                            {
                                title: "3. Open Source Technologies",
                                topics: ["Open Source Contribution", "GitHub Actions",
                                    "GSoC and Outreachy", "Open Source Best Practices"
                                ]
                            },
                            {
                                title: "4. Web Development",
                                topics: [
                                    "React", "Next.js", "Angular", "WebAssembly", "Deno", "Rust",
                                    "Web Components", "Jamstack", "PWA", "Web Performance", "Web Accessibility", "Edge Computing"
                                ]
                            },
                            {
                                title: "5. Mobile Development",
                                topics: ["Flutter", "React Native", "Swift", "Kotlin", "Jetpack Compose", "Android"]
                            },
                            {
                                title: "6. Cloud Computing",
                                topics: [
                                    "Azure", "AWS", "GCP", "Natural Language Processing on the Cloud", "Cloud Storage",
                                    "BigQuery", "Cloud Native Development", "Edge Computing",
                                ]
                            },
                            {
                                title: "7. Cybersecurity",
                                topics: [
                                    "Cybersecurity Best Practices", "Secure Coding", "Incident Response", "Quantum Security",
                                    "Threat Intelligence", "Security Operations", "Security Automation", "Cloud Security"
                                ]
                            },
                            {
                                title: "8. Startups & Emerging Technologies",
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
                </PCWindow2>
                <PCWindow title="Guidelines for CFS Submission" className="mb-16">
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
                <PCWindow2 title="" className="mb-16">
                    <NeoBrutalismBenefits />
                </PCWindow2>
                <PCWindow title="" className="mb-16">
                    <div className="bg-[#ff6b6b] p-8 border-4 border-[#1a1a1a] shadow-neo">
                        <h1 className="text-3xl font-bold mb-4 retro-text text-center">Ready to Share Your Expertise?</h1>
                        <p className="text-lg mb-6 text-center">
                            <span className='font-bold'>Take the first step towards being a part of Dev-o-lution!</span>
                            <br />
                            Call for speakers will be open until December 31, 2024 at 11:59 p.m. PT. We will start notifying speakers of their submission status in January 2025.
                            <br /> <br />
                            <span className='text-sm'>Reach out to dsc@daiict.ac.in with any questions.</span>
                        </p>
                        <div className="text-center">
                            <Button asChild className="bg-[#4ecdc4] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#f5e6d3] text-lg lg:text-2xl px-8 lg:px-12 py-6 rounded-none border-4 border-[#1a1a1a] transform hover:translate-x-2 hover:-translate-y-2 transition-transform shadow-neo">
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
                            <Link target="_blank" href="https://github.com/ossdaiict" className="text-[#4ecdc4] hover:text-[#ff6b6b] transition-colors hover-lift p-2">OSS-GitHub</Link>
                            <Link target="_blank" href="https://github.com/gdg-da" className="text-[#4ecdc4] hover:text-[#ff6b6b] transition-colors hover-lift p-2">GDG-GitHub</Link>
                            <Link target="_blank" href="https://www.linkedin.com/company/gdg-on-campus-daiict/" className="text-[#4ecdc4] hover:text-[#ff6b6b] transition-colors hover-lift p-2">LinkedIn</Link>
                            <Link target="_blank" href="https://www.instagram.com/gdg.daiict/" className="text-[#4ecdc4] hover:text-[#ff6b6b] transition-colors hover-lift p-2">Instagram</Link>
                            <Link target="_blank" href="https://x.com/gdgdaiict" className="text-[#4ecdc4] hover:text-[#ff6b6b] transition-colors hover-lift p-2">X(Twitter)</Link>
                            <Link target="_blank" href="https://slop.dscdaiict.in/" className="text-[#4ecdc4] hover:text-[#ff6b6b] transition-colors hover-lift p-2">SLoP</Link>
                            <Link target="_blank" href="https://dscdaiict.in/" className="text-[#4ecdc4] hover:text-[#ff6b6b] transition-colors hover-lift p-2">GDG on Campus DA-IICT</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}