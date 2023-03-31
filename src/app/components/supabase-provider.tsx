'use client';

import { Session, SupabaseClient, createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { createContext, useContext, useState } from 'react';
import { Database } from '@/types/supabase';


type SupabaseContext = {
  supabase: SupabaseClient<Database>;
  session: Session | null;
};

// @ts-ignore
const Context = createContext<SupabaseContext>();

export default function SupabaseProvider({
  children,
  session
}: {
  children: React.ReactNode;
  session: Session | null;
}) {
  const [supabase] = useState(() => createBrowserSupabaseClient<Database>());

  return (
    <Context.Provider value={{ supabase, session }}>
      <>{children}</>
    </Context.Provider>
  );
}

export const useSupabase = () => useContext(Context);