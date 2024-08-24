'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from './Button';
import { useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className='flex justify-between items-center w-full px-4 py-3'>
      {/* Logo */}
      <div className='flex items-center'>
        <Link href="/">
          <Image 
            src="/logo.png"
            alt="Logo" 
            width={35} 
            height={35}  
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className='hidden md:flex items-center space-x-2'>
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

      {/* Mobile Menu Button */}
      <div className='md:hidden flex items-center'>
        <button onClick={toggleMenu} className='text-white text-2xl'>
          &#9776;
        </button>
      </div>

      {/* Desktop Button */}
      <div className='hidden md:block text-3xl text-white ml-auto'>
        <Button
          text="Giriş Yap"
          color="#6E5FCE"
          hoverColor="#594CBC"
          url="/"
        />
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-[50px] right-0 w-60 bg-[#12121C] text-[#B4B9CB] transform ${isMenuOpen ? 'translate-x-[-30px]' : 'translate-x-full'} transition-transform duration-300 ease-in-out rounded-lg`}>
  <div className='flex justify-end p-4'>
    {/* Optional close button can be added here */}
  </div>
  <div className='flex flex-col p-4 space-y-4'>
    <Link href="/commands" className={`block py-3 px-4 text-sm font-light rounded-lg ${pathname === '/commands' ? 'font-semibold' : 'hover:bg-[#1E1E2E]'} transition-colors duration-300`}>Komutlar</Link>
    <Link href="/premium" className={`block py-3 px-4 text-sm font-light rounded-lg ${pathname === '/premium' ? 'font-semibold' : 'hover:bg-[#1E1E2E]'} transition-colors duration-300`}>Premium</Link>
    
    {/* Başlık ve ince çizgi */}
    <div className='text-sm font-light text-white px-2'>
      Ödeme
    </div>

    <Link href="/subscriptions" className={`block py-3 px-4 text-sm font-light rounded-lg ${pathname === '/subscriptions' ? 'font-semibold' : 'hover:bg-[#1E1E2E]'} transition-colors duration-300`}>Abonelikler</Link>
    <Link href="/billing" className={`block py-3 px-4 text-sm font-light rounded-lg ${pathname === '/billing' ? 'font-semibold' : 'hover:bg-[#1E1E2E]'} transition-colors duration-300 `}>Faturalandırma</Link>
    <div className='border-b border-[#B4B9CB] '></div>
    <Link href="/support" className={`block py-3 px-4 text-sm font-light rounded-lg ${pathname === '/support' ? 'font-semibold' : 'hover:bg-[#1E1E2E]'} transition-colors duration-300`}>Destek Sunucu</Link>
    <Link href="/login" className={`block py-3 px-4 text-sm font-light rounded-lg ${pathname === '/login' ? 'font-semibold' : 'hover:bg-[#1E1E2E]'} transition-colors duration-300`}>Giriş Yap</Link>
  </div>
</div>

    </nav>
  );
};

export default Navbar;
