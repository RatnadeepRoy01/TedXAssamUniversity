"use client"
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Users, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const teamMembers = [
  {
    name: "Sponsor Team",
    position: "Builds and nurtures partnerships to bring our sponsors on board",
    avatar: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Teams/WhatsApp%20Image%202025-07-12%20at%203.40.58%20PM.jpeg?updatedAt=1752329421375",
    accent: "from-red-500 to-yellow-400",
  },
  {
    name: "Story Crafters",
    position: "Shapes compelling narratives that connect ideas with emotions",
    avatar: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Teams/WhatsApp%20Image%202025-07-12%20at%203.40.57%20PM%20(2).jpeg?updatedAt=1752329421365",
    accent: "from-pink-500 to-purple-400",
  },
  {
    name: "The PR Team",
    position: "Handles public relations and keeps our voice strong and consistent",
    avatar: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Teams/WhatsApp%20Image%202025-07-12%20at%203.40.57%20PM%20(1).jpeg?updatedAt=1752329421330",
    accent: "from-blue-500 to-cyan-400",
  },
  {
    name: "The Backbone",
    position: "The operational core that ensures everything runs smoothly behind the scenes",
    avatar: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Teams/WhatsApp%20Image%202025-07-12%20at%203.40.57%20PM.jpeg?updatedAt=1752329421327",
    accent: "from-green-500 to-lime-400",
  },
];

const organizer = [
  {
    name: "Kuldeep Paul",
    position: "Licensee & Lead Organizer",
    avatar: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Teams/WhatsApp%20Image%202025-07-13%20at%2010.07.36%20AM%20(1).jpeg?updatedAt=1752423557042",
    accent: "from-green-500 to-lime-400",
  },
  {
    name: "Namasya S Khandayatray",
    position: "Curator",
    avatar: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Teams/WhatsApp%20Image%202025-07-13%20at%2010.07.37%20AM%20(2).jpeg?updatedAt=1752423557146",
    accent: "from-pink-500 to-purple-400",
  },
  {
    name: "Ashif Ansari",
    position: "Curator",
    avatar: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Teams/WhatsApp%20Image%202025-07-13%20at%2010.07.36%20AM.jpeg?updatedAt=1752423556749",
    accent: "from-blue-500 to-cyan-400",
  },
  {
    name: "Shakil Mallik",
    position: "Social Media Head",
    avatar: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Teams/WhatsApp%20Image%202025-07-13%20at%2010.07.37%20AM.jpeg?updatedAt=1752423557133",
    accent: "from-fuchsia-500 to-rose-400",
  },
  {
    name: "Taanish Das Kashyap",
    position: "Team Lead PR",
    avatar: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Teams/WhatsApp%20Image%202025-07-13%20at%2010.07.37%20AM%20(1).jpeg?updatedAt=1752423556974",
    accent: "from-indigo-500 to-blue-400",
  },
  {
    name: "Manash Chakraborty",
    position: "Strategic Partnerships & Sponsorship Lead",
    avatar: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Teams/WhatsApp%20Image%202025-07-13%20at%2010.07.36%20AM%20(2).jpeg?updatedAt=1752423556961",
    accent: "from-yellow-500 to-orange-400",
  },
  {
    name: "Avadhut Giri",
    position: "Tech Lead ",
    avatar: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Teams/WhatsApp%20Image%202025-07-14%20at%2010.08.48%20PM%20(1).jpeg?updatedAt=1752616537677",
    accent: "from-emerald-500 to-teal-400",
  },
  {
    name: "Ratnadeep Roy",
    position: "Tech Co-Lead",
    avatar: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Teams/WhatsApp%20Image%202025-07-14%20at%2012.31.46%20AM.jpeg?updatedAt=1752433416520",
    accent: "from-purple-500 to-indigo-400",
  }
]

const TeamMemberCard = ({ member }: { member: typeof teamMembers[0]; index: number }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative flex flex-col items-center text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} group`}
      style={{ minHeight: 340 }}
    >
      <div className={`w-44 h-44 md:w-64 md:h-64 mb-4 rounded-full overflow-hidden border-4 border-white shadow-xl relative bg-gradient-to-br ${member.accent}`}>
        <Image src={member.avatar} alt={member.name} width={256} height={256} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className={`h-2 w-16 rounded-full mb-3 bg-gradient-to-r ${member.accent}`}></div>
      <h3 className="text-white font-bold text-xl md:text-2xl mb-1 drop-shadow-lg">{member.name}</h3>
      <p className="text-gray-300 text-base md:text-lg px-2 md:px-4">{member.position}</p>
    </div>
  );
};

const OrganizerCard = ({ member }: { member: typeof organizer[0]; index: number }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  // Check if this is Ratnadeep Roy
  const isRatnadeep = member.name === "Ratnadeep Roy";

  return (
    <div
      ref={ref}
      className={`relative flex flex-col items-center text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} group w-full max-w-xs mx-auto`}
    >
      <div className={`w-40 h-40 mb-4 rounded-full overflow-hidden border-4 border-white shadow-xl relative bg-gradient-to-br ${member.accent} ${isRatnadeep ? 'brightness-125' : ''}`}>
        <Image src={member.avatar} alt={member.name} width={160} height={160} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
        {/* Remove shadow overlay for Ratnadeep */}
        {!isRatnadeep && <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />}
      </div>
      <div className={`h-2 w-12 rounded-full mb-3 bg-gradient-to-r ${member.accent}`}></div>
      <h3 className="text-white font-bold text-base md:text-xl mb-1 drop-shadow-lg">{member.name}</h3>
      <p className="text-gray-300 text-xs md:text-base px-2 md:px-4">{member.position}</p>
    </div>
  );
};

const TedxTeamsPage = () => {
  return (
    <div className="bg-[#1c1c1c] text-white min-h-screen overflow-x-hidden">
      <section className="relative h-[60vh] w-[100vw] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full hero-bg"
          style={{
            backgroundImage: "url('https://ik.imagekit.io/ptcg0bvf3/TEDx/Others/sivasagar1.jpg?updatedAt=1752335873617')",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 1,
            filter: "contrast(1.15) saturate(1.3)",
          }}
        />
      </section>
      {/* Organizer Section */}
      <section className="py-12 bg-[#1c1c1c] px-2">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center mb-8">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
              <Users size={28} className="text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Meet the Organizers</h2>
            <p className="text-md text-gray-300 max-w-2xl text-center">The core team leading TEDx Assam University with vision and passion.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 pb-4 justify-center">
            {organizer.map((member, i) => (
              <OrganizerCard key={i} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-16 bg-[#1c1c1c]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
              <Users size={28} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Meet Our Teams</h2>
            <p className="text-lg text-gray-300 max-w-2xl text-center">Behind every successful TEDx event is a passionate team. Meet the creative minds and dedicated hearts that make TEDx Assam University possible.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-16 gap-x-8 md:gap-x-12 md:gap-y-24">
            {teamMembers.map((member, i) => (
              <TeamMemberCard key={i} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

       {/* Call to Action */}
       <section className="py-16 bg-red-600">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Be Part of the Movement</h2>
          <p className="text-xl text-red-100 mb-8">Join us in spreading ideas that matter. Whether you want to attend, volunteer, or partner with us, your journey starts here.</p>
          <Link href="/contact" className="inline-block bg-white text-red-600 px-10 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-colors transform hover:scale-105 shadow-2xl">Contact Us</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-gray-800 mt-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-red-500 mb-4">TEDx Assam University</h3>
              <p className="text-gray-400 mb-4">Bringing ideas worth spreading to the heart of Northeast India.</p>
              <div className="flex space-x-4">
                {/* Social icons can be added here */}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/about" className="hover:text-red-500 transition-colors">About</a></li>
                <li><a href="/speakers" className="hover:text-red-500 transition-colors">Speakers</a></li>
                <li><a href="/schedule" className="hover:text-red-500 transition-colors">Schedule</a></li>
                <li><Link href="/contact" className="hover:text-red-500 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center"><Mail className="w-4 h-4 mr-2" /><span>tedxassamuniversity@gmail.com </span></div>
                <div className="flex items-center"><Phone className="w-4 h-4 mr-2" /><span>+91 86384 24729</span></div>
                <div className="flex items-center"><MapPin className="w-4 h-4 mr-2" /><span>Assam University, Silchar</span></div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">Designed with ❤️ by TEDx Assam University Team | © 2025 All rights reserved</p>
            <p className="text-sm text-gray-500 mt-2">This independent TEDx event is operated under license from TED</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TedxTeamsPage; 