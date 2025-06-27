import { supabase } from "@/lib/supabase";

import { v4 as uuidv4 } from 'uuid';

export default async function saveArticle(value: string, title: string, excerpt: string, publishedAt: string, readTime: string) {
  const { data, error } = await supabase
    .from('articles')
    .insert({
      id: uuidv4(),
      title: title,
      excerpt: excerpt,
      publishedAt: publishedAt,
      readTime: readTime,
      content: value,
    });

  if (error) {
    console.error('Error saving article to Supabase:', error);
    return null;
  }

  return data;
}
