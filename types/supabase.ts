export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      events: {
        Row: {
          id: string;
codex/create-next.js-base-for-horsecamp-application
          type: string;

          type: 'stage' | 'rando' | 'concours' | 'club';
main
          title: string;
          slug: string;
          description: string | null;
          discipline: string | null;
          niveau: string | null;
          age_group: string | null;
          start_date: string | null;
          end_date: string | null;
          price_min: number | null;
          price_max: number | null;
          region: string | null;
          location: string | null;
          lat: number | null;
          lng: number | null;
          horses_provided: boolean | null;
          accommodation: boolean | null;
          organizer_id: string | null;
          premium_until: string | null;
          status: 'draft' | 'published' | 'archived';
          created_at: string;
        };
codex/create-next.js-base-for-horsecamp-application
        Insert: Partial<Database['public']['Tables']['events']['Row']>;
        Update: Partial<Database['public']['Tables']['events']['Row']>;

        Insert: {
          id?: string;
          type: 'stage' | 'rando' | 'concours' | 'club';
          title: string;
          slug: string;
          description?: string | null;
          discipline?: string | null;
          niveau?: string | null;
          age_group?: string | null;
          start_date?: string | null;
          end_date?: string | null;
          price_min?: number | null;
          price_max?: number | null;
          region?: string | null;
          location?: string | null;
          lat?: number | null;
          lng?: number | null;
          horses_provided?: boolean | null;
          accommodation?: boolean | null;
          organizer_id?: string | null;
          premium_until?: string | null;
          status?: 'draft' | 'published' | 'archived';
          created_at?: string;
        };
        Update: Partial<Database['public']['Tables']['events']['Insert']>;
        Relationships: [];
main
      };
      organizers: {
        Row: {
          id: string;
          name: string;
          email: string;
          phone: string | null;
          website: string | null;
          logo: string | null;
          verified: boolean | null;
          description: string | null;
          created_at: string;
        };
codex/create-next.js-base-for-horsecamp-application
        Insert: Partial<Database['public']['Tables']['organizers']['Row']>;
        Update: Partial<Database['public']['Tables']['organizers']['Row']>;
        Insert: {
          id?: string;
          name: string;
          email: string;
          phone?: string | null;
          website?: string | null;
          logo?: string | null;
          verified?: boolean | null;
          description?: string | null;
          created_at?: string;
        };
        Update: Partial<Database['public']['Tables']['organizers']['Insert']>;
        Relationships: [];
main
      };
      leads: {
        Row: {
          id: string;
          event_id: string;
          organizer_id: string;
codex/create-next.js-base-for-horsecamp-application
          payload: Json | null;
          created_at: string;
        };
        Insert: Partial<Database['public']['Tables']['leads']['Row']>;
        Update: Partial<Database['public']['Tables']['leads']['Row']>;

          payload: Json;
          created_at: string;
        };
        Insert: {
          id?: string;
          event_id: string;
          organizer_id: string;
          payload?: Json;
          created_at?: string;
        };
        Update: Partial<Database['public']['Tables']['leads']['Insert']>;
        Relationships: [];
main
      };
      reviews: {
        Row: {
          id: string;
          event_id: string;
          user_id: string;
          rating: number;
          comment: string | null;
          created_at: string;
        };
codex/create-next.js-base-for-horsecamp-application
        Insert: Partial<Database['public']['Tables']['reviews']['Row']>;
        Update: Partial<Database['public']['Tables']['reviews']['Row']>;

        Insert: {
          id?: string;
          event_id: string;
          user_id: string;
          rating: number;
          comment?: string | null;
          created_at?: string;
        };
        Update: Partial<Database['public']['Tables']['reviews']['Insert']>;
        Relationships: [];
main
      };
      users: {
        Row: {
          id: string;
          name: string | null;
          email: string;
          role: 'admin' | 'organizer' | 'user';
          created_at: string;
        };
codex/create-next.js-base-for-horsecamp-application
        Insert: Partial<Database['public']['Tables']['users']['Row']>;
        Update: Partial<Database['public']['Tables']['users']['Row']>;
      };
    };
    Functions: Record<string, unknown>;
    Enums: Record<string, unknown>;

        Insert: {
          id?: string;
          name?: string | null;
          email: string;
          role?: 'admin' | 'organizer' | 'user';
          created_at?: string;
        };
        Update: Partial<Database['public']['Tables']['users']['Insert']>;
        Relationships: [];
      };
    };
main
  };
}
