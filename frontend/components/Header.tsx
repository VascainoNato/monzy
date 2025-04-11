'use client'; 
import Image from 'next/image';
import logo from '../public/monzy.png';
import { useRouter } from 'next/navigation';
import useScrollToSection from '@/app/hooks/useScrollToSection';

const Header = () => {
  const router = useRouter();
  const { scrollToSection } = useScrollToSection();
  return (
    <header className="w-full border-b shadow-sm border-indigo-200 p-2.5 bg-white flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0 pr-26 pl-26">
        <div className="flex w-full gap-2">
            <Image
                src={logo}
                alt="Logo Monzy"
                width={65}
                height={65}
                className="h-16 w-auto"
            />
            <h1 className="fade-title flex items-center pt-2 font-medium text-teal-500 rounded text-1xl cursor-pointer" onClick={() => router.push('/')}>Monzy - Currency Made Cuter.</h1>
        </div>
        <div className='flex w-full items-center pt-2 justify-end gap-20'>
            <h1 className="fade-title text-1xl text-center md:text-left font-medium text-teal-500 cursor-pointer" onClick={() => scrollToSection('home', 1000)}>Home</h1>
            <h1 className="fade-title text-1xl text-center md:text-left font-medium text-teal-500 cursor-pointer" onClick={() => scrollToSection('about-us', 1500)}>About Us</h1>
            <h1 className="fade-title text-1xl text-center md:text-left font-medium text-teal-500 cursor-pointer" onClick={() => scrollToSection('services', 1500)}>Services</h1>
            <button className="flex items-center bg-indigo-500 text-white h-12 w-18 justify-center rounded font-medium cursor-pointer text-1xl" onClick={() => router.push('/login')}>Login</button>
        </div>
    </header>
  );
};

export default Header;
