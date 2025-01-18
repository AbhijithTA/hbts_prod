import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from '/DeserSafari.jpg';
import img2 from '/DubaiImage.jpg';
import img3 from '/ThemePark.jpg';
import img4 from '/Adventure.jpg';

const images = [img1, img2, img3, img4];
const texts = ['Desert Safari', 'City Tours', 'Theme Parks', 'Adventure'];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image and text every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[30vh] sm:h-[50vh] w-full overflow-hidden bg-black">
      {/* Image Carousel */}
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="absolute h-full w-full object-cover"
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />
      {/* <Snowfall/> */}
      </AnimatePresence>

      {/* Centered Heading */}
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.h1
            key={texts[currentIndex]}
            className="text-white text-4xl md:text-[7rem] font-bold tracking-widest uppercase font-UnispaceBd"
            style={{
              textShadow: '3px 5px 7px rgba(0, 0, 0, 0.7)',
            }}
            initial={{ opacity: 0, letterSpacing: "0.3em" }}
            animate={{ opacity: 1, letterSpacing: "0.7em" }}
            exit={{ opacity: 0, letterSpacing: "0.5em" }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
            }}
          >
            {texts[currentIndex]}
          </motion.h1>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Hero;
