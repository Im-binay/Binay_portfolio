import React, { useState, useEffect } from 'react';
import UiImage from '../assets/images/ui.ux.jpg';
import courierTrackingImg from '../assets/images/Courier-Tracking.jpg';

const projects = [
  {
    title: 'Royal Rhino Rider Website',
    description:
      'A professional UI design for the Royal Rider Rhino website. Modern typography, consistent color palette, and a clean layout focused on user experience.',
    problem:
      'The client needed a modern, user-friendly website to showcase their riding services. Users wanted clear information and easy navigation.',
    research: [
      'Analyzed competitor websites for strengths and weaknesses.',
      'Interviewed stakeholders to identify key user goals.',
      'Mapped user journey for better content placement.'
    ],
    takeaways:
      'Learned how to combine visual aesthetics with usability, creating a functional and engaging user interface.',
    tech: ['Figma', 'Wireframe'],
    image: UiImage,
    link: 'https://www.figma.com/proto/xWMRIaZRgfXPB6aJ1V29SX/RRR?node-id=4-4&t=mMYhYnZo21d2vrZh-1',
  },
  {
    title: 'Courier Tracking System',
    description:
      'A web-based system to track and manage courier deliveries efficiently. Consistent tables, alerts, and color-coded status indicators ensure clarity and ease of use.',
    problem:
      'Users needed a reliable way to track courier packages and delivery status. The system had to reduce errors and improve user confidence.',
    research: [
      'Studied existing tracking platforms for usability.',
      'Mapped user flow to simplify package tracking.',
      'Collected feedback from delivery personnel for practical insights.'
    ],
    takeaways:
      'Enhanced ability to display complex information clearly and streamline backend integration with a user-friendly front-end.',
    tech: ['Laravel', 'HTML', 'CSS', 'Figma'],
    image: courierTrackingImg,
    link: 'https://github.com/Im-binay/CourierTrackingProject',
  },
  {
    title: 'Kaarighar: Skill Hiring App',
    description:
      'A platform connecting service seekers with local skilled professionals. Minimalist UI with cards for professionals, clean typography, and mobile-first design.',
    problem:
      'Local professionals struggled to showcase their skills online effectively. Users needed a simple way to connect with potential clients, and the platform had to streamline hiring and job requests.',
    research: [
      'Surveyed potential users to understand needs.',
      'Mapped job request and hiring flows.',
      'Analyzed competitor apps for inspiration.'
    ],
    takeaways:
      'Balanced user needs with visual hierarchy and mobile usability, ensuring a smooth, intuitive experience.',
    tech: ['Wireframe', 'Figma'],
    image: UiImage,
    link: 'https://www.figma.com/design/Dy6PpbhAU0voKti6r2ZDXj/KaariGhar?node-id=0-1&t=u33idKA1h9zyODBN-1',
  },
];

export default function Project() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detect dark mode class on body
  useEffect(() => {
    const body = document.body;
    const observer = new MutationObserver(() => {
      setIsDarkMode(body.classList.contains('dark-mode'));
    });
    observer.observe(body, { attributes: true, attributeFilter: ['class'] });
    setIsDarkMode(body.classList.contains('dark-mode'));
    return () => observer.disconnect();
  }, []);

  // Open modal with fade-in
  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  // Close modal with fade-out
  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => setSelectedProject(null), 300); // match transition duration
  };

  return (
    <section
      id="project"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 pb-10 transition-colors duration-500"
    >
      <div className="w-full max-w-6xl mt-5 mx-auto text-center" data-aos="fade-in">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 transition-colors duration-500" style={{ color: isDarkMode ? '#60a5fa' : '#1d4ed8' }}>
          Projects
        </h1>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card flex flex-col items-center rounded-3xl shadow-lg transform transition-all duration-300 p-4 sm:p-6 cursor-pointer"
              style={{
                backgroundColor: isDarkMode ? '#2d3748' : '#fff',
                color: isDarkMode ? '#e2e8f0' : '#1f2937',
                boxShadow: isDarkMode ? '0 4px 12px rgba(0,0,0,0.3)' : '0 4px 12px rgba(0,0,0,0.1)',
              }}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              onClick={() => openModal(project)}
            >
              <div className="w-full rounded-xl overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 sm:h-44 md:h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <h3 className="text-center text-lg sm:text-xl md:text-2xl font-bold mb-2" style={{ color: isDarkMode ? '#60a5fa' : '#1d4ed8' }}>
                {project.title}
              </h3>

              <p className="text-center text-sm sm:text-base md:text-base mb-3 sm:mb-4 px-2">{project.description}</p>

              <div className="flex flex-wrap gap-1 sm:gap-2 justify-center mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs sm:text-sm px-2 py-1 rounded-full font-medium"
                    style={{
                      backgroundColor: isDarkMode ? '#4a5568' : '#bfdbfe',
                      color: isDarkMode ? '#60a5fa' : '#1d4ed8',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button
                className="mt-auto font-semibold transition-colors duration-300 text-sm sm:text-base"
                style={{ color: isDarkMode ? '#60a5fa' : '#1d4ed8' }}
              >
                View Project →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 p-2 sm:p-4 transition-opacity duration-300 ${showModal ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          style={{ backgroundColor: isDarkMode ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0.5)' }}
          onClick={closeModal}
        >
          <div
            className={`rounded shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-4 sm:p-6 md:p-8 relative transition-all duration-300 transform ${showModal ? 'scale-100' : 'scale-95'}`}
            style={{
              backgroundColor: isDarkMode ? '#404a5c' : '#fff',
              color: isDarkMode ? '#e2e8f0' : '#1f2937',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 sm:top-3 right-2 sm:right-3 font-bold transition-colors duration-300"
              style={{ color: isDarkMode ? '#e2e8f0' : '#1f2937', fontSize: '2.5rem' }}
              onClick={closeModal}
            >
              ×
            </button>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: isDarkMode ? '#60a5fa' : '#1d4ed8' }}>
              {selectedProject.title}
            </h2>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-40 sm:h-56 md:h-64 object-cover rounded-xl mb-4"
            />

            <p className="mb-3 text-justify">{selectedProject.description}</p>

            <p className="mb-1 text-lg sm:text-xl md:text-xl font-semibold" style={{ color: isDarkMode ? '#60a5fa' : '#1d4ed8' }}>
              Problem:
            </p>
            <p className="mb-4 text-justify">{selectedProject.problem}</p>

            <p className="mb-1 text-lg sm:text-xl md:text-xl font-semibold" style={{ color: isDarkMode ? '#60a5fa' : '#1d4ed8' }}>
              Research:
            </p>
            <ul className="list-disc list-inside mb-4">
              {selectedProject.research.map((point, i) => (
                <li key={i} className="text-justify">{point}</li>
              ))}
            </ul>

            <p className="mb-1 text-lg sm:text-xl md:text-xl font-semibold" style={{ color: isDarkMode ? '#60a5fa' : '#1d4ed8' }}>
              Takeaways & Design System:
            </p>
            <p className="mb-2 text-justify">{selectedProject.takeaways}</p>

            <div className="flex justify-end mt-4">
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg font-semibold transition-colors duration-300"
                style={{
                  backgroundColor: isDarkMode ? '#2563eb' : '#1d4ed8',
                  color: '#fff',
                }}
              >
                View Full Figma
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
