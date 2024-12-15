import { Card } from "./ui/card"
import { Award, Building, Users, HighlighterIcon as Spotlight, Headphones, Ticket } from 'lucide-react'

const benefits = [
    {
        title: "Advance Your Career",
        description: "Showcase your expertise to potential collaborators, employers, or business partners, positioning yourself as a thought leader in the industry.",
        icon: Award,
    },
    {
        title: "Represent Your Organization",
        description: "Enhance your company's public image and credibility through your presentation.",
        icon: Building,
    },
    {
        title: "Exclusive Networking Opportunities",
        description: "Engage with 500+ developers, technologists, and industry leaders, including other speakers and top experts.",
        icon: Users,
    },
    {
        title: "Be Part of the Spotlight",
        description: "Gain social media exposure through GDG on Campus DA-IICT's official platforms and boost your professional presence.",
        icon: Spotlight,
    },
    {
        title: "Comprehensive Support",
        description: "Receive dedicated assistance from the GDG on Campus DA-IICT team to prepare and deliver your impactful talk.",
        icon: Headphones,
    },
    {
        title: "Full-Day Event Access",
        description: "Enjoy complimentary access to all sessions, workshops, and networking events throughout the entire conference day.",
        icon: Ticket,
    },
]

export default function NeoBrutalismBenefits() {
    return (
        <div className="p-6 ">
            <h1 className="text-4xl font-bold mb-8 text-center bg-[#4ecdc4] p-4 rotate-1 inline-block">
                Why Speak at Dev-o-lution?
            </h1>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {benefits.map((benefit, index) => (
                    <Card key={index} className="p-6 bg-[#4ecdc4] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                        <div className={` w-16 h-16 mb-4 rounded-full flex items-center justify-center text-white bg-[#ff6b6b]`}>
                            {<benefit.icon size={32} />}
                        </div>
                        <h2 className="text-2xl font-bold mb-2">{benefit.title}</h2>
                        <p className="text-gray-700">{benefit.description}</p>
                    </Card>
                ))}
            </div>
        </div>
    )
}