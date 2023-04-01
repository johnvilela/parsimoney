"use client";

import Link from 'next/link';
import { useSupabase } from '../components/supabase-provider';
import { useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import { IconButton } from '@/components/Inputs/IconButton';
import { MdLogout } from 'react-icons/md';
import { usePathname } from 'next/navigation';

function UserNavigation({ children }: { children?: React.ReactNode }) {
  const { supabase } = useSupabase();
  const routeParams = usePathname();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function getUser() {
      const { data } = await supabase.auth.getUser();

      if (data) {
        setUser(data.user);
      }
    }

    getUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const isDashboard = routeParams === '/app/dashboard';
  const isWallet = routeParams === '/app/wallets';
  const isDebts = routeParams === '/app/debts';

  const activeLink = 'underline decoration-2 underline-offset-4 text-white';

  return (
    <div className="w-screen h-screen px-4 pb-4 grid grid-rows-[64px_1fr] bg-stone-900">
      <nav className="flex items-center">
        <ul className="flex flex-1 gap-4 text-white/50">
          <li>
            <Link
              href="/app/dashboard"
              className={isDashboard ? activeLink : ''}
            >Dashboard</Link>
          </li>
          <li>
            <Link
              href="/app/wallets"
              className={isWallet ? activeLink : ''}
            >Wallets</Link>
          </li>
          <li>
            <Link
              href="/app/debts"
              className={isDebts ? activeLink : ''}
            >Debts</Link>
          </li>
        </ul>
        <div className="w-40 flex gap-2 justify-end">
          <span className='text-white'>
            {user?.user_metadata.name || 'username'}
          </span>
          <IconButton
            icon={MdLogout}
            size='1.5rem'
            className='text-white'
            onClick={handleLogout} />
        </div>
      </nav>

      <main className="w-full p-4 bg-white rounded-lg">
        {children}
      </main>
    </div>
  )
}

export { UserNavigation }