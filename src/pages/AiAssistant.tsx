
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { SendHorizontal, Sparkles, Bot, User, Loader2 } from "lucide-react";

// Sample event preparation suggestions
const EVENT_PREPARATIONS = {
  "default": [
    "Research the event's background and history",
    "Review any required materials or prerequisites",
    "Connect with past participants for tips",
    "Join relevant study groups or forums",
    "Practice relevant skills regularly",
    "Create a study schedule leading up to the event",
    "Ensure you have all necessary equipment",
    "Get enough rest before the event date"
  ],
  "hackathon": [
    "Form a diverse team with complementary skills",
    "Practice coding challenges and algorithms",
    "Get familiar with common APIs and frameworks",
    "Prepare a project idea in advance",
    "Bring necessary hardware and peripherals",
    "Install development environments before the event",
    "Research the hackathon theme if available",
    "Plan for proper rest during the event"
  ],
  "debate": [
    "Research both sides of common debate topics",
    "Practice impromptu speaking regularly",
    "Learn to structure arguments effectively",
    "Study logical fallacies to avoid them",
    "Record yourself and review your speaking style",
    "Practice with a timer to manage speaking time",
    "Stay updated on current events",
    "Learn to anticipate counter-arguments"
  ],
  "cultural": [
    "Practice your performance regularly",
    "Record yourself to identify areas for improvement",
    "Get feedback from peers or mentors",
    "Study performances by professionals in your field",
    "Ensure your costume or outfit is prepared",
    "Familiarize yourself with the performance venue",
    "Plan for stage presence and audience engagement",
    "Prepare backup plans for technical difficulties"
  ],
  "sports": [
    "Follow a consistent training schedule",
    "Focus on both strength and endurance",
    "Practice sport-specific techniques",
    "Work on team coordination if applicable",
    "Ensure proper nutrition and hydration",
    "Get adequate rest before the event",
    "Familiarize yourself with the rules and regulations",
    "Have all necessary equipment ready and in good condition"
  ]
};

// Sample conversation starters
const CONVERSATION_STARTERS = [
  "How do I prepare for a technical event?",
  "What skills should I develop for a hackathon?",
  "How to overcome stage fright for cultural events?",
  "Tips for time management during competitive events?",
  "How to form an effective team for group competitions?"
];

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
};

const AiAssistant = () => {
  const [searchParams] = useSearchParams();
  const eventParam = searchParams.get('event');
  
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize with a welcome message
  useEffect(() => {
    const initialMessage: Message = {
      id: "welcome",
      role: "assistant",
      content: eventParam 
        ? `👋 Hi there! I'm your AI Assistant for event preparation. I can help you prepare for "${eventParam}". What would you like to know?`
        : "👋 Hi there! I'm your AI Assistant for event preparation. I can help you prepare for any college event. What event are you interested in?",
      timestamp: new Date(),
    };

    setMessages([initialMessage]);
  }, [eventParam]);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    
    // Simulate AI thinking and generate response
    setTimeout(() => {
      generateResponse(input, eventParam);
    }, 1000);
  };

  const generateResponse = (userInput: string, eventContext: string | null) => {
    const lowerInput = userInput.toLowerCase();
    let responseContent = "";
    
    // Determine event type from input or context
    let eventType = "default";
    if (lowerInput.includes("hackathon") || (eventContext && eventContext.toLowerCase().includes("hackathon"))) {
      eventType = "hackathon";
    } else if (lowerInput.includes("debate") || (eventContext && eventContext.toLowerCase().includes("debate"))) {
      eventType = "debate";
    } else if (lowerInput.includes("cultural") || lowerInput.includes("dance") || lowerInput.includes("music") || 
              (eventContext && (eventContext.toLowerCase().includes("cultural") || eventContext.toLowerCase().includes("dance") || eventContext.toLowerCase().includes("music")))) {
      eventType = "cultural";
    } else if (lowerInput.includes("sport") || lowerInput.includes("game") || lowerInput.includes("match") || 
              (eventContext && (eventContext.toLowerCase().includes("sport") || eventContext.toLowerCase().includes("game")))) {
      eventType = "sports";
    }
    
    // Generate response based on input patterns
    if (lowerInput.includes("prepare") || lowerInput.includes("how to") || lowerInput.includes("tips")) {
      const preparations = EVENT_PREPARATIONS[eventType as keyof typeof EVENT_PREPARATIONS];
      responseContent = `Here are some tips to help you prepare for the ${eventType === "default" ? "event" : eventType}:\n\n`;
      preparations.forEach((tip, index) => {
        responseContent += `${index + 1}. ${tip}\n`;
      });
      responseContent += `\nIs there a specific aspect of preparation you'd like more details on?`;
    } 
    else if (lowerInput.includes("nervous") || lowerInput.includes("anxious") || lowerInput.includes("afraid")) {
      responseContent = `It's completely normal to feel nervous before an event! Here are some strategies to manage anxiety:\n\n` +
        `1. Practice deep breathing exercises\n` +
        `2. Visualize your success\n` +
        `3. Prepare thoroughly - confidence comes from preparation\n` +
        `4. Remember that everyone makes mistakes\n` +
        `5. Focus on enjoying the process rather than just the outcome\n\n` +
        `Would you like specific relaxation techniques you can use right before the event?`;
    }
    else if (lowerInput.includes("team") || lowerInput.includes("group")) {
      responseContent = `For effective teamwork in events:\n\n` +
        `1. Define clear roles based on each member's strengths\n` +
        `2. Establish communication channels and meeting schedules\n` +
        `3. Set shared goals and expectations\n` +
        `4. Create a timeline with milestones\n` +
        `5. Practice conflict resolution strategies\n` +
        `6. Celebrate small victories along the way\n\n` +
        `Would you like advice on how to handle disagreements within your team?`;
    }
    else if (lowerInput.includes("resources") || lowerInput.includes("materials") || lowerInput.includes("learn")) {
      responseContent = `Here are some resources to help you learn and prepare:\n\n` +
        `1. Online courses on platforms like Coursera, Udemy, or edX\n` +
        `2. YouTube tutorials specific to your event type\n` +
        `3. University library resources and research papers\n` +
        `4. Join relevant clubs on campus for hands-on practice\n` +
        `5. Find a mentor who has experience with similar events\n` +
        `6. Online forums and communities like Reddit or Stack Exchange\n\n` +
        `What specific skills are you looking to develop?`;
    }
    else if (lowerInput.includes("win") || lowerInput.includes("success") || lowerInput.includes("best")) {
      responseContent = `The key to success in any event is a combination of preparation, attitude, and execution. Here's what winners typically do:\n\n` +
        `1. They prepare more thoroughly than their competitors\n` +
        `2. They focus on learning, not just winning\n` +
        `3. They seek feedback continuously and implement it\n` +
        `4. They analyze past events to identify patterns and opportunities\n` +
        `5. They take care of their physical and mental wellbeing\n` +
        `6. They remain adaptable and open to changing strategies\n\n` +
        `Remember, the goal is growth - winning is just a byproduct of that process!`;
    }
    else {
      // Generic response if no specific pattern is matched
      responseContent = `That's a great question about ${eventContext || "event preparation"}! While I don't have specific information about that, here are some general tips:\n\n` +
        `1. Research the event thoroughly\n` +
        `2. Connect with past participants\n` +
        `3. Create a preparation schedule\n` +
        `4. Practice regularly and seek feedback\n` +
        `5. Take care of your wellbeing before the event\n\n` +
        `Could you tell me more about what specific aspect of the event you're concerned about?`;
    }
    
    const aiMessage: Message = {
      id: Date.now().toString(),
      role: "assistant",
      content: responseContent,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, aiMessage]);
    setIsLoading(false);
  };

  const handleQuickQuestion = (question: string) => {
    setInput(question);
    // Wait a bit to show the question in the input before sending
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8 animate-fade-up">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Event Preparation Assistant</h1>
          <p className="text-gray-600">
            Get personalized guidance on how to prepare for your college events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sidebar with tips */}
          <div className="hidden md:block">
            <Card className="bg-gray-50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Sparkles className="text-amber-500 mr-2" />
                  <h3 className="font-semibold text-lg">Preparation Tips</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  {EVENT_PREPARATIONS.default.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-plore-600 mr-2">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Chat section */}
          <div className="md:col-span-2 flex flex-col h-[calc(100vh-240px)] min-h-[500px]">
            <Card className="flex-grow flex flex-col">
              <CardContent className="p-4 flex-grow overflow-auto">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.role === "assistant" ? "justify-start" : "justify-end"
                      }`}
                    >
                      <div
                        className={`flex max-w-[80%] ${
                          message.role === "assistant"
                            ? "bg-gray-100 text-gray-800"
                            : "bg-plore-600 text-white"
                        } rounded-lg px-4 py-3`}
                      >
                        <div className="mr-2 mt-0.5">
                          {message.role === "assistant" ? (
                            <Bot className="h-5 w-5" />
                          ) : (
                            <User className="h-5 w-5" />
                          )}
                        </div>
                        <div>
                          <div className="whitespace-pre-line">{message.content}</div>
                          <div
                            className={`text-xs mt-1 ${
                              message.role === "assistant"
                                ? "text-gray-500"
                                : "text-plore-100"
                            }`}
                          >
                            {message.timestamp.toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 text-gray-800 rounded-lg px-4 py-3 flex items-center">
                        <Bot className="h-5 w-5 mr-2" />
                        <Loader2 className="h-5 w-5 animate-spin" />
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </CardContent>

              <div className="p-4 border-t">
                <div className="flex mb-2 overflow-x-auto pb-2 scrollbar-hide">
                  {CONVERSATION_STARTERS.map((starter, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="mr-2 whitespace-nowrap text-xs"
                      onClick={() => handleQuickQuestion(starter)}
                    >
                      {starter}
                    </Button>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Ask me how to prepare for your event..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                    className="flex-grow"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!input.trim() || isLoading}
                    className="bg-plore-600 hover:bg-plore-700"
                  >
                    <SendHorizontal className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AiAssistant;
