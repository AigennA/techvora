import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, MapPin, Plus, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Address {
  id: string;
  address_line1: string;
  address_line2: string | null;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  is_default: boolean;
}

const Profile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [newAddress, setNewAddress] = useState({
    address_line1: "",
    address_line2: "",
    city: "",
    state: "",
    postal_code: "",
    country: "United States",
  });

  useEffect(() => {
    if (user) {
      fetchAddresses();
    }
  }, [user]);

  const fetchAddresses = async () => {
    if (!user) return;
    
    const { data, error } = await supabase
      .from("addresses")
      .select("*")
      .eq("user_id", user.id)
      .order("is_default", { ascending: false });

    if (error) {
      console.error("Error fetching addresses:", error);
    } else {
      setAddresses(data || []);
    }
  };

  const handleAddAddress = async () => {
    if (!user) return;

    const { error } = await supabase.from("addresses").insert({
      user_id: user.id,
      ...newAddress,
      is_default: addresses.length === 0,
    });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to add address",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Address added successfully",
      });
      setShowAddressForm(false);
      setNewAddress({
        address_line1: "",
        address_line2: "",
        city: "",
        state: "",
        postal_code: "",
        country: "United States",
      });
      fetchAddresses();
    }
  };

  const handleDeleteAddress = async (id: string) => {
    const { error } = await supabase.from("addresses").delete().eq("id", id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to delete address",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Address deleted successfully",
      });
      fetchAddresses();
    }
  };

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

          <Card className="mt-4 md:mt-6">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg md:text-xl flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Saved Addresses
              </CardTitle>
              <Button
                onClick={() => setShowAddressForm(!showAddressForm)}
                size="sm"
                className="gap-2"
              >
                <Plus className="w-4 h-4" />
                Add
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {showAddressForm && (
                <Card className="bg-secondary/50">
                  <CardContent className="pt-6 space-y-3">
                    <div className="space-y-2">
                      <Label>Address Line 1</Label>
                      <Input
                        value={newAddress.address_line1}
                        onChange={(e) =>
                          setNewAddress({ ...newAddress, address_line1: e.target.value })
                        }
                        placeholder="Street address"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Address Line 2 (Optional)</Label>
                      <Input
                        value={newAddress.address_line2}
                        onChange={(e) =>
                          setNewAddress({ ...newAddress, address_line2: e.target.value })
                        }
                        placeholder="Apt, suite, etc."
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <Label>City</Label>
                        <Input
                          value={newAddress.city}
                          onChange={(e) =>
                            setNewAddress({ ...newAddress, city: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>State</Label>
                        <Input
                          value={newAddress.state}
                          onChange={(e) =>
                            setNewAddress({ ...newAddress, state: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <Label>Postal Code</Label>
                        <Input
                          value={newAddress.postal_code}
                          onChange={(e) =>
                            setNewAddress({ ...newAddress, postal_code: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Country</Label>
                        <Input
                          value={newAddress.country}
                          onChange={(e) =>
                            setNewAddress({ ...newAddress, country: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={handleAddAddress} size="sm">
                        Save Address
                      </Button>
                      <Button
                        onClick={() => setShowAddressForm(false)}
                        variant="outline"
                        size="sm"
                      >
                        Cancel
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {addresses.length === 0 && !showAddressForm && (
                <p className="text-muted-foreground text-center py-4">
                  No saved addresses yet
                </p>
              )}

              {addresses.map((address) => (
                <Card key={address.id} className="relative">
                  <CardContent className="pt-6">
                    {address.is_default && (
                      <span className="absolute top-2 right-2 text-xs bg-primary text-primary-foreground px-2 py-1 rounded">
                        Default
                      </span>
                    )}
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <p className="font-medium">{address.address_line1}</p>
                        {address.address_line2 && (
                          <p className="text-sm text-muted-foreground">
                            {address.address_line2}
                          </p>
                        )}
                        <p className="text-sm text-muted-foreground">
                          {address.city}, {address.state} {address.postal_code}
                        </p>
                        <p className="text-sm text-muted-foreground">{address.country}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteAddress(address.id)}
                      >
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
