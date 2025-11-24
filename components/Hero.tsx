
import React from 'react';
import ResizableButton from './ResizableButton';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-48 pb-24 flex flex-col md:flex-row items-center justify-between min-h-screen">
      <div className="flex flex-col items-center text-left md:w-1/2 space-y-3 ">
        <h1 className="font-chewy text-[12vw] md:text-[150px] lg:text-[50px] leading-none -mt-1 text-shadow-lg dark:text-white">Hi, I'm AbhaY !</h1>
        <p className="font-poppins text-[16px] text-center self-stretch -mt-4 md:-mt-8 dark:text-dark-text-muted">Welcome to my creative corner! I’m currently navigating the world of Architecture at IIT Roorkee, but my creativity doesn't stop at buildings. I’m also a graphic designer who loves playing with visuals, music, and storytelling.</p>
        <div className="flex items-center gap-[30px] !mt-[30px]">
          <ResizableButton size={13} onClick={() => { window.location.hash = '#projects' }} className="inline-block px-3 py-2 hover:bg-theme-red hover:text-white dark:hover:text-dark-text transition-colors">
            Dive Into My Work
          </ResizableButton>
          <a href="#contact" className="text-[13px] font-semibold text-lg hover:text-theme-red transition-colors">
            Contact Me
          </a>
        </div>
      </div>

      <div className="relative mt-16 md:mt-0 md:w-1/2 flex justify-center items-center">
        <div className="relative w-[300px] h-[320px] sm:w-[417px] sm:h-[447px]">
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
