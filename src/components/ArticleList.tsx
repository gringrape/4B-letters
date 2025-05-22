
import ArticleCard from './ArticleCard';

const mockArticles = [
  {
    id: '1',
    title: '48시간 만에 MVP를 출시하는 방법',
    excerpt: '빠른 실행력으로 아이디어를 현실로 만드는 4B 팀의 비밀을 공개합니다. 기획부터 개발, 배포까지 압축된 프로세스를 살펴보세요.',
    publishedAt: '2024년 5월 20일',
    readTime: '5분 읽기'
  },
  {
    id: '2', 
    title: '진한 흔적을 남기는 비즈니스 전략',
    excerpt: '4B 연필처럼 진하고 선명한 브랜드를 만드는 방법. 시장에 강력한 인상을 남기는 브랜딩 전략과 실행 사례를 다룹니다.',
    publishedAt: '2024년 5월 18일',
    readTime: '7분 읽기'
  },
  {
    id: '3',
    title: '최소한의 리소스로 최대한의 임팩트',
    excerpt: '스타트업의 한정된 자원을 효율적으로 활용하여 큰 성과를 내는 방법. 4B 팀이 실천하는 린 스타트업 방법론을 소개합니다.',
    publishedAt: '2024년 5월 16일',
    readTime: '6분 읽기'
  },
  {
    id: '4',
    title: '실패를 성공의 발판으로 만드는 마인드셋',
    excerpt: '빠른 실패, 빠른 학습. 4B 팀이 실패를 통해 더 강해지는 과정과 이를 통해 얻은 인사이트를 공유합니다.',
    publishedAt: '2024년 5월 14일',
    readTime: '4분 읽기'
  }
];

const ArticleList = () => {
  return (
    <div className="space-y-6">
      {mockArticles.map((article, index) => (
        <div 
          key={article.id} 
          className="animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <ArticleCard {...article} />
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
