import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="px-16">
        {/* Top Section with Image */}
        <div className="flex justify-center mb-12">
          <div className="w-64 h-32 bg-gray-700 flex items-center justify-center">
            <div className="text-gray-400 text-center">
              <div className="w-12 h-12 mx-auto mb-2 bg-gray-600 rounded"></div>
              <p className="text-xs">Footer Image</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-12 mb-16">
          {/* Services Section */}
          <div className="text-center">
            <h3 className="text-sm tracking-widest mb-4 text-gray-300">SERVICES</h3>
            <div className="space-y-2">
              <p className="text-sm hover:text-gray-300 cursor-pointer transition-colors">Wedding Photography</p>
              <p className="text-sm hover:text-gray-300 cursor-pointer transition-colors">Engagement Sessions</p>
              <p className="text-sm hover:text-gray-300 cursor-pointer transition-colors">Portrait Photography</p>
              <p className="text-sm hover:text-gray-300 cursor-pointer transition-colors">Event Photography</p>
              <p className="text-sm hover:text-gray-300 cursor-pointer transition-colors">Fine Art Prints</p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h3 className="text-sm tracking-widest mb-4 text-gray-300">CONTACT</h3>
            <div className="space-y-2">
              <p className="text-sm">PATRICIA MOORE</p>
              <p className="text-sm">INFO@MYSITE.COM</p>
              <p className="text-sm">123-456-7890</p>
              <Link to="/contact" className="block text-sm hover:text-gray-300 cursor-pointer transition-colors mt-3">
                GET IN TOUCH
              </Link>
            </div>
          </div>
          
          {/* Follow Me Section */}
          <div className="text-center">
            <h3 className="text-sm tracking-widest mb-4 text-gray-300">FOLLOW ME</h3>
            <div className="space-y-2">
              <a href="#" className="block text-sm hover:text-gray-300 cursor-pointer transition-colors">INSTAGRAM</a>
              <a href="#" className="block text-sm hover:text-gray-300 cursor-pointer transition-colors">FACEBOOK</a>
              <a href="#" className="block text-sm hover:text-gray-300 cursor-pointer transition-colors">TIKTOK</a>
              <a href="#" className="block text-sm hover:text-gray-300 cursor-pointer transition-colors">YOUTUBE</a>
              <a href="#" className="block text-sm hover:text-gray-300 cursor-pointer transition-colors">PINTEREST</a>
              <a href="#" className="block text-sm hover:text-gray-300 cursor-pointer transition-colors">X</a>
            </div>
          </div>
          
          {/* Menu Section */}
          <div className="text-center">
            <h3 className="text-sm tracking-widest mb-4 text-gray-300">MENU</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm hover:text-gray-300 cursor-pointer transition-colors">HOME</Link>
              <Link to="/about" className="block text-sm hover:text-gray-300 cursor-pointer transition-colors">ABOUT</Link>
              <Link to="/portfolio" className="block text-sm hover:text-gray-300 cursor-pointer transition-colors">PORTFOLIO</Link>
              <Link to="/contact" className="block text-sm hover:text-gray-300 cursor-pointer transition-colors">CONTACT</Link>
            </div>
          </div>
        </div>
        
        {/* Large Name Section */}
        <div className="text-center mb-8">
          <h1 className="text-6xl tracking-wider font-['Rye',serif]">PATRICIA MOORE</h1>
        </div>
        
        {/* Bottom Section */}
        <div className="text-center border-t border-gray-700 pt-8">
          <div className="flex justify-center gap-8 text-xs text-gray-400">
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors">ACCESSIBILITY STATEMENT</a>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            © 2035 by Patricia Moore. Made with Wix Studio™
          </p>
        </div>
      </div>
    </footer>
  );
}