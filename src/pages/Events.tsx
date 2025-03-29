
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  Search, Calendar, MapPin, 
  Filter, Bell, BellOff, ArrowRight 
} from "lucide-react";
import { events } from "@/data/events";
import { hasReminder, toggleReminder } from "@/utils/reminderUtils";
import { useToast } from "@/hooks/use-toast";

// Extract unique categories from events
const uniqueCategories = ["All", ...Array.from(new Set(events.map(event => event.category)))];

const Events = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [visibleEvents, setVisibleEvents] = useState(events);
  const [eventReminders, setEventReminders] = useState<string[]>([]);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    // Load reminder data from localStorage
    const reminders = JSON.parse(localStorage.getItem('eventReminders') || '[]');
    setEventReminders(reminders);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Filter events based on search term and category
    let filtered = events;
    
    if (searchTerm) {
      filtered = filtered.filter(event => 
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedCategory !== "All") {
      filtered = filtered.filter(event => event.category === selectedCategory);
    }
    
    setVisibleEvents(filtered);
  }, [searchTerm, selectedCategory]);

  const handleToggleReminder = (eventId: string, e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating to the event details page
    e.stopPropagation(); // Prevent event bubbling
    
    const newStatus = toggleReminder(eventId.toString());
    
    // Update UI state
    if (newStatus) {
      setEventReminders(prev => [...prev, eventId.toString()]);
      toast({
        title: "Reminder set!",
        description: "You'll be notified when this event is approaching",
      });
    } else {
      setEventReminders(prev => prev.filter(id => id !== eventId.toString()));
      toast({
        title: "Reminder removed",
        description: "You will no longer receive notifications for this event",
      });
    }
  };

  const isEventReminded = (eventId: string) => {
    return eventReminders.includes(eventId.toString());
  };

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8 text-center">
            <Skeleton className="h-10 w-40 mx-auto mb-4" />
            <Skeleton className="h-6 w-64 mx-auto" />
          </div>
          
          <div className="mb-8">
            <Skeleton className="h-12 w-full mb-4" />
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4, 5].map(n => (
                <Skeleton key={n} className="h-9 w-24" />
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map(n => (
              <Skeleton key={n} className="h-64 w-full rounded-lg" />
            ))}
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center animate-fade-up">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover and participate in exciting events happening around your campus.
          </p>
        </div>

        <div className="mb-8 animate-fade-up animate-delay-100">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search events..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-gray-400" />
              <span className="text-gray-600 mr-2">Filter:</span>
              <div className="flex flex-wrap gap-2">
                {uniqueCategories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
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
        </div>

        {visibleEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleEvents.map((event, index) => (
              <Link 
                to={`/events/${event.id}`} 
                key={event.id}
                className="group hover:no-underline"
              >
                <Card 
                  className="overflow-hidden transition-all duration-300 hover:shadow-md animate-fade-up" 
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48 bg-gradient-to-r from-plore-600/20 to-purple-500/20 overflow-hidden">
                    {event.image && (
                      <img 
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <Badge className="bg-plore-600">
                        {event.category}
                      </Badge>
                      {event.featured && (
                        <Badge variant="outline" className="border-amber-500 text-amber-500 bg-white/80">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute top-3 right-3 bg-white/80 hover:bg-white border-none"
                      onClick={(e) => handleToggleReminder(event.id, e)}
                    >
                      {isEventReminded(event.id.toString()) ? (
                        <Bell className="h-4 w-4 fill-amber-500 text-amber-500" />
                      ) : (
                        <BellOff className="h-4 w-4 text-gray-500" />
                      )}
                    </Button>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-plore-600 transition-colors">
                      {event.title}
                    </h3>
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-3">{event.date}</span>
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{event.location || "Main Campus"}</span>
                    </div>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {event.description?.substring(0, 100) || 
                        `Join us for this exciting ${event.category.toLowerCase()} event and connect with fellow students.`}
                      {event.description?.length > 100 ? "..." : ""}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className={`text-sm ${isEventReminded(event.id.toString()) ? "text-amber-500" : "text-gray-400"}`}>
                        {isEventReminded(event.id.toString()) ? "Reminder set" : "Set reminder"}
                      </span>
                      <Button variant="ghost" size="sm" className="text-plore-600 hover:text-plore-700 hover:bg-plore-50 group-hover:bg-plore-50">
                        View Details <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 animate-fade-up">
            <h3 className="text-xl font-semibold mb-2">No events found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search criteria or check back later.</p>
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
      </div>
    </Layout>
  );
};

export default Events;
