'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import HomeSection from '../components/HomeSection';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import HomeChart from '../components/HomeChart';
import Footer from '../components/Footer';

const Page = () => {
  return (
    <>
      <div className='max-w-[1200px] mx-auto px-4 px-2'>
        <Navbar />

        {/* İlk Bölüm */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeOut" }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 }
          }}
          className='h-[85vh] flex flex-col justify-center items-center text-center'
        >
          <h2 className='text-4xl md:text-6xl font-bold leading-tight w-full md:w-[60%]'>
            Discord için ihtiyacınız olan tek botla tanışın
          </h2>
          <p className='text-sm md:text-[18px] font-normal leading-relaxed mt-4 md:mt-6 text-[#B4B9CB] w-full md:w-[36%]'>
            Birçok özellik barındıran ve her geçen gün daha da yükselen ErensiBOT ile sunucunuzu renklendirin.
          </p>
          <div className='flex flex-col md:flex-row w-full md:w-auto gap-4 mt-8'>
            <Button 
              text="Discorda Ekle"
              color="#6E5FCE"
              hoverColor="#594CBC"
              url="/api/auth/signin" 
              image={true}
              className="w-full md:w-[280px]"
            />
            <Button 
              text="Kontrol Paneli"
              color="#313244"
              hoverColor="#454759"
              url="/" 
              image={false}
              className="w-full md:w-[280px]"
            />
          </div>
        </motion.div>

        {/* İkinci Bölüm */}
        <HomeSection
          title="Tamamen Özelleştirilebilir Sistemler"
          description="ErensiBOT'un moderasyon, güvenlik, denetim kaydı, otomatik cevap ve birbirinden çeşitli özellikleriyle sunucunuzu renklendirin."
          imageUrl="/features.png"
          buttonText="Discorda Ekle"
        />

        {/* Üçüncü Bölüm */}
        <HomeSection
          title="Üst Düzey Güvenlik Sistemleri"
          description="Discord sunucunuzu her türlü tehlikeye karşı üst düzey güvenlik sistemlerimiz ile korumaya alın."
          imageUrl="/security.png"
          buttonText="Discorda Ekle"
          reverse={true}
        />

        {/* Dördüncü Bölüm */}
        <HomeSection
          title="Emoji Rol Sistemi"
          description="Emoji rol sistemimiz ile üyelerin istediği rolleri tepkiler veya butonlar aracılığıyla almasını sağlayın."
          imageUrl="/reaction-role.png"
          buttonText="Discorda Ekle"
        />

        {/* Beşinci Bölüm */}
        <HomeChart />

        {/* Altıncı Bölüm */}
        <div className='flex flex-col justify-center items-center mb-16 mt-32 text-center'>
          <h1 className="text-xl md:text-3xl mb-8">
            Sunucunu renklendirmeye başla!
          </h1>
          <Button 
            text="Discorda Ekle"
            color="#6E5FCE"
            hoverColor="#594CBC"
            url="/" 
            image={true}
            className="w-full"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
