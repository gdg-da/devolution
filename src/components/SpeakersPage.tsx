"use client"

import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { PCWindow, GlitchText } from "./UIComponents";
import { TypeAnimation } from "react-type-animation";
import { Linkedin } from 'lucide-react';
import SpaceButton from './ui/spacebutton';

interface SpeakerProps {
    name: string;
    photo: string;
    linkedin: string;
    position: string;
    about: string;
}

const SpeakerCard: React.FC<SpeakerProps> = ({ name, photo, linkedin, position, about }) => (
    <div className="bg-[#ff6b6b] p-6 border-4 border-[#1a1a1a] shadow-neo hover:translate-x-1 hover:-translate-y-1 transition-transform">
        <div className="flex flex-col mb-4">
            <Image src={photo} alt={name} width={1500} height={1500} className="mx-auto w-40 lg:w-52 rounded-md border-4 border-[#1a1a1a] mb-4" />
            <h3 className="text-xl font-bold mb-2">{name}</h3>
            <p className="text-lg font-bold mb-2">{position}</p>
            <div className="flex space-x-4">
                {linkedin && (
                    <Link href={linkedin} target="_blank" rel="noopener noreferrer" className="text-[#1a1a1a] hover:text-[#4ecdc4]">
                        <Linkedin size={24} />
                    </Link>
                )}
            </div>
        </div>
        <p className="text-sm">{about}</p>
    </div>
)

const speakers: SpeakerProps[] = [
    {
        name: "Rohan Hundia",
        photo: "/RohanHundia.jpg",
        linkedin: "https://www.linkedin.com/in/rohan-hundia-38a94692/",
        position: "CEO at Unada Labs",
        about: "Rohan is the Co-Founder and CEO of Unada Labs. As tech entrepreneur driving Unada Labs and as a serial entrepreneur, Rohan and team are poised to transform three major industries - real estate, finance and healthcare with disruptive tech."
    },
    {
        name: "Hiren Dave",
        photo: "/HirenDave.jpg",
        linkedin: "https://www.linkedin.com/in/davehiren/",
        position: "Senior Principal Software Engineer at iBASEt",
        about: "CTO, Product Manager, Entrepreneur, Tech Author, Blogger and Speaker with more than 11 years of industry experience."
    },
    {
        name: "Paresh Mayani",
        photo: "/PareshMayani.jpg",
        linkedin: "https://www.linkedin.com/in/pareshmayani/",
        position: "Founder & CEO at SolGuruz",
        about: "Tech Innovator | Crafting Pixel-Perfect Software Solutions | Expert in Offshore Development Teams | Bespoke Software Development Specialist | Organizer, Google Developers Group Ahmedabad"
    },
    {
        name: "Abhinav Raj",
        photo: "/AbhinavRaj.jpg",
        linkedin: "https://www.linkedin.com/in/abhinav-raj-234497159/",
        position: "Senior Software Engineer at Headout ",
        about: "Experienced Developer with a demonstrated history of working in the information technology and services industry."
    },
    {
        name: "Jaydip Parikh",
        photo: "/JaydipParikh.jpg",
        linkedin: "https://www.linkedin.com/in/jaydipparikh/",
        position: "Founder at Tej SolPro",
        about: "Jaydip Parikh is a Digital Marketing Expert with over 20 years of experience in SEO, B2B Marketing, Digital Lead Generation, eCommerce, SaaS Marketing and other aspects."
    },
    {
        name: "Ashish Patel",
        photo: "/AshishPatel.jpg",
        linkedin: "https://www.linkedin.com/in/ashishpatel2604",
        position: "Senior AWS AI/ML Solution Architect at IBM",
        about: "Ashish has over 12+ years, Author, Data Scientist and Researcher with 8+ Years of Experience of Data Science technology and Research experience in wide functions including predictive modelling, data preprocessing, feature engineering, machine learning and deep learning."
    },
    {
        name: "Vrijraj Singh",
        photo: "/VrijrajSingh.jpg",
        linkedin: "https://www.linkedin.com/in/vrijraj/",
        position: "CTO at agprop",
        about: "Vrijraj is a CTO by profession at AGROP and a community champion by passion. He was an organizer for GDG Jalandhar for 7 years. He is a Google Developers Expert for Firebase and Web Technologies."
    },
    {
        name: "Jaydip Biniwale",
        photo: "/JaydipBiniwale.jpg",
        linkedin: "https://www.linkedin.com/in/biniwale/",
        position: "Co-Founder & CTO at Downtown club",
        about: "NVIDIA Certified AI Engineer | IIM-A | Sr. Software Engineer- AI | TrackWizz | Data Scientist | Python | Ex-CTO at Downtown | Generative AI | Computer Vision | NLP | Pytorch"
    }
]

export default function SpeakersPage() {
    return (
        <div className="min-h-screen bg-[#f5e6d3] font-mono text-[#1a1a1a] overflow-x-hidden scroll-smooth">
            <div className="zigzag-bg fixed inset-0 z-0 opacity-20 pointer-events-none"></div>
            <SpaceButton />
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
                    <GlitchText text="Our Speakers" className="text-6xl font-bold mb-4 retro-text text-[#1a1a1a]" />
                    <TypeAnimation
                        sequence={["Meet the speakers who will be sharing their knowledge and expertise at Devlution 2025."]}
                        style={{ display: "inline-block" }}
                        className="text-base md:text-2xl mb-8 myfont font-normal bold"
                    />
                </section>
                <PCWindow title="" className="mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {speakers.map((speaker, index) => (
                            <SpeakerCard key={index} {...speaker} />
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <TypeAnimation
                            sequence={["Stay tuned for more speakers!"]}
                            style={{ display: "inline-block" }}
                            className="text-base md:text-2xl myfont font-normal bold"
                        />
                    </div>
                </PCWindow>
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