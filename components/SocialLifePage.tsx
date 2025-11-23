
import React from 'react';
import { Link } from 'react-router-dom';

const SocialLifePage: React.FC = () => {
    return (
        <main className="p-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Social Life</h1>
            <p className="text-lg">This page is under construction.</p>
            <div className="text-center mt-8">
                <Link to="/" className="text-[13px] mt-[20px] px-3 py-2 rounded-full font-semibold text-black dark:text-light-text transition-colors hover:bg-black hover:text-white dark:hover:bg-dark-text dark:hover:text-dark-bg">
                    Back to Home
                </Link>
            </div>
        </main>
    );
};

export default SocialLifePage;
