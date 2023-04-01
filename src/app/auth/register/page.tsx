"use client";

import { useSupabase } from '@/app/components/supabase-provider';
import { Button } from '@/components/Inputs/Button';
import { Textfield } from '@/components/Inputs/Textfield';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface RegisterProps {
  name: string;
  email: string;
  password: string;
}

function Register() {
  const { supabase } = useSupabase();
  const router = useRouter();
  const [formData, setFormData] = useState<RegisterProps>({
    name: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(val => ({
      ...val,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUserRegistration = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    const { error, data } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          name: formData.name,
        }
      }
    });

    if (error) {
      setLoading(false);
      return console.log({ error });
    }

    // TODO: enable this after email verification is implemented
    // router.push('/auth/register/success');

    router.push('/app/dashboard');
  };


  return (
    <div>
      <h2 className="text-2xl font-medium text-stone-800 text-center mb-1">
        Create an account
      </h2>
      <p className="text-stone-600 mb-8 text-center">
        Sign up and start tracking your finances
      </p>
      <form className="mb-8" onSubmit={handleUserRegistration}>
        <Textfield
          label="Name"
          id="name"
          name="name"
          onChange={handleChange} />
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
        <Button type="submit" isLoading={loading}>Sign up</Button>
      </form>
      <Link
        href="/auth"
        className="block w-full text-sm text-center font-medium text-cyan-800"
      >
        {'Login >'}
      </Link>
    </div >
  );
}

export default Register;
