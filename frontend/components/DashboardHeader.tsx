'use client'; 
import Image from 'next/image';
import logo from '../public/monzy.png';
import menu from '../public/menu.png';
import user from '../public/user.png';
import alert from '../public/alert.png';

interface Props {
    onToggleMenu?: () => void;
}

export default function DashboardHeader({ onToggleMenu }: Props) {

  return (
    <>
        <header className="flex w-full pt-2 items-center justify-center pb-12 border-indigo-500 border-b shadow-sm sm:flex sm:pb-2 sm:justify-around sm:border-indigo-500 sm:border-b-2 sm:pr-6 sm:pl-2 md:shadow-sm md:border-indigo-200 md:pl-0 md:pr-0">
            <div className="flex w-full flex-col justify-around sm:justify-between sm:pl-10 sm:pr-10 md:pl-8 md:pr-8 lg:pr-6 lg:pl-6 xl:pr-4 xl:pl-4 2xl:pr-10 2xl:pl-10">
                <div className='flex w-full justify-around'>
                    <Image
                        src={menu}
                        alt='menu-hamburger'
                        className='w-15 sm:hidden md:hidden lg:hidden 2xl:hidden'
                        onClick={onToggleMenu}
                    />
                    <Image
                        src={logo}
                        alt="Logo Monzy"
                        width={65}
                        height={65}
                        className="h-15 w-auto"
                    />
                    <div className='fade-title w-full hidden items-center justify-center sm:flex'>
                        <input type="text" className='border flex w-1/2 border-indigo-500 rounded text-indigo-500 pt-2 pl-4 pb-2 text-sm outline outline-indigo-500 placeholder-gray-500' placeholder='Search...'/>
                    </div>
                    <div className='flex justify-between w-1/6'>
                        <Image
                            src={alert}
                            alt="user"
                            width={65}
                            height={65}
                            className="fade-title h-16 mt-1 w-auto cursor-pointer sm:mt-0"
                        />
                        <Image
                            src={user}
                            alt="user"
                            width={65}
                            height={65}
                            className="fade-title h-16 w-auto cursor-pointer hidden sm:flex"
                        />
                    </div>
                    <h1 className="fade-title items-center hidden pt-2 font-medium text-teal-500 rounded text-1xl cursor-pointer">Monzy - Currency Made Cuter.</h1>
                </div>     
                <div className='flex flex-col pt-6 justify-center w-full items-center pr-14 pl-14 sm:hidden'>
                    <input type="text" className='border flex w-full border-indigo-500 rounded text-indigo-500 pt-2 pl-4 pb-2 text-xs outline outline-indigo-500 placeholder-gray-500' placeholder='Search...'/>
                </div>
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
