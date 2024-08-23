import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Refunds = () => {
  return (
    <>
      <div className='w-[1200px] mx-auto'>
        <Navbar />

        <div className="flex flex-col justify-center items-center mb-20 mt-36">
          <h1 className="text-center text-xl text-base-heading md:text-3xl lg:text-4xl mb-6">
          İade politikası
          </h1>
        </div>

        <section className="mx-auto max-w-4xl py-10 md:py-18 text-[#D1D5DB]">
          <div className="prose prose-xl prose-invert !max-w-none prose-headings:font-medium prose-a:text-[#AFB0BA] prose-p:text-[#AFB0BA] prose-ul:text-[#AFB0BA] prose-li:text-[#AFB0BA]" style={{ fontSize: '1.1rem' }}>
            <ol className="list-decimal ml-8">
              <li className="mb-10">
                <p>
                  Bu Gizlilik Politikası, "ErensiBOT" olarak bilinen Discord botunun ve{' '}
                  <Link href="https://eren.si" className="text-[#818CF8] underline">https://eren.si</Link>{' '}
                  web sitesinin kullanım amacını, toplanan verilerin açıkça tarafınıza bildirilmesi, toplanan verilerin ne şekilde toplandığını açıklamak ve açıkça belirtmek amacıyla oluşturulmuştur.
                </p>
              </li>
              <li className="mb-10">
                <p>
                  Hizmeti sağlamak için, aşağıdakilerden bazıları veya tümü dahil olmak üzere belirli kişisel bilgiler ("Veriler") toplanır ve işlenir. Bunlar:
                </p>
                <ul className="list-disc ml-8 mb-10">
                  <li>
                    <p>
                      Discord ve website aracılığıyla toplanan kişisel verileriniz: E-posta adresi, fatura adresi, telefon numarası, IP adresi, alıcı adı ve soyadı; ödeme için kullanılan kartın sahibi, son 4 hanesi ve markası
                    </p>
                  </li>
                  <li>
                    <p>
                      Google Analytics'in web sitesinden topladığı veriler
                    </p>
                  </li>
                  <li>
                    <p>
                      Google AdSense'in topladığı ve çerezlere kaydettiği veriler
                    </p>
                  </li>
                  <li>
                    <p>
                      Cloudflare'in topladığı veriler
                    </p>
                  </li>
                </ul>
              </li>
              <li className="mb-10">
                <p>
                  Kişisel verileriniz çeşitli sebeplerle PayTR Ödeme ve Elektronik Para Kuruluşu A.Ş. ile paylaşılabilir. Daha fazla bilgi için{' '}
                  <Link href="https://www.paytr.com/gizlilik" className="text-[#AFB0BA] underline">PayTR Gizlilik Politikasına</Link>{' '}
                  göz atınız.
                </p>
              </li>
              <li className="mb-10">
                <p>
                  Verileriniz, bize sağladığınız tüm ek bilgilerle birlikte saklanacak ve size hizmeti sağlamak ve hizmeti iyileştirmek için kullanılacaktır. Hizmeti kullanmanıza, pazarlama ve araştırmayla ilgili faaliyetler gerçekleştirmemize, diğer idari hizmetleri sağlamamıza, müşteri desteği sağlamamıza olanak sağlayacak bilgi ve araçları size sağlamak için belirli kişisel bilgileri toplayabilir, saklayabilir, işleyebilir ve/veya diğer kayıt tutma amaçları ve hizmeti iyileştirmek için kullanabiliriz.
                </p>
              </li>
              <li className="mb-10">
                <p>
                  Web sitesinin devri gibi durumlarda kişisel bilgileriniz, web sitesini devralan şahıs/şirket/tüzel kişilere devredilebilir. Devirden sonra verilerinizi korumak devralan sorumluluğundadır. Bu tip durumlar, yasal zorunluluk olması sebebiyle kullanıcılara iletişim kanalları aracılığıyla bildirilecektir.
                </p>
              </li>
              <li className="mb-10">
                <p>
                  Site, belirli üçüncü taraf web sitelerine bağlantılar gösterebilir. Kişisel bilgileriniz paylaşıldığı üçüncü taraf web sitelerinin bireysel gizlilik politikalarını okumanız önerilir. Google AdSense ya da banner/e-posta yoluyla gösterilen website reklam sahipleri ile ErensiBOT’un ilişkisi bulunmamaktadır. Kullanıcılar işbu sözleşmenin onayıyla beraber bu durumun bilincinde olduğunu kabul ve beyan eder.
                </p>
              </li>
              <li className="mb-10">
                <p>
                  Kullanıcı deneyiminizi iyileştirmek amacıyla siteye erişirken “çerezler” kullanılabilir. Çerezler ayrıca genel kullanım ve hacim istatistiksel bilgilerini toplamak için kullanılır. "Flash" çerezleri olarak da bilinen yerel "paylaşılan nesneleri" kullanabiliriz. ErensiBOT, çerezlerin bu amaçlar dışında kullanılmayacağını kabul, beyan ve taahhüt eder.
                </p>
              </li>
              <li className="mb-10">
                <p>
                  Verilerinize erişme ve verilerinizin düzeltilmesini, silinmesini, kısıtlanmasını veya işlenmesine itiraz etme hakkınız olduğunu lütfen unutmayın. Yürürlükteki yasalara tabi olarak,{' '}
                  <Link href="mailto:info@eren.si" className="text-[#AFB0BA] underline">info@eren.si</Link>{' '}
                  adresinden bizimle iletişime geçerek onayınızı geri çekebilirsiniz. Bizden e-posta bildirimleri veya reklamlar almakla ilgilenmiyorsanız,{' '}
                  <Link href="mailto:info@eren.si" className="text-[#AFB0BA] underline">info@eren.si</Link>{' '}
                  adresine e-mail göndererek talepte bulunabilirsiniz. Her durumda, hizmeti sağlamak için gerekli verileri ve diğer yasal nedenleri geçerli Veri Koruma Yasasına tam olarak uygun şekilde tutma hakkını saklı tutarız.
                </p>
              </li>
              <li className="mb-10">
                <p>
                  Bu Gizlilik Politikasını zaman zaman değiştirebiliriz ve bu değişiklikler, revize edilen Gizlilik Politikasının websitesinde yayınlandığı tarihten itibaren geçerli olacaktır. Herhangi bir değişiklikten haberdar olmanız için Gizlilik Politikamızı düzenli olarak gözden geçirmenizi öneririz.
                </p>
              </li>
              <li className="mb-10">
                <p>
                  Gizlilik uygulamalarımız hakkında başka sorularınız varsa, lütfen{' '}
                  <Link href="mailto:info@eren.si" className="text-[#818CF8] underline">info@eren.si</Link>{' '}
                  adresine e-posta göndererek bizimle iletişime geçiniz.
                </p>
              </li>
            </ol>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Refunds;
