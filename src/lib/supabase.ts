import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// 기사 타입 정의
export interface Article {
  id: string
  title: string
  excerpt: string
  publishedAt: string
  readTime: string
  content: string
  created_at?: string
  updated_at?: string
} 
