'use client'; 
import { useRouter } from 'next/navigation';
import Image from "next/image";
import back from "../../../public/icon-back.png";
import monzy from "../../../public/monzy.png";
import useAuth from '../hooks/useAuth';
import google from "../../../public/google.png";
import monzyWelcome from "../../../public/monzy-welcome-2.png";

export default function Login() {
  const router = useRouter();
  const  {handleGoogleLogin}  = useAuth();
  return (
    <>
        <div className="flex w-full flex-col md:flex-row ">
            <div className="flex flex-col items-center w-full h-screen">
                <div className="pl-4 pt-5 sm:pl-4 md:pl-6 lg:pl-10 flex w-full lg:pt-10 items-center gap-3">
                    <Image
                        src={back}
                        alt="back"
                        width={50}
                        height={60}
                        className="cursor-pointer"
                        onClick={() => router.push('/')}
                    />
                    <h1 className="flex font-normal text-xl text-indigo-500">|</h1>
                    <h1 className="flex font-normal text-xl text-indigo-500 pt-1 cursor-pointer">Login</h1>
                </div>
                <div className="flex flex-col pt-4 sm:pt-12.5 md:pt-12.5 lg:pt-6 2xl:pt-5 items-center">
                    <Image
                        src={monzy}
                        alt="monzy"
                        className="h-40 w-40 md:h-40 md:w-40 lg:w-45 lg:h-45 2xl:h-50 2xl:w-50"
                    />
                    <h1 className="pt-8 font-base text-indigo-500 text-xl sm:text-xl sm:pt-12 md:text-xl lg:text-3xl">Monzy - Currency Made Cuter.</h1>
                </div>
                <div className="flex flex-col w-full pt-10 pl-10 pr-10 md:pt-10 md:pr-10 md:pl-10 lg:pl-20 lg:pr-20 lg:pt-10 2xl:pr-65 2xl:pl-65">
                    <div className="flex flex-col">
                        <p className="flex w-full font-normal text-teal-500 pb-1">Email</p>
                        <input type="text" placeholder="Insert your email here..." className='border rounded border-indigo-500 pt-2 pr-2 pb-2 pl-4 outline-indigo-500 text-indigo-500 placeholder-gray-400' />
                    </div>
                    <div className="flex flex-col pt-12">
                        <p className="flex w-full font-normal text-teal-500 pb-1">Password</p>
                        <input type="text" placeholder="Insert your email here..." className='border rounded border-indigo-500 pt-2 pr-2 pb-2 pl-4 outline-indigo-500 text-indigo-500 placeholder-gray-400' />
                        <p className='flex w-full justify-end pt-2 font-normal text-teal-500 cursor-pointer'>Forgot password</p>
                    </div>
                </div>
                <div className='flex w-full flex-col pt-20 sm:pt-16 md:pt-14 lg:pt-12 2xl:pt-20'>
                    <div className='flex justify-center gap-2'>
                        <button className='bg-teal-500 p-2 rounded text-white w-40 cursor-pointer'>Enter</button>
                        <button onClick={handleGoogleLogin} className='bg-indigo-500 rounded cursor-pointer'>
                            <Image
                                src={google}
                                alt="google icon"
                                className='w-10 h-10 p-2 flex items-center'
                            />
                        </button>
                    </div>
                    <div className='flex justify-center items-center pt-20 sm:pt-18 md:pt-14 lg:pt-12 2xl:pt-20'>
                        <p className='font-normal text-teal-500 underline underline-offset-8 cursor-pointer'>Create User</p>
                    </div>
                </div>
          </div>
          <div className="justify-center items-center w-full hidden lg:flex">
            <Image
                src={monzyWelcome}
                alt='monzy-welcome'
                className='w-full h-screen'
            />
          </div>
      </div>  
    </>
  );
}
