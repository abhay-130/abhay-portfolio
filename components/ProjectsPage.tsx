
import React from 'react';
import { Link } from 'react-router-dom';

const projectItems = [
  { image: '/landing-page-images/architecture.jpg', title: 'Architecture', category: 'Spaces & Structures Body' },
  { image: '/landing-page-images/design.JPG', title: 'Design', category: 'Brand & Identity' },
  { image: '/landing-page-images/code.JPG', title: 'Codes', category: 'Code & Logic' },
  { image: '/landing-page-images/career.jpeg', title: 'Career talks', category: 'The listerner and a Mentor' },
  { image: '/landing-page-images/social.jpg', title: 'Social things', category: 'For myself and people' },
];

const ProjectsPage: React.FC = () => {
  return (
    <main className="p-8">
        <section id="projects" className="py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
            <p className="text-base font-medium uppercase tracking-[3px]">Projects</p>
            <h2 className="text-5xl md:text-3xl font-bold -tracking-wide leading-tight">Latest Works</h2>
            </div>
            <a href="#" className="mt-4 md:mt-0 px-3 py-2 rounded-full border-2 border-theme-red font-semibold hover:bg-theme-red hover:text-white dark:hover:text-dark-text transition-colors">
            EXPLORE MORE
            </a>
        </div>

        <div className="flex overflow-x-auto space-x-8 pb-8 scrollbar-thin scrollbar-thumb-theme-red scrollbar-track-gray-200 dark:scrollbar-track-gray-700">
            {projectItems.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-[320px] h-[450px] md:w-[448px] md:h-[576px] rounded-2xl overflow-hidden relative group">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="text-4xl font-bold">{item.title}</h3>
                <p className="text-lg">{item.category}</p>
                <a href="#" className="mt-4 inline-block px-2 py-1 rounded-full border-2 border-white text-black bg-white font-semibold hover:bg-transparent hover:text-white transition-colors">
                    Explore More
                </a>
                </div>
            </div>
            ))}
        </div>
        </section>
        <div className="text-center mt-8">
            <Link to="/" className="text-[13px] mt-[20px] px-3 py-2 rounded-full font-semibold text-black dark:text-light-text transition-colors hover:bg-black hover:text-white dark:hover:bg-dark-text dark:hover:text-dark-bg">
                Back to Home
            </Link>
        </div>
    </main>
  );
};

export default ProjectsPage;
