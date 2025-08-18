import React, { useState, useLayoutEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Linkedin, User } from 'lucide-react';
import './teamcarousel.css'; // Your CSS file

const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewSettings, setViewSettings] = useState({
    membersPerSlide: 4, // Default value
    lastIndex: 0,
  });

  // Refs to measure the DOM elements
  const trackRef = useRef(null);
  const containerRef = useRef(null);

  const teamMembers = [
    // Your teamMembers array remains the same...
    { id: 1, name: "Anubhav Prasad", title: "Founder & CEO", image: "/asset/team/anubhav.jpg", hasLinkedIn: true, linkedinUrl: "https://www.linkedin.com/in/anubhav-prasad-3a843759/" },
    { id: 2, name: "Mukesh Prasad", title: "Director, India", image: "/asset/team/mukesh.jpg", hasLinkedIn: true, linkedinUrl:"https://www.linkedin.com/in/mukesh-prasad-649a048a/" },
    { id: 3, name: "Col. Ajay Singh(Retd.)", title: "Director, India", image: "/asset/team/ajay.jpg", hasLinkedIn: true, linkedinUrl:"https://www.linkedin.com/in/col-ajay-singh-veteran-a9b765129/" },
    { id: 4, name: "Tanner Smith", title: "Managing Partner USA & VP SportsCove", image: "/asset/team/tanner.jpg", hasLinkedIn: true, linkedinUrl:"https://www.linkedin.com/in/tanner-smith-153682329/" },
    { id: 5, name: "Andrew Tanner", title: "Managing Partner, USA", image: "/asset/team/andrew.jpg", hasLinkedIn: true, linkedinUrl:"" },
    { id: 6, name: "Deepa Raj", title: "VP of Engineering & Technology", image: "/asset/team/deepa.jpg", hasLinkedIn: true, linkedinUrl:"https://www.linkedin.com/in/deepa-raj-b30467121/" },
    { id: 7, name: "Ira Prasad", title: "UX Designer", image: "/asset/team/ira.jpg", hasLinkedIn: true, linkedinUrl:"https://www.linkedin.com/in/ira-prasad-5ba77016a/" },
    { id: 8, name: "Lakshmi Pratap", title: "UX Designer", image: "/asset/team/lakshmi.jpg", hasLinkedIn: true, linkedinUrl:"https://www.linkedin.com/in/lakshmi-pratap/" },
    { id: 9, name: "Akhil Kumar", title: "Social Media Manager", image: "/asset/team/akhil.jpg", hasLinkedIn: true, linkedinUrl:"https://www.linkedin.com/in/akhil-kumar-971a94100/" },
    { id: 10, name: "Olivia Mary James", title: "Software Development Engineering Intern", image: "/asset/team/olivia.jpg", hasLinkedIn: true, linkedinUrl:"https://www.linkedin.com/in/olivia-mary-james-533a98268/" },
    { id: 11, name: "Poojitha Sharan", title: "Programs & Services Head", image: "/asset/team/poojitha.jpg", hasLinkedIn: true, linkedinUrl:"https://www.linkedin.com/in/poojita-sharan/" },
  ];

  // This effect runs after the component mounts and on window resize
  useLayoutEffect(() => {
    const handleResize = () => {
      if (trackRef.current && containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        // The width of a single item is its own width plus the gap from CSS
        const itemWidth = trackRef.current.children[0].offsetWidth;
        const gap = parseInt(window.getComputedStyle(trackRef.current).gap) || 20;

        // Calculate how many full items can fit
        const membersPerSlide = Math.floor(containerWidth / (itemWidth + gap));
        const newLastIndex = teamMembers.length - membersPerSlide;

        setViewSettings({ membersPerSlide, lastIndex: newLastIndex });

        // Safety check: if current index is out of bounds, reset it
        if (currentIndex > newLastIndex) {
          setCurrentIndex(newLastIndex);
        }
      }
    };

    handleResize(); // Run on initial render
    window.addEventListener('resize', handleResize); // Add listener for window resize

    // Cleanup function to remove the listener
    return () => window.removeEventListener('resize', handleResize);
  }, [teamMembers.length, currentIndex]); // Rerun if these change

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, viewSettings.lastIndex));
  };

  // The cardWidth and gap are now only used for the transform calculation
  const cardWidth = 360; 
  const gap = 20; 

  return (
    <section className="team-section">
      <h2 className="team-heading">Meet Our Team</h2>
      <div className="carousel-wrapper">
        {currentIndex > 0 && (
          <button className="carousel-nav carousel-nav-left" onClick={prevSlide}>
            <ChevronLeft size={24} />
          </button>
        )}

        {/* Add the ref to the container */}
        <div className="carousel-container" ref={containerRef}>
          {/* Add the ref to the track */}
          <div
            className="carousel-track"
            ref={trackRef}
            style={{
              transform: `translateX(-${currentIndex * (cardWidth + gap)}px)`,
            }}
          >
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                {/* Card content remains the same... */}
                <div className="card-image">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="member-photo" />
                  ) : (
                    <div className="placeholder-image"><User size={48} /></div>
                  )}
                </div>
                <div className="carousel-card-content">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-title">{member.title}</p>
                  {member.hasLinkedIn && member.linkedinUrl && (
                    <div className="linkedin-icon">
                      <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer">
                        <Linkedin size={20} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {currentIndex < viewSettings.lastIndex && (
          <button className="carousel-nav carousel-nav-right" onClick={nextSlide}>
            <ChevronRight size={24} />
          </button>
        )}
        {/* 👇 ADD THIS EMPTY DIV AT THE END 👇 */}
        <div className="carousel-spacer"></div>
      </div>
    </section>
  );
};

export default TeamCarousel;