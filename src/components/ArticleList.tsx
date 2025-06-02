import ArticleCard from './ArticleCard';

import articles from '@/data/articles';

const ArticleList = () => {
  return (
    <div className="space-y-6">
      {articles.reverse().map((article, index) => (
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
