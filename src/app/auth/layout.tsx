import { LayoutProps } from '@/types/layout';
import SupabaseProvider from '../components/supabase-provider';

export const revalidate = 0;

function AuthLayout({ children }: LayoutProps) {
  return (
    <main className="relative w-screen h-screen grid place-items-center bg-stone-100 p-4 lg:p-2">
      <h1 className="absolute top-0 text-3xl w-full text-center py-2 font-medium tracking-tighter text-stone-800 bg-gradient-to-b from-stone-600 to-stone-900 bg-clip-text text-transparent">
        PARSIMONEY
      </h1>
      <div className="drop-shadow shadow-[0_15px_2rem] shadow-sky-100 max-w-md bg-white w-full p-8 rounded-md border border-stone-200">
        <SupabaseProvider session={null}>
          {children}
        </SupabaseProvider>
      </div>
    </main>
  );
}

export default AuthLayout;
