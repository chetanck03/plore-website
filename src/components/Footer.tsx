
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-plore-600 to-plore-800">
                PLORE
              </span>
            </Link>
            <p className="mt-4 text-gray-600">
              Connecting students with college clubs and events for a richer campus experience.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Platform</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/clubs" className="text-gray-600 hover:text-plore-600 transition-colors">
                  Browse Clubs
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-600 hover:text-plore-600 transition-colors">
                  Discover Events
                </Link>
              </li>
              <li>
                <Link to="/create-club" className="text-gray-600 hover:text-plore-600 transition-colors">
                  Start a Club
                </Link>
              </li>
              <li>
                <Link to="/create-event" className="text-gray-600 hover:text-plore-600 transition-colors">
                  Organize an Event
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-plore-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-plore-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 hover:text-plore-600 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-plore-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-plore-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-plore-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-600 hover:text-plore-600 transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-center text-gray-500">
            &copy; {new Date().getFullYear()} PLORE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
