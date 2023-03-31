import { createServerClient } from '@/lib/supabase-server';
import { redirect } from 'next/navigation';

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

  const supabase = createServerClient();

  const { error } = await supabase.from('leads').insert({ email });

  if (error) {
    console.log(error);
    return new Response(error.message, {
      status: 400,
    });
  }

  return redirect('/thank-you');
}
