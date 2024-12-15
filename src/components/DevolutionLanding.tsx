"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Cpu, Calendar, MapPin, Zap, Rocket, Award, Twitter, Menu, MapPinned, CalendarClockIcon, } from "lucide-react";
import { PCWindow, AnimatedBox, FloatingElement, GlitchText, HoverLiftElement, PCWindow2, } from "./UIComponents";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import SpaceButton from "./ui/spacebutton";

export default function DevolutionLanding() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleScroll = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "center" });
            setMobileMenuOpen(false);
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const requiredFields = ["name", "contact-person", "email", "contact-number", "message"];

        for (const field of requiredFields) {
            if (!data[field] || String(data[field]).trim() === "") {
                alert(`Please fill out the ${field.replace("-", " ")} field.`);
                return;
            }
        }

        try {
            const response = await fetch("/api/discord-webhook", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert("Your sponsorship proposal has been submitted successfully!");
            } else {
                alert("Failed to submit. Please check your input and try again.");
            }
        } catch (error) {
            console.error("Submission Error:", error);
            alert("An error occurred while submitting your proposal. Please try again.");
        }
    };

    return (
        <div className="min-h-screen bg-[#f5e6d3] font-mono text-[#1a1a1a] overflow-x-hidden scroll-smooth">
            <div className="zigzag-bg fixed inset-0 z-0 opacity-20 pointer-events-none"></div>
            <SpaceButton />
            <header className="fixed top-7 z-50 bg-[#ff6b6b] text-[#1a1a1a] p-4 border-b-4 border-[#1a1a1a] w-full">
                <nav className="container mx-auto flex justify-between items-center px-16">
                    <Link href="/" className="flex items-center md:space-x-1">
                        <span className="text-xl md:text-3xl font-bold text-[#1a1a1a]">DEV</span>
                        <Image src="/planet.png" alt="Planet" width={40} height={40} className="ml-0.5 w-6 h-6 md:w-9 md:h-9 animate-spin" style={{ animation: "spin 10s linear infinite" }} />
                        <span className="text-xl md:text-3xl font-bold text-[#1a1a1a]">LUTION</span>
                    </Link>
                    <div className="hidden md:flex space-x-4 md:text-xs lg:text-sm">
                        {[
                            "About",
                            "Timeline",
                            "Tracks",
                            "Team",
                            "Sponsors",
                            "FAQs",
                            "Contact",
                        ].map((item) => (
                            <HoverLiftElement key={item}><button onClick={() => handleScroll(item.toLowerCase())} className="hover:underline">{item}</button></HoverLiftElement>
                        ))
                        }
                        <HoverLiftElement><a href="/previous-editions" className="hover:underline">Previous Editions</a></HoverLiftElement>
                    </div>
                    <div className="md:hidden">
                        <Button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="bg-[#1a1a1a] text-[#f5e6d3] ">
                            <Menu />
                        </Button>
                    </div>
                    <HoverLiftElement className="hidden md:block">
                        <Button asChild>
                            <Link href="/speaker-manual" className=" bg-[#1a1a1a] text-[#f5e6d3] hover:bg-[#4ecdc4] hover:text-[#1a1a1a] transition-colors border hover:border-2 border-slate-200 hover:border-[#1a1a1a]">
                                Speaker Manual
                            </Link>
                        </Button>
                    </HoverLiftElement>
                </nav>
                {mobileMenuOpen && (
                    <div className="md:hidden bg-[#ff6b6b] border-t-2 border-[#1a1a1a] py-2 mt-4">
                        {[
                            "About",
                            "Timeline",
                            "Tracks",
                            "Team",
                            "Sponsors",
                            "FAQs",
                            "Contact",
                        ].map((item) => (
                            <button key={item} onClick={() => handleScroll(item.toLowerCase())} className="block py-2 px-4 hover:bg-[#4ecdc4]">{item}</button>
                        ))}
                        <a href="/previous-editions" className="block py-2 px-4 hover:bg-[#4ecdc4]">Previous Editions</a>
                        <div className="flex justify-between">
                            <Button asChild>
                                <Link href="/speaker-manual" className="bg-[#1a1a1a] text-[#f5e6d3] hover:bg-[#4ecdc4] hover:text-[#1a1a1a] transition-colors border-2 border-[#1a1a1a]">
                                    Speaker Manual
                                </Link>
                            </Button>
                        </div>
                    </div>
                )}
            </header>
            <main className="container mx-auto px-4 py-16 relative z-10 lg:px-16 mt-24">
                <section id="about" className="text-center mb-32">
                    <div className=" flex justify-center items-center font-bold mb-4 md:mb-8 ">
                        <Image src='/gdg-horizontal.svg' width={300} height={1000} alt="gdg" className="w-52 sm:w-64 md:w-80 lg:w-96" />
                    </div>
                    <div className="flex justify-center items-center mb-8">
                        <GlitchText text="DEV" className="text-6xl md:text-8xl font-bold  text-[#1a1a1a]" />
                        <Image src="/planet.png" alt="Planet" width={96} height={96} className="mx-1 w-16 h-16 md:w-24 md:h-24 animate-spin" style={{ animation: "spin 10s linear infinite" }} />
                        <GlitchText text="LUTION" className="text-6xl md:text-8xl font-bold  text-[#1a1a1a]" />
                    </div>
                    <div className="flex flex-col gap-5 ">
                        <div className="text-xl md:text-4xl flex gap-2 md:gap-5   justify-center items-center font-bold  ">
                            <CalendarClockIcon className="h-[22px] md:h-[36px]  " height={36} width={36} />  19th January 2025
                        </div>
                        <div className="text-lg md:text-3xl flex  gap-5 justify-center items-center font-bold mb-8 ">
                            <MapPinned className="h-[18px] md:h-[30px] " height={30} width={30} /> DA-IICT Gandhinagar
                        </div>
                    </div>
                    <TypeAnimation
                        sequence={[
                            "Where Code Evolves and Innovation Grows",
                            1500,
                            "Where Code Evolves and Innovation Leads",
                            1500,
                            "Where Code Evolves and Innovation Ignites",
                            1500,
                            "Where Code Evolves and Innovation Shines",
                            1500,
                            "Where Code Evolves and Innovation Thrives",
                            5000,
                        ]}
                        wrapper="span"
                        speed={30}
                        style={{ display: "inline-block" }}
                        repeat={Infinity}
                        className="text-base md:text-2xl mb-8 myfont font-normal bold"
                    />
                </section>
                <PCWindow title="About Dev-o-lution" className="mb-32">
                    <p id="about" className="text-base lg:text-lg mb-4">
                        Dev-o-lution is where coding meets creativity, and innovation breaks
                        free from convention. Join us for workshops, talks, and
                        mind-expanding sessions that will revolutionize your dev skills!
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                        {[
                            { icon: Code, text: "Tech Talks" },
                            { icon: Cpu, text: "Hands-On Sessions & Workshops" },
                            { icon: Calendar, text: "January 19, 2025" },
                            { icon: MapPin, text: "DAIICT Campus" },
                        ].map(({ icon: Icon, text }, index) => (
                            <AnimatedBox
                                key={index}
                                className="flex items-center space-x-2 bg-[#ff6b6b] p-2 border-2 border-[#1a1a1a]">
                                <Icon className="text-[#1a1a1a]" />
                                <span>{text}</span>
                            </AnimatedBox>
                        ))}
                    </div>
                </PCWindow>
                <PCWindow2 title="Event Timeline" className="mb-32">
                    <div
                        id="timeline"
                        className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
                        {[
                            {
                                date: "Dec 15, 2024",
                                event: "Speaker Registration Opens",
                                icon: Zap,
                            },
                            {
                                date: "Dec 31, 2024",
                                event: "Speaker Registration Closes",
                                icon: Rocket,
                            },
                            {
                                date: "Jan 1, 2025",
                                event: "Participant Registration Opens",
                                icon: Code,
                            },
                            {
                                date: "Jan 19, 2025",
                                event: "Dev-o-lution Event",
                                icon: Award,
                            },
                        ].map(({ date, event, icon: Icon }, index) => (
                            <FloatingElement
                                key={index}
                                className="text-center"
                                delay={index * 0.2}>
                                <div className="bg-[#4ecdc4] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-[#1a1a1a]">
                                    <Icon className="text-[#1a1a1a] w-8 h-8" />
                                </div>
                                <p className="font-bold">{date}</p>
                                <p>{event}</p>
                            </FloatingElement>
                        ))}
                    </div>
                </PCWindow2>
                <PCWindow title="Dev-o-lution Tracks" className="mb-32">
                    <section id="tracks">
                        <Tabs defaultValue="web3" className="w-full">
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-[#4ecdc4] p-2 border-4 border-[#1a1a1a] sm:mb-0 mb-[60px]">
                                <TabsTrigger value="web3" className="data-[state=active]:bg-[#ff6b6b] bg-[#4ecdc4] border-2 border-[#1a1a1a] hover-lift">Web3/Blockchain</TabsTrigger>
                                <TabsTrigger value="ai" className="data-[state=active]:bg-[#ff6b6b] bg-[#4ecdc4] border-2 border-[#1a1a1a] hover-lift">AI/ML</TabsTrigger>
                                <TabsTrigger value="mobile" className="data-[state=active]:bg-[#ff6b6b] bg-[#4ecdc4] border-2 border-[#1a1a1a] hover-lift">Open Source</TabsTrigger>
                                <TabsTrigger value="iot" className="data-[state=active]:bg-[#ff6b6b] bg-[#4ecdc4] border-2 border-[#1a1a1a] hover-lift">Web/App dev</TabsTrigger>
                            </TabsList>
                            <TabsContent value="web3" className="bg-[#ff6b6b] p-6 mt-4 border-4 border-[#1a1a1a] slide-in-animation">
                                <h3 className="text-2xl font-bold mb-4">Web3 & Blockchain</h3>
                                <p>Explore decentralized applications and the future of the web.</p>
                            </TabsContent>
                            <TabsContent value="ai" className="bg-[#ff6b6b] p-6 mt-4 border-4 border-[#1a1a1a] slide-in-animation">
                                <h3 className="text-2xl font-bold mb-4">Artificial Intelligence & Machine Learning</h3>
                                <p>Dive into intelligent systems and algorithms to solve complex problems.</p>
                            </TabsContent>
                            <TabsContent value="mobile" className="bg-[#ff6b6b] p-6 mt-4 border-4 border-[#1a1a1a] slide-in-animation">
                                <h3 className="text-2xl font-bold mb-4">Open Source</h3>
                                <p>Learn how to meaningfully contribute to Open Source Projects.</p>
                            </TabsContent>
                            <TabsContent value="iot" className="bg-[#ff6b6b] p-6 mt-4 border-4 border-[#1a1a1a] slide-in-animation">
                                <h3 className="text-2xl font-bold mb-4">Development</h3>
                                <p>Unlock your potential and gain insights from experts to supercharge your development skills.</p>
                            </TabsContent>
                        </Tabs>
                    </section>
                </PCWindow>
                <PCWindow2 title="Join the Conversation" className="mb-32">
                    <div className="text-center">
                        <p className="text-2xl font-bold mb-4">
                            Use our hashtag and win prizes!
                        </p>
                        <div className="flex items-center justify-center space-x-4">
                            <Twitter className="w-8 h-8" />
                            <span className="text-3xl font-bold">#dev_o_lution</span>
                        </div>
                        <p className="mt-4">
                            Share your excitement, ideas, or projects on Twitter using our
                            hashtag for a chance to win amazing prizes!
                        </p>
                    </div>
                </PCWindow2>
                <PCWindow title="Our Team" className="mb-32">
                    <div id="team" className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold mb-4">Core Team</h3>
                            <ul className="space-y-2">
                                <li>Abhishek Abbi</li>
                                <li>Parth Vadodaria</li>
                                <li>Jash Shah</li>
                                <li>Harsh Gajjar</li>
                                <li>Dhruv Jain</li>
                                <li>Pranshu Patel</li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold mb-4">
                                Website Design & Development
                            </h3>
                            <ul className="space-y-2">
                                <li>Aditya Dave</li>
                                <li>Atik Vohra</li>
                                <li>Tirth Patel</li>
                                <li>Param Savjani</li>
                                <li>Kalp Chaniyara</li>
                                <li>Agrim Sharma</li>
                                <li>Hrithik Patel</li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold mb-4">PR & Sponsorship</h3>
                            <ul className="space-y-2">
                                <li>Neel Khatri</li>
                                <li>Nisarg Trivedi</li>
                                <li>Anushree</li>
                                <li>Anandita Saolapurkar</li>
                                <li>Prakriti Pandey</li>
                            </ul>
                        </div>
                    </div>
                </PCWindow>
                <PCWindow2 title="Partner with Us" className="mb-32">
                    <div id="sponsors">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <Input
                                name="name"
                                type="text"
                                placeholder="Name of your Organization *"
                                className="bg-[#f5e6d3] border-2 border-[#1a1a1a] text-[#1a1a1a] placeholder-[#1a1a1a]"
                                required
                            />
                            <Input
                                name="contact-person"
                                type="text"
                                placeholder="Contact Person *"
                                className="bg-[#f5e6d3] border-2 border-[#1a1a1a] text-[#1a1a1a] placeholder-[#1a1a1a]"
                                required
                            />
                            <Input
                                name="email"
                                type="email"
                                placeholder="Organization Email *"
                                className="bg-[#f5e6d3] border-2 border-[#1a1a1a] text-[#1a1a1a] placeholder-[#1a1a1a]"
                                required
                            />
                            <Input
                                name="contact-number"
                                type="number"
                                placeholder="Contact Number *"
                                className="bg-[#f5e6d3] border-2 border-[#1a1a1a] text-[#1a1a1a] placeholder-[#1a1a1a]"
                                required
                            />
                            <textarea
                                name="message"
                                placeholder="Message or Proposal Details *"
                                className="w-full bg-[#f5e6d3] border-2 border-[#1a1a1a] text-[#1a1a1a] placeholder-[#1a1a1a] p-2 rounded-md"
                                rows={4}
                                required
                            ></textarea>
                            <Button
                                type="submit"
                                className="w-full bg-[#4ecdc4] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#f5e6d3] border-2 border-[#1a1a1a] transition-colors shadow-neo hover-lift">
                                Submit Sponsor Proposal
                            </Button>
                        </form>
                    </div>
                </PCWindow2>
                <PCWindow title="Frequently Asked Questions" className="mb-32">
                    <div id="faqs" className="space-y-8">
                        {[
                            {
                                q: "Who can participate?",
                                a: "Dev-o-lution is open to all students and recent graduates passionate about technology and innovation.",
                            },
                            { q: "Is there a participation fee?", a: "Yes, There is! Please checkout the tickets on Unstop." },
                            {
                                q: "What should I bring?",
                                a: "Bring your laptop, charger, and any other devices you need for development. We'll provide a great coding atmosphere!",
                            },
                            {
                                q: "Can I join as a speaker?",
                                a: "We welcome speakers to share their knowledge. Check our timeline for speaker registration dates.",
                            },
                        ].map(({ q, a }, index) => (
                            <AnimatedBox
                                key={index}
                                className="bg-[#ff6b6b] p-4 border-2 border-[#1a1a1a]">
                                <h3 className="text-xl font-bold mb-2 text-[#1a1a1a]">{q}</h3>
                                <p>{a}</p>
                            </AnimatedBox>
                        ))}
                    </div>
                </PCWindow>
                <PCWindow2 title="Ready to Evolve?" className="mb-32">
                    <div className="text-center">
                        <p className="text-xl mb-4">
                            Registration for Dev-o-lution are coming soon!
                        </p>
                        <Button asChild className="bg-[#4ecdc4] text-[#1a1a1a] hover:bg-[#ff6b6b] text-lg px-8 py-6 rounded-none border-4 border-[#1a1a1a] transform hover:translate-x-2 hover:-translate-y-2 transition-transform shadow-neo">
                            <Link
                                target="_blank"
                                href="https://unstop.com/p/dev-o-lution-google-developer-group-on-campus-daiict-1285732"
                                className="text-[#000000] transition-colors hover-lift p-4">
                                Dev-o-lution on Unstop
                            </Link>
                        </Button>
                        <p className="text-2xl font-bold pt-6">See you at the event!</p>
                    </div>
                </PCWindow2>
                <PCWindow title="Join Us as a Speaker" className="mb-32">
                    <p className="text-center mb-4">
                        Share your knowledge and inspire the next generation of developers! Submit your talk proposal today.
                    </p>
                    <div className="text-center">
                        <Button asChild className="bg-[#4ecdc4] text-[#1a1a1a] hover:bg-[#ff6b6b] text-lg px-8 py-4 rounded-none border-4 border-[#1a1a1a] transform hover:translate-x-2 hover:-translate-y-2 transition-transform shadow-neo">
                            <Link href="/speaker-manual">Speaker Manual</Link>
                        </Button>
                    </div>
                </PCWindow>
                <PCWindow2 title="Contact Us" className="mb-32">
                    <div id="contact" className="text-center">
                        <p className="text-xl mb-4">For any queries, please contact us:</p>
                        <p className="text-2xl font-bold">Abhishek Abbi: +91 7490070001</p>
                        <p className="text-2xl font-bold">Jash Shah: +91 7041180305</p>
                        <p className="text-2xl font-bold">Email: dsc@daiict.ac.in</p>
                    </div>
                </PCWindow2>
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
    );
}
