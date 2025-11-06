export type SupabaseServerConfig = {
  supabaseUrl: string;
  serviceRoleKey: string;
};

export function getSupabaseServerConfig(): SupabaseServerConfig {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error(
      'Missing Supabase configuration. Ensure NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set.',
    );
  }

  return { supabaseUrl, serviceRoleKey };
}

export function createSupabaseServiceHeaders(extra?: HeadersInit): HeadersInit {
  const { serviceRoleKey } = getSupabaseServerConfig();
  const baseHeaders = {
    apikey: serviceRoleKey,
    Authorization: `Bearer ${serviceRoleKey}`,
  } satisfies Record<string, string>;

  if (!extra) {
    return baseHeaders;
  }

  return {
    ...baseHeaders,
    ...(extra instanceof Headers ? Object.fromEntries(extra.entries()) : extra),
  };
}
