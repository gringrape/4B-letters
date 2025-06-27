import { supabase, Article } from "@/lib/supabase";

export default async function loadArticles(): Promise<Article[]> {
  try {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .order('created_at', { ascending: false });

    console.log(data);

    if (error) {
      console.error('Error loading articles from Supabase:', error);
      // 오류 발생 시 빈 배열 반환
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Unexpected error loading articles:', error);
    return [];
  }
}
