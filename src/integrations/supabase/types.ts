export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      cargos: {
        Row: {
          client: string | null
          code: string | null
          created_at: string | null
          description: string | null
          destination: string | null
          driver_id: string | null
          id: string
          origin: string | null
          partner_id: string | null
          price: string | null
          status: string | null
          updated_at: string | null
          weight: string | null
        }
        Insert: {
          client?: string | null
          code?: string | null
          created_at?: string | null
          description?: string | null
          destination?: string | null
          driver_id?: string | null
          id?: string
          origin?: string | null
          partner_id?: string | null
          price?: string | null
          status?: string | null
          updated_at?: string | null
          weight?: string | null
        }
        Update: {
          client?: string | null
          code?: string | null
          created_at?: string | null
          description?: string | null
          destination?: string | null
          driver_id?: string | null
          id?: string
          origin?: string | null
          partner_id?: string | null
          price?: string | null
          status?: string | null
          updated_at?: string | null
          weight?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cargos_driver_id_fkey"
            columns: ["driver_id"]
            isOneToOne: false
            referencedRelation: "drivers"
            referencedColumns: ["id"]
          },
        ]
      }
      drivers: {
        Row: {
          created_at: string | null
          document: string | null
          documents: Json | null
          email: string | null
          id: string
          licensenumber: string | null
          licensetype: string | null
          name: string
          phone: string | null
          status: string | null
          updated_at: string | null
          vehicleinfo: Json | null
          vehicleplate: string | null
          vehicletype: string | null
        }
        Insert: {
          created_at?: string | null
          document?: string | null
          documents?: Json | null
          email?: string | null
          id?: string
          licensenumber?: string | null
          licensetype?: string | null
          name: string
          phone?: string | null
          status?: string | null
          updated_at?: string | null
          vehicleinfo?: Json | null
          vehicleplate?: string | null
          vehicletype?: string | null
        }
        Update: {
          created_at?: string | null
          document?: string | null
          documents?: Json | null
          email?: string | null
          id?: string
          licensenumber?: string | null
          licensetype?: string | null
          name?: string
          phone?: string | null
          status?: string | null
          updated_at?: string | null
          vehicleinfo?: Json | null
          vehicleplate?: string | null
          vehicletype?: string | null
        }
        Relationships: []
      }
      feedback: {
        Row: {
          created_at: string | null
          id: string
          message: string | null
          sentiment_score: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          message?: string | null
          sentiment_score?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          message?: string | null
          sentiment_score?: number | null
          user_id?: string | null
        }
        Relationships: []
      }
      payment_requests: {
        Row: {
          amount: string
          bank_info: string
          cargo_id: string
          created_at: string
          documents: Json
          driver: string
          driver_id: string | null
          id: string
          notes: string | null
          request_date: string
          status: string
          type: string
          updated_at: string
        }
        Insert: {
          amount: string
          bank_info: string
          cargo_id: string
          created_at?: string
          documents?: Json
          driver: string
          driver_id?: string | null
          id?: string
          notes?: string | null
          request_date?: string
          status?: string
          type: string
          updated_at?: string
        }
        Update: {
          amount?: string
          bank_info?: string
          cargo_id?: string
          created_at?: string
          documents?: Json
          driver?: string
          driver_id?: string | null
          id?: string
          notes?: string | null
          request_date?: string
          status?: string
          type?: string
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          first_name: string | null
          id: string
          last_name: string | null
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      system_settings: {
        Row: {
          created_at: string
          id: string
          settings_data: Json
          updated_at: string
        }
        Insert: {
          created_at?: string
          id: string
          settings_data: Json
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          settings_data?: Json
          updated_at?: string
        }
        Relationships: []
      }
      whitelabel_settings: {
        Row: {
          created_at: string
          id: string
          settings_data: Json
          updated_at: string
        }
        Insert: {
          created_at?: string
          id: string
          settings_data: Json
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          settings_data?: Json
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
