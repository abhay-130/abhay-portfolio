
import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
    return (
        <section id="about" className="py-24 flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
                <img src="/offline_images/abhay-profile.JPG" alt="Abhay Kishor" className="rounded-3xl object-cover w-full h-auto" />
            </div>
            <div className="flex-1 flex flex-col items-start">
                <p className="font-semibold text-[18px] mt-[0px] tracking-wide">ABHAY KISHOR</p>
                <h2 className="text-[30px] mt-[3px] font-semibold leading-tight">A Designer Who Loves to Build, Tell Stories and... watching cinema.</h2>
                <p className="text-[13px] mt-[30px] text-base text-light-text-muted dark:text-dark-text-muted leading-loose">
                    I’m an architecture student at the Department of Architecture & Planning, IIT Roorkee. My practice moves between architecture, graphics, and visual media, inspired by materials, music, and everyday interactions.
                </p>
                <Link to="/about" className="text-[13px] mt-[20px] px-3 py-2 rounded-full font-semibold text-black dark:text-light-text transition-colors hover:bg-black hover:text-white dark:hover:bg-dark-text dark:hover:text-dark-bg">
                    About ME...
                </Link>
            </div>
        </section>
    );
};

export default About;
