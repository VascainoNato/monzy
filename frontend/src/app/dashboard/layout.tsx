'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import DashboardHeader from '../../../components/DashboardHeader';
import HomePageDashboard from '../../../components/HomePageDashboard';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login'); 
      }
    }, []);

  return (
    <div>
      <DashboardHeader />
      <HomePageDashboard/>
      <main className="p-4">{children}</main>
    </div>
  );
}
