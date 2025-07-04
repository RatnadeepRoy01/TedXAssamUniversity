"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const team = [
  { name: "Dr. Ananya Sharma", role: "Organizer & Curator", image: "/team1.jpg" },
  { name: "Rahul Sen", role: "Co-Organizer", image: "/team2.jpg" },
  { name: "Priya Dutta", role: "Design Lead", image: "/team3.jpg" },
  { name: "Amitabh Das", role: "Tech Lead", image: "/team4.jpg" },
  { name: "Sneha Paul", role: "Marketing Head", image: "/team5.jpg" },
];

export default function Team() {
  const gridRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.12, duration: 1, ease: "power3.out" }
      );
    }
  }, []);
  return (
    <div className="max-w-5xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-extrabold text-red-600 mb-10 text-center">Our Team</h1>
      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {team.map((member, i) => (
          <div key={i} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col items-center gap-4">
            <Image src={member.image} alt={member.name} width={110} height={110} className="rounded-full object-cover border-4 border-red-600" />
            <div className="text-center">
              <div className="text-lg font-bold text-black dark:text-white">{member.name}</div>
              <div className="text-sm text-red-600 font-semibold">{member.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 