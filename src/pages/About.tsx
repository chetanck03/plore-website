import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Placeholder for team members
const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Founder & CEO",
    bio: "Former student body president with a passion for improving campus engagement.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=800&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Maya Patel",
    role: "CTO",
    bio: "Computer science graduate with expertise in building community platforms.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop&q=80",
  },
  {
    id: 3,
    name: "David Kim",
    role: "Head of Partnerships",
    bio: "Experienced in fostering collaborations between student organizations and institutions.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=800&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Sarah Chen",
    role: "UX Designer",
    bio: "Dedicated to creating intuitive and accessible experiences for all users.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=800&fit=crop&q=80",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-plore-600 to-plore-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Our Mission</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Empowering students to discover, engage with, and lead campus activities that enhance their college experience and build valuable skills.
          </p>
        </div>
      </section>

      {/* About PLORE Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">About PLORE</h2>
            
            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Our Story</h3>
                <p className="text-gray-700">
                  PLORE was born from a simple observation: despite the wealth of activities and opportunities on college campuses, many students struggle to discover clubs and events that align with their interests. Founded by a group of students who experienced this challenge firsthand, PLORE aims to bridge this gap by creating a centralized platform that connects students with relevant campus activities.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">What We Believe</h3>
                <p className="text-gray-700 mb-4">
                  We believe that meaningful engagement outside the classroom is essential to a fulfilling college experience. Participation in clubs and events helps students develop leadership skills, build networks, and discover new passions—all of which contribute to personal growth and future success.
                </p>
                <p className="text-gray-700">
                  We're committed to creating a platform that makes these opportunities accessible to all students, regardless of their background or prior campus involvement.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Alignment with Education Initiatives</h3>
                <p className="text-gray-700 mb-4">
                  PLORE supports the objectives of Skill India and the National Education Policy (NEP) 2020 by facilitating skill development, leadership training, and hands-on learning through extracurricular activities. We believe that clubs and events play a crucial role in developing well-rounded individuals who are prepared for the challenges of the modern workforce.
                </p>
                <p className="text-gray-700">
                  Our platform helps institutions implement NEP 2020's vision for holistic education by making it easier for students to engage in activities that complement their academic learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
                <div className="relative h-64 bg-gradient-to-r from-plore-600/20 to-purple-500/20 overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement?.classList.add('bg-gradient-to-br', 'from-plore-600/30', 'to-purple-500/30');
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-plore-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg border border-gray-100 bg-gray-50">
              <div className="w-16 h-16 mx-auto bg-plore-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl text-plore-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Inclusivity</h3>
              <p className="text-gray-700">
                Creating a platform where all students feel welcome and can find activities that resonate with them.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-lg border border-gray-100 bg-gray-50">
              <div className="w-16 h-16 mx-auto bg-plore-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl text-plore-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-700">
                Continuously improving our platform to better serve the evolving needs of students and organizers.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-lg border border-gray-100 bg-gray-50">
              <div className="w-16 h-16 mx-auto bg-plore-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl text-plore-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Community</h3>
              <p className="text-gray-700">
                Fostering meaningful connections and collaborations among students, clubs, and institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-plore-600 to-plore-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join the PLORE Community</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you're looking to discover new opportunities or showcase your club's events, PLORE is here to help you make the most of your campus experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup">
              <Button className="bg-white text-plore-700 hover:bg-gray-100 font-medium px-6 py-3 text-lg">
                Get Started
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-plore-700 hover:bg-gray-100 hover:bg-white/10 font-medium px-6 py-3 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
