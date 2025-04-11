import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const useLogin = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:4000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        toast.success('Login successful!'); 
        router.push('/dashboard');
      } else {
        const error = await response.text();
        toast.error(error || 'Login failed'); 
      }
    } catch {
      toast.error('An error occurred'); 
    }
  };

  return {
    email,
    password,
    setEmail,
    setPassword,
    handleSubmit,
  };
};

export default useLogin;