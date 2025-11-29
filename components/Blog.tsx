
import React from 'react';

const blogArticles = [
    {
        image: '/blog-images/landingpage-blogs-images/IMG_9832.jpg',
        date: '24 APR 2024',
        title: 'Why Ancient Indian Cities Were Smarter Than Us',
        isMain: true,
    },
    {
        image: '/blog-images/landingpage-blogs-images/IMG_9988.jpeg',
        date: '20 APR 2024',
        title: 'Lost in Transit: My Adventures Outside Roorkee',
        isMain: false,
    },
    {
        image: '/blog-images/landingpage-blogs-images/muhchodi.jpg',
        date: '15 APR 2024',
        title: 'Surviving IIT Roorkee: Dosti, trips & Deadlines',
        isMain: false,
    },
];

const Blog: React.FC = () => {
    const mainArticle = blogArticles.find(a => a.isMain);
    const sideArticles = blogArticles.filter(a => !a.isMain);

    return (
        <section id="blogs" className="w-full">
            <div className="flex flex-row justify-between items-end mb-8 sm:mb-10 md:mb-12 gap-2 sm:gap-4">
                {/* Left Side: Text */}
                <div>
                    <p className="text-xs sm:text-base font-medium uppercase tracking-[2px] sm:tracking-[3px]">Our Corner</p>
                    {/* Adjusted text sizes: text-xl for mobile, text-2xl for larger phones, scaling up for desktop */}
                    <h2 className="text-xl min-[400px]:text-2xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold -tracking-wide leading-tight">
                        Latest Blog/Articles
                    </h2>
                </div>

                {/* Right Side: Button */}
                {/* Removed mt-4, added whitespace-nowrap, reduced mobile padding/text */}
                <a 
                    href="#" 
                    className="whitespace-nowrap px-3 py-1.5 sm:px-6 sm:py-3 text-xs sm:text-base rounded-full border-2 border-theme-red font-semibold hover:bg-theme-red hover:text-white dark:hover:text-dark-text transition-colors"
                >
                    EXPLORE MORE
                </a>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12">
                {mainArticle && (
                    <div className="lg:w-2/3">
                        <img src={mainArticle.image} alt={mainArticle.title} className="w-full h-auto object-cover rounded-3xl mb-4 sm:mb-6" />
                        <p className="text-sm sm:text-base md:text-lg text-light-text-muted dark:text-dark-text-muted mb-2">{mainArticle.date}</p>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug hover:text-theme-red transition-colors cursor-pointer">
                            <span className="font-semibold italic">Why Ancient Indian Cities Were Smarter </span> Than Us, <span className="font-normal">The story of the design</span>
                        </h3>
                    </div>
                )}
                <div className="lg:w-1/3 flex flex-col gap-4 sm:gap-6">
                    {sideArticles.map((article, index) => (
                        <div key={index} className="flex flex-col">
                            <img src={article.image} alt={article.title} className="w-full h-auto object-cover rounded-xl mb-2" />
                            <p className="text-xs sm:text-sm text-light-text-muted dark:text-dark-text-muted mb-1">{article.date}</p>
                            <h4 className="text-base sm:text-lg md:text-xl font-semibold leading-normal hover:text-theme-red transition-colors cursor-pointer">{article.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
