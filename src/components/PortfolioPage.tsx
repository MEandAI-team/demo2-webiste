import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function PortfolioPage() {
  const portfolioItems = [
    {
      id: 1,
      slug: 'simona-phil',
      title: 'SIMONA & PHIL',
      category: 'Outdoor Wedding'
    },
    {
      id: 2,
      slug: 'ariel-brandon',
      title: 'ARIEL & BRANDON',
      category: 'Classic Wedding'
    },
    {
      id: 3,
      slug: 'rachel-jeff',
      title: 'RACHEL & JEFF',
      category: 'Intimate Wedding'
    },
    {
      id: 4,
      slug: 'maria-david',
      title: 'MARIA & DAVID',
      category: 'Garden Wedding'
    },
    {
      id: 5,
      slug: 'sarah-michael',
      title: 'SARAH & MICHAEL',
      category: 'Beach Wedding'
    },
    {
      id: 6,
      slug: 'emma-james',
      title: 'EMMA & JAMES',
      category: 'Destination Wedding'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-16 py-12 sm:py-16 lg:py-20">
      <motion.div 
        className="text-center mb-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl tracking-widest mb-8 font-['Rye',serif]">PORTFOLIO</h1>
      </motion.div>
      
      {/* Portfolio Grid - 3x2 */}
      <motion.div 
        className="grid grid-cols-3 gap-8 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {portfolioItems.map((item, index) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            className="group cursor-pointer"
          >
            <Link to={`/portfolio/${item.slug}`}>
              <div className="aspect-[4/5] bg-gray-100 mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-all duration-500">
                  <div className="text-gray-400 text-center">
                    <div className="w-16 h-16 mx-auto mb-3 bg-gray-200 rounded group-hover:bg-gray-300 transition-colors"></div>
                    <p className="text-xs">Portfolio {item.id}</p>
                  </div>
                </div>
                
                {/* Overlay on hover */}
                <motion.div 
                  className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
                  initial={false}
                >
                  <motion.div 
                    className="text-white text-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-sm tracking-widest">VIEW GALLERY</p>
                  </motion.div>
                </motion.div>
              </div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <h3 className="text-lg tracking-widest mb-1 font-['Rye',serif]">{item.title}</h3>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}