'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import DashboardHeader from '../../../components/DashboardHeader';
import HomePageDashboard from '../../../components/HomePageDashboard';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const closeMobileMenu = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setIsMobileMenuOpen(false);
      setIsAnimatingOut(false);
    }, 800); 
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <DashboardHeader onToggleMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
      <div className="hidden sm:flex">
        <HomePageDashboard />
      </div>

      {(isMobileMenuOpen || isAnimatingOut) && (
        <div className={`absolute top-0 left-0 z-50 w-3/5 h-full bg-indigo-500 sm:hidden flex flex-col p-6 gap-6
          ${isAnimatingOut ? 'animate-slide-out' : 'animate-slide-in'}
        `}>
          <button
            onClick={closeMobileMenu}
            className="absolute top-4 right-4 text-white text-2xl font-bold pr-1"
          >
            ✕
          </button>
          <div className="flex flex-col pt-12 gap-6 justify-between h-screen">
            <div className="flex flex-col justify-between h-1/5">
              <h1 className="text-white text-lg font-medium cursor-pointer">Dashboard</h1>
              <h1 className="text-white text-lg font-medium cursor-pointer">Uploads</h1>
              <h1 className="text-white text-lg font-medium cursor-pointer">Settings</h1>
            </div>
          </div>
        </div>
      )}
      <main className="h-full overflow-auto">{children}</main>
    </div>
  );
}
