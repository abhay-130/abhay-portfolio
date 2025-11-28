
import React from 'react';
import ResizableButton from './ResizableButton';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 sm:pt-40 md:pt-48 pb-16 sm:pb-20 md:pb-24 flex flex-col md:flex-row items-center justify-between min-h-screen">
      <div className="flex flex-col lg:flex-col items-center text-center md:text-left md:items-start md:w-1/2 space-y-4 sm:space-y-6 px-4 sm:px-0">
        <h1 className="font-chewy text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[150px] leading-none text-shadow-lg dark:text-white">Hi, I'm AbhaY !</h1>
        <p className="font-poppins text-sm sm:text-base md:text-lg text-center md:text-left self-stretch dark:text-dark-text-muted max-w-2xl">Welcome to the my creative corner! I'm currently navigating the world of Architecture at IIT Roorkee, but my creativity doesn't stop at buildings. I'm also a graphic designer who loves playing with visuals, music, and storytelling.</p>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 !mt-4 sm:!mt-6">
          <ResizableButton size={13} onClick={() => { window.location.hash = '#projects' }} className="inline-block px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base hover:bg-theme-red hover:text-white dark:hover:text-dark-text transition-colors">
            Dive Into My Work
          </ResizableButton>
          <a href="#contact" className="text-sm sm:text-base font-semibold hover:text-theme-red transition-colors">
            Contact Me
          </a>
        </div>
      </div>

      <div className="relative mt-8 sm:mt-12 md:mt-0 md:w-1/2 flex justify-center items-center px-4 sm:px-0">
        <div className="relative w-[250px] h-[270px] sm:w-[350px] sm:h-[380px] md:w-[417px] md:h-[447px]">
          <div className="absolute w-[100%] h-[100%] top-[4%] left-[10%] bg-gray-200 dark:bg-gray-700 rounded-[30px]"></div>
          <img src="landing-page-images/abhay-profile.JPG" alt="Abhay" className="absolute w-[100%] top-[10%] left-[10%] h-auto rounded-lg object-cover" />
          {/* Decorative elements */}
          <div className="absolute w-[20%] h-[20%] top-0 left-[95%] bg-red-200 dark:bg-red-900/50 rounded-full animate-pulse"></div>
          <div className="absolute w-[20%] h-[20%] top-[80%] left-0 bg-blue-200 dark:bg-blue-900/50 rounded-full animate-pulse delay-500"></div>
          <div className="absolute w-[20%] h-[20%] top-0 left-[5%] bg-green-200 dark:bg-green-900/50 rounded-full animate-pulse delay-1000"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
