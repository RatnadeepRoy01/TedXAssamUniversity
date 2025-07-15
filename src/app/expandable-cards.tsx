"use client"

import { useEffect, useId, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useOutsideClick } from "./use-outside-click"
import Image from "next/image";

interface SpeakerPhotoGridProps {
  bgColor?: 'white' | 'black';
  showNameAndBioBelow?: boolean;
}

export default function SpeakerPhotoGrid(props: SpeakerPhotoGridProps) {
  const bgColor = props.bgColor ??'white';
  const showNameAndBioBelow = props.showNameAndBioBelow ?? false;
  const [active, setActive] = useState<(typeof speakers)[number] | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const id = useId()

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null)
      }
    }

    if (active) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [active])

  useOutsideClick(ref, () => setActive(null))

  return (
    <div className={`min-h-screen py-8 px-4 relative ${bgColor !== 'black' ? 'bg-white' : ''}`}>
      <div className="max-w-7xl mx-auto relative">

        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 z-50"
              style={{ backdropFilter: "blur(4px)" }}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {active && (
            <div className="fixed inset-0 grid place-items-center z-[100] p-4">
              <motion.button
                key={`button-${active.name}-${id}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.15 } }}
                className="flex absolute top-4 right-4 lg:top-2 lg:right-2 items-center justify-center bg-white rounded-full h-8 w-8 shadow-lg z-10"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>
              <motion.div
                layoutId={`card-${active.name}-${id}`}
                ref={ref}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20, transition: { duration: 0.2 } }}
                className={`w-full max-w-lg h-full md:h-fit md:max-h-[90%] flex flex-col rounded-3xl overflow-hidden shadow-2xl ${bgColor === 'black' ? 'bg-[#1c1c1c]' : 'bg-white'}`}
              >
                <div>
                  <Image
                    src={active.image || "/placeholder.svg"}
                    alt={active.name}
                    width={400}
                    height={320}
                    className="w-full h-64 md:h-80 object-contain bg-black"
                  />
                </div>
 
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold ${bgColor == 'black' ? 'text-white' : 'text-gray-900' } mb-2`}>{active.name}</h3>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ delay: 0.1 }}
                      className={`${bgColor == 'black' ? 'text-white' : 'text-gray-900' } text-sm leading-relaxed mb-6 max-h-40 overflow-y-auto`}
                    >
                      {active.bio}
                    </motion.div>
                    {active.about && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ delay: 0.15 }}
                        className={`${bgColor == 'black' ? 'text-gray-300' : 'text-gray-700'} text-sm leading-relaxed mb-6 max-h-40 overflow-y-auto`}
                      >
                        {active.about}
                      </motion.div>
                    )}
                  </div>

                  <motion.a
                    href={active.profileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: 0.15 }}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full text-center transition-colors"
                  >
                    View LinkedIn Profile
                  </motion.a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {speakers.map((speaker) => (
            <SpeakerCard
              key={speaker.id}
              speaker={speaker}
              showNameAndBioBelow={showNameAndBioBelow}
              bgColor={bgColor}
              onClick={setActive}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export const CloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 text-gray-600"
    >
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  )
}

function SpeakerCard({
  speaker,
  showNameAndBioBelow,
  bgColor,
  onClick,
}: {
  speaker: typeof speakers[number];
  showNameAndBioBelow: boolean;
  bgColor: string;
  onClick: (speaker: typeof speakers[number]) => void;
}) {
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
      key={speaker.id}
      ref={ref}
      onClick={() => onClick(speaker)}
      className={`group cursor-pointer transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}
      style={{ willChange: "transform" }}
    >
      <div className="aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
        <Image
          src={speaker.image || "/placeholder.svg"}
          alt={speaker.name}
          width={400}
          height={400}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      {showNameAndBioBelow && (
        <div className="mt-3 text-center px-2">
          <div className={`font-bold text-lg ${bgColor === 'black' ? 'text-white' : 'text-gray-900'}`}>{speaker.name}</div>
          <div className={`md:block hidden text-sm mt-1 ${bgColor === 'black' ? 'text-gray-300' : 'text-gray-700'}`}>{speaker.bio}</div>
        </div>
      )}
    </div>
  );
}

const speakers = [
  {
    id: 1,
    name: "Akhinchan Sarkar",
    image: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Speakers/WhatsApp%20Image%202025-07-10%20at%2010.24.45%20PM.jpeg?updatedAt=1752330353283",
    bio: "Additional Secretary, Finance Department. Government of Tripura",
    about: "Akhinchan Sarkar is a senior Indian Administrative Service officer currently serving as Additional Secretary in the Finance Department of the Government of Tripura. With a distinguished career in public administration, he has contributed to the financial planning and governance of the state, ensuring transparency and efficiency in public finance.",
    profileLink: "https://www.linkedin.com",
  },
  {
    id: 2,
    name: "I B Ubhadia",
    image: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Speakers/WhatsApp%20Image%202025-07-10%20at%2010.24.46%20PM%20(1).jpeg?updatedAt=1752330353257",
    bio: "General Manager, Rosekandy Tea Estate",
    about: "I B Ubhadia is the General Manager of Rosekandy Tea Estate, a renowned tea garden in Assam. With years of experience in tea estate management, he oversees the production and quality of premium teas, contributing to the region’s reputation for excellence in tea cultivation and export.",
    profileLink: "https://linkedin.com",
  },
  {
    id: 3,
    name: "Arghadeep Baruah",
    image: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Speakers/WhatsApp%20Image%202025-07-10%20at%2010.24.45%20PM%20(1).jpeg?updatedAt=1752330351849",
    bio: "Assamese Actor and Singer",
    about: "Arghadeep Baruah is a celebrated Assamese actor and singer, known for his versatile performances in Assamese cinema and music. He has starred in numerous acclaimed films and is recognized for his contributions to the cultural landscape of Assam through both acting and singing.",
    profileLink: "https://linkedin.com",
  },
  {
    id: 4,
    name: "Dr. Vijendra Singh Chauhan",
    image: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Speakers/WhatsApp%20Image%202025-07-10%20at%2010.24.46%20PM.jpeg?updatedAt=1752330351797",
    bio: "Associate Professor, Department of Hindi, Zakir Husain Delhi College, University of Delhi",
    about: "Dr. Vijendra Singh Chauhan is an Associate Professor in the Department of Hindi at Zakir Husain Delhi College, University of Delhi. With over 15 years of teaching experience, he specializes in media, literary history, and gender studies, and is a published author and public speaker.",
    profileLink: "https://linkedin.com/in",
  },
  {
    id: 5,
    name: "Dr. Pragati Singh",
    image: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Speakers/WhatsApp%20Image%202025-07-10%20at%2010.24.38%20PM.jpeg?updatedAt=1752330345395",
    bio: "Assistant Professor, NIT Mizoram",
    about: "Dr. Pragati Singh is an Assistant Professor at the National Institute of Technology (NIT) Mizoram. She is dedicated to advancing research and education in her field, mentoring students, and contributing to academic excellence. Dr. Singh is recognized for her commitment to fostering innovation and critical thinking among her students.",
    profileLink: "https://linkedin.com",
  },
  {
    id: 6,
    name: "Kanisqa Agarwal",
    image: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Speakers/WhatsApp%20Image%202025-07-10%20at%2010.24.39%20PM.jpeg?updatedAt=1752330345493",
    bio: "Senior Political Strategist",
    about: "Kanisqa Agarwal is a senior political strategist with extensive experience in policy analysis and campaign management. She has worked with various political organizations to develop effective strategies and drive impactful campaigns. Kanisqa is known for her analytical skills and her ability to navigate complex political landscapes.",
    profileLink: "https://linkedin.com",
  },
  {
    id: 7,
    name: "Sagar Tejwani",
    image: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Speakers/WhatsApp%20Image%202025-07-10%20at%2010.24.40%20PM.jpeg?updatedAt=1752330345480",
    bio: "Compliance Leader",
    about: "Sagar Tejwani is a compliance leader with expertise in regulatory affairs and risk management. He has worked with organizations to ensure adherence to industry standards and legal requirements. Sagar is known for his attention to detail and commitment to ethical business practices. His leadership helps organizations navigate complex compliance landscapes and maintain operational integrity.",
    profileLink: "https://linkedin.com",
  },
  {
    id: 8,
    name: "Sumit Dey",
    image: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Speakers/WhatsApp%20Image%202025-07-10%20at%2010.24.42%20PM.jpeg?updatedAt=1752330345440",
    bio: "Autonomous Driver",
    about: "Sumit Dey is an autonomous vehicle driver and technology enthusiast. He is passionate about the future of mobility and the integration of AI in transportation. Sumit advocates for safe and efficient autonomous driving solutions and is dedicated to promoting innovation in the automotive sector.",
    profileLink: "https://linkedin.com",
  },
  {
    id: 9,
    name: "Saiyam Mazumdar",
    image: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Speakers/WhatsApp%20Image%202025-07-10%20at%2010.24.43%20PM.jpeg?updatedAt=1752330345482",
    bio: "Motivational Speaker",
    about: "Saiyam Mazumdar is a motivational speaker known for sharing his story of courage, clarity, and commitment. He inspires audiences with his journey and insights on overcoming challenges. Saiyam is dedicated to empowering others to pursue their goals with determination and resilience.",
    profileLink: "https://linkedin.com",
  },
  {
    id: 10,
    name: "Dr Nilima Roy Chowdhury",
    image: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Speakers/WhatsApp%20Image%202025-07-10%20at%2010.24.43%20PM%20(1).jpeg?updatedAt=1752330345400",
    bio: "General Physician",
    about: "Dr. Nilima Roy Chowdhury is a respected general physician with years of experience in patient care. She is committed to providing comprehensive healthcare and improving community well-being. Dr. Chowdhury is known for her compassionate approach and dedication to her patients.",
    profileLink: "https://linkedin.com",
  },
  {
    id: 11,
    name: "Partha Pratim Saikia",
    image: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Speakers/WhatsApp%20Image%202025-07-10%20at%2010.24.44%20PM.jpeg?updatedAt=1752330351781",
    bio: "Assistant Professor, ICFAI University Agartala",
    about: "Partha Pratim Saikia is an Assistant Professor at ICFAI University, Agartala. He is passionate about teaching and research, contributing to the academic growth of his students. Partha is recognized for his innovative teaching methods and commitment to higher education.",
    profileLink: "https://linkedin.com",
  },
  {
    id: 12,
    name: "Lt Col K Sachin Singha",
    image: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Speakers/WhatsApp%20Image%202025-07-10%20at%2010.24.44%20PM%20(1).jpeg?updatedAt=1752330345489",
    bio: "Lieutenant Colonel, Indian Army",
    about: "Lt Col K Sachin Singha is a distinguished officer in the Indian Army, serving as a Lieutenant Colonel. He has demonstrated exemplary leadership and dedication to national service. Lt Col Singha is committed to upholding the values of the armed forces and inspiring the next generation of leaders.",
    profileLink: "https://linkedin.com",
  },
  {
    id: 13,
    name: "Tanmoy Acharjee",
    image: "https://ik.imagekit.io/ptcg0bvf3/TEDx/Speakers/WhatsApp%20Image%202025-07-15%20at%2011.32.01%20PM.jpeg?updatedAt=1752616510027",
    bio: "Doctoral Researcher, Marketing & Communication Expert, Digital Strategist, Co-Founder Ad Mandi R & AS",
    about: "Tanmoy Acharjee is a Doctoral Researcher and expert in marketing, communication, and digital strategy. As Co-Founder of Ad Mandi R & AS, he specializes in innovative marketing solutions and digital transformation.",
    profileLink: "https://linkedin.com",
  },

]

