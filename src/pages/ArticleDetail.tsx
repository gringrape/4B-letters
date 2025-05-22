
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';

const mockArticleContent = {
  '1': {
    title: '48시간 만에 MVP를 출시하는 방법',
    content: `
48시간이라는 제한된 시간 안에 완성도 있는 MVP를 출시하는 것은 불가능해 보일 수 있습니다. 하지만 4B 팀은 이를 현실로 만들어왔습니다.

## 핵심 원칙

**1. 완벽함보다 실행력**
완벽한 제품을 만들려고 하지 마세요. 사용자가 핵심 가치를 경험할 수 있는 최소한의 기능에 집중하세요.

**2. 기술 스택의 단순화**
익숙한 기술만 사용하세요. 새로운 기술을 배울 시간은 없습니다. 검증된 도구와 프레임워크를 활용하여 개발 속도를 극대화하세요.

**3. 사전 준비의 중요성**
48시간이 시작되기 전에 이미 승부는 결정됩니다. 명확한 기획과 사용자 스토리, 와이어프레임을 미리 준비하세요.

## 실행 단계

### Day 1: 기반 구축 (24시간)
- 0~6시간: 개발 환경 설정 및 기본 구조 구축
- 6~12시간: 핵심 기능 개발
- 12~18시간: UI/UX 구현
- 18~24시간: 기본 테스트 및 버그 수정

### Day 2: 완성과 배포 (24시간)  
- 24~30시간: 추가 기능 구현
- 30~36시간: 폴리싱 및 최적화
- 36~42시간: 배포 준비 및 테스트
- 42~48시간: 배포 및 피드백 수집

이렇게 4B 팀은 48시간마다 새로운 비즈니스를 세상에 선보이며, 진한 연필처럼 시장에 선명한 흔적을 남기고 있습니다.
    `,
    publishedAt: '2024년 5월 20일',
    readTime: '5분 읽기'
  }
};

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const article = id ? mockArticleContent[id as keyof typeof mockArticleContent] : null;

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
            <h1 className="text-3xl md:text-4xl font-black text-4b-black mb-4 leading-tight">
              {article.title}
            </h1>
            <div className="flex items-center text-4b-medium-gray text-sm">
              <time dateTime={article.publishedAt}>{article.publishedAt}</time>
              <span className="mx-2">•</span>
              <span>{article.readTime}</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            {article.content.split('\n').map((paragraph, index) => {
              if (paragraph.trim() === '') return null;
              
              if (paragraph.startsWith('##')) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-4b-black mt-8 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <h3 key={index} className="text-xl font-bold text-4b-black mt-6 mb-3">
                    {paragraph.replace(/\*\*/g, '')}
                  </h3>
                );
              }
              
              if (paragraph.startsWith('###')) {
                return (
                  <h3 key={index} className="text-xl font-bold text-4b-black mt-6 mb-3">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              
              if (paragraph.startsWith('-')) {
                return (
                  <li key={index} className="text-4b-dark-gray leading-relaxed mb-2 ml-4">
                    {paragraph.replace('- ', '')}
                  </li>
                );
              }
              
              return (
                <p key={index} className="text-4b-dark-gray leading-relaxed mb-4">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </article>

        <div className="mt-12 text-center">
          <div className="w-16 h-0.5 bg-4b-black mx-auto mb-6"></div>
          <p className="text-4b-medium-gray font-medium">
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
