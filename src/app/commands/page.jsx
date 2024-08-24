'use client';

import Navbar from '../../components/Navbar';
import CommandsSection from '../../components/CommandsSection';
import Footer from '../../components/Footer';

const Page = () => {
  return (
    <>
      <div className="w-[1200px] mx-auto mb-16">
        <Navbar />

        <div className="flex flex-col justify-center items-center mb-16 mt-32">
          <h1 className="text-center text-xl text-base-heading md:text-3xl lg:text-4xl mb-4">
            Komutlar
          </h1>
          <p className="text-[17px] font-normal leading-relaxed mt-2 text-[#B4B9CB] w-[45%] text-center">
            ErensiBOT'un komutlarına buradan ulaşabilirsiniz
          </p>
        </div>
      {/* <CommandsSection /> */}
      </div>
      <Footer />
    </>
  );
};

export default Page;
