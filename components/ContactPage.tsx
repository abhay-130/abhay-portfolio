
import React from 'react';
import { Link } from 'react-router-dom';

const ContactPage: React.FC = () => {
  return (
    <main className="p-8">
        <section id="contact" className="py-24">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 w-full bg-gray-100 dark:bg-gray-800 p-8 sm:p-12 rounded-3xl">
            <h3 className="text-2xl font-bold text-theme-red mb-6">Message for AbhaY</h3>
            <form className="space-y-6">
                <input type="text" placeholder="Your name" className="w-full p-4 bg-white dark:bg-dark-bg rounded-lg border-2 border-transparent focus:border-theme-red outline-none transition-colors" />
                <input type="email" placeholder="Your email/contact" className="w-full p-4 bg-white dark:bg-dark-bg rounded-lg border-2 border-transparent focus:border-theme-red outline-none transition-colors" />
                <textarea placeholder="Your message" rows={5} className="w-full p-4 bg-white dark:bg-dark-bg rounded-lg border-2 border-transparent focus:border-theme-red outline-none transition-colors"></textarea>
                <button type="submit" className="w-full px-8 py-4 bg-theme-red text-white dark:text-dark-text font-semibold rounded-full text-lg hover:opacity-80 transition-opacity">
                SEND MESSAGE
                </button>
            </form>
            </div>
            <div className="flex-1 w-full flex flex-col items-start gap-8">
            <div className="space-y-4">
                <h2 className="text-[50px] font-extrabold -tracking-wide">Let’s Build Something Awesome.</h2>
                <p className="text-light-text-muted dark:text-dark-text-muted text-lg leading-relaxed">
                Got a project? A crazy idea? Or just want to debate which wine in Roorkee is the best? Hit me up.
                </p>
            </div>
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <span className="text-theme-red text-2xl">📍</span>
                    <p className="text-xl"> IIT Roorkee, India</p>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-theme-red text-2xl">✉️</span>
                    <p className="text-xl">abhaykishor130@gmail.com</p>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-theme-red text-2xl">📞</span>
                    <p className="text-xl">+91 8273746070</p>
                </div>
            </div>
            </div>
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

export default ContactPage;
