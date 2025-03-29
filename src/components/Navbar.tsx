
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-plore-600 to-plore-800">
            PLORE
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-plore-600 transition-colors">
            Home
          </Link>
          <Link to="/clubs" className="text-gray-700 hover:text-plore-600 transition-colors">
            Clubs
          </Link>
          <Link to="/events" className="text-gray-700 hover:text-plore-600 transition-colors">
            Events
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-plore-600 transition-colors">
            About
          </Link>
          <Link to="/blog" className="text-gray-700 hover:text-plore-600 transition-colors">
            Blog
          </Link>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Link to="/login">
            <Button variant="outline" className="text-plore-600 border-plore-600 hover:bg-plore-50">
              Log in
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-plore-600 hover:bg-plore-700 text-white">
              Sign up
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 hover:text-plore-600 transition-colors"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4 mb-6">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-plore-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/clubs" 
                className="text-gray-700 hover:text-plore-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Clubs
              </Link>
              <Link 
                to="/events" 
                className="text-gray-700 hover:text-plore-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-plore-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/blog" 
                className="text-gray-700 hover:text-plore-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
            </nav>
            <div className="flex flex-col space-y-3">
              <Link to="/login" className="w-full" onClick={() => setIsMenuOpen(false)}>
                <Button 
                  variant="outline" 
                  className="w-full text-plore-600 border-plore-600 hover:bg-plore-50"
                >
                  Log in
                </Button>
              </Link>
              <Link to="/signup" className="w-full" onClick={() => setIsMenuOpen(false)}>
                <Button 
                  className="w-full bg-plore-600 hover:bg-plore-700 text-white"
                >
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
