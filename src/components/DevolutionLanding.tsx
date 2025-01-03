"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Code,
    Cpu,
    Calendar,
    MapPin,
    Zap,
    Rocket,
    Award,
    Twitter,
    Menu,
    MapPinned,
    CalendarClockIcon,
} from "lucide-react";
import {
    PCWindow,
    AnimatedBox,
    FloatingElement,
    GlitchText,
    HoverLiftElement,
    PCWindow2,
} from "./UIComponents";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import SpaceButton from "./ui/spacebutton";


interface SpeakerProps {
    name: string;
    photo: string;
    linkedin: string;
    position: string;
    about: string;
}

const SpeakerCard: React.FC<SpeakerProps> = ({ name, photo, position }) => (
    <div className="bg-[#ff6b6b] p-2 border-4 border-[#1a1a1a] shadow-neo hover:translate-x-1 hover:-translate-y-1 transition-transform">
        <div className="flex flex-col mb-4">
            <Image src={photo} alt={name} width={1000} height={1000} className="mx-auto w-40 lg:w-52 rounded-md border-4 border-[#1a1a1a] mb-4" />
            <h3 className="text-base font-bold mb-2">{name}</h3>
            <p className="text-sm font-bold mb-2">{position}</p>
        </div>
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
        position: "GDE Firebase",
        about: "Vrijraj is a community champion by passion. He was an organizer for GDG Jalandhar for 7 years. He is a Google Developers Expert for Firebase and Web Technologies."
    },
    {
        name: "Jaydip Biniwale",
        photo: "/JaydipBiniwale.jpg",
        linkedin: "https://www.linkedin.com/in/biniwale/",
        position: "Sr. Software Engineer - AI, TrackWizz",
        about: "NVIDIA Certified AI Engineer | IIM-A | Sr. Software Engineer- AI | TrackWizz | Data Scientist | Python | Ex-CTO at Downtown | Generative AI | Computer Vision | NLP | Pytorch"
    },
    {
        name: "Harsh Shah",
        photo: "/HarshShah.jpg",
        linkedin: "https://www.linkedin.com/in/harshcrop/",
        position: "CTO at Pedals Up",
        about: "Harsh Shah is a self-taught developer and the CTO at Pedals Up. With a passion for technology and a curiosity that knows no bounds, he has mastered various programming languages, including C, C++, HTML, CSS, JavaScript, Python, and SQL."
    },
    {
        name: "Piyush Raj",
        photo: "/PiyushRaj.jpg",
        linkedin: "https://in.linkedin.com/in/piyushella",
        position: "Founder, CEO at Vedilink",
        about: "Product designer and programmer who enjoys solving real-life problems. Currently building a haven for students trying to improve our education system a little."
    },
    {
        name: "Anirudh Khurana",
        photo: "/AnirudhK.jpg",
        linkedin: "https://www.linkedin.com/in/anirudh-khurana",
        position: "Founder at Code and Debug",
        about: "Founder at Code and Debug | Full Stack Developer | DSA Trainer | Educator with a Mission"
    },
    {
        name: "Kartik Derasari",
        photo: "/KartikD.jpg",
        linkedin: "https://www.linkedin.com/in/kartikderasari/",
        position: "Engineering Lead at Persistent Systems | Google Developer Expert",
        about: "Kartik Derasari is a highly skilled and passionate Solutions Engineer and a Developer Advocate with a proven track record of success in designing and implementing innovative technology solutions."
    },
    {
        name: "Amit Chopra",
        photo: "/AmitChopra.jpg",
        linkedin: "https://www.linkedin.com/in/amitchopra/",
        position: "Product Management Consultant (Ex-Microsoft, Ex-Amazon, Ex-Google, Ex-Meta)",
        about: "Amit is a technology enthusiast who thrives on exploring the latest advancements. As an engaging speaker, he captivate audiences with his passion, expertise, and ability to translate complex concepts into compelling narratives."
    },
    {
        name: "Harsh Manvar",
        photo: "/HarshM.jpg",
        linkedin: "https://www.linkedin.com/in/harsh-manvar-64a30aa3/",
        position: "GDE, Docker Captain, CNCF Ambassador",
        about: "Harsh is Seasoned Senior Software Engineer at Oracle. With over half decade of experience in the tech industry as Software & DevOps Engineer."
    }
]

export default function DevolutionLanding() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleScroll = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "center" });
            setMobileMenuOpen(false);
        }
    };

    const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const requiredFields = [
            "name",
            "contact-person",
            "email",
            "contact-number",
            "message",
        ];

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
            alert(
                "An error occurred while submitting your proposal. Please try again."
            );
        }
    };

    return (
        <div className="min-h-screen bg-[#f5e6d3] font-mono text-[#1a1a1a] overflow-x-hidden scroll-smooth">
            <div className="zigzag-bg fixed inset-0 z-0 opacity-20 pointer-events-none"></div>
            <SpaceButton />
            <header className="fixed top-7 z-50 bg-[#ff6b6b] text-[#1a1a1a] p-4 border-b-4 border-[#1a1a1a] w-full">
                <nav className="container mx-auto flex justify-between items-center px-8">
                    <Link href="/" className="flex items-center md:space-x-1  retro-text">
                        <span className="text-xl md:text-3xl font-bold text-[#1a1a1a]">
                            DEV
                        </span>
                        <Image
                            src="/planet.png"
                            alt="Planet"
                            width={40}
                            height={40}
                            className="ml-0.5 w-6 h-6 md:w-9 md:h-9 animate-spin"
                            style={{ animation: "spin 10s linear infinite" }}
                        />
                        <span className="text-xl md:text-3xl font-bold text-[#1a1a1a]">
                            LUTION
                        </span>
                    </Link>
                    <div className="hidden md:flex space-x-4 md:text-sm lg:text-lg font-bold">
                        {[
                            "Timeline",
                            "Tracks",
                            "FAQs",
                            "Contact",
                        ].map((item) => (
                            <HoverLiftElement key={item}>
                                <button
                                    onClick={() => handleScroll(item.toLowerCase())}
                                    className="hover:underline">
                                    {item}
                                </button>
                            </HoverLiftElement>
                        ))}
                        <HoverLiftElement>
                            <a href="/speakers" className="hover:underline">
                                Speakers
                            </a>
                        </HoverLiftElement>
                        <HoverLiftElement>
                            <a href="/previous-editions" className="hover:underline">
                                Previous-Editions
                            </a>
                        </HoverLiftElement>
                    </div>
                    <div className="md:hidden">
                        <Button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="bg-[#1a1a1a] text-[#f5e6d3] ">
                            <Menu />
                        </Button>
                    </div>
                    <HoverLiftElement className="hidden md:block">
                        <Button asChild>
                            <Link
                                href="https://unstop.com/p/dev-o-lution-google-developer-group-on-campus-daiict-1285732"
                                className=" bg-[#1a1a1a] text-[#f5e6d3] hover:bg-[#4ecdc4] hover:text-[#1a1a1a] transition-colors border hover:border-2 border-slate-200 hover:border-[#1a1a1a]">
                                Register Now!
                            </Link>
                        </Button>
                    </HoverLiftElement>
                </nav>
                {mobileMenuOpen && (
                    <div className="md:hidden bg-[#ff6b6b] border-t-2 border-[#1a1a1a] py-2 mt-4">
                        {[
                            "Timeline",
                            "Tracks",
                            "FAQs",
                            "Contact",
                        ].map((item) => (
                            <button
                                key={item}
                                onClick={() => handleScroll(item.toLowerCase())}
                                className="block py-2 px-4 hover:bg-[#4ecdc4]">
                                {item}
                            </button>
                        ))}
                        <a href="/speakers" className="block py-2 px-4 hover:bg-[#4ecdc4]">
                            Speakers
                        </a>
                        <a
                            href="/previous-editions"
                            className="block py-2 px-4 hover:bg-[#4ecdc4]">
                            Previous-Editions
                        </a>
                        <a
                            href="https://unstop.com/p/dev-o-lution-google-developer-group-on-campus-daiict-1285732"
                            className="block py-2 px-4 hover:bg-[#4ecdc4]">
                            Register Now!
                        </a>
                    </div>
                )}
            </header>
            <main className="container mx-auto px-4 py-16 relative z-10 lg:px-16 mt-24">
                <section id="about" className="text-center mb-32">
                    <div className=" flex justify-center items-center font-bold mb-4 md:mb-8 ">
                        <Image
                            src="/gdg-horizontal.svg"
                            width={300}
                            height={1000}
                            alt="gdg"
                            className="w-52 sm:w-64 md:w-80 lg:w-96"
                        />
                    </div>
                    <div className="flex justify-center items-center mb-8">
                        <GlitchText
                            text="DEV"
                            className="text-6xl md:text-8xl font-bold  text-[#1a1a1a]"
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
                            className="text-6xl md:text-8xl font-bold  text-[#1a1a1a]"
                        />
                    </div>
                    <div className="flex flex-col gap-5 retro-text">
                        <div className="text-xl md:text-4xl flex gap-2 md:gap-5   justify-center items-center font-bold  ">
                            <CalendarClockIcon
                                className="h-[22px] md:h-[36px]  "
                                height={36}
                                width={36}
                            />{" "}
                            19th January 2025
                        </div>
                        <div className="text-lg md:text-3xl flex  gap-5 justify-center items-center font-bold mb-8 ">
                            <MapPinned
                                className="h-[18px] md:h-[30px] "
                                height={30}
                                width={30}
                            />{" "}
                            DA-IICT Gandhinagar
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
                <PCWindow2 title="About Dev-o-lution" className="mb-32">
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
                                className="flex items-center space-x-2 bg-[#4ecdc4] p-2 border-2 border-[#1a1a1a]">
                                <Icon className="text-[#1a1a1a]" />
                                <span>{text}</span>
                            </AnimatedBox>
                        ))}
                    </div>
                </PCWindow2>
                <PCWindow title="Our Speakers" className="mb-16">
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
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
                        <Tabs defaultValue="web3" className="w-fit">
                            <TabsList className="grid h-fit sm:h-10 w-full grid-cols-2 md:grid-cols-4 bg-[#4ecdc4] p-2 border-4 border-[#1a1a1a] mb-0">
                                <TabsTrigger
                                    value="web3"
                                    className="data-[state=active]:bg-[#ff6b6b] bg-[#4ecdc4] border-2 border-[#1a1a1a] hover-lift">
                                    Web3/Blockchain
                                </TabsTrigger>
                                <TabsTrigger
                                    value="ai"
                                    className="data-[state=active]:bg-[#ff6b6b] bg-[#4ecdc4] border-2 border-[#1a1a1a] hover-lift">
                                    AI/ML
                                </TabsTrigger>
                                <TabsTrigger
                                    value="open-source"
                                    className="data-[state=active]:bg-[#ff6b6b] bg-[#4ecdc4] border-2 border-[#1a1a1a] hover-lift">
                                    Open Source
                                </TabsTrigger>
                                <TabsTrigger
                                    value="webappdev"
                                    className="data-[state=active]:bg-[#ff6b6b] bg-[#4ecdc4] border-2 border-[#1a1a1a] hover-lift">
                                    Web/App dev
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent
                                value="web3"
                                className="bg-[#ff6b6b] p-6 mt-4 border-4 border-[#1a1a1a] slide-in-animation">
                                <h3 className="text-2xl font-bold mb-4">Web3 & Blockchain</h3>
                                <p className="lg">
                                    Explore the decentralized future of the web with Web3 and
                                    Blockchain technologies. Learn how these innovations are
                                    transforming industries by enabling secure, transparent, and
                                    tamper-proof transactions. Dive into the world of smart
                                    contracts, decentralized applications (dApps), and the
                                    underlying principles that make blockchain a revolutionary
                                    technology.
                                </p>
                            </TabsContent>
                            <TabsContent
                                value="ai"
                                className="bg-[#ff6b6b] p-6 mt-4 border-4 border-[#1a1a1a] slide-in-animation">
                                <h3 className="text-2xl font-bold mb-4">
                                    Artificial Intelligence & Machine Learning
                                </h3>
                                <p className="lg">
                                    Dive into the fascinating world of Artificial Intelligence and
                                    Machine Learning. Discover how intelligent systems and
                                    algorithms are designed to solve complex problems, automate
                                    tasks, and provide insights from vast amounts of data. Learn
                                    about neural networks, deep learning, and the practical
                                    applications of AI/ML in various industries.
                                </p>
                            </TabsContent>
                            <TabsContent
                                value="open-source"
                                className="bg-[#ff6b6b] p-6 mt-4 border-4 border-[#1a1a1a] slide-in-animation">
                                <h3 className="text-2xl font-bold mb-4">Open Source</h3>
                                <p className="lg">
                                    Learn how to meaningfully contribute to Open Source Projects
                                    and become part of a global community of developers.
                                    Understand the principles of open-source software, the
                                    benefits of collaboration, and how to get started with
                                    contributing to projects that matter. Gain insights into the
                                    tools and platforms that facilitate open-source development.
                                </p>
                            </TabsContent>
                            <TabsContent
                                value="webappdev"
                                className="bg-[#ff6b6b] p-6 mt-4 border-4 border-[#1a1a1a] slide-in-animation">
                                <h3 className="text-2xl font-bold mb-4">
                                    Web & App Development
                                </h3>
                                <p className="lg">
                                    Unlock your potential in web and app development by gaining
                                    insights from experts in the field. Learn about the latest
                                    trends, tools, and technologies that are shaping the future of
                                    development. Discover how to build robust, scalable, and
                                    user-friendly applications.
                                </p>
                            </TabsContent>
                            <TabsContent
                                value="dsa"
                                className="bg-[#ff6b6b] p-6 mt-4 border-4 border-[#1a1a1a] slide-in-animation">
                                <h3 className="text-2xl font-bold mb-4">DSA</h3>
                                <p className="lg">
                                    Unlock the secrets to acing coding challenges and technical
                                    interviews by diving deep into the world of DSA and
                                    Competitive Programming. Gain the skills to think critically
                                    and solve complex problems efficiently. Whether you&apos;re
                                    preparing for job placements, excelling in hackathons, or
                                    simply sharpening your coding expertise, this talk is your
                                    gateway to becoming a problem-solving powerhouse!
                                </p>
                            </TabsContent>
                            <TabsContent
                                value="cloud"
                                className="bg-[#ff6b6b] p-6 mt-4 border-4 border-[#1a1a1a] slide-in-animation">
                                <h3 className="text-2xl font-bold mb-4">Cloud Computing</h3>
                                <p className="lg">
                                    Explore the world of cloud computing and its transformative
                                    impact on businesses and technology. Learn about the different
                                    cloud service models (IaaS, PaaS, SaaS), cloud deployment
                                    models, and the benefits of using cloud services. Understand
                                    how to leverage cloud platforms for scalability, flexibility,
                                    and cost-efficiency.
                                </p>
                            </TabsContent>
                            <TabsContent
                                value="cyber"
                                className="bg-[#ff6b6b] p-6 mt-4 border-4 border-[#1a1a1a] slide-in-animation">
                                <h3 className="text-2xl font-bold mb-4">Cybersecurity</h3>
                                <p className="lg">
                                    Learn about the critical field of cybersecurity and how to
                                    protect your applications and data from threats. Understand
                                    the principles of secure coding, network security, and the
                                    various types of cyber attacks. Gain insights into best
                                    practices for safeguarding information and ensuring the
                                    integrity and confidentiality of your systems.
                                </p>
                            </TabsContent>
                            <TabsContent
                                value="startup"
                                className="bg-[#ff6b6b] p-6 mt-4 border-4 border-[#1a1a1a] slide-in-animation">
                                <h3 className="text-2xl font-bold mb-4">Start-up</h3>
                                <p className="lg">
                                    Get insights on how to start your own tech company from
                                    industry experts and successful entrepreneurs. Learn about the
                                    challenges and opportunities in the start-up ecosystem, from
                                    ideation to funding and scaling. Understand the importance of
                                    innovation, market research, and building a strong team to
                                    drive your start-up to success.
                                </p>
                            </TabsContent>
                            <TabsList className="grid h-fit sm:h-10 w-full grid-cols-2 md:grid-cols-4 bg-[#4ecdc4] p-2 border-4 border-[#1a1a1a] mt-4">
                                <TabsTrigger
                                    value="dsa"
                                    className="data-[state=active]:bg-[#ff6b6b] bg-[#4ecdc4] border-2 border-[#1a1a1a] hover-lift">
                                    DSA
                                </TabsTrigger>
                                <TabsTrigger
                                    value="cloud"
                                    className="data-[state=active]:bg-[#ff6b6b] bg-[#4ecdc4] border-2 border-[#1a1a1a] hover-lift">
                                    Cloud Computing
                                </TabsTrigger>
                                <TabsTrigger
                                    value="cyber"
                                    className="data-[state=active]:bg-[#ff6b6b] bg-[#4ecdc4] border-2 border-[#1a1a1a] hover-lift">
                                    Cybersecurity
                                </TabsTrigger>
                                <TabsTrigger
                                    value="startup"
                                    className="data-[state=active]:bg-[#ff6b6b] bg-[#4ecdc4] border-2 border-[#1a1a1a] hover-lift">
                                    Start-up
                                </TabsTrigger>
                            </TabsList>
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
                    <div id="team" className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
                            <h3 className="text-2xl font-bold mb-4">Speaker Team</h3>
                            <ul className="space-y-2">
                                <li>Nisarg Trivedi</li>
                                <li>Atik Vohra</li>
                                <li>Vrushil Parikh</li>
                                <li>Hrithik Patel</li>
                                <li>Agrim Sharma</li>
                                <li>Aditya Dave</li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold mb-4">Sponsorship Team</h3>
                            <ul className="space-y-2">
                                <li>Neel Khatri</li>
                                <li>Tirth Patel</li>
                                <li>Kalp Chaniyara</li>
                                <li>Param Savjani</li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold mb-4">PR Team</h3>
                            <ul className="space-y-2">
                                <li>Anushree Katuri</li>
                                <li>Anandita Saolapurkar</li>
                                <li>Prakriti Pandey</li>
                                <li>Meet Gandhi</li>
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
                                required></textarea>
                            <Button
                                type="submit"
                                className="w-full bg-[#4ecdc4] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#f5e6d3] border-2 border-[#1a1a1a] transition-colors shadow-neo hover-lift">
                                Submit Sponsor Proposal
                            </Button>
                        </form>
                    </div>
                </PCWindow2>
                <div id="faqs">
                    <PCWindow title="Frequently Asked Questions" className="mb-32">
                        <div className="space-y-8">
                            {[
                                {
                                    q: "Who can participate?",
                                    a: "Dev-o-lution is open to all students and recent graduates passionate about technology and innovation.",
                                },
                                {
                                    q: "Is there a participation fee?",
                                    a: "Yes, There is! Please checkout the tickets on Unstop.",
                                },
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
                </div>
                <PCWindow2 title="Ready to Evolve?" className="mb-32">
                    <div className="text-center">
                        <p className="text-xl lg:text-3xl font-bold mb-4">
                            Registration for Dev-o-lution have started!
                        </p>
                        <p className="text-mb lg:text-xl font-bold mb-4">
                            Checkout our socials for EARLY-BIRD discount code.
                        </p>
                        <Button
                            asChild
                            className="bg-[#4ecdc4] text-[#1a1a1a] hover:bg-[#ff6b6b] text-lg px-8 py-6 rounded-none border-4 border-[#1a1a1a] transform hover:translate-x-2 hover:-translate-y-2 transition-transform shadow-neo">
                            <Link
                                target="_blank"
                                href="https://unstop.com/p/dev-o-lution-google-developer-group-on-campus-daiict-1285732"
                                className="text-[#000000] transition-colors hover-lift p-4">
                                Book your tickets Now!
                            </Link>
                        </Button>
                        <p className="text-2xl font-bold pt-6">See you at the event!</p>
                    </div>
                </PCWindow2>
                <PCWindow title="Contact Us" className="mb-32">
                    <div id="contact" className="text-center">
                        <p className="text-xl mb-4">For any queries, please contact us:</p>
                        <p className="text-2xl font-bold">Abhishek Abbi: +91 7490070001</p>
                        <p className="text-2xl font-bold">Jash Shah: +91 7041180305</p>
                        <p className="text-2xl font-bold">Email: dsc@daiict.ac.in</p>
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
                            <Link
                                target="_blank"
                                href="https://slop.dscdaiict.in/"
                                className="text-[#4ecdc4] hover:text-[#ff6b6b] transition-colors hover-lift p-2">
                                SLoP
                            </Link>
                            <Link
                                target="_blank"
                                href="https://dscdaiict.in/"
                                className="text-[#4ecdc4] hover:text-[#ff6b6b] transition-colors hover-lift p-2">
                                GDG on Campus DA-IICT
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
