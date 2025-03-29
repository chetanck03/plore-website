import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Mock data for clubs
const MOCK_CLUBS = [
  {
    id: 1,
    name: "Coding Club",
    category: "Technology",
    description: "A community of passionate programmers building innovative projects together.",
    members: 120,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Photography Society",
    category: "Arts",
    description: "Exploring the art of visual storytelling through photography.",
    members: 85,
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=400&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Entrepreneurship Club",
    category: "Business",
    description: "Fostering innovation and entrepreneurial thinking among students.",
    members: 150,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Debate Society",
    category: "Liberal Arts",
    description: "Enhancing critical thinking and public speaking skills through debates.",
    members: 70,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop&q=80",
  },
  {
    id: 5,
    name: "Environmental Club",
    category: "Science",
    description: "Working towards a sustainable campus and raising awareness about environmental issues.",
    members: 60,
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=400&fit=crop&q=80",
  },
  {
    id: 6,
    name: "Dance Troupe",
    category: "Arts",
    description: "Expressing creativity through various dance forms and performances.",
    members: 40,
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&h=400&fit=crop&q=80",
  },
  {
    id: 7,
    name: "Robotics Club",
    category: "Technology",
    description: "Designing and building robots for competitions and exhibitions.",
    members: 55,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop&q=80",
  },
  {
    id: 8,
    name: "Literary Society",
    category: "Liberal Arts",
    description: "Celebrating literature through reading sessions, workshops, and publications.",
    members: 65,
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=400&fit=crop&q=80",
  },
];

// Categories for filtering
const CATEGORIES = ["All", "Technology", "Arts", "Business", "Liberal Arts", "Science"];

const Clubs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter clubs based on search term and category
  const filteredClubs = MOCK_CLUBS.filter((club) => {
    const matchesSearch = club.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          club.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || club.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Discover Campus Clubs</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore and join clubs that match your interests and help you connect with like-minded peers.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search clubs..."
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

        {/* Clubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredClubs.map((club) => (
            <div 
              key={club.id} 
              className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative h-48 bg-gradient-to-r from-plore-600/20 to-purple-500/20 overflow-hidden">
                {club.image && (
                  <img 
                    src={club.image}
                    alt={club.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement?.classList.add('bg-gradient-to-br', 'from-plore-600/30', 'to-purple-500/30');
                    }}
                  />
                )}
                <div className="absolute top-3 right-3">
                  <span className="inline-block bg-white/90 text-gray-800 text-xs px-2 py-1 rounded-full">
                    {club.members} members
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-semibold">{club.name}</h3>
                  <span className="text-sm text-gray-500">{club.category}</span>
                </div>
                <p className="text-gray-600 mb-4">{club.description}</p>
                <div className="flex justify-between items-center">
                  <Link to={`/clubs/${club.id}`}>
                    <Button variant="outline" size="sm" className="text-plore-600 border-plore-600 hover:bg-plore-50">
                      View Details
                    </Button>
                  </Link>
                  <Button size="sm" className="bg-plore-600 hover:bg-plore-700 text-white">
                    Join Club
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredClubs.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No clubs found</h3>
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

        {/* CTA for Creating Club */}
        <div className="mt-16 p-8 bg-gray-50 rounded-lg border border-gray-200 text-center">
          <h3 className="text-2xl font-bold mb-3">Don't see what you're looking for?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Start your own club and build a community around your interests, skills, or causes that matter to you.
          </p>
          <Link to="/create-club">
            <Button className="bg-plore-600 hover:bg-plore-700 text-white">
              Start a New Club
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Clubs;
