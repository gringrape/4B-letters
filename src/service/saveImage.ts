import { supabase } from "@/lib/supabase";

import { v4 as uuidv4 } from 'uuid';

export default async function saveImage(file: File) {
  const fileName = uuidv4();
  const { data, error } = await supabase
    .storage
    .from('images')
    .upload(`${fileName}.png`, file, {
      cacheControl: '3600',
      upsert: false
    });

  if (error) {
    console.error('Error saving image to Supabase:', error);
    return null;
  }

  console.log('Upload data:', data);

  // 공개 URL 가져오기
  const { data: { publicUrl } } = supabase
    .storage
    .from('images')
    .getPublicUrl(`${fileName}.png`);

  console.log('Public URL:', publicUrl);

  return publicUrl;
}
