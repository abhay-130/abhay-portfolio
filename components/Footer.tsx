
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-50 dark:bg-black/50">
            <div className="max-w-[1440px] mx-auto pt-20 pb-10 px-12 sm:px-16 lg:px-20">
                {/* Right-side layout: brand on left, Menu and Service as separate siblings on the right */}
                <div className="flex flex-col md:flex-row items-start md:items-stretch justify-between gap-8 mb-12">
                    <div className="ml-3 flex-1">
                        <a href="#" className="font-poppins font-bold text-3xl dark:text-dark-text relative inline-block">
                            AbhaY
                            <span className="block h-[1px] w-16 bg-current mt-1"></span>
                            <span className="block h-[1px] w-10 bg-current mt-1"></span>
                        </a>
                        <div className="mt-3 flex space-x-3">
                            {/* LinkedIn */}
                                <a 
                                    href="https://www.linkedin.com/in/abhay-kishor-y130s" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="w-8 h-8 flex items-center justify-center border-2 border-light-text dark:border-dark-text rounded-full hover:bg-light-text hover:text-white dark:hover:bg-dark-text dark:hover:text-dark-bg transition-colors"
                                >
                                    in
                                </a>

                            {/* Behance */}
                                <a 
                                    href="https://www.behance.net/abhaykishor130" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="w-8 h-8 flex items-center justify-center border-2 border-light-text dark:border-dark-text rounded-full hover:bg-light-text hover:text-white dark:hover:bg-dark-text dark:hover:text-dark-bg transition-colors"
                                >
                                    Bē
                                </a>
                            
                            {/* X (Twitter) */}
                                <a 
                                    href="https://x.com/abhay__130" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="w-8 h-8 flex items-center justify-center border-2 border-light-text dark:border-dark-text rounded-full hover:bg-light-text hover:text-white dark:hover:bg-dark-text dark:hover:text-dark-bg transition-colors"
                                >
                                    X
                                </a>
                            
                            {/* Facebook / Instagram */}
                                <a 
                                    href="https://www.facebook.com/abhay130s" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="w-8 h-8 flex items-center justify-center border-2 border-light-text dark:border-dark-text rounded-full hover:bg-light-text hover:text-white dark:hover:bg-dark-text dark:hover:text-dark-bg transition-colors"
                                >
                                    f
                                </a>
                        </div>
                    </div>

                    <div
                        className="flex md:ml-auto items-start md:items-stretch md:flex-row md:flex-row-reverse"
                        style={{ gap: '100px', marginRight: '0px' }}
                    >
                        <div className="flex-1">
                            <h4 className="font-bold text-lg uppercase tracking-[3px] text-theme-white mb-4">Menu</h4>
                            <ul className="space-y-2">
                                {['Home', 'About', 'Services', 'Blogs'].map(item => (
                                    <li key={item}><a href="#" className="hover:text-theme-red transition-colors">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-lg uppercase tracking-[3px] text-theme-white mb-4">Service</h4>
                            <ul className="space-y-2">
                                {['Branding', 'Design', 'Marketing', 'Development'].map(item => (
                                    <li key={item}><a href="#" className="hover:text-theme-red transition-colors">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-300 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-light-text-muted dark:text-dark-text-muted">
                    <p style={{ opacity: .3 }}>Copyright © 2024 Abhay. All Rights Reserved.</p>
                    <p className="mt-2 md:mt-0" style={{ opacity: .3 }}>Terms of Use | Privacy Policy</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
