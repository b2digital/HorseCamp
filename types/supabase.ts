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
          type: 'stage' | 'rando' | 'concours' | 'club';
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
      };
      leads: {
        Row: {
          id: string;
          event_id: string;
          organizer_id: string;
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
      };
      users: {
        Row: {
          id: string;
          name: string | null;
          email: string;
          role: 'admin' | 'organizer' | 'user';
          created_at: string;
        };
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
  };
}
