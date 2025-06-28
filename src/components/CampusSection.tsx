
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Camera, Wifi, Coffee, Book, Dumbbell } from "lucide-react";

const CampusSection = () => {
  const facilities = [
    {
      name: "Modern Classrooms",
      description: "State-of-the-art lecture halls with audio-visual equipment",
      icon: Book,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop"
    },
    {
      name: "Library & Learning Center",
      description: "Extensive collection of books, journals, and digital resources",
      icon: Book,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop"
    },
    {
      name: "Fitness Center",
      description: "Fully equipped gymnasium and sports facilities",
      icon: Dumbbell,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop"
    },
    {
      name: "Student Cafeteria",
      description: "Multiple dining options with diverse cuisine",
      icon: Coffee,
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop"
    },
    {
      name: "Residential Facilities",
      description: "Comfortable hostels with modern amenities",
      icon: Wifi,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=250&fit=crop"
    },
    {
      name: "Auditorium",
      description: "Multi-purpose hall for events and conferences",
      icon: Camera,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=250&fit=crop"
    }
  ];

  const campusStats = [
    { number: "250", label: "Acres Campus", color: "bg-green-600" },
    { number: "500+", label: "Hostel Capacity", color: "bg-blue-600" },
    { number: "24/7", label: "WiFi Coverage", color: "bg-purple-600" },
    { number: "100%", label: "Green Campus", color: "bg-emerald-600" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Campus & Facilities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience world-class infrastructure and facilities designed to provide an enriching 
            learning environment for our students and faculty.
          </p>
        </div>

        {/* Campus Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {campusStats.map((stat, index) => (
            <Card key={index} className={`${stat.color} text-white text-center`}>
              <CardContent className="p-6">
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {facilities.map((facility, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative">
                <img 
                  src={facility.image} 
                  alt={facility.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <facility.icon className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg">{facility.name}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 text-sm">{facility.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Campus Location */}
        <div className="bg-gray-50 rounded-lg p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Location</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Management City, Rohtak</h4>
                    <p className="text-gray-600 text-sm">Located in the heart of Haryana, easily accessible from Delhi NCR</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white p-3 rounded">
                    <div className="font-semibold text-blue-600">70 km</div>
                    <div className="text-gray-600">from Delhi</div>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <div className="font-semibold text-blue-600">45 min</div>
                    <div className="text-gray-600">from IGI Airport</div>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <div className="font-semibold text-blue-600">Direct</div>
                    <div className="text-gray-600">Metro Connectivity</div>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <div className="font-semibold text-blue-600">24/7</div>
                    <div className="text-gray-600">Transportation</div>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-6">
                <Button>
                  <Camera className="mr-2 h-4 w-4" />
                  Virtual Tour
                </Button>
                <Button variant="outline">
                  <MapPin className="mr-2 h-4 w-4" />
                  Get Directions
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1466442929976-97f336a657be?w=600&h=400&fit=crop" 
                alt="Campus Overview" 
                className="rounded-lg shadow-lg"
              />
              <Badge className="absolute top-4 right-4 bg-green-600">
                Eco-Friendly Campus
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusSection;
