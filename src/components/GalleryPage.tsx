import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function GalleryPage() {
  const { slug } = useParams();
  
  // Mock data for different couples
  const galleryData = {
    'simona-phil': {
      title: 'SIMONA & PHIL',
      description: 'An unforgettable outdoor wedding celebration in the beautiful countryside. Simona and Phil chose a rustic venue surrounded by rolling hills and natural beauty. Their love story unfolded against breathtaking landscapes, with golden hour portraits and intimate moments captured throughout their special day.',
      images: Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        placeholder: `Simona & Phil - Image ${i + 1}`
      }))
    },
    'ariel-brandon': {
      title: 'ARIEL & BRANDON',
      description: 'A timeless classic wedding filled with elegance and sophistication. Ariel and Brandon celebrated their union in a stunning historic venue, complete with vintage details and romantic ambiance. Every moment was captured with artistic precision, from the intimate ceremony to the joyous reception.',
      images: Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        placeholder: `Ariel & Brandon - Image ${i + 1}`
      }))
    },
    'rachel-jeff': {
      title: 'RACHEL & JEFF',
      description: 'An intimate wedding celebration that perfectly captured the essence of true love. Rachel and Jeff opted for a smaller gathering with their closest family and friends, creating meaningful moments that were both personal and profound. Their day was filled with laughter, tears of joy, and unforgettable memories.',
      images: Array.from({ length: 14 }, (_, i) => ({
        id: i + 1,
        placeholder: `Rachel & Jeff - Image ${i + 1}`
      }))
    },
    'maria-david': {
      title: 'MARIA & DAVID',
      description: 'A magical garden wedding surrounded by blooming flowers and natural beauty. Maria and David exchanged vows in a picturesque garden setting, with soft natural lighting and romantic floral arrangements creating the perfect backdrop for their love story.',
      images: Array.from({ length: 11 }, (_, i) => ({
        id: i + 1,
        placeholder: `Maria & David - Image ${i + 1}`
      }))
    },
    'sarah-michael': {
      title: 'SARAH & MICHAEL',
      description: 'A dreamy beach wedding with ocean waves as the soundtrack to their vows. Sarah and Michael chose a coastal venue where they could celebrate their love with sand between their toes and the endless horizon as their witness.',
      images: Array.from({ length: 13 }, (_, i) => ({
        id: i + 1,
        placeholder: `Sarah & Michael - Image ${i + 1}`
      }))
    },
    'emma-james': {
      title: 'EMMA & JAMES',
      description: 'An exotic destination wedding that combined adventure with romance. Emma and James took their closest loved ones on a journey to celebrate their union in a breathtaking location, creating memories that will last a lifetime.',
      images: Array.from({ length: 15 }, (_, i) => ({
        id: i + 1,
        placeholder: `Emma & James - Image ${i + 1}`
      }))
    }
  };

  const currentGallery = galleryData[slug as keyof typeof galleryData];

  if (!currentGallery) {
    return (
      <div className="px-16 py-20 text-center">
        <h1 className="text-4xl mb-8">Gallery Not Found</h1>
        <Link to="/portfolio" className="text-blue-600 hover:underline">
          Return to Portfolio
        </Link>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-16 py-12 sm:py-16 lg:py-20">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <Link 
          to="/portfolio" 
          className="inline-flex items-center gap-2 text-sm tracking-widest hover:opacity-70 transition-opacity"
        >
          <ArrowLeft size={16} />
          BACK TO PORTFOLIO
        </Link>
      </motion.div>

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 sm:mb-16 lg:mb-20"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-widest mb-6 sm:mb-8 font-['Rye',serif]">{currentGallery.title}</h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-base leading-relaxed text-gray-700">
            {currentGallery.description}
          </p>
        </div>
      </motion.div>

      {/* Image Gallery Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        {currentGallery.images.map((image, index) => (
          <motion.div
            key={image.id}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            className="group cursor-pointer"
          >
            <div className={`${
              index % 5 === 0 ? 'aspect-[3/4]' : 
              index % 5 === 1 ? 'aspect-square' :
              index % 5 === 2 ? 'aspect-[4/5]' :
              index % 5 === 3 ? 'aspect-[5/4]' : 'aspect-[4/3]'
            } bg-gray-100 overflow-hidden relative`}>
              <div className="absolute inset-0 bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-all duration-500">
                <div className="text-gray-400 text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gray-200 rounded group-hover:bg-gray-300 transition-colors"></div>
                  <p className="text-xs">{image.placeholder}</p>
                </div>
              </div>
              
              {/* Subtle overlay on hover */}
              <motion.div 
                className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Contact CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center mt-20"
      >
        <h2 className="text-3xl tracking-wide mb-6 font-['Rye',serif]">Ready to Create Your Story?</h2>
        <p className="text-base text-gray-600 mb-8 max-w-2xl mx-auto">
          Let's capture the beautiful moments of your special day with the same care and artistry.
        </p>
        <Link to="/contact">
          <motion.button 
            className="px-8 py-3 border border-black text-sm tracking-widest hover:bg-black hover:text-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            GET IN TOUCH
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}