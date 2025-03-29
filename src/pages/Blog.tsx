import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Calendar, User, ArrowRight } from "lucide-react";

// Sample blog data
const BLOG_POSTS = [
  {
    id: 1,
    title: "How to Make the Most of Your First Club Meeting",
    excerpt: "Attending your first club meeting can be intimidating. Here's how to break the ice and make meaningful connections.",
    category: "Club Tips",
    date: "March 25, 2023",
    author: "Priya Sharma",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Top 10 Public Speaking Techniques for College Events",
    excerpt: "Master these essential public speaking techniques to captivate your audience at your next college event presentation.",
    category: "Event Preparation",
    date: "March 18, 2023",
    author: "Rahul Verma",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&q=80",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop&q=80",
  },
  {
    id: 3,
    title: "The Art of Networking at Campus Events",
    excerpt: "Learn how to build meaningful professional relationships that last beyond your college years.",
    category: "Career Development",
    date: "March 10, 2023",
    author: "Anjali Desai",
    authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&q=80",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop&q=80",
  },
  {
    id: 4,
    title: "How to Balance Academics and Extracurricular Activities",
    excerpt: "Find the perfect balance between your studies and club participation with these time management strategies.",
    category: "Student Life",
    date: "March 5, 2023",
    author: "Vikram Singh",
    authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&q=80",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=400&fit=crop&q=80",
  },
  {
    id: 5,
    title: "Planning Your First Successful Campus Event",
    excerpt: "A comprehensive guide to organizing a memorable and engaging event on campus from start to finish.",
    category: "Event Management",
    date: "February 28, 2023",
    author: "Neha Patel",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&h=400&fit=crop&q=80",
  },
  {
    id: 6,
    title: "Using AI to Enhance Your College Presentations",
    excerpt: "Discover how artificial intelligence tools can help you create more engaging and effective presentations.",
    category: "Technology",
    date: "February 20, 2023",
    author: "Arjun Kapoor",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&q=80",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop&q=80",
  },
];

// Categories for filtering
const CATEGORIES = [
  "All", 
  "Club Tips", 
  "Event Preparation", 
  "Career Development", 
  "Student Life", 
  "Event Management", 
  "Technology"
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter blog posts based on search term and category
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-up">PLORE Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-up animate-delay-100">
            Insights, tips, and resources to help you make the most of your college experience.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-10 animate-fade-up animate-delay-200">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={
                    selectedCategory === category 
                      ? "bg-plore-600 hover:bg-plore-700 text-white" 
                      : "text-gray-700 hover:text-plore-600"
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Article */}
        <div className="mb-16 animate-fade-up animate-delay-300">
          <div className="bg-gradient-to-r from-plore-50 to-purple-50 rounded-xl overflow-hidden shadow-lg p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2 h-64 rounded-lg relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop&q=80"
                  alt="AI in Student Engagement"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement?.classList.add('bg-gradient-to-br', 'from-plore-600/30', 'to-purple-500/30');
                  }}
                />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block bg-plore-600 text-white text-sm px-3 py-1 rounded-full">
                    Featured
                  </span>
                </div>
              </div>
              <div className="md:w-1/2 flex flex-col justify-center">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>April 2, 2023</span>
                  <span className="mx-2">•</span>
                  <div className="flex items-center">
                    <div className="relative w-6 h-6 rounded-full overflow-hidden mr-2 border-2 border-gray-100">
                      <img 
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&q=80"
                        alt="Dr. Aisha Khan"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement?.classList.add('bg-gray-200');
                        }}
                      />
                    </div>
                    <span className="font-medium">Dr. Aisha Khan</span>
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">
                  How AI is Revolutionizing Student Engagement on Campus
                </h2>
                <p className="text-gray-600 mb-6">
                  Artificial intelligence is transforming how students interact with clubs and events, 
                  creating more personalized experiences and opportunities for growth.
                </p>
                <Button className="self-start bg-plore-600 hover:bg-plore-700 text-white flex items-center gap-2">
                  Read Article
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <div 
              key={post.id}
              className={`bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all animate-fade-up`}
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div className="relative h-48 bg-gradient-to-r from-plore-600/20 to-purple-500/20 overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement?.classList.add('bg-gradient-to-br', 'from-plore-600/30', 'to-purple-500/30');
                  }}
                />
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="inline-block bg-plore-600 text-white text-sm px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 hover:text-plore-600 transition-colors">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden mr-3 border-2 border-gray-100">
                      <img 
                        src={post.authorImage}
                        alt={post.author}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement?.classList.add('bg-gray-200');
                        }}
                      />
                    </div>
                    <span className="text-sm text-gray-700 font-medium">{post.author}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-plore-600 hover:text-plore-700 hover:bg-plore-50">
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No articles found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filters.</p>
            <Button 
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="bg-plore-600 hover:bg-plore-700 text-white"
            >
              Reset Filters
            </Button>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16 p-8 bg-gradient-to-r from-plore-50 to-purple-50 rounded-lg border border-gray-200 text-center animate-fade-up">
          <h3 className="text-2xl font-bold mb-3">Stay Updated</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest articles, event tips, and campus news.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
            <Input
              type="email"
              placeholder="Your email address"
              className="flex-grow"
            />
            <Button className="bg-plore-600 hover:bg-plore-700 text-white">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
