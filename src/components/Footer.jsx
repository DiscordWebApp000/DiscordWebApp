import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="mt-auto w-full  border-t border-white/10 bg-[#181825] px-6 md:px-0">
            <div className="mx-auto max-w-screen-xl px-6 py-12 md:py-16">
                <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
                    {/* Logo ve açıklama */}
                    <section className="col-span-2 space-y-6">
                        <Image
                            alt="Logo"
                            src="/logo.png"
                            width={35}
                            height={35}
                            loading="lazy"
                            className="!color-transparent"
                        />
                        <p className="max-w-[16rem] text-sm" style={{ color: '#91B9CB', fontSize: '0.875rem' }}>
                            ErensiBOT ile Discord deneyiminizi farklı bir boyuta taşıyın
                        </p>
                    </section>
                    {/* Bağlantılar */}
                    <section className="space-y-6">
                        <span className="text-sm text-base-heading" style={{ color: 'white' }}>Bağlantılar</span>
                        <ul className="space-y-3">
                            <li className="flex text-sm">
                                <Link href="/premium" className="transition-colors" style={{ color: '#91B9CB' }}>
                                    Premium
                                </Link>
                            </li>
                            <li className="flex text-sm">
                                <Link href="/vote" className="transition-colors" style={{ color: '#91B9CB' }}>
                                    Oy ver
                                </Link>
                            </li>
                            <li className="flex text-sm">
                                <a
                                    href="/support"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-x-1.5 transition-colors"
                                    style={{ color: '#91B9CB' }}
                                >
                                    <span>Destek sunucusu</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3"></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </section>
                    {/* Kurumsal */}
                    <section className="space-y-6">
                        <span className="text-sm text-base-heading" style={{ color: 'white' }}>Kurumsal</span>
                        <ul className="space-y-3">
                            <li className="flex text-sm">
                                <Link href="/terms" className="transition-colors" style={{ color: '#91B9CB' }}>
                                    Hizmet şartları
                                </Link>
                            </li>
                            <li className="flex text-sm">
                                <Link href="/privacy" className="transition-colors" style={{ color: '#91B9CB' }}>
                                    Gizlilik politikası
                                </Link>
                            </li>
                            <li className="flex text-sm">
                                <Link href="/refunds" className="transition-colors" style={{ color: '#91B9CB' }}>
                                    İade politikası
                                </Link>
                            </li>
                            <li className="flex text-sm">
                                <a
                                    href="mailto:info@eren.si"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-x-1.5 transition-colors"
                                    style={{ color: '#91B9CB' }}
                                >
                                    <span>Bize ulaşın</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3"></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>
                {/* Telif hakkı bildirimi */}
                <small className="mt-4 text-sm" style={{ color: '#91B9CB' }}>© 2024 ErensiBOT</small>
            </div>
        </footer>
    );
};

export default Footer;
