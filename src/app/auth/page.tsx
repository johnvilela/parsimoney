'use client';

import { Button } from '@/components/Inputs/Button';
import { Textfield } from '@/components/Inputs/Textfield';
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { useSupabase } from '../components/supabase-provider';
import { useRouter } from 'next/navigation';

interface FormData {
  email: string;
  password: string;
}

function Auth() {
  const { supabase } = useSupabase();
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleEmailLogin = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);

    const { error, data } = await supabase.auth.signInWithPassword({
      ...formData
    });


    if (error) {
      setLoading(false);
      return console.log({ error });
    }

    if (data.session) {
      router.push('/app/dashboard');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(val => ({
      ...val,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <h2 className="text-2xl font-medium text-stone-800 text-center mb-1">
        Welcome back
      </h2>
      <p className="text-stone-600 mb-8 text-center">
        Please enter your credentials
      </p>

      <form className="mb-8" onSubmit={handleEmailLogin}>
        <Textfield
          label="Email"
          id="email"
          name="email"
          type="email"
          onChange={handleChange} />
        <Textfield
          label="Password"
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
        />
        <Button type="submit" isLoading={loading}>Login</Button>
      </form>
      <Link
        href="/auth/register"
        className="block w-full text-sm text-center font-medium text-cyan-800"
      >
        {'Create an account >'}
      </Link>
    </div>
  );
}

export default Auth;
