
import { Link } from 'react-router-dom';

interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
}

const ArticleCard = ({ id, title, excerpt, publishedAt, readTime }: ArticleCardProps) => {
  return (
    <Link to={`/article/${id}`} className="group block">
      <article className="border border-4b-medium-gray/20 rounded-lg p-6 hover:border-4b-black/40 hover:shadow-lg transition-all duration-200 bg-white">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h2 className="text-xl font-bold text-4b-black group-hover:text-4b-dark-gray transition-colors mb-2 leading-tight">
              {title}
            </h2>
            <p className="text-4b-light-gray leading-relaxed">
              {excerpt}
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-between text-sm text-4b-medium-gray">
          <time dateTime={publishedAt}>{publishedAt}</time>
          <span className="font-medium">{readTime}</span>
        </div>
        
        <div className="mt-4 w-full h-0.5 bg-4b-medium-gray/10 group-hover:bg-4b-black/20 transition-colors"></div>
      </article>
    </Link>
  );
};

export default ArticleCard;
