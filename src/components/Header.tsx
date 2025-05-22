
import { Link } from 'react-router-dom';
import { Pencil } from 'lucide-react';

const Header = () => {
  return (
    <header className="border-b border-4b-medium-gray/20 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 bg-4b-black rounded-sm flex items-center justify-center group-hover:bg-4b-dark-gray transition-colors">
              <Pencil className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-4b-black">4B</h1>
              <p className="text-xs text-4b-medium-gray font-medium">Newsletter</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-4b-medium-gray hover:text-4b-black font-medium transition-colors"
            >
              홈
            </Link>
            <Link 
              to="/about" 
              className="text-4b-medium-gray hover:text-4b-black font-medium transition-colors"
            >
              소개
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
