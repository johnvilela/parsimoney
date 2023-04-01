'server-only';

import { LayoutProps } from "@/types/layout";
import SupabaseProvider from "../components/supabase-provider";
import SupabaseListener from "../components/supabase-listener";
import { createServerClient } from "@/lib/supabase-server";
import { UserNavigation } from "./UserNavigation";

export const revalidate = 0;

async function AppLayout({ children }: LayoutProps) {
  const supabase = createServerClient();

  const {
    data: { session }
  } = await supabase.auth.getSession();

  return (
    <SupabaseProvider session={session}>
      <SupabaseListener serverAccessToken={session?.access_token} />
      <UserNavigation>
        {children}
      </UserNavigation>
    </SupabaseProvider>
  );
}

export default AppLayout;