
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, MapPin, Users, Bell, BellOff, ArrowLeft, Share2 } from "lucide-react";
import { events } from "@/data/events";

const EventDetails = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [event, setEvent] = useState<any>(null);
  const [isReminded, setIsReminded] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      const foundEvent = events.find(e => e.id.toString() === id);
      setEvent(foundEvent);
      setLoading(false);
      
      // Check if this event is already in reminders
      const reminders = JSON.parse(localStorage.getItem('eventReminders') || '[]');
      setIsReminded(reminders.includes(id));
    }, 800);

    return () => clearTimeout(timer);
  }, [id]);

  const toggleReminder = () => {
    let reminders = JSON.parse(localStorage.getItem('eventReminders') || '[]');
    
    if (isReminded) {
      // Remove from reminders
      reminders = reminders.filter((eventId: string) => eventId !== id);
      toast({
        title: "Reminder removed",
        description: "You will no longer receive notifications for this event",
      });
    } else {
      // Add to reminders
      reminders.push(id);
      toast({
        title: "Reminder set!",
        description: "You'll be notified when this event is approaching",
      });
    }
    
    localStorage.setItem('eventReminders', JSON.stringify(reminders));
    setIsReminded(!isReminded);
  };

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center mb-8">
            <Skeleton className="h-8 w-24 mr-4" />
            <Skeleton className="h-8 w-48" />
          </div>
          <Skeleton className="h-64 w-full mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Skeleton className="h-10 w-3/4 mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4 mb-6" />
              <Skeleton className="h-24 w-full mb-6" />
            </div>
            <div>
              <Skeleton className="h-64 w-full rounded-lg" />
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!event) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Event Not Found</h1>
          <p className="mb-6">Sorry, the event you're looking for doesn't exist or has been removed.</p>
          <Link to="/events">
            <Button className="bg-plore-600 hover:bg-plore-700">
              <ArrowLeft className="mr-2" />
              Back to All Events
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 animate-fade-up">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div className="flex items-center">
            <Link to="/events" className="mr-4">
              <Button variant="outline" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
            </Link>
            <Badge className="bg-plore-600 mr-2">{event.category}</Badge>
            {event.featured && (
              <Badge variant="outline" className="border-amber-500 text-amber-500">
                Featured
              </Badge>
            )}
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" onClick={toggleReminder}>
              {isReminded ? <BellOff className="mr-2" /> : <Bell className="mr-2" />}
              {isReminded ? "Remove Reminder" : "Set Reminder"}
            </Button>
            <Button variant="outline" onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              toast({ title: "Link copied!", description: "Event link copied to clipboard" });
            }}>
              <Share2 className="mr-2" />
              Share
            </Button>
          </div>
        </div>

        <div className="relative h-64 sm:h-96 mb-8 rounded-xl overflow-hidden bg-gradient-to-r from-plore-600/20 to-purple-500/20">
          {event.image ? (
            <img 
              src={event.image} 
              alt={event.title} 
              className="w-full h-full object-cover" 
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800">{event.title}</h2>
                <p className="text-gray-600 mt-2">{event.date}</p>
              </div>
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <h1 className="text-3xl font-bold text-white mb-2">{event.title}</h1>
            <p className="text-white/90">{event.date}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">About This Event</h2>
            <p className="text-gray-700 mb-6 whitespace-pre-line">
              {event.description || `Join us for an amazing ${event.title} event! This is your chance to participate in one of the most anticipated events on campus. 
              
Whether you're a beginner or experienced, this event offers something for everyone. Connect with fellow students, learn new skills, and have fun in a supportive environment.

The event will feature:
• Expert speakers and mentors
• Interactive sessions and workshops
• Networking opportunities
• Prizes and recognition for outstanding participants

Don't miss this opportunity to enhance your college experience and develop valuable skills that will benefit you throughout your academic journey and beyond!`}
            </p>

            <h2 className="text-2xl font-bold mb-4">Event Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <Calendar className="h-5 w-5 mr-2 text-plore-600 mt-0.5" />
                <div>
                  <h3 className="font-medium">Date & Time</h3>
                  <p className="text-gray-600">{event.date}</p>
                  <p className="text-gray-600">{event.time || "10:00 AM - 4:00 PM"}</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-plore-600 mt-0.5" />
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-gray-600">{event.location || "Main Auditorium"}</p>
                  <p className="text-gray-600">{event.address || "University Campus"}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="h-5 w-5 mr-2 text-plore-600 mt-0.5" />
                <div>
                  <h3 className="font-medium">Organizer</h3>
                  <p className="text-gray-600">{event.organizer || "Student Council"}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 mr-2 text-plore-600 mt-0.5" />
                <div>
                  <h3 className="font-medium">Registration Deadline</h3>
                  <p className="text-gray-600">{event.deadline || "1 day before event"}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">How to Prepare</h2>
                <p className="text-gray-700 mb-4">
                  Not sure how to prepare for this event? Our AI Assistant can help you!
                </p>
                <Link to={`/ai-assistant?event=${encodeURIComponent(event.title)}`}>
                  <Button className="bg-plore-600 hover:bg-plore-700">
                    Get Preparation Tips
                  </Button>
                </Link>
              </div>

              {event.rules && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Rules & Guidelines</h2>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    {event.rules.map((rule: string, index: number) => (
                      <li key={index}>{rule}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm h-fit">
            <h3 className="text-xl font-bold mb-4">Registration</h3>
            
            {event.registrationOpen !== false ? (
              <>
                <p className="text-gray-700 mb-4">Registration is currently open for this event. Secure your spot now!</p>
                <Button className="w-full bg-plore-600 hover:bg-plore-700 mb-4">
                  Register Now
                </Button>
                <p className="text-sm text-gray-500 mb-2">Registration closes on {event.deadline || "the day before the event"}.</p>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-medium mb-2">Share this event:</h4>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      Twitter
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Instagram
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <p className="text-amber-600 mb-4">Registration for this event is currently closed.</p>
                <Button className="w-full bg-gray-400 cursor-not-allowed mb-4" disabled>
                  Registration Closed
                </Button>
                <p className="text-sm text-gray-500">Please check back later or contact the organizers for more information.</p>
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EventDetails;
