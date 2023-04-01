"use client";

import Link from 'next/link';
import { useSupabase } from '../components/supabase-provider';
import { useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import { IconButton } from '@/components/Inputs/IconButton';
import { MdLogout, MdMenu } from 'react-icons/md';
import { usePathname } from 'next/navigation';

function UserNavigation({ children }: { children?: React.ReactNode }) {
  const { supabase } = useSupabase();
  const routeParams = usePathname();

  const [user, setUser] = useState<User | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    async function getUser() {
      const { data } = await supabase.auth.getUser();

      if (data) {
        setUser(data.user);
      }
    }

    getUser();
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    };
  }, [routeParams])

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const isDashboard = routeParams === '/app/dashboard';
  const isWallet = routeParams === '/app/wallets';
  const isDebts = routeParams === '/app/debts';

  const activeLink = 'underline decoration-2 underline-offset-4 text-white';
  const showMenu = isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0';

  return (
    <div className="w-full h-screen box-border px-4 pb-4 grid grid-rows-[64px_1fr] bg-stone-900">
      <nav className="flex justify-between items-center">
        <div className='flex md:hidden'>
          <IconButton
            icon={MdMenu}
            className='text-white'
            onClick={() => setIsMenuOpen(true)}
          />
        </div>
        <ul className="hidden md:flex flex-1 gap-4 text-white/50">
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

      <aside className={`block md:hidden absolute top-0 left-0 bg-stone-900 h-screen w-2/3 p-8 z-20 duration-200 ${showMenu}`}>
        <ul className="text-white/50 flex flex-col gap-4">
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
      </aside>

      <button
        className={`block md:hidden w-screen h-screen z-10 absolute top-0 left-0 bg-black/40 backdrop-blur-sm duration-200 ${showMenu}`}
        onClick={() => setIsMenuOpen(false)}
      />

      <main className="w-full box-border p-4 bg-white rounded-lg">
        {children}
      </main>
    </div>
  )
}

export { UserNavigation }