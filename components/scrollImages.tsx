'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

interface ImageProps {
  img: string;
  title: string;
}

interface ScrollImagesProps {
  images: ImageProps[];
  scrollSpeed: number;
}

const ScrollImages: React.FC<ScrollImagesProps> = ({ images, scrollSpeed }) => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null); // 使用 ref 获取容器的实际宽度
  const [singleImageWidth, setSingleImageWidth] = useState(100); // 初始化默认的图片宽度

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth; // 容器的宽度
      const imageWidth = containerWidth / images.length; // 重新计算单张图片的宽度以填满容器
      setSingleImageWidth(imageWidth);
    }

    const totalWidth: number = singleImageWidth * images.length * 2; // 计算包含克隆的总宽度
    const duration: number = totalWidth / scrollSpeed; // 动画的持续时间

    controls.start({
      x: [-totalWidth / 2, 0],
      transition: {
        ease: "linear",
        duration,
        repeat: Infinity,
        repeatType: 'loop'
      }
    });
  }, [images.length, scrollSpeed, controls, singleImageWidth]);

  const imagesWithClones = [...images, ...images];

  return (
    <div
      ref={containerRef}
      style={{ overflow: 'hidden', whiteSpace: 'nowrap', height: '5rem', display: 'flex' }}
    >
      <motion.div
        animate={controls}
        initial={{ x: 0 }}
        style={{ display: 'flex' }}
      >
        {imagesWithClones.map((img, index) => (
          <div key={index} style={{
            minWidth: `${singleImageWidth}px`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
          >
            <Image
              src={img.img}
              alt={`image-${index}`}
              width={50}
              height={50} // 设置高度为50px，保持图片比例

              style={{  /* width: `${singleImageWidth}px`,  */ height: '3rem',width: 'auto' }}
            />
            <span style={{ fontSize: '1rem', color: '#333333', margin: '0 0 10px 0' }}>
              {img.title}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollImages;