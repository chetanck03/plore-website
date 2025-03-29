
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Lock, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login validation
    setTimeout(() => {
      setIsLoading(false);
      
      // This is just a placeholder for demo purposes
      // In a real app, you would verify credentials on a backend
      if (email && password) {
        toast({
          title: "Success!",
          description: "You've successfully logged in.",
        });
      } else {
        toast({
          title: "Error",
          description: "Please fill in all fields.",
          variant: "destructive",
        });
      }
    }, 1000);
  };

  return (
    <Layout>
      <div className="flex items-center justify-center py-16 px-4 bg-gradient-to-b from-background to-muted/50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Card className="border-2 border-primary/10 shadow-lg overflow-hidden">
            <div className="absolute h-2 top-0 inset-x-0 bg-gradient-to-r from-plore-600 via-plore-400 to-secondary"></div>
            
            <CardHeader className="space-y-1 pt-8">
              <CardTitle className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-plore-600 to-plore-800">
                Welcome Back
              </CardTitle>
              <CardDescription className="text-center text-muted-foreground">
                Log in to your PLORE account
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    Email address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border-muted-foreground/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rollNumber" className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                    University Roll Number
                  </Label>
                  <Input
                    id="rollNumber"
                    type="text"
                    placeholder="e.g., UR2023001"
                    value={rollNumber}
                    onChange={(e) => setRollNumber(e.target.value)}
                    required
                    className="border-muted-foreground/20"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="flex items-center gap-2">
                      <Lock className="h-4 w-4 text-muted-foreground" />
                      Password
                    </Label>
                    <Link to="/forgot-password" className="text-sm text-plore-600 hover:text-plore-700 hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="border-muted-foreground/20"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-plore-600 to-plore-700 hover:from-plore-700 hover:to-plore-800 text-white transition-all duration-300 shadow-md hover:shadow-lg"
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "Log in"}
                </Button>
              </form>
            </CardContent>

            <CardFooter className="flex flex-col">
              <div className="text-center mt-2">
                <p className="text-muted-foreground">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-plore-600 hover:text-plore-700 hover:underline font-medium">
                    Sign up
                  </Link>
                </p>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Login;
