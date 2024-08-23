'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from './Button';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className='flex justify-between items-center w-[100%]  pt-3 '>
      <div className='flex items-center '>
        <Link href="/">
          <Image 
            src="/logo.png"
            alt="Logo" 
            width={35} 
            height={35}  
          />
        </Link>

        <div className="link-container flex items-center space-x-2">
          <Link href="/">
          <p className={`${pathname === '/' ? 'text-white font-normal' : 'text-gray-400 hover:text-white'} py-3 pl-6 text-sm cursor-pointer transition-colors duration-300`}>
            Ana Sayfa
          </p>
          </Link>
          <Link href="/commands">
            <p className={`${pathname === '/commands' ? 'text-white font-normal' : 'text-gray-400 hover:text-white'} py-3 pl-6 text-sm cursor-pointer transition-colors duration-300`}>
              Komutlar
            </p>
          </Link>
          <Link href="/premium">
            <p className="bg-[#3F362C] text-yellow-400 hover:bg-[#594834] hover:text-yellow-400 rounded-2xl py-2 px-4 ml-2 cursor-pointer transition-colors duration-300">
              Premium
            </p>
          </Link>
        </div>
      </div>
      <div className='text-3xl text-white ml-auto  '>
        <Button
          text="Giriş Yap"
          color="#6E5FCE"
          hoverColor="#594CBC"
          url="/"
        />
      </div>
    </nav>
  );
};

export default Navbar;
