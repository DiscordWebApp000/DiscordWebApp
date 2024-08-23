'use client';

import Navbar from '../../components/Navbar';
import React, { useState } from 'react';
import Icon from '../../components/Icon'; // Import the Icon component
import Button from '../../components/Button';
import Dropdown from '../../components/Dropdown'; // Import the Dropdown component
import Footer from '../../components/Footer';
import { motion } from 'framer-motion'; // Import framer-motion
import Plans from '../../components/Plans';

const Page = () => {
  // Define the features for the Premium and Custom plans
  const features = [
    'Tüm özelliklere erişim',
    'Oy zorunluluğu yok',
    'Gelişmiş güvenlik sistemleri',
    'Yüksek emoji rol limiti',
    'Öncelikli destek'
  ];

  const customFeatures = [
    'Tamamen Özelleştirilebilir',
    'Premium özellikler dahil',
    '99.9% aktiflik süresi',
    '20 sunucuda kullanılabilir'
  ];

  // State to manage selected options for each plan
  const [selectedOptionPremium, setSelectedOptionPremium] = useState('1');
  const [selectedOptionCustom, setSelectedOptionCustom] = useState('1');

  // Function to render features as list items
  const renderFeatures = (features) =>
    features.map((feature, index) => (
      <li key={index} className="flex items-center gap-x-4">
        <Icon className="text-emerald-500" />
        <span className="text-base-heading">{feature}</span>
      </li>
    ));

  // Function to get the price based on the selected option and plan type
  const getPrice = (selectedOption, plan) => {
    const prices = {
      '1': 3.25,
      '2': 6.50,
      '3': 9.75,
      '6': 19.50,
      '12': 39.00,
      'unlimited': 78.00
    };
    // Custom plan is double the base price
    return plan === 'custom' ? (prices[selectedOption] * 2) : prices[selectedOption];
  };

  return (
    <>
      <div className='w-[1200px] mx-auto'>
        <Navbar />    

        <div className='flex flex-col justify-center items-center mb-16 mt-32'>
          <h1 className="text-center text-xl text-base-heading md:text-3xl lg:text-4xl mb-4">
            ErensiBOT Premium
          </h1>
          <p className='text-[17px] font-normal leading-relaxed mt-2 text-[#B4B9CB] w-[45%] text-center'>
            Premium özelliklerle sunucunuzu bambaşka bir seviyeye taşıyın
          </p>
        </div>

        <div className='text-xl h-full w-full flex justify-center items-center'>
          <section 
            className="w-[70%] mx-auto flex flex-row items-center justify-center gap-y-4 py-8 md:flex-row md:py-16" 
            id="plans"
          >
            {/* Premium Plan */}
            <motion.div 
              className="flex w-[50%] flex-col gap-y-6 rounded-xl bg-[#232334] border border-white/10 p-6 shadow-lg md:p-8 z-10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <header className="space-y-3 border-b border-white/10 pb-6">
                <div className="flex items-center justify-between">
                  <span className="text-lg text-indigo-300">Premium</span>
                  <span className="rounded-lg bg-emerald-300/10 px-2 py-1 text-sm text-emerald-300">En popüler</span>
                </div>
                <h1 className="text-4xl uppercase text-base-heading">
                  {getPrice(selectedOptionPremium, 'premium')} USD
                </h1>
              </header>
              <ul className="space-y-3 border-t border-transparent py-6 text-sm">
                {renderFeatures(features)}
              </ul>
              <footer className="grid grid-cols-2 gap-x-3">
                <label className="flex flex-col gap-y-1.5 flex-grow">
                  <Dropdown 
                    selected={selectedOptionPremium} 
                    onSelect={setSelectedOptionPremium} 
                  />
                </label>
                <Button 
                  text="Satin al"
                  color="#6E5FCE"
                  hoverColor="#594CBC"
                  url="/" 
                  image={false}
                />
              </footer>
            </motion.div>

            {/* Custom Plan */}
            <motion.div 
              className="flex w-[45%] flex-col gap-y-4 rounded-xl bg-[#232334] border border-white/10 p-6 shadow-lg md:p-6 md:rounded-l-none"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <header className="space-y-3 border-b border-white/10 pb-6">
                <div className="flex items-center justify-between">
                  <span className="text-lg text-indigo-300">Özel Bot</span>
                </div>
                <h1 className="text-3xl uppercase text-base-heading">
                  {getPrice(selectedOptionCustom, 'custom')} USD
                </h1>
              </header>
              <ul className="space-y-3 border-t border-transparent py-7 text-sm">
                {renderFeatures(customFeatures)}
              </ul>
              <footer className="grid grid-cols-2 gap-x-3">
                <label className="flex flex-col gap-y-1.5 flex-grow">
                  <Dropdown 
                    selected={selectedOptionCustom} 
                    onSelect={setSelectedOptionCustom} 
                  />
                </label>
                <Button 
                  text="Satın al"
                  color="#6E5FCE"
                  hoverColor="#594CBC"
                  url="/" 
                  image={false}
                />
              </footer>
            </motion.div>
          </section>
        </div>

        <Plans />
      </div>

      <Footer />
    </>
  );
};

export default Page;
