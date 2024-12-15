import { Card } from "./ui/card"
import { Award, Building, Users} from 'lucide-react'

const benefits = [
    {
        title: "Advance Your Career",
        description: "The opportunity to inspire and guide a diverse audience and leave a lasting impact on future innovators.",
        icon: Award,
    },
    {
        title: "A Stage to Share Your Knowledge",
        description: "A prestigious platform to showcase your expertise and cement your leadership in the tech world",
        icon: Building,
    },
    {
        title: "Exclusive Networking Opportunities",
        description: "Engage with developers, technologists, and industry leaders, including other speakers and top experts.",
        icon: Users,
    }
]

export default function NeoBrutalismBenefits() {
    return (
        <div className="p-6 ">
            <h1 className="text-4xl font-bold mb-8 text-center bg-blue-500 text-white p-4 rotate-1 inline-block">
                Why Speak at Dev-o-lution?
            </h1>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {benefits.map((benefit, index) => (
                    <Card key={index} className="p-6 bg-white/90 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                        <div className={` w-16 h-16 mb-4 rounded-full flex items-center justify-center text-white ${getBackgroundColor(index)}`}>
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

function getBackgroundColor(index: number) {
    const colors = [
        "bg-blue-500",
        "bg-green-500",
        "bg-purple-500",
        "bg-orange-500",
        "bg-pink-500",
        "bg-teal-500",
    ]
    return colors[index % colors.length]
}