"use client";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

const speakers = [
  {
    name: "Riya Das",
    title: "AI Researcher, Innovator",
    topic: "The Future of Human-AI Collaboration",
    image: "/speaker1.jpg",
    bio: "Riya is a leading AI researcher focused on ethical machine learning and its impact on society. Her talk explores how humans and AI can work together for a better future.",
    summary: "A deep dive into the opportunities and challenges of human-AI partnerships, with real-world examples and a vision for the future.",
  },
  {
    name: "Dr. Arup Kalita",
    title: "Environmental Scientist",
    topic: "Rivers of Assam: Lifelines at Risk",
    image: "/speaker2.jpg",
    bio: "Dr. Kalita is an environmentalist dedicated to river conservation in Northeast India. He shares stories and solutions for protecting Assam's vital waterways.",
    summary: "An urgent call to action for river conservation, blending science, community, and policy for sustainable change.",
  },
  {
    name: "Meghna Baruah",
    title: "Graphic Novelist",
    topic: "Storytelling Through Visual Art",
    image: "/speaker3.jpg",
    bio: "Meghna is an award-winning graphic novelist whose work brings Assamese folklore to life. She discusses the power of visual storytelling.",
    summary: "How comics and graphic novels can preserve culture, inspire youth, and spark imagination.",
  },
];

export default function Speakers() {
  const [open, setOpen] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 1, ease: "power3.out" }
      );
    }
  }, []);
  return (
    <div className="max-w-5xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-extrabold text-red-600 mb-10 text-center">Speakers</h1>
      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {speakers.map((s, i) => (
          <div key={i} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col items-center gap-4 cursor-pointer hover:scale-105 transition-transform" onClick={() => setOpen(i)}>
            <Image src={s.image} alt={s.name} width={120} height={120} className="rounded-full object-cover border-4 border-red-600" />
            <div className="text-center">
              <div className="text-xl font-bold text-black dark:text-white">{s.name}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">{s.title}</div>
              <div className="mt-2 text-red-600 font-semibold">{s.topic}</div>
            </div>
          </div>
        ))}
      </div>
      {/* Modal */}
      {open !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={() => setOpen(null)}>
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl p-8 max-w-md w-full relative" onClick={e => e.stopPropagation()}>
            <button className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-2xl font-bold" onClick={() => setOpen(null)}>&times;</button>
            <Image src={speakers[open].image} alt={speakers[open].name} width={100} height={100} className="rounded-full mx-auto border-4 border-red-600 mb-4" />
            <div className="text-xl font-bold text-black dark:text-white text-center">{speakers[open].name}</div>
            <div className="text-sm text-gray-600 dark:text-gray-300 text-center mb-2">{speakers[open].title}</div>
            <div className="text-red-600 font-semibold text-center mb-4">{speakers[open].topic}</div>
            <div className="text-base text-gray-800 dark:text-gray-200 mb-2"><b>Bio:</b> {speakers[open].bio}</div>
            <div className="text-base text-gray-700 dark:text-gray-300"><b>Talk Summary:</b> {speakers[open].summary}</div>
          </div>
        </div>
      )}
    </div>
  );
} 