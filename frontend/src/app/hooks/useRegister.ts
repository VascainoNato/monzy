import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const useRegister = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async () => {
    console.log('Submitting registration with:', { email, password, name });
    try {
      const response = await fetch('http://localhost:4000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name }),
      });
      console.log('Response status:', response.status);

      if (response.ok) {
        toast.success('Registration successful!'); 
        router.push('/login');
      } else {
        const error = await response.text();
        console.log('Error response:', error);
        toast.error(error || 'Registration failed');
      }
    } catch {
      toast.error('An error occurred'); 
    }
  };

  return {
    email,
    password,
    name,
    setName,
    setEmail,
    setPassword,
    handleSubmit,
  };
};

export default useRegister;