"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const schedule = [
  { time: "09:00 AM", type: "opening", label: "Registration & Welcome Tea" },
  { time: "10:00 AM", type: "talk", speaker: "Riya Das", topic: "The Future of Human-AI Collaboration" },
  { time: "10:40 AM", type: "talk", speaker: "Dr. Arup Kalita", topic: "Rivers of Assam: Lifelines at Risk" },
  { time: "11:20 AM", type: "break", label: "Tea Break" },
  { time: "11:40 AM", type: "talk", speaker: "Meghna Baruah", topic: "Storytelling Through Visual Art" },
  { time: "12:20 PM", type: "break", label: "Lunch Break" },
  { time: "01:30 PM", type: "panel", label: "Panel Discussion: Innovation in Assam" },
  { time: "02:30 PM", type: "performance", label: "Cultural Performance" },
  { time: "03:00 PM", type: "closing", label: "Closing Remarks & Networking" },
];

export default function Schedule() {
  const timelineRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (timelineRef.current) {
      gsap.fromTo(
        timelineRef.current.children,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.13, duration: 1, ease: "power3.out" }
      );
    }
  }, []);
  return (
    <div className="max-w-3xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-extrabold text-red-600 mb-10 text-center">Event Schedule</h1>
      <div ref={timelineRef} className="relative border-l-4 border-red-600 pl-8 flex flex-col gap-10">
        {schedule.map((item, i) => (
          <div key={i} className="relative group">
            <div className="absolute -left-5 top-1.5 w-4 h-4 rounded-full bg-red-600 border-4 border-white dark:border-black shadow-lg group-hover:scale-125 transition-transform" />
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
              <div className="font-mono text-lg text-red-600 min-w-[100px]">{item.time}</div>
              <div>
                {item.type === "talk" && (
                  <div>
                    <div className="font-bold text-black dark:text-white">{item.speaker}</div>
                    <div className="text-gray-700 dark:text-gray-300">{item.topic}</div>
                  </div>
                )}
                {item.type !== "talk" && (
                  <div className="font-semibold text-black dark:text-white">{item.label}</div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 