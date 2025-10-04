import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Profile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-8 md:py-16">
          <div className="max-w-2xl mx-auto text-center">
            <User className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4 md:mb-6 text-muted-foreground" />
            <h1 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Sign in to view profile</h1>
            <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
              Please sign in to access your profile.
            </p>
            <Button onClick={() => navigate("/auth")} className="w-full sm:w-auto">Sign In</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-6 md:py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">My Profile</h1>
        
        <div className="max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">Account Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 md:space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm md:text-base">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={user.email || ""}
                  disabled
                  className="text-sm md:text-base"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm md:text-base">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="text-sm md:text-base"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm md:text-base">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="text-sm md:text-base"
                />
              </div>
              <Button className="w-full sm:w-auto touch-manipulation">Update Profile</Button>
            </CardContent>
          </Card>

          <Card className="mt-4 md:mt-6">
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">Security</CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full sm:w-auto touch-manipulation">Change Password</Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
