import { redirect } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  const body = await request.text();

  if (!body) {
    return new Response('Email is required', {
      status: 400,
    });
  }

  const encodedEmail = body.split('=')[1];
  const email = decodeURIComponent(encodedEmail);

  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    return new Response('Invalid email format', {
      status: 400,
    });
  }

  const { error } = await supabase.from('leads').insert({ email });

  if (error) {
    console.log(error);
    return new Response(error.message, {
      status: 400,
    });
  }

  return redirect('/thank-you');
}
