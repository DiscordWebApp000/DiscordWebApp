'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HomeChart = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,  // Animasyon sadece bir kez tetiklenecek
    threshold: 0.2
  });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.6 }}
      variants={sectionVariants}
      className="max-w-container-lg py-8 md:py-16"
    >
      <h1 className="text-center text-xl text-base-heading md:text-3xl lg:text-4xl">Ve çok daha fazlası...</h1>
      <div className="mt-16 flex flex-wrap justify-center">
        
        <div className="flex flex-col items-center gap-y-2 border-[#313244] p-6 text-center md:w-1/3 md:border-b md:border-r md:p-10">
          <img src="/images/icon-1.svg" alt="Icon 1" className="flex-shrink-0 text-base-primary+1" width="32" height="32" />
          <span className="mt-4 text-sm font-medium text-base-heading md:text-base">Otomatik Moderasyon</span>
          <span className="text-xs md:text-sm text-[#7FAACB]">Link engelleme, reklam engelleme ve daha nice özellikleri ile moderatörlerin işini sizin için yapsın</span>
        </div>
        
        <div className="flex flex-col items-center gap-y-2 border-[#313244] p-6 text-center md:w-1/3 md:border-b md:border-r md:p-10">
          <img src="/images/icon-2.svg" alt="Icon 2" className="flex-shrink-0 text-base-primary+1" width="32" height="32" />
          <span className="mt-4 text-sm font-medium text-base-heading md:text-base">Özel Bot</span>
          <span className="text-xs md:text-sm text-[#7FAACB]">Kendi sunucunuza ait tamamen kişileştirilebilir botunuz ile deneyiminizi en üst seviyeye çıkarın</span>
        </div>
        
        <div className="flex flex-col items-center gap-y-2 border-[#313244] p-6 text-center md:w-1/3 md:border-b md:border-r md:p-10 md:border-r-0">
          <img src="/images/icon-3.svg" alt="Icon 3" className="flex-shrink-0 text-base-primary+1" width="32" height="32" />
          <span className="mt-4 text-sm font-medium text-base-heading md:text-base">Oto Cevap</span>
          <span className="text-xs md:text-sm text-[#7FAACB]">Belirtilen yazılara dilediğiniz şekilde otomatik cevap verecek bir yanıt sistemi kurun</span>
        </div>
        
        <div className="flex flex-col items-center gap-y-2 border-[#313244] p-6 text-center md:w-1/3 md:border-b md:border-r md:p-10 md:border-b-0">
          <img src="/images/icon-4.svg" alt="Icon 4" className="flex-shrink-0 text-base-primary+1" width="32" height="32" />
          <span className="mt-4 text-sm font-medium text-base-heading md:text-base">Karşılama</span>
          <span className="text-xs md:text-sm text-[#7FAACB]">Üyelerinize özel sıcak bir karşılama mesajı gönderin, otomatik roller verin, isimlerini temizleyin</span>
        </div>
        
        <div className="flex flex-col items-center gap-y-2 border-[#313244] p-6 text-center md:w-1/3 md:border-b md:border-r md:p-10 md:border-b-0 md:border-r-0">
          <img src="/images/icon-5.svg" alt="Icon 5" className="flex-shrink-0 text-base-primary+1" width="32" height="32" />
          <span className="mt-4 text-sm font-medium text-base-heading md:text-base">Denetim Kaydı</span>
          <span className="text-xs md:text-sm text-[#7FAACB]">Tamamen özelleştirilebilir sistemimizle sunucunuzda olan her olayın denetim kaydını tutun</span>
        </div>
        
      </div>
    </motion.section>
  );
};

export default HomeChart;
