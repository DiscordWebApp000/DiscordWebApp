'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Button from './Button';

const Section = ({ title, description, imageUrl, buttonText, reverse = false }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.8, ease: "easeOut" }}
      variants={sectionVariants}
      className={`h-[85vh] flex ${reverse ? 'flex-row-reverse' : 'flex-row'} justify-center items-center`}
    >
      <div>
        <Image src={imageUrl} width={1100} height={1100} alt="Özellikler" />
      </div>
      
      <div className='flex flex-col ml-8'>
        <h2 className='text-3xl font-normal leading-tight'>
          {title}
        </h2>
        <p className='text-[17px] font-normal leading-relaxed mt-6 text-[#B4B9CB]'>
          {description}
        </p>
        <div className='w-[200px] mt-6'>
          <Button 
            text={buttonText}
            color="#6E5FCE"
            hoverColor="#594CBC"
            url="/" 
            image={true}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Section;
