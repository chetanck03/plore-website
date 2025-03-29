
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus, Mail, Lock, BookOpen, User } from "lucide-react";
import { motion } from "framer-motion";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    rollNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Validation
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }
    
    // Simulate signup process
    setTimeout(() => {
      setIsLoading(false);
      
      if (formData.fullName && formData.email && formData.password && formData.rollNumber) {
        toast({
          title: "Success!",
          description: "Your account has been created.",
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
            <div className="absolute h-2 top-0 inset-x-0 bg-gradient-to-r from-secondary via-plore-400 to-plore-600"></div>
            
            <CardHeader className="space-y-1 pt-8">
              <CardTitle className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-plore-800 to-plore-600">
                Create an Account
              </CardTitle>
              <CardDescription className="text-center text-muted-foreground">
                Join PLORE to discover campus opportunities
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="border-muted-foreground/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    Email address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
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
                    name="rollNumber"
                    type="text"
                    placeholder="e.g., UR2023001"
                    value={formData.rollNumber}
                    onChange={handleChange}
                    required
                    className="border-muted-foreground/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="flex items-center gap-2">
                    <Lock className="h-4 w-4 text-muted-foreground" />
                    Password
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="border-muted-foreground/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="flex items-center gap-2">
                    <Lock className="h-4 w-4 text-muted-foreground" />
                    Confirm Password
                  </Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="border-muted-foreground/20"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-plore-600 to-plore-700 hover:from-plore-700 hover:to-plore-800 text-white transition-all duration-300 shadow-md hover:shadow-lg"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <span className="animate-pulse">Creating Account...</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <UserPlus className="h-4 w-4" />
                      Sign up
                    </span>
                  )}
                </Button>
              </form>
            </CardContent>

            <CardFooter className="flex flex-col">
              <div className="text-center mt-2">
                <p className="text-muted-foreground">
                  Already have an account?{" "}
                  <Link to="/login" className="text-plore-600 hover:text-plore-700 hover:underline font-medium">
                    Log in
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

export default Signup;
