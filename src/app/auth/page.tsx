import { Button } from '@/components/Inputs/Button';
import { Textfield } from '@/components/Inputs/Textfield';
import Link from 'next/link';

function Auth() {
  return (
    <div>
      <h2 className="text-2xl font-medium text-stone-800 text-center mb-1">
        Welcome back
      </h2>
      <p className="text-stone-600 mb-8 text-center">
        Please enter your credentials
      </p>

      <form className="mb-8">
        <Textfield label="Email" id="email" name="email" type="email" />
        <Textfield
          label="Password"
          id="password"
          name="password"
          type="password"
        />
        <Button type="submit">Login</Button>
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
