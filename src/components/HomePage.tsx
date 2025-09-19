import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    { id: 1, title: "Wedding Portrait 1", description: "Elegant ceremony moments" },
    { id: 2, title: "Wedding Portrait 2", description: "Romantic couple shots" },
    { id: 3, title: "Wedding Portrait 3", description: "Candid reception joy" },
    { id: 4, title: "Wedding Portrait 4", description: "Intimate celebration" }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };
  return (
    <div className="flex flex-col-reverse md:flex-row min-h-[calc(100vh-200px)]">
      {/* Left Content Section */}
      <div className="w-full md:w-1/2 px-6 sm:px-10 md:px-16 py-10 md:py-20 flex flex-col justify-center">
        <motion.div 
          className="max-w-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p 
            className="text-sm tracking-widest mb-8 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            WEDDING PHOTOGRAPHER
          </motion.p>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl leading-tight mb-6 md:mb-8 tracking-wide font-['Rye',serif]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            SELECTED<br />
            LOVE<br />
            STORIES
          </motion.h1>
          
          <motion.p 
            className="text-base leading-relaxed text-gray-700 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            This is the space to introduce visitors to the business or brand. 
            Briefly explain what's behind it, what it does and what makes it 
            unique. Share its core values and what this site has to offer.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Link to="/portfolio">
              <motion.button 
                className="px-6 sm:px-8 py-3 border border-black text-xs sm:text-sm tracking-widest hover:bg-black hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                VIEW PORTFOLIO
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Right Image Section */}
      <motion.div 
        className="w-full md:w-1/2 relative h-80 sm:h-[28rem] md:h-auto"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Image Container with Animation */}
        <motion.div 
          key={currentImageIndex}
          className="absolute inset-0 bg-gray-100 flex items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="text-gray-400 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-20 h-20 mx-auto mb-4 bg-gray-200 rounded"></div>
            <p className="text-sm">{heroImages[currentImageIndex].title}</p>
            <p className="text-xs mt-1 text-gray-500">{heroImages[currentImageIndex].description}</p>
          </motion.div>
        </motion.div>

        {/* Image Counter */}
        <motion.div 
          className="absolute bottom-8 left-8 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <span className="text-sm font-['Rye',serif] bg-black/30 backdrop-blur-sm px-3 py-1 rounded">
            {String(currentImageIndex + 1).padStart(2, '0')} / {String(heroImages.length).padStart(2, '0')}
          </span>
        </motion.div>

        {/* Image Indicators */}
        <motion.div 
          className="absolute bottom-8 right-20 flex gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          {heroImages.map((_, index) => (
            <motion.button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? 'bg-white' : 'bg-white/40'
              }`}
              onClick={() => setCurrentImageIndex(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>
        
        {/* Navigation Arrow */}
        <motion.button 
          onClick={nextImage}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full border border-white bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </motion.div>
    </div>
  );
}