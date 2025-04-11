'use client'; 
import { useRouter } from 'next/navigation';

export default function HomePageDashboard() {
  const router = useRouter();
  return (
    <>
        <div className="flex w-full h-screen overflow-hidden">
            <div className="hidden bg-indigo-500 sm:flex sm:w-1/4 sm:h-full md:w-1/5 lg:w-1/6 xl:w-[15%] 2xl:w-1/10 justify-between flex-col">
                <div className="flex flex-col items-center pt-8 w-full gap-12 2xl:pt-12">
                    <h1 className="fade-title flex font-normal text-white cursor-pointer" onClick={() => router.push('/dashboard')}>Uploads</h1>
                    <h1 className="fade-title flex font-normal text-white cursor-pointer" onClick={() => router.push('/dashboard')}>Settings</h1>
                </div>
                <div className='flex flex-col items-center pb-6'>
                    <h1 className="fade-title flex font-normal text-white cursor-pointer" onClick={() => router.push('/dashboard')}>Dashboard</h1>
                </div>
            </div>
            <div className='flex w-full'>
                <div className='flex w-full flex-col pt-6 pl-6 pr-6 sm:pt-8 sm:pl-12 lg:pt-8 lg:pl-16 2xl:pt-12'>
                    <h1 className='flex w-full font-normal text-indigo-500 text-base'>Welcome, dear User.</h1>
                    <h1 className='flex w-full pt-6 text-indigo-500 text-base'>Insert below your csv file to convert:</h1>
                    <input
                        type="file"
                        accept=".csv"
                        className="
                            pt-10
                            text-sm text-gray-600
                            file:mr-4 file:py-2 file:px-4
                            file:rounded file:border-0
                            file:text-sm file:font-semibold
                            file:bg-indigo-500 file:text-white
                            hover:file:bg-indigo-600"
                        />
                </div>
            </div>
        </div>
    </>
  );
}
