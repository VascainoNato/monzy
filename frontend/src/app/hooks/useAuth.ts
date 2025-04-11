import { useRouter } from 'next/navigation';

const useAuth = () => {
  const router = useRouter();

  const handleGoogleLogin = (): void => {
    window.location.href = 'http://localhost:4000/auth/google'; 
  };

  const handleLoginRedirect = () => {
    router.push('/dashboard'); 
  };
  
  return {
    handleGoogleLogin,
    handleLoginRedirect,
  };
};

export default useAuth;