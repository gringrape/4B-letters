import { useState, useEffect } from "react";

import MDEditor from "@uiw/react-md-editor";
import { marked } from "marked";

import saveArticle from "@/service/saveArticle";
import saveImage from "@/service/saveImage";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const STORAGE_KEY = "article-draft";

export default function ArticleEdit() {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [publishedAt, setPublishedAt] = useState("");
  const [readTime, setReadTime] = useState("");
  const [loadingText, setLoadingText] = useState("");

  // 페이지 로드시 로컬스토리지에서 데이터 불러오기
  useEffect(() => {
    const savedDraft = localStorage.getItem(STORAGE_KEY);
    if (savedDraft) {
      try {
        const draft = JSON.parse(savedDraft);
        setValue(draft.value || "");
        setTitle(draft.title || "");
        setExcerpt(draft.excerpt || "");
        setPublishedAt(draft.publishedAt || "");
        setReadTime(draft.readTime || "");
      } catch (error) {
        console.error("임시저장 데이터를 불러오는데 실패했습니다:", error);
      }
    }
  }, []);

  const handleSave = async () => {
    await saveArticle(value, title, excerpt, publishedAt, readTime);
    // 저장 성공시 임시저장 데이터 삭제
    localStorage.removeItem(STORAGE_KEY);
  };

  const handlePaste = async (event: React.ClipboardEvent<HTMLDivElement>) => {
    const clipboardData = event.clipboardData;
    
    // 클립보드에 파일이 있는지 확인
    if (clipboardData.files.length === 1) {
      const file = clipboardData.files[0] as File;
      
      // 이미지 파일인지 확인
      if (file.type.startsWith('image/')) {
        event.preventDefault(); // 기본 붙여넣기 방지
        
        try {
          // 로딩 표시
          setLoadingText(`![업로드 중...](data:image/gif;base64,loading)`);
          setValue(prev => prev + '\n' + loadingText);
          
          // 이미지 업로드
          const imageUrl = await saveImage(file);
          
          // 마크다운 형태로 교체
          const markdown = `![이미지](${imageUrl})`;
          setValue(prev => prev.replace(loadingText, markdown));
          
        } catch (error) {
          console.error('이미지 업로드 실패:', error);
          setValue(prev => prev.replace(loadingText, '❌ 이미지 업로드 실패'));
          setLoadingText('');
        }
      }
    }
  };
  

  const handleTempSave = () => {
    const draft = {
      value,
      title,
      excerpt,
      publishedAt,
      readTime,
      savedAt: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
    alert("임시저장되었습니다!");
  };

  return (

    <div className="container">
      <h2>부가 정보 입력</h2>
      <form className="mt-4 mb-4 flex flex-col gap-4 p-6 border border-4b-medium-gray/20 rounded-lg bg-white shadow-sm">
        <input type="text" name="title" placeholder="제목" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" name="excerpt" placeholder="부제" value={excerpt} onChange={(e) => setExcerpt(e.target.value)} />
        <input type="text" name="publishedAt" placeholder="2025년 5월 8일" value={publishedAt} onChange={(e) => setPublishedAt(e.target.value)} />
        <input type="text" name="readTime" placeholder="5분 읽기" value={readTime} onChange={(e) => setReadTime(e.target.value)} />
      </form>
      <h2 className="mt-4 mb-4">글 작성</h2>
      <MDEditor
        height={400}
        preview='edit'
        value={value}
        onChange={setValue}
        onPaste={handlePaste}  // 👈 이 부분 추가
      />      
    <h2 className="mt-4 mb-4">프리뷰</h2>
      <div className="prose-4b">
        <div dangerouslySetInnerHTML={{ __html: marked.parse(value) }} />
      </div>
      
      <div className="flex gap-2 mt-4">
        <button 
          className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600" 
          onClick={handleTempSave}
        >
          임시저장
        </button>
        
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button className="bg-4b-black text-white px-4 py-2 rounded-md">저장</button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>작성한 글을 저장할까요?</AlertDialogTitle>
              <AlertDialogDescription>
                작성한 글을 저장하시겠습니까?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>아니요</AlertDialogCancel>
              <AlertDialogAction onClick={handleSave}>예</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}
