
import React from 'react';
import ResizableButton from './ResizableButton';

const CurtainCall: React.FC = () => {
  return (
    <section className="py-24 flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
      <div className="flex-1 space-y-8">
        <h2 className="text-[50px] font-extrabold leading-tight">
          You’ve seen the past. Let’s build the future.
        </h2>
        <p className="text-lg text-light-text-muted dark:text-dark-text-muted">
          That was a glimpse into my creative journey at IIT Roorkee so far. But the best projects are the ones I haven't started yet. Ready to be part of the next one?
        </p>
        <ResizableButton onClick={() => { window.location.hash = '#contact' }} size={13} className="bg-theme-red text-white dark:text-dark-text rounded-full hover:opacity-80 transition-opacity px-2 py-3">
          Download CV
        </ResizableButton>
      </div>
      <div className="flex-1 flex justify-end">
        <img src="/landing-page-images/conclusion-image.jpg" alt="Thank You" className="w-[550px] h-auto rounded-3xl object-cover" />
      </div>
    </section>
  );
};

export default CurtainCall;
