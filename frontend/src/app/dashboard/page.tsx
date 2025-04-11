'use client'; 
import Image from 'next/image';
import logo from '../../../public/monzy.png';
import menu from '../../../public/menu.png';
import user from '../../../public/user.png';

export default function Dashboard() {

  return (
    <>
        <header className="flex w-full pt-2 items-center justify-center sm:flex sm:pb-2 sm:justify-around sm:border-indigo-500 sm:border-b-2 md:shadow-sm md:border-indigo-200">
            <div className="flex w-full justify-around sm:justify-between sm:pl-10 sm:pr-10 md:pl-8 md:pr-8 lg:pr-6 lg:pl-6 xl:pr-4 xl:pl-4 2xl:pr-10 2xl:pl-10">
                <Image
                    src={menu}
                    alt='menu-hamburger'
                    className='w-15 sm:hidden md:hidden lg:hidden 2xl:hidden'
                />
                <Image
                    src={logo}
                    alt="Logo Monzy"
                    width={65}
                    height={65}
                    className="h-15 w-auto"
                />
                 <div className='w-full hidden items-center justify-center sm:flex'>
                    <input type="text" className='border flex w-1/2 border-indigo-500 rounded text-indigo-500 pt-1 pl-4 pb-1 outline outline-indigo-500 placeholder-gray-500' placeholder='Search...'/>
                </div>
                 <Image
                    src={user}
                    alt="user"
                    width={65}
                    height={65}
                    className="h-16 w-auto"
                />
                <h1 className="fade-title items-center hidden pt-2 font-medium text-teal-500 rounded text-1xl cursor-pointer">Monzy - Currency Made Cuter.</h1>
            </div>
            <div className='w-full hidden items-center pt-2 md:gap-20 md:flex-2 justify-center'>
                <input type="text" className='border'/>
            </div>
            <div className='w-full items-center pt-2 hidden justify-end md:gap-20 flex-2'>
                <h1 className="fade-title text-1xl text-center md:text-left font-medium text-teal-500 cursor-pointer" >Home</h1>
                <h1 className="fade-title text-1xl text-center md:text-left font-medium text-teal-500 cursor-pointer" >About Us</h1>
                <h1 className="fade-title text-1xl text-center md:text-left font-medium text-teal-500 cursor-pointer" >Services</h1>
            </div>
        </header>
    </>
  );
}
