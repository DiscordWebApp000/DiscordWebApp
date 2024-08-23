'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import Img from '../../public/discord-logo.webp'

const Button = ({ text, color, hoverColor, url ,image }) => {
  return (
    <Link href={url}>
      <div
        className={` flex justify-center items-center px-4 py-[9px] text-white rounded-[8px] cursor-pointer transition-colors duration-300 text-sm`}
        style={{
          backgroundColor: color,
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = hoverColor)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = color)}
      >
        {image ? <Image width={20}  height={20 }  src={Img} className='mr-2' alt="Discord Logo"/> : ''}
        <p className='text-[14px] backdrop-transparent'>{text}</p>
      </div>
    </Link>
  );
};

export default Button;
