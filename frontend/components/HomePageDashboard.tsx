'use client'; 
import { useRouter } from 'next/navigation';

export default function HomePageDashboard() {
  const router = useRouter();
  return (
    <>
        <div className="flex w-full h-screen overflow-hidden">
            <div className="hidden bg-indigo-500 sm:flex sm:w-1/4 sm:h-full md:w-1/5 lg:w-1/6 xl:w-[50%] 2xl:w-1/12 justify-between flex-col">
                <div className="flex flex-col items-center pt-8 w-full gap-12">
                    <h1 className="fade-title flex font-normal text-white cursor-pointer" onClick={() => router.push('/dashboard')}>Dashboard</h1>
                    <h1 className="fade-title flex font-normal text-white cursor-pointer" onClick={() => router.push('/dashboard')}>Uploads</h1>
                    <h1 className="fade-title flex font-normal text-white cursor-pointer" onClick={() => router.push('/dashboard')}>Settings</h1>
                </div>
                <div className='flex flex-col items-center pb-6'>
                    <h1 className="fade-title flex font-normal text-white cursor-pointer" onClick={() => router.push('/dashboard')}>Dashboard</h1>
                </div>
            </div>
        </div>
    </>
  );
}
