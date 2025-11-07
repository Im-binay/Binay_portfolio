import React from 'react';
import UiImage from '../assets/images/ui.ux.jpg';
import courierTrackingImg from '../assets/images/Courier-Tracking.jpg';

const projects = [
  {
    title: 'Royal Rhino Rider Website',
    description: 'A professional UI design for the Royal Rider Rhino website.',
    link: 'https://www.figma.com/proto/xWMRIaZRgfXPB6aJ1V29SX/RRR?node-id=4-4&t=mMYhYnZo21d2vrZh-1',
    tech: ['Figma', 'Wireframe'],
    image: UiImage,
  },
  {
    title: 'Courier Tracking System',
    description: 'A web-based system to track and manage courier deliveries.',
    link: 'https://github.com/Im-binay/CourierTrackingProject',
    tech: ['Laravel', 'MySQL', 'Figma'],
    image: courierTrackingImg,
  },  
  {
    title: 'Demo College Ui Design',
    description: 'A platform connecting service seekers with local skilled professionals.',
    link: 'https://www.figma.com/proto/q8dZbHStkVHuaK33mcMehY/College-Website?node-id=1-3&t=RCWaGgqGTmo7bfJm-1',
    tech: ['Wireframe', 'Figma'],
    image: UiImage,
  },
];

export default function Project() {
  return (
    <section
      id="project"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 pb-10 bg-light text-dark"
    >
      <div className="w-full max-w-6xl mt-5 mx-auto text-center" data-aos="fade-in">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 mb-8 sm:mb-10">
          Projects
        </h1>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card flex flex-col items-center bg-white rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 p-4 sm:p-6"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {/* Project Image */}
              <div className="w-full rounded-xl overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 sm:h-44 object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-center text-lg sm:text-xl font-bold text-blue-800 mb-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-center text-gray-700 text-sm sm:text-base mb-3 sm:mb-4 px-2">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1 sm:gap-2 justify-center mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs sm:text-sm px-2 py-1 bg-blue-100 text-blue-700 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* View Project Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300 text-sm sm:text-base"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
  