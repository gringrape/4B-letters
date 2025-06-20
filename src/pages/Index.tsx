import Header from '../components/Header';
import ArticleList from '../components/ArticleList';

import { Pencil } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-4b-paper">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16 py-12">
          <h1 className="text-4xl md:text-6xl font-black text-4b-black mb-6 leading-tight word-keep-korean word-wrap-balance">
            48시간마다 세상에 새기는
            <br />
            <span className="text-4b-gradient">비즈니스 스토리</span>
          </h1>
          <p className="text-xl text-4b-medium-gray max-w-2xl mx-auto leading-relaxed word-keep-korean word-wrap-balance">
            <span>4B 연필처럼 진하고 선명하게, </span>
            <span>빠르고 강력한 실행력으로 세상에 새로운 가치를 새겨나가는 여정.</span>
          </p>
          <div className="mt-8 w-32 h-1 bg-4b-black mx-auto"></div>
        </section>

        {/* Articles Section */}
        <section className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-4b-black word-keep-korean">최신 이야기</h2>
            <div className="w-16 h-0.5 bg-4b-medium-gray"></div>
          </div>
          <ArticleList />
        </section>

        {/* Footer Section */}
        <footer className="mt-20 pt-12 border-t border-4b-medium-gray/20 text-center">
          <div className="flex flex-col gap-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-4b-black word-keep-korean">4B Team</h3>
            <p className="text-4b-medium-gray word-keep-korean word-wrap-balance">
              48시간마다 하나의 비즈니스를 세상에 내놓는 팀
            </p>
            <div className="flex items-center justify-center">
              <div className="w-8 h-8 bg-4b-black rounded-sm flex items-center justify-center group-hover:bg-4b-dark-gray transition-colors">
                <Pencil className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
