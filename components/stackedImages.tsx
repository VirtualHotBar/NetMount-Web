'use client'
import Image from 'next/image';
import { motion, Variants } from "framer-motion";


const StackedImages = ({ images, style }: { images: string[], style?: React.CSSProperties }) => {
  return (
    <div className="relative w-full h-full" style={{ ...style }}>
      {images.map((image, index) => (
        <motion.div
          key={index}
          variants={ {
            initial: { y: 100, opacity: 0 },
            animate: { y: 0, opacity: 1, transition: { delay: index * 0.2, duration: 0.6 } },
          }}
          initial="initial"
          animate="animate"
          className="absolute w-full object-cover"
          style={{
            zIndex: 30 - index * 10,
            top: `${index * 10}%`,
            left: `${index * 10}%`,
            boxShadow: '0 10px 22px 0 rgba(0,0,0,.18),0 8px 30px 0 rgba(0,0,0,.15)',
          }}
        >
          <img src={image} alt="" className="w-full object-cover" />
        </motion.div>
      ))}
    </div>
  );
};

export default StackedImages;