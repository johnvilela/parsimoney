import { Button } from '@/components/Inputs/Button';
import { Textfield } from '@/components/Inputs/Textfield';
import Link from 'next/link';

function Register() {
  return (
    <div>
      <h2 className="text-2xl font-medium text-stone-800 text-center mb-1">
        Create an account
      </h2>
      <p className="text-stone-600 mb-8 text-center">
        Sign up and start tracking your finances
      </p>
      <form className="mb-8">
        <Textfield label="Name" id="name" name="name" />
        <Textfield label="Email" id="email" name="email" type="email" />
        <Textfield
          label="Password"
          id="password"
          name="password"
          type="password"
        />
        <Button type="submit">Sign up</Button>
      </form>
      <Link
        href="/auth"
        className="block w-full text-sm text-center font-medium text-cyan-800"
      >
        {'Login >'}
      </Link>
    </div>
  );
}

export default Register;
