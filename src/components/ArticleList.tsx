import { useEffect, useState } from 'react';

import ArticleCard from './ArticleCard';

import loadArticles from '../service/loadArticles';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    loadArticles().then((data) => {
      setArticles(data);
    });
  });
  
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
