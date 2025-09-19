import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT' },
    { path: '/portfolio', label: 'PORTFOLIO' },
    { path: '/contact', label: 'CONTACT' }
  ];
  
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center bg-white/90 backdrop-blur-sm border-b border-gray-100"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <Link to="/" className="text-lg tracking-wide font-['Rye',serif]">
          MadKing Photography
        </Link>
      </motion.div>
      
      <nav className="flex gap-8">
        {navItems.map((item, index) => (
          <motion.div
            key={item.path}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link
              to={item.path}
              className={`text-sm tracking-wider transition-all duration-300 hover:opacity-70 relative ${
                location.pathname === item.path || 
                (item.path === '/portfolio' && location.pathname.startsWith('/portfolio/')) 
                ? 'opacity-100' : 'opacity-80'
              }`}
            >
              {item.label}
              {(location.pathname === item.path || 
                (item.path === '/portfolio' && location.pathname.startsWith('/portfolio/'))) && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-px bg-black"
                  layoutId="underline"
                  initial={false}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          </motion.div>
        ))}
      </nav>
    </motion.header>
  );
}