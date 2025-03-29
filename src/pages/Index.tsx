import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, Search } from "lucide-react";

const HomePage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-plore-600 to-plore-800 text-white">
        <div className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Connect. Engage. Explore.
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            Discover campus clubs and events that match your interests and enrich your college experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/signup">
              <Button className="bg-white text-plore-600 hover:bg-gray-100 font-medium px-6 py-3 text-lg">
                Join Now
              </Button>
            </Link>
            <Link to="/clubs">
              <Button variant="outline" className="border-white text-plore-600 hover:text-white hover:bg-white/10 font-medium px-6 py-3 text-lg">
                Discover Clubs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="text-4xl font-bold text-plore-600 mb-2">200+</div>
              <p className="text-gray-600">Active Campus Clubs</p>
            </div>
            <div className="p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="text-4xl font-bold text-plore-600 mb-2">500+</div>
              <p className="text-gray-600">Monthly Events</p>
            </div>
            <div className="p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="text-4xl font-bold text-plore-600 mb-2">10,000+</div>
              <p className="text-gray-600">Registered Students</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How PLORE Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've simplified the process of discovering and managing campus activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-plore-100 flex items-center justify-center mb-6">
                <Search className="w-8 h-8 text-plore-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Discover</h3>
              <p className="text-gray-600">
                Explore clubs and events based on your interests, academic program, and schedule.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-plore-100 flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-plore-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Participate</h3>
              <p className="text-gray-600">
                Register for events, join clubs, and stay updated with personalized notifications.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-plore-100 flex items-center justify-center mb-6">
                <User className="w-8 h-8 text-plore-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Organize</h3>
              <p className="text-gray-600">
                Create and manage events, track participation, and gather feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
            <Link to="/events" className="text-plore-600 hover:text-plore-700 font-medium flex items-center">
              View all <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Event Card 1 */}
            <div className="rounded-lg border border-gray-200 overflow-hidden shadow-sm transition-shadow hover:shadow-md">
              <div className="relative h-48 bg-gradient-to-r from-plore-600/20 to-purple-500/20 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop&q=80"
                  alt="Web Development Workshop"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement?.classList.add('bg-gradient-to-br', 'from-plore-600/30', 'to-purple-500/30');
                  }}
                />
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="inline-block bg-plore-600 text-white text-sm px-3 py-1 rounded-full">
                    Tech
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">May 15, 2023 • 2:00 PM</p>
                <h3 className="text-xl font-semibold mb-2">Web Development Workshop</h3>
                <p className="text-gray-600 mb-4">
                  Learn the fundamentals of building modern websites and applications.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Computer Science Building</span>
                  <Link to="/events/1">
                    <Button variant="outline" size="sm" className="text-plore-600 border-plore-600 hover:bg-plore-50">
                      Register
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="rounded-lg border border-gray-200 overflow-hidden shadow-sm transition-shadow hover:shadow-md">
              <div className="relative h-48 bg-gradient-to-r from-plore-600/20 to-purple-500/20 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=400&fit=crop&q=80"
                  alt="Photography Exhibition"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement?.classList.add('bg-gradient-to-br', 'from-plore-600/30', 'to-purple-500/30');
                  }}
                />
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="inline-block bg-plore-600 text-white text-sm px-3 py-1 rounded-full">
                    Arts
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">May 18, 2023 • 5:30 PM</p>
                <h3 className="text-xl font-semibold mb-2">Photography Exhibition</h3>
                <p className="text-gray-600 mb-4">
                  Showcasing stunning photographs captured by talented student photographers.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Art Gallery</span>
                  <Link to="/events/2">
                    <Button variant="outline" size="sm" className="text-plore-600 border-plore-600 hover:bg-plore-50">
                      Register
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Event Card 3 */}
            <div className="rounded-lg border border-gray-200 overflow-hidden shadow-sm transition-shadow hover:shadow-md">
              <div className="relative h-48 bg-gradient-to-r from-plore-600/20 to-purple-500/20 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop&q=80"
                  alt="Startup Networking Session"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement?.classList.add('bg-gradient-to-br', 'from-plore-600/30', 'to-purple-500/30');
                  }}
                />
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="inline-block bg-plore-600 text-white text-sm px-3 py-1 rounded-full">
                    Business
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">May 20, 2023 • 10:00 AM</p>
                <h3 className="text-xl font-semibold mb-2">Startup Networking Session</h3>
                <p className="text-gray-600 mb-4">
                  Connect with entrepreneurs and investors to explore startup opportunities.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Business School</span>
                  <Link to="/events/3">
                    <Button variant="outline" size="sm" className="text-plore-600 border-plore-600 hover:bg-plore-50">
                      Register
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Clubs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Popular Clubs</h2>
            <Link to="/clubs" className="text-plore-600 hover:text-plore-700 font-medium flex items-center">
              View all <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Club Card 1 */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm transition-shadow hover:shadow-md">
              <div className="relative h-32 bg-gradient-to-r from-plore-600/20 to-purple-500/20 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop&q=80"
                  alt="Coding Club"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement?.classList.add('bg-gradient-to-br', 'from-plore-600/30', 'to-purple-500/30');
                  }}
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-1">Coding Club</h3>
                <p className="text-gray-500 text-sm mb-3">Computer Science</p>
                <p className="text-gray-600 text-sm mb-4">
                  A community of passionate programmers building innovative projects.
                </p>
                <Link to="/clubs/1">
                  <Button variant="outline" size="sm" className="w-full text-plore-600 border-plore-600 hover:bg-plore-50">
                    View Club
                  </Button>
                </Link>
              </div>
            </div>

            {/* Club Card 2 */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm transition-shadow hover:shadow-md">
              <div className="relative h-32 bg-gradient-to-r from-plore-600/20 to-purple-500/20 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=400&fit=crop&q=80"
                  alt="Photography Society"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement?.classList.add('bg-gradient-to-br', 'from-plore-600/30', 'to-purple-500/30');
                  }}
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-1">Photography Society</h3>
                <p className="text-gray-500 text-sm mb-3">Fine Arts</p>
                <p className="text-gray-600 text-sm mb-4">
                  Exploring the art of visual storytelling through photography.
                </p>
                <Link to="/clubs/2">
                  <Button variant="outline" size="sm" className="w-full text-plore-600 border-plore-600 hover:bg-plore-50">
                    View Club
                  </Button>
                </Link>
              </div>
            </div>

            {/* Club Card 3 */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm transition-shadow hover:shadow-md">
              <div className="relative h-32 bg-gradient-to-r from-plore-600/20 to-purple-500/20 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop&q=80"
                  alt="Entrepreneurship Club"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement?.classList.add('bg-gradient-to-br', 'from-plore-600/30', 'to-purple-500/30');
                  }}
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-1">Entrepreneurship Club</h3>
                <p className="text-gray-500 text-sm mb-3">Business</p>
                <p className="text-gray-600 text-sm mb-4">
                  Fostering innovation and entrepreneurial thinking among students.
                </p>
                <Link to="/clubs/3">
                  <Button variant="outline" size="sm" className="w-full text-plore-600 border-plore-600 hover:bg-plore-50">
                    View Club
                  </Button>
                </Link>
              </div>
            </div>

            {/* Club Card 4 */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm transition-shadow hover:shadow-md">
              <div className="relative h-32 bg-gradient-to-r from-plore-600/20 to-purple-500/20 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop&q=80"
                  alt="Debate Society"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement?.classList.add('bg-gradient-to-br', 'from-plore-600/30', 'to-purple-500/30');
                  }}
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-1">Debate Society</h3>
                <p className="text-gray-500 text-sm mb-3">Liberal Arts</p>
                <p className="text-gray-600 text-sm mb-4">
                  Enhancing critical thinking and public speaking skills through debates.
                </p>
                <Link to="/clubs/4">
                  <Button variant="outline" size="sm" className="w-full text-plore-600 border-plore-600 hover:bg-plore-50">
                    View Club
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-plore-600 to-plore-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to transform your campus experience?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join PLORE today to discover events, connect with clubs, and make the most of your college journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup">
              <Button className="bg-white text-plore-700 hover:bg-gray-100 font-medium px-6 py-3 text-lg">
                Get Started for Free
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-plore-600 hover:text-white hover:bg-white/10 font-medium px-6 py-3 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
