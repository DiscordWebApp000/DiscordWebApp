import React from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Page = () => {
  return (
    <>
      <div className="w-[1200px] mx-auto">
        <Navbar />

        <div className="flex flex-col justify-center items-center mb-16 mt-32">
          <h1 className="text-center text-xl text-base-heading md:text-3xl lg:text-4xl mb-4">
            Hizmet Şartları
          </h1>
        </div>

        <section className="mx-auto max-w-4xl py-8 md:py-16 px-4">
          <div className="prose prose-lg prose-invert !max-w-none">
            <p className="text-[#D1D5DB] text-base mb-6">
              <span className="text-[#D1D5DB] text-lg">ErensiBOT</span> (&quot;biz&quot;, &quot;biz&quot; veya &quot;bizim&quot;) tarafından işletilen&nbsp;
              <Link href="https://eren.si" className="text-indigo-500 underline text-[#818CF8]">
                https://eren.si
              </Link> web sitesini (&quot;Hizmet&quot;) kullanmadan önce lütfen bu Şartlar ve Koşulları (&quot;Şartlar&quot;, &quot;Şartlar ve Koşullar&quot;) dikkatlice okuyun. Hizmete erişiminiz ve Hizmeti kullanımınız, bu Şartları kabul etmeniz ve bunlara uymanız koşuluna bağlıdır. Bu Şartlar, Hizmet&apos;e erişmek veya Hizmet&apos;i kullanmak isteyen tüm ziyaretçiler, kullanıcılar ve diğerleri için geçerlidir. Hizmete erişerek veya Hizmeti kullanarak bu Şartlara tabi olmayı kabul edersiniz. Şartların herhangi bir bölümüne katılmıyorsanız, Hizmete erişim izniniz yoktur.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Satın Almalar</h3>
            <p className="text-[#D1D5DB] text-base mb-6">
              Hizmet aracılığıyla sunulan herhangi bir ürün veya hizmeti (&quot;Satın Alma&quot;) satın almak isterseniz, kredi kartı numaranız, kredi kartınızın son kullanma tarihi, fatura adresiniz ve gönderim bilgileriniz dahil ancak bunlarla sınırlı olmamak üzere Satın Alma işleminizle ilgili belirli bilgileri sağlamanız istenebilir.
            </p>
            <p className="text-[#D1D5DB] text-base mb-6">
              Şunları beyan ve garanti edersiniz: (i) herhangi bir Satın Alma ile bağlantılı olarak herhangi bir kredi kartını/kartlarını veya diğer ödeme yöntemini/yöntemlerini kullanmak için yasal hakka sahip olduğunuzu; ve (ii) bize sağladığınız bilgilerin gerçek, doğru ve eksiksiz olduğunu.
            </p>
            <p className="text-[#D1D5DB] text-base mb-6">
              Hizmet, ödemeyi kolaylaştırmak ve Satın Alma işlemlerini tamamlamak amacıyla üçüncü taraf hizmetlerinin kullanımını kullanabilir. Bilgilerinizi göndererek, Gizlilik Politikamıza tabi olarak bu üçüncü taraflara bilgi sağlama hakkını bize vermiş olursunuz.
            </p>
            <p className="text-[#D1D5DB] text-base mb-6">
              Ürün veya hizmet mevcudiyeti, ürün veya hizmetin tanımı veya fiyatındaki hatalar, siparişinizdeki hata veya diğer nedenler dahil ancak bunlarla sınırlı olmamak üzere herhangi bir zamanda siparişinizi reddetme veya iptal etme hakkımızı saklı tutarız.
            </p>
            <p className="text-[#D1D5DB] text-base mb-6">
              Dolandırıcılık veya yetkisiz veya yasa dışı bir işlemden şüphelenilmesi durumunda siparişinizi reddetme veya iptal etme hakkımızı saklı tutarız.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Kullanılabilirlik, Hatalar ve Yanlışlıklar</h3>
            <p className="text-[#D1D5DB] text-base mb-6">
              Hizmetteki ürün ve hizmet tekliflerini sürekli olarak güncelliyoruz. Hizmetteki bilgilerin güncellenmesinde ve diğer web sitelerindeki reklamlarımızda gecikmeler yaşayabiliriz. Hizmette bulunan bilgiler hatalar veya yanlışlıklar içerebilir ve eksiksiz veya güncel olmayabilir. Ürünler veya hizmetler yanlış fiyatlandırılabilir, yanlış tanımlanabilir veya Hizmette mevcut olmayabilir ve Hizmette bulunan herhangi bir bilginin doğruluğunu veya eksiksizliğini garanti edemeyiz. Bu nedenle, önceden haber vermeksizin herhangi bir zamanda bilgileri değiştirme veya güncelleme ve hataları, yanlışlıkları veya eksiklikleri düzeltme hakkımızı saklı tutarız.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Diğer Web Sitelerine Bağlantılar</h3>
            <p className="text-[#D1D5DB] text-base mb-6">
              Hizmetimiz, ErensiBOT&apos;a ait olmayan veya ErensiBOT tarafından kontrol edilmeyen üçüncü taraf web sitelerine veya hizmetlerine bağlantılar içerebilir. ErensiBOT, herhangi bir üçüncü taraf web sitesinin veya hizmetinin içeriği, gizlilik politikaları veya uygulamaları üzerinde hiçbir kontrole sahip değildir ve hiçbir sorumluluk kabul etmez. Bu kuruluşların/bireylerin veya web sitelerinin tekliflerini garanti etmiyoruz. Ayrıca, ErensiBOT&apos;un, bu tür web sitelerinde veya hizmetlerde bulunan bu tür içerik, mal veya hizmetlerin kullanımından veya bunlara güvenilmesinden kaynaklanan veya bunlarla bağlantılı olduğu iddia edilen herhangi bir hasar veya kayıptan doğrudan veya dolaylı olarak sorumlu veya yükümlü olmayacağını kabul ve beyan edersiniz. Ziyaret ettiğiniz tüm üçüncü taraf web sitelerinin veya hizmetlerinin hüküm ve koşulları ile gizlilik politikalarını okumanızı önemle tavsiye ederiz.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Fesih</h3>
            <p className="text-[#D1D5DB] text-base mb-6">
              Koşulların ihlali dahil ancak bununla sınırlı olmamak üzere, herhangi bir nedenle ve herhangi bir sınırlama olmaksızın, tamamen kendi takdirimize bağlı olarak, önceden bildirimde bulunmaksızın veya yükümlülük altına girmeksizin Hizmete erişiminizi derhal sonlandırabilir ve/veya askıya alabiliriz.
            </p>
            <p className="text-[#D1D5DB] text-base mb-6">
              Şartların doğası gereği fesihten sonra da geçerli olması gereken tüm hükümleri geçerliliğini koruyacaktır mülkiyet hükümleri, garanti feragatnameleri, tazminat ve sorumluluk sınırlamaları dahil ancak bunlarla sınırlı olmamak üzere fesih.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Tazminat</h3>
            <p className="text-[#D1D5DB] text-base mb-6">
              Bizi, lisans sahibimizi ve lisans verenlerimizi, onların çalışanlarını, yüklenicilerini, temsilcilerini, memurlarını ve yöneticilerini, aşağıdakilerden kaynaklanan veya bunlardan kaynaklanan tüm taleplere, zararlara, yükümlülüklere, kayıplara, maliyetlere veya borçlara ve masraflara (avukatlık ücretleri dahil ancak bunlarla sınırlı olmamak üzere) karşı savunmayı, tazmin etmeyi ve zararsız tutmayı kabul edersiniz:
            </p>
            <ul className="list-disc ml-6 mb-6 text-[#D1D5DB] text-base">
              <li>Hizmeti kullanımınız ve Hizmete erişiminiz;</li>
              <li>Bu Şartların ihlali.</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4">Sorumluluk Reddi</h3>
            <p className="text-[#D1D5DB] text-base mb-6">
              Hizmet&apos;i kullanımınız tamamen sizin sorumluluğunuzdadır. Hizmet, &quot;OLDUĞU GİBİ&quot; ve &quot;MEVCUT OLDUĞU GİBİ&quot; esasına göre sunulmaktadır. Hizmet, açık veya zımni hiçbir garanti olmaksızın, ticarete elverişlilik, belirli bir amaca uygunluk, ihlal etmeme veya performans sürecinden kaynaklanan garantiler de dahil olmak üzere sağlanmaktadır.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Geçerli Hukuk</h3>
            <p className="text-[#D1D5DB] text-base mb-6">
              Bu Şartlar, Türkiye yasalarına göre yönetilecek ve bu yasalara uygun olarak yorumlanacaktır; yasaların ihtilafına bakılmaksızın.
            </p>
            <p className="text-[#D1D5DB] text-base mb-6">
              Bu Şartlarda yer alan herhangi bir hakkı veya hükmü uygulamamamız, bu haklardan feragat edildiği anlamına gelmez. Bu Şartların herhangi bir hükmünün bir mahkeme tarafından geçersiz veya uygulanamaz olarak değerlendirilmesi durumunda, bu Şartların diğer hükümleri yürürlükte kalacaktır. Bu Şartlar, Hizmetimizle ilgili olarak aramızdaki anlaşmanın tamamını teşkil eder ve Hizmetle ilgili olabilecek önceki anlaşmaların yerine geçer.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Değişiklikler</h3>
            <p className="text-[#D1D5DB] text-base mb-6">
              Tamamen kendi takdirimize bağlı olarak, bu Şartları herhangi bir zamanda değiştirme veya yerine yenilerini getirme hakkını saklı tutarız. Revizyon önemliyse, yürürlüğe girmeden en az 30 gün önce yeni şartlar hakkında bilgi vereceğiz. Bir revizyonun &quot;önemli&quot; olduğu, tamamen kendi takdirimize bağlı olarak belirlenir.
            </p>
            <p className="text-[#D1D5DB] text-base mb-6">
              Bu revizyonların yürürlüğe girmesinden sonra Hizmetimize erişmeye veya Hizmetimizi kullanmaya devam ederek, revize edilen şartlara tabi olmayı kabul edersiniz. Yeni şartları kabul etmiyorsanız, lütfen Hizmeti kullanmayı bırakın.
            </p>
          </div>
        </section>
      </div>
        <Footer />
    </>
  );
};

export default Page;
