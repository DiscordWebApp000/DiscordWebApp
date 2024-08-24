'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Button from './Button';
import '../../src/app/globals.css';

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
      className={`section-container flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} justify-center items-center h-auto md:h-[85vh]`}
    >
      <div className='flex-shrink-0 w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px]'>
        <Image src={imageUrl} width={1100} height={1100} alt="Özellikler" className='w-full h-auto' />
      </div>
      
      <div className='flex flex-col items-center md:items-start mt-6 md:mt-0 md:ml-8 text-center md:text-left px-4'>
        <h2 className='section-title'>
          {title}
        </h2>
        <p className='section-description'>
          {description}
        </p>
        <div className='button mt-6'>
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
