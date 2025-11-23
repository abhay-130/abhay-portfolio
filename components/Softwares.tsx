import React from 'react';

const skillsLogos = [
    '/offline_images/autocad-2.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg'
];

const Softwares: React.FC = () => {
    return (
        <section className="py-12 overflow-hidden">
            <h2 className="text-3xl font-bold text-center mb-6 tracking-widest">SOFTWARE I USE</h2>
            
            <div 
                className="relative w-full bg-gray-100 dark:bg-gray-800 py-4"
                style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
            >
                <style>{`
                    @keyframes scroll-ltr {
                        0% { transform: translateX(-50%); }
                        100% { transform: translateX(0); }
                    }
                    .animate-scroll-ltr {
                        display: flex;
                        width: max-content;
                        animation: scroll-ltr 15s linear infinite;
                    }
                    .animate-scroll-ltr:hover { animation-play-state: paused; }
                `}</style>

                <div className="animate-scroll-ltr">
                    {/* Using mr-12 on ALL items ensures exact spacing calculations for the loop */}
                    {[...skillsLogos, ...skillsLogos].map((logo, i) => (
                        <img 
                            key={i} src={logo} alt="Skill" 
                            className="h-16 w-16 md:h-20 md:w-20 object-contain mr-12" 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Softwares;