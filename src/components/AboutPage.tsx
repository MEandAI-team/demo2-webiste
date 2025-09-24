import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function AboutPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-16 py-12 sm:py-16 lg:py-20 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center min-h-[60vh]">
        {/* Left - Image Section */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="aspect-square bg-gray-100 flex items-center justify-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-gray-400 text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gray-200 rounded"></div>
              <p className="text-sm">About Image Placeholder</p>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Right - Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p 
            className="text-sm tracking-widest mb-8 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            ABOUT THE PHOTOGRAPHER
          </motion.p>
          
          <motion.h1 
            className="text-5xl leading-tight mb-8 tracking-wide font-['Rye',serif]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            CAPTURING<br />
            MOMENTS<br />
            THAT MATTER
          </motion.h1>
          
          <motion.div 
            className="space-y-6 text-base leading-relaxed text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Welcome to my world of photography. I'm passionate about capturing the 
              authentic emotions and intimate moments that make each love story unique. 
              With over a decade of experience in wedding photography, I specialize in 
              creating timeless images that tell your story.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              My approach is documentary-style with an artistic touch, focusing on 
              natural lighting and genuine emotions. I believe every couple deserves 
              to have their special day captured in a way that reflects their 
              personality and love.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              Based in the heart of the city, I travel wherever love takes me. 
              From intimate elopements to grand celebrations, I'm here to document 
              your journey with creativity, professionalism, and heart.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <Link to="/portfolio">
              <motion.button 
                className="px-8 py-3 border border-black text-sm tracking-widest hover:bg-black hover:text-white transition-colors mr-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                VIEW PORTFOLIO
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button 
                className="px-8 py-3 text-sm tracking-widest hover:underline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                GET IN TOUCH
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}