import React from 'react';

import rrrUiImage from '../assets/images/ui.ux.jpg';
import skillHiringImg from '../assets/images/skill-hiring.jpg';
import courierTrackingImg from '../assets/images/Courier-Tracking.jpg';

const projects = [
  {
    title: 'Royal Rhino Rider Website',
    description: 'A professional UI design for the Royal Rider Rhino website.',
    link: 'https://yourportfolio.com',
    tech: ['Figma', 'Wireframe'],
    image: rrrUiImage,
  },
  {
    title: 'Courier Tracking System',
    description: 'A web-based system to track and manage courier deliveries.',
    link: 'https://github.com/Im-binay/CourierTrackingProject',
    tech: ['Laravel', 'MySQL', 'Figma'],
    image: courierTrackingImg,
  },  
  {
    title: 'Skill Hiring App',
    description: 'A platform connecting service seekers with local skilled professionals.',
    link: 'https://github.com/Im-binay/SkillHiringApp',
    tech: ['React Native', 'Firebase', 'Figma'],
    image: skillHiringImg,
  },
  
];

export default function Project() {
  return (
    <section
      id="project"
      className="min-h-screen flex items-center justify-center px-4 py-5 bg-light text-dark"
      
    >
      <div className="w-full max-w-6xl mt-10 mx-auto text-center" data-aos="fade-in">
        <h1 className="text-2xl md:text-4xl font-bold text-blue-800 underline mb-10" >
          Projects
        </h1>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 bg-blue-50"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              
              <p className="text-sm text-justify mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4 justify-center">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="tech-tag px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link text-blue-600 hover:text-blue-800 text-sm font-medium"
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
