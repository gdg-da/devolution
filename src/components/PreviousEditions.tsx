"use client";

import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { PCWindow, GlitchText, TypewriterText } from './UIComponents'
import { useState } from 'react'

export default function PreviousEditions() {
  const [selectedYear, setSelectedYear] = useState<'2015' | '2016'>('2016')

  return (
    <div className="min-h-screen bg-[#f5e6d3] font-mono text-[#1a1a1a] overflow-x-hidden">
      <div className="zigzag-bg fixed inset-0 z-0 opacity-20"></div>
      
      <header className="sticky top-0 z-50 bg-[#ff6b6b] text-[#1a1a1a] p-4 border-b-4 border-[#1a1a1a]">
        <nav className="container mx-auto flex justify-between items-center">
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
          <Button asChild>
            <Link href="/" className="bg-[#1a1a1a] text-[#f5e6d3] hover:bg-[#4ecdc4] hover:text-[#1a1a1a] transition-colors border-2 border-[#1a1a1a]">
              Home
            </Link>
          </Button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16 relative z-10">
        <section className="text-center mb-16">
          <GlitchText text="Previous Editions" className="text-6xl font-bold mb-4 retro-text text-[#1a1a1a]" />
          <TypewriterText text="Relive the Dev-o-lution Journey" className="text-xl md:text-2xl" />
          
          <div className="flex justify-center gap-4 mb-16 mt-8">
            <Button 
              onClick={() => setSelectedYear('2015')}
              className={`px-8 py-4 text-lg ${
                selectedYear === '2015' 
                  ? 'bg-[#ff6b6b] text-[#1a1a1a]' 
                  : 'bg-[#1a1a1a] text-[#f5e6d3]'
              } hover:bg-[#4ecdc4] hover:text-[#1a1a1a] border-2 border-[#1a1a1a]`}
            >
              2015
            </Button>
            <Button 
              onClick={() => setSelectedYear('2016')}
              className={`px-8 py-4 text-lg ${
                selectedYear === '2016' 
                  ? 'bg-[#ff6b6b] text-[#1a1a1a]' 
                  : 'bg-[#1a1a1a] text-[#f5e6d3]'
              } hover:bg-[#4ecdc4] hover:text-[#1a1a1a] border-2 border-[#1a1a1a]`}
            >
              2016
            </Button>
          </div>
        </section>

        {selectedYear === '2015' ? (
          <PCWindow title="GDG DA-IICT DevFest15 Report" className="mb-16">
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row items-center mb-8">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <Image src="/Samir.jpeg" alt="Samir Motwani" width={200} height={200} className="rounded-full border-4 border-[#1a1a1a]" />
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold mb-2">Material UI</h3>
                  <p><strong>Speaker:</strong> Samir Motwani | Entrepreneur, Creative Director, RapidOps Solutions</p>
                  <p className="mt-2">Co-Founded RapidOps Solutions, a digital product development company. He follows practice of &quot;Being Real and Agile&quot;. Samir is passionate about minimalistic design and love to conceptualize disruptive marketing ideas</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center mb-8">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <Image src="/Jayesh.jpeg" alt="Webelight Solutions" width={200} height={200} className="rounded-full border-4 border-[#1a1a1a]" />
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold mb-2">Guest Talk - 1</h3>
                  <p><strong>Speaker:</strong> Representative from Webelight Solutions</p>
                  <p className="mt-2">Jayesh Anandani</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center mb-8">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <Image src="/Dhrumil.jpeg" alt="Dhrumil Shah" width={200} height={200} className="rounded-full border-4 border-[#1a1a1a]" />
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold mb-2">Andriod</h3>
                  <p><strong>Speaker:</strong> Dhrumil Shah | Android Developer, Bugletech</p>
                  <p className="mt-2">Co-Organizer of GDG Ahmedabad, A Passionate Android Developer, A researcher, A Techno-Freak, Great Sense of Humour, Funky Guy :)</p>
                </div>
              </div>

              <div className="bg-[#ff6b6b] p-4 text-center font-bold border-2 border-[#1a1a1a]">
                Lunch Break
              </div>

              <div className="flex flex-col md:flex-row items-center mb-8">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <Image src="/Jayesh.jpeg" alt="Jayesh Anandani" width={200} height={200} className="rounded-full border-4 border-[#1a1a1a]" />
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold mb-2">AngularJS</h3>
                  <p><strong>Speaker:</strong> Jayesh Anandani | Founder, Webelight Solutions</p>
                  <p className="mt-2">Founder of Webelight Solutions http://www.webelight.co.in, Web Service company</p>
                  <p className="mt-2">Intrapreneur, Growth Hacker, Technophile. Conducts meet-ups on AngularJS and UI/UX to empower local tech community with emerging technologies and concepts.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center mb-8">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <Image src="/Dhaval.jpeg" alt="Dhaval Pandit" width={200} height={200} className="rounded-full border-4 border-[#1a1a1a]" />
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold mb-2">Guest Talk - 2</h3>
                  <p><strong>Speaker:</strong> Dhaval Pandit | RapidOps Solutions</p>
                  <p className="mt-2">RapidOps is a passionate team of designers and developers who are building creative application of the technology</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center mb-8">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <Image src="/placeholder.jpeg" alt="Dushyant Jadeda" width={200} height={200} className="rounded-full border-4 border-[#1a1a1a]" />
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold mb-2">Deep Dive: Polymer and Material UI</h3>
                  <p><strong>Speaker:</strong> Hangout with Dushyant Jadeda | GDG Bangalore</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center mb-8">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <Image src="/placeholder.jpeg" alt="Ishit" width={200} height={200} className="rounded-full border-4 border-[#1a1a1a]" />
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold mb-2">Guest Talk - 3</h3>
                  <p><strong>Speaker:</strong> Ishit | Startups and Business Strategies</p>
                </div>
              </div>
            </div>
          </PCWindow>
        ) : (
          <>
            <PCWindow title="GDG DA-IICT DevFest16 Report" className="mb-16">
            <div className="mb-6">
            <Button asChild className="bg-[#4ecdc4] text-[#1a1a1a] hover:bg-[#ff6b6b] text-lg px-8 py-6 rounded-none border-4 border-[#1a1a1a] transform hover:translate-x-2 hover:-translate-y-2 transition-transform shadow-neo">
                <Link target="_blank" href="https://ankit-m.github.io/gdgdaiict-website/">DevFest 2016 website</Link>
            </Button>
            </div>
              <p className="text-lg mb-4">
                The fest started with a recap on Google I/O 2016.
              </p>

              <h3 className="text-2xl font-bold mb-4">Firebase and PWA</h3>
              <div className="flex flex-col md:flex-row items-center mb-4">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <Image src="/Ankit.jpeg" alt="Ankit" width={200} height={200} className="rounded-full border-4 border-[#1a1a1a]" />
                </div>
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <Image src="/Kushan.jpg" alt="Kushan" width={200} height={200} className="rounded-full border-4 border-[#1a1a1a]" />
                </div>
                <div className="md:w-1/2">
                  <p><strong>Speakers:</strong> Ankit and Kushan</p>
                  <p>This included a brief introduction followed by a hands-on session.</p>
                </div>
              </div>

              <p className="mb-4">Further after the networking (lunch) break there were 2 parallel sessions on Angular 2.0 and Material design/Android nougat.</p>

              <h3 className="text-2xl font-bold mb-4">Angular 2.0</h3>
              <div className="flex flex-col md:flex-row items-center mb-4">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <Image src="/Dipesh.jpg" alt="Dipesh Patel" width={200} height={200} className="rounded-full border-4 border-[#1a1a1a]" />
                </div>
                <div className="md:w-3/4">
                  <p><strong>Speaker:</strong> Dipesh Patel</p>
                  <p><strong>Designation:</strong> CTO at RapidOps</p>
                  <p>The session started with a detailed introduction of Angular 2.0 including a structured breakdown of Angular 2.0 and the new features/improvements from Angular 1. Further typescript was introduced and how to use it was explained.</p>
                  <p>A hands-on session for Angular 2.0 followed. By the end of the session everybody had developed a basic web page which used Angular 2.0 in it.</p>
                  <p>The event met its end with the vote of thanks to the speakers and satisfied attendee&apos;s.</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4">The Android Track</h3>

              <h4 className="text-xl font-bold mb-2">Android Nougat</h4>
              <div className="flex flex-col md:flex-row items-center mb-4">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <Image src="/Aakash.jpg" alt="Aakash Muttineni" width={200} height={200} className="rounded-full border-4 border-[#1a1a1a]" />
                </div>
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <Image src="/Rishabh.jpg" alt="Rishabh Bhardwaj" width={200} height={200} className="rounded-full border-4 border-[#1a1a1a]" />
                </div>
                <div className="md:w-1/2">
                  <p><strong>Speakers:</strong> Aakash Muttineni & Rishabh Bhardwaj</p>
                  <p>They showed all the new features that have been introduced this year along with some really good materialistic animations. Features like multi window, new notification panel design, minor ui changes were discussed. They also talked about the new virtual reality project introduced by Google known as Daydream. They ended the session with a bucket list for android I/O.</p>
                </div>
              </div>

              <h4 className="text-xl font-bold mb-2">Material Design 2.0</h4>
              <div className="flex flex-col md:flex-row items-center mb-4">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <Image src="/Chintan.jpg" alt="Chintan Soni" width={200} height={200} className="rounded-full border-4 border-[#1a1a1a]" />
                </div>
                <div className="md:w-3/4">
                  <p><strong>Speaker:</strong> Chintan Soni</p>
                  <p>The session was very interactive and hands on. He provided detailed step by step guide on how to implement material design on Android studio. He also provided his GitHub ID for reference.</p>
                  <p>He ended the session with a short Q&A.</p>
                </div>
              </div>
            </PCWindow>
          </>
        )}

        <div className="text-center">
          <Button asChild className="bg-[#4ecdc4] text-[#1a1a1a] hover:bg-[#ff6b6b] text-lg px-8 py-4 rounded-none border-4 border-[#1a1a1a] transform hover:translate-x-2 hover:-translate-y-2 transition-transform shadow-neo">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </main>

      <footer className="bg-[#1a1a1a] text-[#f5e6d3] py-8 mt-16">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Dev-o-lution | Organized by GDG on DAIICT campus</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link href="https://github.com/ossdaiict" className="text-[#4ecdc4] hover:text-[#ff6b6b] transition-colors">
              OSS GitHub
            </Link>
            <Link href="https://github.com/gdg-da" className="text-[#4ecdc4] hover:text-[#ff6b6b] transition-colors">
              GDG GitHub
            </Link>
            <Link href="https://www.linkedin.com/company/gdg-on-campus-daiict/" className="text-[#4ecdc4] hover:text-[#ff6b6b] transition-colors">
              LinkedIn
            </Link>
            <Link href="https://www.instagram.com/gdg.daiict/" className="text-[#4ecdc4] hover:text-[#ff6b6b] transition-colors">
              Instagram
            </Link>
            <Link href="https://x.com/gdgdaiict" className="text-[#4ecdc4] hover:text-[#ff6b6b] transition-colors">
              X (Twitter)
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

