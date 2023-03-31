'use client';

import { useSupabase } from "@/app/components/supabase-provider";

function Dashboard() {
  const { supabase } = useSupabase();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log({ error });
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard.</p>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;