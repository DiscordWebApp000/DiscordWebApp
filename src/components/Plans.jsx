import React from 'react';
import Button from './Button';

const PricingGraphic = () => {
  return (
   <div className='w-full mt-[130px] mb-[100px]'>
    <div className='w-[90%] mx-auto '>
    <ul className='flex flex-row  text-white   w-full'>
            <li className='w-[50%] text-[20px]  py-6   border-white/10'>Plan Karşılaştırması</li>
            <li className='mt-4 w-[16%]  text-center py-6  border-l border-b border-white/10 bg-[#313244] rounded-t-[15px]'>Standart</li>
            <li className='w-[18%] text-center flex justify-center   py-4 h-[90px] border-[#6E5FCD] border-l border-r bg-[#2A2846] border-b-white/10 bg-[#6E5FCD] rounded-t-[15px]'>Premium</li>
            <li className='mt-4 w-[16%] text-center  py-6 border-r  border-b border-white/10 bg-[#313244] rounded-t-[15px]'>Özel Bot</li>

        </ul>
    </div>
    <div className='w-[90%] mx-auto '>
    <ul className='flex flex-row  w-full'>
            <li className='w-[50%] text-[16px]  py-6 border-r border-white/10 '>Sunucu yönetimi</li>
            <li className='w-[16%]  text-center py-6 border-r border-l border-b-0 border-white/10'></li>
            <li className='w-[18%] text-center  py-6 border-[#6E5FCD] border-l border-r bg-[#2A2846] border-b-white/10'></li>
            <li className='w-[16%] text-center  py-6 border-r border-l border-white/10'></li>

        </ul>
        <ul className='flex flex-row  text-[#B4B9CB]   w-full'>
            <li className='w-[50%] text-[15px]  py-4 border-r  border-b border-white/10'>Maksimum otomatik cevap
            </li>
            <li className='w-[16%]  text-center py-4 border-r border-l border-b border-white/10'>15</li>
            <li className='w-[18%] text-center  py-4 border-[#6E5FCD] border-l border-r bg-[#2A2846] border-b-white/10'>150</li>
            <li className='w-[16%] text-center  py-4 border-r border-l border-b border-white/10 '>150</li>

        </ul>
        <ul className='flex flex-row  text-[#B4B9CB]   w-full'>
            <li className='w-[50%] text-[15px]  py-4 border-r  border-b border-white/10 '>Maksimum emoji rol</li>
            <li className='w-[16%]  text-center py-4 border-r border-l border-b border-white/10'>15</li>
            <li className='w-[18%] text-center  py-4 border-[#6E5FCD] border-l border-r bg-[#2A2846] border-b-white/10'>150</li>
            <li className='w-[16%] text-center  py-4 border-r border-l border-b border-white/10'>150</li>

        </ul>
        <ul className='flex flex-row  text-[#B4B9CB]   w-full'>
            <li className='w-[50%] text-[15px]  py-4 border-r  border-b border-white/10 '>Maksimum emoji rol rolleri</li>
            <li className='w-[16%]  text-center py-4 border-r border-l border-b border-white/10'>1</li>
            <li className='w-[18%] text-center  py-4 border-[#6E5FCD] border-l border-r bg-[#2A2846] border-b-white/10'>5</li>
            <li className='w-[16%] text-center  py-4 border-r border-l border-b border-white/10'>5</li>

        </ul>
        
        <ul className='flex flex-row  text-[#B4B9CB]   w-full '>
            <li className='w-[50%] text-[15px]  py-4 border-r  border-b border-white/10 '>Maksimum oto rol rolleri
            </li>
            <li className='w-[16%]  text-center py-4 border-r border-l border-b border-white/10'>1</li>
            <li className='w-[18%] text-center  py-4 border-[#6E5FCD] border-l border-r bg-[#2A2846] border-b-white/10'>5</li>
            <li className='w-[16%] text-center  py-4 border-r border-l border-b border-white/10'>5</li>

        </ul> 
       
    </div>
    <div className='w-[90%] mx-auto '>
    <ul className='flex flex-row  w-full'>
            <li className='w-[50%] text-[16px]  py-6 border-r border-white/10 '>Güvenlik</li>
            <li className='w-[16%]  text-center py-6 border-r border-l border-b-0 border-white/10'></li>
            <li className='w-[18%] text-center  py-6 border-[#6E5FCD] border-l border-r bg-[#2A2846] border-b-white/10'></li>
            <li className='w-[16%] text-center  py-6 border-r border-l border-white/10'></li>

        </ul>
        <ul className='flex flex-row  text-[#B4B9CB]   w-full'>
            <li className='w-[50%] text-[15px]  py-4 border-r  border-b border-white/10'>Yeni hesap filtresi
            </li>
            <li className=' flex w-[16%]  text-center py-4 border-r border-l border-b border-white/10 justify-center'>
            <img src="/images/incorrect.svg" alt="Icon 5" className="flex-shrink-0 text-base-primary+1" width="20" height="20" /></li>
            <li className='flex justify-center w-[18%] text-center  py-4 border-[#6E5FCD] border-l border-r bg-[#2A2846] border-b-white/10'><img src="/images/correct.svg" alt="correct" className="flex-shrink-0 text-base-primary+1" width="40" height="40" /></li>
            <li className='flex justify-center w-[16%] text-center  py-4 border-r border-l border-b border-white/10 '>
            <img src="/images/correct.svg" alt="correct" className="flex-shrink-0 text-base-primary+1" width="40" height="40" />
            </li>

        </ul>
        <ul className='flex flex-row  text-[#B4B9CB]   w-full'>
            <li className='w-[50%] text-[15px]  py-4 border-r  border-b border-white/10 '>Yetkili rolü verme koruması</li>
            <li className=' flex w-[16%]  text-center py-4 border-r border-l border-b border-white/10 justify-center'>
            <img src="/images/incorrect.svg" alt="Icon 5" className="flex-shrink-0 text-base-primary+1" width="20" height="20" /></li>
            <li className=' flex justify-center w-[18%] text-center  py-4 border-[#6E5FCD] border-l border-r bg-[#2A2846] border-b-white/10'><img src="/images/correct.svg" alt="correct" className="flex-shrink-0 text-base-primary+1" width="40" height="40" /></li>
            <li className='flex justify-center w-[16%] text-center  py-4 border-r border-l border-b border-white/10'>
            <img src="/images/correct.svg" alt="correct" className="flex-shrink-0 text-base-primary+1" width="40" height="40" />
            </li>

        </ul>
        <ul className='flex flex-row  text-[#B4B9CB]   w-full'>
            <li className='w-[50%] text-[15px]  py-4 border-r  border-b border-white/10 '>Role yetki verme koruması</li>
            <li className=' flex w-[16%]  text-center py-4 border-r border-l border-b border-white/10 justify-center'>
            <img src="/images/incorrect.svg" alt="Icon 5" className="flex-shrink-0 text-base-primary+1" width="20" height="20" /></li>
            <li className='flex justify-center w-[18%] text-center  py-4 border-[#6E5FCD] border-l border-r bg-[#2A2846] border-b-white/10'><img src="/images/correct.svg" alt="correct" className="flex-shrink-0 text-base-primary+1" width="40" height="40" /></li>
            <li className='flex justify-center w-[16%] text-center  py-4 border-r border-l border-b border-white/10'>
            <img src="/images/correct.svg" alt="correct" className="flex-shrink-0 text-base-primary+1" width="40" height="40" />
            </li>

        </ul>
        
        <ul className='flex flex-row  text-[#B4B9CB]   w-full '>
            <li className='w-[50%] text-[15px]  py-4 border-r  border-b border-white/10 '>Etiket limiti
            </li>
            <li className=' flex w-[16%]  text-center py-4 border-r border-l border-b border-white/10 justify-center'>
            <img src="/images/incorrect.svg" alt="Icon 5" className="flex-shrink-0 text-base-primary+1" width="20" height="20" /></li>
            <li className='flex justify-center w-[18%] text-center  py-4 border-[#6E5FCD] border-l border-r bg-[#2A2846] border-b-white/10'><img src="/images/correct.svg" alt="correct" className="flex-shrink-0 text-base-primary+1" width="40" height="40" /></li>
            <li className='flex justify-center w-[16%] text-center  py-4 border-r border-l border-b border-white/10'>
            <img src="/images/correct.svg" alt="correct" className="flex-shrink-0 text-base-primary+1" width="40" height="40" />
            </li>

        </ul> 
        <ul className='flex flex-row  text-[#B4B9CB]   w-full '>
            <li className='w-[50%] text-[15px]  py-4 border-r  border-b border-white/10 '>Özel davet linki koruması
            </li>
            <li className=' flex w-[16%]  text-center py-4 border-r border-l border-b border-white/10 justify-center'>
            <img src="/images/incorrect.svg" alt="Icon 5" className="flex-shrink-0 text-base-primary+1" width="20" height="20" /></li>
            <li className='flex justify-center w-[18%] text-center  py-4 border-[#6E5FCD] border-l border-r bg-[#2A2846] border-b-white/10'><img src="/images/correct.svg" alt="correct" className="flex-shrink-0 text-base-primary+1" width="40" height="40" /></li>
            <li className='flex justify-center w-[16%] text-center  py-4 border-r border-l border-b border-white/10'>
            <img src="/images/correct.svg" alt="correct" className="flex-shrink-0 text-base-primary+1" width="40" height="40" />
            </li>

        </ul> 
       
    </div>
    <div className='w-[90%] mx-auto '>
    <ul className='flex flex-row  w-full'>
            <li className='w-[50%] text-[16px]  py-6 border-r border-white/10 '>Çeşitli</li>
            <li className='w-[16%]  text-center py-6 border-r border-l border-b-0 border-white/10'></li>
            <li className='w-[18%] text-center  py-6 border-[#6E5FCD] border-l border-r bg-[#2A2846] border-b-white/10'></li>
            <li className='w-[16%] text-center  py-6 border-r border-l border-white/10'></li>

        </ul>
        <ul className='flex flex-row  text-[#B4B9CB]   w-full'>
            <li className='w-[50%] text-[15px]  py-4 border-r  border-b border-white/10 '>Oy zorunluluğu yok</li>
            <li className=' flex w-[16%]  text-center py-4 border-r border-l border-b border-white/10 justify-center'>
            <img src="/images/incorrect.svg" alt="Icon 5" className="flex-shrink-0 text-base-primary+1" width="20" height="20" /></li>
            <li className=' flex justify-center w-[18%] text-center  py-4 border-[#6E5FCD] border-l border-r bg-[#2A2846] border-b-white/10'><img src="/images/correct.svg" alt="Icon 5" className="flex-shrink-0 text-base-primary+1" width="40" height="40" />
            </li>
            <li className='flex justify-center w-[16%] text-center  py-4 border-r border-l border-b border-white/10'>
            <img src="/images/correct.svg" alt="correct" className="flex-shrink-0 text-base-primary+1" width="40" height="40" />
            </li>

        </ul>
        <ul className='flex flex-row  text-[#B4B9CB]   w-full'>
            <li className='w-[50%] text-[15px]  py-4 border-r  border-b border-white/10 '>Özelleştirilebilir isim</li>
            <li className=' flex w-[16%]  text-center py-4 border-r border-l border-b border-white/10 justify-center'>
                <img src="/images/incorrect.svg" alt="Icon 5" className="flex-shrink-0 text-base-primary+1" width="20" height="20" /></li>
            <li className=' flex justify-center w-[18%] text-center  py-4 border-[#6E5FCD] border-l border-r bg-[#2A2846] border-b-white/10'><img src="/images/incorrect.svg" alt="Icon 5" className="flex-shrink-0 text-base-primary+1" width="20" height="20" />
            </li>
            <li className='flex justify-center w-[16%] text-center  py-4 border-r border-l border-b border-white/10'>
            <img src="/images/correct.svg" alt="correct" className="flex-shrink-0 text-base-primary+1" width="40" height="40" />
            </li>

        </ul>
        <ul className='flex flex-row  text-[#B4B9CB]   w-full'>
            <li className='w-[50%] text-[15px]  py-4 border-r  border-b border-white/10 '>Özelleştirilebilir avatar</li>
            <li className=' flex w-[16%]  text-center py-4 border-r border-l border-b border-white/10 justify-center'>
            <img src="/images/incorrect.svg" alt="Icon 5" className="flex-shrink-0 text-base-primary+1" width="20" height="20" /></li>
            <li className=' flex justify-center w-[18%] text-center  py-4 border-[#6E5FCD] border-l border-r bg-[#2A2846] border-b-white/10'><img src="/images/incorrect.svg" alt="Icon 5" className="flex-shrink-0 text-base-primary+1" width="20" height="20" />
            </li>
            <li className='flex justify-center w-[16%] text-center  py-4 border-r border-l border-b border-white/10'>
            <img src="/images/correct.svg" alt="correct" className="flex-shrink-0 text-base-primary+1" width="40" height="40" />
            </li>

        </ul>
        
        <ul className='flex flex-row  text-[#B4B9CB]   w-full '>
            <li className='w-[50%] text-[15px]  py-4 border-r  border-b border-white/10 '>Özelleştirilebilir durum
            </li>
            <li className=' flex w-[16%]  text-center py-4 border-r border-l border-b border-white/10 justify-center'>
                <img src="/images/incorrect.svg" alt="Icon 5" className="flex-shrink-0 text-base-primary+1" width="20" height="20" /></li>
            <li className= ' flex justify-center w-[18%] text-center  py-4 border-[#6E5FCD] border-l border-r bg-[#2A2846] border-b-white/10'>
            <img src="/images/incorrect.svg" alt="Icon 5" className="flex-shrink-0 text-base-primary+1" width="20" height="20" /></li>
            <li className='flex justify-center w-[16%] text-center  py-4 border-r border-l border-b border-white/10'>
                  <img src="/images/correct.svg" alt="correct" className="flex-shrink-0 text-base-primary+1" width="40" height="40" />
            </li>

        </ul> 
       
    </div>
    <div className='w-[90%] mx-auto '>
    <ul className='flex flex-row  w-full h-[85px]'>
            <li className='w-[50%] text-[16px]  py-6  border-white/10 '></li>
            <li className='w-[16%]  text-center py-6   border-b-0 border-white/10'></li>
            <li className='w-[18%] text-center   px-8 py-[20px] border-[#6E5FCD] border-l rounded-b-[15px] border-b border-r bg-[#2A2846] border-b-white/10'>
                <div className='mt-2'>
                <Button 
                  text="Satin al"
                  color="#6E5FCE"
                  hoverColor="#594CBC"
                  url="/" 
                  image={false}
                  
                />
                </div></li>
            <li className='w-[16%] text-center  py-6  border-white/10 px-8 py-[20px]'>
            <Button 
                  text="Satin al"
                  color="#313244"
                  hoverColor="#494A5F"
                  url="/" 
                  image={false}
                  
                /></li>

        </ul>
       
        
       
    </div>
   </div>
  );
};

export default PricingGraphic;
