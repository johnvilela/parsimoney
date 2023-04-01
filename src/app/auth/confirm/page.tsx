"use client";

import { useSupabase } from "@/app/components/supabase-provider";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function ConfirmAuth() {
  const { supabase } = useSupabase();
  const searchParams = useSearchParams();
  const router = useRouter();

  const [error, setError] = useState(false);

  const accessToken = searchParams.get('access_token');
  const refreshToken = searchParams.get('refresh_token');

  useEffect(() => {
    const createSession = async () => {
      const { data, error } = await supabase.auth.setSession({
        access_token: accessToken!,
        refresh_token: refreshToken!,
      })

      if (error) {
        setError(true);
        return;
      }

      if (data.session) {
        router.push('/app/dashboard');
      }
    };

    if (!accessToken || !refreshToken) {
      setError(true);
      return;
    }

    createSession();
  }, [])

  if (error) return <div>Erro ao confirmar autenticação</div>;

  return <div>Carregando...</div>;
}

export default ConfirmAuth;