import { motion } from 'motion/react';

export function ContactPage() {
  return (
    <div className="px-6 sm:px-10 md:px-16 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl tracking-wider mb-6 md:mb-8 font-['Rye',serif]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            GET IN TOUCH
          </motion.h1>
          <motion.p 
            className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Ready to capture your special moments? Let's discuss how we can create 
            beautiful memories together. I'd love to hear about your vision.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          {/* Left - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.h2 
              className="text-2xl mb-8 tracking-wide font-['Rye',serif]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Send a Message
            </motion.h2>
            <motion.form 
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  <label className="block text-sm tracking-wider mb-2">FIRST NAME</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-200 focus:border-black outline-none transition-colors"
                    placeholder="Your first name"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  <label className="block text-sm tracking-wider mb-2">LAST NAME</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-200 focus:border-black outline-none transition-colors"
                    placeholder="Your last name"
                  />
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                <label className="block text-sm tracking-wider mb-2">EMAIL</label>
                <input 
                  type="email" 
                  className="w-full p-3 border border-gray-200 focus:border-black outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                <label className="block text-sm tracking-wider mb-2">PHONE</label>
                <input 
                  type="tel" 
                  className="w-full p-3 border border-gray-200 focus:border-black outline-none transition-colors"
                  placeholder="Your phone number"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                <label className="block text-sm tracking-wider mb-2">EVENT DATE</label>
                <input 
                  type="date" 
                  className="w-full p-3 border border-gray-200 focus:border-black outline-none transition-colors"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 }}
              >
                <label className="block text-sm tracking-wider mb-2">MESSAGE</label>
                <textarea 
                  rows={6}
                  className="w-full p-3 border border-gray-200 focus:border-black outline-none transition-colors resize-none"
                  placeholder="Tell me about your special day..."
                ></textarea>
              </motion.div>
              
              <motion.button 
                type="submit"
                className="px-6 sm:px-8 py-3 bg-black text-white text-xs sm:text-sm tracking-widest hover:bg-gray-800 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                SEND MESSAGE
              </motion.button>
            </motion.form>
          </motion.div>
          
          {/* Right - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.h2 
              className="text-2xl mb-8 tracking-wide font-['Rye',serif]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              Contact Information
            </motion.h2>
            
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <h3 className="text-sm tracking-widest mb-2 text-gray-600">STUDIO ADDRESS</h3>
                <p className="text-base leading-relaxed">
                  123 Photography Lane<br />
                  Creative District<br />
                  New York, NY 10001
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <h3 className="text-sm tracking-widest mb-2 text-gray-600">PHONE</h3>
                <p className="text-base">+1 (555) 123-4567</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                <h3 className="text-sm tracking-widest mb-2 text-gray-600">EMAIL</h3>
                <p className="text-base">hello@madkingphotography.com</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                <h3 className="text-sm tracking-widest mb-2 text-gray-600">BUSINESS HOURS</h3>
                <p className="text-base leading-relaxed">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: By Appointment
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                <h3 className="text-sm tracking-widest mb-2 text-gray-600">FOLLOW ME</h3>
                <div className="flex gap-4">
                  <motion.a 
                    href="#" 
                    className="text-sm tracking-wider hover:underline"
                    whileHover={{ scale: 1.05 }}
                  >
                    INSTAGRAM
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="text-sm tracking-wider hover:underline"
                    whileHover={{ scale: 1.05 }}
                  >
                    FACEBOOK
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="text-sm tracking-wider hover:underline"
                    whileHover={{ scale: 1.05 }}
                  >
                    PINTEREST
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}