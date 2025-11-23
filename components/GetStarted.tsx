
import React from 'react';
import ResizableButton from './ResizableButton';

const GetStarted: React.FC = () => {
    return (
        <section className="py-32 flex flex-col md:flex-row items-center">
            <div className="flex-1 flex flex-col items-start">
                <p className="text-base font-normal tracking-[3px]">Social Life</p>
                <h2 className="text-[30px] font-bold leading-snug">Proof That I Have a Life</h2>
                {/* Resizable button: pass size as number (px) or string (e.g. '2rem') */}
                
                <p className="text-[16px] mt-5 text-light-text-muted dark:text-dark-text-muted leading-loose">
                    Believe it or not, I do leave my desk! Here’s a collection of campus chaos, weekend trips, and all the random moments that keep me sane between deadlines.
                </p>
                <ResizableButton onClick={() => { window.location.hash = '#contact' }} size={13} className="mt-8 px-2 py-2 hover:bg-theme-red hover:text-white dark:hover:text-dark-text transition-colors">
                    View Gallery
                </ResizableButton>
                
            </div>
            <div className="flex-2 mt-8 md:mt-0">
                <img src="/offline_images/DSC_0180.JPG" alt="Gallery" className="rounded-3xl object-cover h-[500px]" />
            </div>
        </section>
    );
};

export default GetStarted;
