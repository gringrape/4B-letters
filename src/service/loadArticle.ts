import { supabase } from "@/lib/supabase";

export default async function loadArticle(id: string) {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error loading article from Supabase:', error);
    return null;
  }

  return data;
}
