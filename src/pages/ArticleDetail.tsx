
import { useParams, Link } from 'react-router-dom';

import Header from '../components/Header';

import { marked } from 'marked';

import articles from '@/data/articles';

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();

  const article = articles.find(article => article.id === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-4b-paper">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-4b-black mb-4">글을 찾을 수 없습니다</h1>
          <Link to="/" className="text-4b-medium-gray hover:text-4b-black underline">
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-4b-paper">
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <Link 
            to="/" 
            className="text-4b-medium-gray hover:text-4b-black font-medium transition-colors mb-6 inline-block"
          >
            ← 뒤로 가기
          </Link>
        </div>

        <article className="bg-white rounded-lg border border-4b-medium-gray/20 p-8 md:p-12">
          <header className="mb-8 pb-8 border-b border-4b-medium-gray/20">
            <h1 className="text-3xl md:text-4xl font-black text-4b-black mb-4 leading-tight word-keep-korean word-wrap-balance">
              {article.title}
            </h1>
            <div className="flex items-center text-4b-medium-gray text-sm">
              <time dateTime={article.publishedAt}>{article.publishedAt}</time>
              <span className="mx-2">•</span>
              <span>{article.readTime}</span>
            </div>
          </header>

          <div className="prose-4b">
            <div dangerouslySetInnerHTML={{ __html: marked.parse(article.content) }} />
          </div>
        </article>

        <div className="mt-12 text-center">
          <div className="w-16 h-0.5 bg-4b-black mx-auto mb-6"></div>
          <p className="text-4b-medium-gray font-medium word-keep-korean">
            4B Newsletter에서 더 많은 이야기를 만나보세요
          </p>
          <Link 
            to="/" 
            className="inline-block mt-4 px-6 py-3 bg-4b-black text-white font-bold rounded-lg hover:bg-4b-dark-gray transition-colors"
          >
            더 많은 글 보기
          </Link>
        </div>
      </main>
    </div>
  );
};

export default ArticleDetail;
