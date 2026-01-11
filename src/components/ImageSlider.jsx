import { useState, useEffect } from "react";
import { testimonials } from "../data";
import leaf from '../assets/features/whiteleaf.png'
import greenBg from '../assets/green-bg.png';

const sliderStyles = {
  position: "relative",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  transition: "opacity 0.5s ease-in-out",  // Smooth transition for fade effect
};

const imageStyles = {
  width: "100%",
  height: "auto",
  borderRadius: "10px",
  transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",  // Added transition for image
};

const textStyles = {
  margin: "20px 0",
  textAlign: "center",
  transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",  // Added transition for text
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false); // State to trigger fading effect

  // Automatically transition to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        const isLastSlide = currentIndex === testimonials.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        setIsFading(false);
      }, 500); // Duration of the fade effect
    }, 5000); // Auto-slide every 3 seconds

    return () => {
      clearInterval(interval); // Cleanup interval on component unmount
    };
  }, [currentIndex]); // Dependency on `currentIndex` so the effect triggers when the index changes

  return (
    <div className="bg-green-bg flex flex-col items-center justify-center  mb-0 py-7">
      <div className='flex items-center justify-center gap-5 py-4 min-h-12'>
        <img src={leaf} className='h-10 w-10' />
        <h1 className='text-white font-chelsea text-center text-2xl'>TESTIMONIALS</h1>
      </div>

      <div style={sliderStyles} className="">
        <div className="flex flex-col md:flex-row md:gap-4 px-16 md:px-20 lg:px-40 items-center justify-center">
          {/* <img
            src={testimonials[currentIndex]?.img}
            alt={testimonials[currentIndex]?.text} // Update alt text for accessibility
            className={`w-24 h-24 rounded-full ${isFading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
          /> */}
          <div className={`text-white flex flex-col items-center justify-center md:justify-start ${isFading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
            <p style={textStyles} className="text-white text-md text-start">{testimonials[currentIndex]?.detail}</p>
            <p className="font-chelsea">{testimonials[currentIndex]?.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
