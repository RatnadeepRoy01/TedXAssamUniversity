"use client"
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {  Calendar, MapPin,  Mail, Phone, Facebook, Instagram, Linkedin,  Clock,  Plus, Minus } from 'lucide-react';
import HeroSection from './heroSection';
import Image from 'next/image';
import SpeakerPhotoGrid from './expandable-cards';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// VideoOverlay component for intro video splash screen
const VideoOverlay: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [error, setError] = useState(false);
  const [showStartOverlay, setShowStartOverlay] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        setShowStartOverlay(true); // Show overlay if autoplay with audio fails
      });
    }
  }, []);

  const handleEnded = () => {
    setFadeOut(true);
    setTimeout(() => {
      setIsVisible(false);
      onFinish();
    }, 700);
  };

  const handleError = () => {
    setError(true);
    setFadeOut(true);
    setTimeout(() => {
      setIsVisible(false);
      onFinish();
    }, 700);
  };

  const handleStartClick = () => {
    setShowStartOverlay(false);
    const video = videoRef.current;
    if (video) {
      video.play();
    }
  };

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "black",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        pointerEvents: showStartOverlay ? "auto" : "none",
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.7s ease"
      }}
    >
      {!error ? (
        <video
          ref={videoRef}
          src="https://ik.imagekit.io/ptcg0bvf3/TEDx/ted___intro_animation%20(720p)%20(1)%20(online-video-cutter.com)%20(1).mp4?updatedAt=1752327569691"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "fill",
            backgroundColor: "black"
          }}
          autoPlay
          muted
          playsInline
          preload="auto"
          controls={false}
          onEnded={handleEnded}
          onError={handleError}
          tabIndex={-1}
        />
      ) : (
        <div style={{ color: "white", fontSize: "1.5rem", textAlign: "center" }}>
          Sorry, the intro video could not be loaded.
        </div>
      )}
      {showStartOverlay && !error && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            zIndex: 10000,
            cursor: "pointer"
          }}
          onClick={handleStartClick}
        >
          <span style={{ color: "white", fontSize: "2rem", fontWeight: 600, marginBottom: "1rem", textShadow: "0 2px 8px #000" }}>
            Click to Start
          </span>
          <span style={{ color: "#e62b1e", fontSize: "1.2rem", textShadow: "0 2px 8px #000" }}>
            (Audio will play)
          </span>
        </div>
      )}
    </div>
  );
};

const TedxLanding: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const keywordRef = useRef<HTMLSpanElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const countdownRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const speakersRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  // const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // const [activeTimelineItem, setActiveTimelineItem] = useState<number | null>(null);
  const [cursorVariant, setCursorVariant] = useState('default');
  const [showMain, setShowMain] = useState(false);
  
  const eventDate = useMemo(() => new Date('2025-07-19T09:00:00'), [])

  // const speakers = [
  //   { name: 'Dr. Priya Sharma', title: 'AI Research Scientist', image: '/api/placeholder/300/400', social: { linkedin: '#', twitter: '#' } },
  //   { name: 'Arjun Patel', title: 'Social Entrepreneur', image: '/api/placeholder/300/400', social: { linkedin: '#', twitter: '#' } },
  //   { name: 'Maya Krishnan', title: 'Environmental Activist', image: '/api/placeholder/300/400', social: { linkedin: '#', twitter: '#' } },
  //   { name: 'Ravi Kumar', title: 'Tech Innovator', image: '/api/placeholder/300/400', social: { linkedin: '#', twitter: '#' } },
  //   { name: 'Sana Ali', title: 'Healthcare Pioneer', image: '/api/placeholder/300/400', social: { linkedin: '#', twitter: '#' } },
  //   { name: 'Kiran Desai', title: 'Education Reformer', image: '/api/placeholder/300/400', social: { linkedin: '#', twitter: '#' } }
  // ];

  const timelineEvents = [
    { time: '09:00 AM', title: 'Registration & Welcome', description: 'Check-in and networking breakfast' },
    { time: '10:00 AM', title: 'Opening Ceremony', description: 'Welcome address and TEDx introduction' },
    { time: '10:30 AM', title: 'Speaker Session 1', description: 'First set of inspiring talks' },
    { time: '12:00 PM', title: 'Lunch Break', description: 'Networking lunch and exhibition' },
    { time: '01:30 PM', title: 'Speaker Session 2', description: 'Second set of transformative talks' },
    { time: '03:00 PM', title: 'Interactive Workshop', description: 'Hands-on innovation workshop' },
    { time: '04:30 PM', title: 'Panel Discussion', description: 'Future of innovation in Northeast India' },
    { time: '05:30 PM', title: 'Closing Ceremony', description: 'Wrap-up and networking reception' }
  ];

  // const testimonials = [
  //   { name: 'Ananya Bharadwaj', role: 'Student, Computer Science', quote: 'TEDx Assam University changed my perspective on innovation. The speakers were absolutely inspiring!' },
  //   { name: 'Prof. Rajesh Mehta', role: 'Faculty, Engineering', quote: 'One of the most thought-provoking events I\'ve attended. The ideas shared will shape our future.' },
  //   { name: 'Shreya Choudhury', role: 'Alumni, Management', quote: 'The energy and passion at TEDx AU was infectious. It motivated me to pursue my entrepreneurial dreams.' },
  //   { name: 'Dr. Kamal Singh', role: 'Research Scholar', quote: 'Excellent platform for knowledge sharing and networking. Looking forward to the next edition!' }
  // ];

  const faqs = [
    { question: 'What is TEDx?', answer: 'TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDx Assam University, where x = independently organized TED event.' },
    { question: 'How much do tickets cost?', answer: 'Tickets are priced at ₹500 for students and ₹1000 for professionals. Early bird discounts are available!' },
    { question: 'What should I bring?', answer: 'Just bring yourself and an open mind! We\'ll provide all materials, refreshments, and a memorable experience.' },
    { question: 'Is parking available?', answer: 'Yes, free parking is available on campus. We also have shuttle services from the main gate.' },
    { question: 'Can I get a certificate?', answer: 'Yes, all attendees will receive a digital certificate of participation.' },
    { question: 'What if I can\'t attend physically?', answer: 'We\'ll be live streaming the event. Registration links will be shared closer to the date.' }
  ];

  useEffect(() => {
    if (!showMain) return; // Only start timer when main content is shown

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;
      
      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [eventDate, showMain]);

  // useEffect(() => {
  //   const keywordInterval = setInterval(() => {
  //     setCurrentKeyword((prev) => (prev + 1) % keywords.length);
  //   }, 2000);
  //   return () => clearInterval(keywordInterval);
  // }, []);

  // useEffect(() => {
  //   const testimonialInterval = setInterval(() => {
  //     setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  //   }, 4000);
  //   return () => clearInterval(testimonialInterval);
  // }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleTimelineHover = (index: number, isHovering: boolean) => {
    // setActiveTimelineItem(isHovering ? index : null);
    setCursorVariant(isHovering ? 'timeline' : 'default');
    
    if (isHovering) {
      gsap.to(`.timeline-item-${index}`, {
        x: 20,
        duration: 0.3,
        ease: 'power2.out'
      });
    } else {
      gsap.to(`.timeline-item-${index}`, {
        x: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
  };


  useEffect(() => {
    // Custom cursor animation
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        x: mousePosition.x,
        y: mousePosition.y,
        duration: 0.1,

        ease: "power2.out"
      });
    }
  }, [mousePosition]);

  useEffect(() => {
    if (!showMain) return;
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      // Disable all GSAP/ScrollTrigger animations on mobile
      return;
    }
    let ctx: gsap.Context | undefined;
    if (typeof window !== 'undefined') {
      ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: heroSectionRef.current,
          start: 'top 80%',
          once: true,
          onEnter: () => {
            const tl = gsap.timeline();
            tl.from(titleRef.current, {
              duration: 1.5,
              y: 100,
              opacity: 0,
              ease: 'power3.out',
            })
              .from(
                subtitleRef.current,
                {
                  duration: 1,
                  y: 50,
                  opacity: 0,
                  ease: 'power2.out',
                },
                '-=0.5'
              )
              .from(
                keywordRef.current,
                {
                  duration: 0.8,
                  scale: 0,
                  opacity: 0,
                  ease: 'back.out(1.7)',
                },
                '-=0.3'
              );
          },
        });
      }, heroSectionRef);
    }
    return () => ctx && ctx.revert();
  }, [showMain]);

  useEffect(() => {
    if (!showMain) return;
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      // Disable all GSAP/ScrollTrigger animations on mobile
      return;
    }
    // Floating scroll indicator
    gsap.to(scrollIndicatorRef.current, {
      y: 20,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });

    // Keyword rotation animation
    gsap.to(keywordRef.current, {
      rotationY: 360,
      duration: 0.5,
      repeat: -1,
      repeatDelay: 1.5,
      ease: "power2.inOut"
    });

    // ScrollTrigger animations
    ScrollTrigger.create({
      trigger: countdownRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.from(countdownRef.current && countdownRef.current?.children, {
          duration: 1,
          y: 50,
          opacity: 0,
          stagger: 0.1,
          ease: "power2.out"
        });
      }
    });

    // About Section: Text from left, image from right (and alternate)
    if (aboutRef.current) {
      const aboutChildren = aboutRef.current.querySelectorAll('.about-row');
      aboutChildren.forEach((row: Element, idx: number) => {
        const text = row.querySelector('.about-text');
        const img = row.querySelector('.about-img');
        if (text) {
          gsap.from(text, {
            x: idx % 2 === 0 ? -120 : 120,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: row,
              start: 'top 80%',
              once: true,
            },
          });
        }
        if (img) {
          gsap.from(img, {
            x: idx % 2 === 0 ? 120 : -120,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: row,
              start: 'top 80%',
              once: true,
            },
          });
        }
      });
    }

    ScrollTrigger.create({
      trigger: speakersRef.current,
      start: "top 70%",
      onEnter: () => {
        gsap.from(speakersRef.current && speakersRef.current?.querySelectorAll('.speaker-card'), {
          duration: 1,
          x: -100,
          opacity: 0,
          stagger: 0.2,
          ease: "power2.out"
        });
      }
    });

    ScrollTrigger.create({
      trigger: timelineRef.current,
      start: 'top 70%',
      onEnter: () => {
        gsap.fromTo(timelineRef.current &&timelineRef.current?.querySelectorAll('.timeline-item'),
          { x: 100, opacity: 0 },
          {
            duration: 1,
            x: 0,
            opacity: 1,
            stagger: 0.15,
            ease: 'power2.out'
          }
        );
      }
    });


    ScrollTrigger.create({
      trigger: galleryRef.current,
      start: "top 70%",
      onEnter: () => {
        gsap.from(galleryRef.current && galleryRef.current?.querySelectorAll('.gallery-item'), {
          duration: 1,
          scale: 0,
          opacity: 0,
          stagger: 0.1,
          ease: "back.out(1.7)"
        });
      }
    });

    ScrollTrigger.create({
      trigger: testimonialsRef.current,
      start: "top 70%",
      onEnter: () => {
        gsap.from(testimonialsRef.current && testimonialsRef.current?.children, {
          duration: 1,
          y: 50,
          opacity: 0,
          stagger: 0.1,
          ease: "power2.out"
        });
      }
    });

    ScrollTrigger.create({
      trigger: ctaRef.current,
      start: "top 70%",
      onEnter: () => {
        gsap.from(ctaRef.current && ctaRef.current?.children, {
          duration: 1.2,
          scale: 0.8,
          opacity: 0,
          stagger: 0.1,
          ease: "back.out(1.7)"
        });
      }
    });

    ScrollTrigger.create({
      trigger: faqRef.current,
      start: "top 70%",
      onEnter: () => {
        gsap.from(faqRef.current &&faqRef.current?.querySelectorAll('.faq-item'), {
          duration: 1,
          x: -50,
          opacity: 0,
          stagger: 0.1,
          ease: "power2.out"
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [showMain]);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Show main content after video overlay
  const handleVideoFinish = () => {
    setShowMain(true);
  };

  return (
    <>
      {!showMain && <VideoOverlay onFinish={handleVideoFinish} />}
      {showMain && (
        <div className="bg-[#1c1c1c] text-white overflow-hidden relative">
          {/* Custom Cursor */}
          <div
            ref={cursorRef}
            className="fixed bg-red-500 rounded-full pointer-events-none z-50 mix-blend-difference md:block hidden"
            style={{
              transform: 'translate(-50%, -50%)',
              width: cursorVariant === 'hover' ? '60px' : '24px',
              height: cursorVariant === 'hover' ? '60px' : '24px',
              transition: 'width 0.2s, height 0.2s',
            }}
          />

          {/* Hero Section */}
          <div ref={heroSectionRef}>
            <HeroSection setCursorVariant={setCursorVariant} />
          </div>

          {/* Countdown Timer */}
          <section ref={countdownRef} className="py-20 bg-[#1c1c1c] qw">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-red-500">Event Countdown</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="bg-[#1c1c1c] p-8 rounded-lg border border-red-500/30 hover:border-red-500 transition-colors">
                    <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">{value}</div>
                    <div className="text-gray-300 uppercase tracking-wide">{unit}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

    <section ref={aboutRef} className="py-20 bg-[#1c1c1c]">
      <div className="container mx-auto md:px-24 px-4">
        {/* Section 1: Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-12 items-center md:mb-24 mb-12 about-row">
          <div className="about-text">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-red-500"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >About TEDx</h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              TEDx Assam University is an independently organized TED event that brings together brilliant minds,
              innovative ideas, and transformative stories from across Northeast India and beyond.
            </p>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              Our mission is to foster a culture of innovation, creativity, and intellectual curiosity within
              our academic community and the broader region. We believe that ideas have the power to change
              the world, and wewe&apos;re here to amplify those voices.
            </p>
            <div className="flex items-center space-x-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">500+</div>
                <div className="text-gray-400">Attendees</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">12</div>
                <div className="text-gray-400">Speakers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">8</div>
                <div className="text-gray-400">Hours</div>
              </div>
            </div>
          </div>
          <div className="relative about-img">
            <Image
              src="https://www.jconline.com/gcdn/-mm-/4c04e1f05f3ce3c71fe2015bd223778ae372279e/c=0-255-4896-3009/local/-/media/LafayetteIN/2014/11/22/B9315214526Z.1_20141122180250_000+GP89745S0.1-0.jpg?width=3200&height=1800&fit=crop&format=pjpg&auto=webp"
              alt="TEDx Event"
              width={800}
              height={400}
              unoptimized
              priority
              className="md:w-[800px] md:h-[400px] w-[600px] h-[200px] object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>
        </div>

        {/* Section 2: Image Left, Text Right */}
        <div className="grid md:grid-cols-2 gap-12 items-center about-row">
          <div className="relative order-2 md:order-1 md:mb-24 about-img">
            <Image
              src="https://communityrights.us/wp-content/uploads/2019/11/Ted-X.jpg"
              alt="Community Impact"
              className="md:w-[800px] w-[600px] md:h-[400px] h-[200px]  object-cover rounded-lg shadow-2xl"
              width={800}
              height={400}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>
          <div className="order-1 md:order-2 about-text">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-red-500"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >Voices that Inspire</h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              Each TEDx talk is a story of change, challenge, or creativity. From students with bold visions
              to professionals leading revolutions in their fields — our speakers leave a lasting impact.
            </p>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              TEDxAssamUniversity aims to be a platform where unheard voices resonate, sparking conversation
              and encouraging action in our region and beyond.
            </p>
            <div className="flex items-center space-x-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">100K+</div>
                <div className="text-gray-400">YouTube Views</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">30+</div>
                <div className="text-gray-400">Volunteers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">∞</div>
                <div className="text-gray-400">Ideas Shared</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


        {/* Speakers Showcase */}
        <section ref={speakersRef} className="py-24 bg-[#1c1c1c] qw">
          <div className="container mx-auto md:px-24 px-4 flex justify-center">
            {/* <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-red-500">Our Speakers</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {speakers.map((speaker, index) => (
                <div key={index} className="speaker-card group">
                  <div className="bg-[#1c1c1c] rounded-lg overflow-hidden border border-gray-800 hover:border-red-500 transition-all duration-300 transform hover:scale-105">
                    <div className="relative overflow-hidden">
                      <img 
                        src={speaker.image} 
                        alt={speaker.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex space-x-4">
                          <Linkedin className="w-6 h-6 text-red-500 hover:text-white cursor-pointer" />
                          <Twitter className="w-6 h-6 text-red-500 hover:text-white cursor-pointer" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-white">{speaker.name}</h3>
                      <p className="text-gray-400">{speaker.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}

    <div className="relative w-[90%] aspect-video rounded-lg overflow-hidden shadow-2xl border border-gray-700">
    <iframe
        src="https://www.youtube.com/embed/JSP7GPU3Eic?controls=0"
        title="TEDx Intro Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        className="w-full h-full"
      ></iframe>
    </div>

          </div>
        </section>



    <section ref={timelineRef} className="py-20 bg-[#1c1c1c]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-red-500"
          onMouseEnter={() => setCursorVariant('hover')}
          onMouseLeave={() => setCursorVariant('default')}
        >Event Timeline</h2>
        <div className="max-w-4xl mx-auto">
          {timelineEvents.map((event, index) => (
            <div 
              key={index} 
              className={`timeline-item timeline-item-${index} flex items-center mb-8 group cursor-pointer`}
              onMouseEnter={() => handleTimelineHover(index, true)}
              onMouseLeave={() => handleTimelineHover(index, false)}
            >
              <div className="flex-shrink-0 w-32 text-right mr-8">
                <div className="text-xl font-bold text-red-500 group-hover:text-white transition-colors">
                  {event.time}
                </div>
              </div>
              <div className="flex-shrink-0 w-4 h-4 bg-red-500 rounded-full mr-8 relative group-hover:scale-150 transition-transform">
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gray-700 group-hover:bg-red-500 transition-colors" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-red-500 transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Gallery */}
    {/* <section ref={galleryRef} className="py-20 bg-[#1c1c1c] qw">
      <div className="container mx-auto md:px-24 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-red-500">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="gallery-item group relative overflow-hidden rounded-lg">
              <img 
                src={`/api/placeholder/400/300`} 
                alt={`Gallery ${index + 1}`}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Play className="w-12 h-12 text-red-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section> */}

    {/* Testimonials */}
    {/* <section ref={testimonialsRef} className="py-20 bg-[#1c1c1c]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-red-500"
          onMouseEnter={() => setCursorVariant('hover')}
          onMouseLeave={() => setCursorVariant('default')}
        >What People Say</h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-8">
                  <div className="bg-[#1c1c1c] qw p-8 rounded-lg border border-gray-800 text-center">
                    <div className="flex justify-center mb-6">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-red-500 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-xl text-gray-300 mb-6 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="text-red-500 font-bold text-lg">{testimonial.name}</div>
                    <div className="text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-red-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section> */}

    {/* CTA Section */}
    <section ref={ctaRef} className="py-20 bg-red-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8"
          onMouseEnter={() => setCursorVariant('hover')}
          onMouseLeave={() => setCursorVariant('default')}
        >Get Your Tickets Now</h2>
        <p className="text-xl md:text-2xl mb-12 text-red-100 max-w-2xl mx-auto"
          onMouseEnter={() => setCursorVariant('hover')}
          onMouseLeave={() => setCursorVariant('default')}
        >
         Don&apos;t miss this opportunity to be part of something extraordinary. Limited seats available!
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSd43MK5bTGJjG1zFvTQZFwQyGdlMpgMXQltBeYClAyjkmawmw/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-red-600 px-12 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-colors transform hover:scale-105 shadow-2xl inline-block"
        >
          Book Tickets
        </a>
        <div className="mt-12 flex justify-center items-center space-x-8 text-red-100">
          <div className="flex items-center">
            <Calendar className="w-6 h-6 mr-2" />
            <span>July 19, 2025</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-6 h-6 mr-2" />
            <span>Assam University, Silchar</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-6 h-6 mr-2" />
            <span>9:00 AM - 6:00 PM</span>
          </div>
        </div>
      </div>
    </section>

    <SpeakerPhotoGrid/>

    {/* FAQ Section */}
    <section ref={faqRef} className="py-20 bg-[#1c1c1c]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-red-500"
          onMouseEnter={() => setCursorVariant('hover')}
          onMouseLeave={() => setCursorVariant('default')}
        >Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 bg-[#1c1c1c] qw hover:bg-gray-800 rounded-lg border border-gray-800 hover:border-red-500 transition-colors flex justify-between items-center"
              >
                <span className="text-xl font-semibold text-white"
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                >{faq.question}</span>
                {openFAQ === index ? (
                  <Minus className="w-6 h-6 text-red-500" />
                ) : (
                  <Plus className="w-6 h-6 text-red-500" />
                )}
              </button>
              {openFAQ === index && (
                <div className="p-6 bg-gray-800 rounded-b-lg border-x border-b border-gray-700">
                  <p className="text-gray-300 leading-relaxed"
                    onMouseEnter={() => setCursorVariant('hover')}
                    onMouseLeave={() => setCursorVariant('default')}
                  >{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer ref={footerRef} className="py-12 bg-black qw border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-red-500 mb-4"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >TEDx Assam University</h3>
            <p className="text-gray-400 mb-4"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              Bringing ideas worth spreading to the heart of Northeast India.
            </p>
            <div className="flex space-x-4">
            <a href="https://www.facebook.com/people/TEDx-Assam-University/61575100324423/#" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
              </a>
              <a href="https://www.instagram.com/tedx.assamuniversity" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
              </a>
              <a href="https://www.linkedin.com/company/tedx-assam-university/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
              </a>
              <a href="https://youtube.com/@tedxassamuniversity?si=mm9PSgG2uj0AuONh" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.117C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.391.569A2.994 2.994 0 0 0 .502 6.186C0 8.36 0 12 0 12s0 3.64.502 5.814a2.994 2.994 0 0 0 2.107 2.117C4.772 20.5 12 20.5 12 20.5s7.228 0 9.391-.569a2.994 2.994 0 0 0 2.107-2.117C24 15.64 24 12 24 12s0-3.64-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-red-500 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Speakers</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Schedule</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Tickets</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >Contact</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>tedxassamuniversity@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span> 86384 24729</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Assam University, Silchar</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400"
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            Designed with ❤️ by TEDx Assam University Team | © 2025 All rights reserved
          </p>
          <p className="text-sm text-gray-500 mt-2"
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            This independent TEDx event is operated under license from TED
          </p>
        </div>
      </div>
    </footer>
  </div>
      )}
    </>
  );
};


export default TedxLanding;
