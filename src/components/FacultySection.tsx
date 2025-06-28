
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, Users, Mail } from "lucide-react";

const FacultySection = () => {
  const facultyMembers = [
    {
      name: "Dr. Rajesh Kumar",
      designation: "Professor & Director",
      specialization: "Strategic Management",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop&crop=face",
      qualifications: "PhD (IIM Ahmedabad), MBA (IIM Calcutta)",
      experience: "20+ years",
      publications: "50+ research papers"
    },
    {
      name: "Dr. Priya Sharma",
      designation: "Professor",
      specialization: "Marketing Management",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop&crop=face",
      qualifications: "PhD (Delhi School of Economics)",
      experience: "15+ years",
      publications: "40+ research papers"
    },
    {
      name: "Dr. Amit Verma",
      designation: "Associate Professor",
      specialization: "Finance & Accounting",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=300&fit=crop&crop=face",
      qualifications: "PhD (IIM Bangalore), CFA",
      experience: "12+ years",
      publications: "35+ research papers"
    },
    {
      name: "Dr. Kavita Singh",
      designation: "Assistant Professor",
      specialization: "Human Resource Management",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=300&h=300&fit=crop&crop=face",
      qualifications: "PhD (JNU), MBA (XLRI)",
      experience: "8+ years",
      publications: "25+ research papers"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Distinguished Faculty</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our world-class faculty combines academic excellence with industry experience, 
            providing students with cutting-edge knowledge and practical insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {facultyMembers.map((faculty, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow group">
              <CardHeader className="pb-4">
                <div className="relative mx-auto mb-4">
                  <img 
                    src={faculty.image} 
                    alt={faculty.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-blue-100 group-hover:border-blue-300 transition-colors"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white rounded-full p-1">
                    <Award className="h-4 w-4" />
                  </div>
                </div>
                <CardTitle className="text-lg mb-1">{faculty.name}</CardTitle>
                <p className="text-blue-600 font-medium text-sm">{faculty.designation}</p>
                <Badge variant="secondary" className="mt-2">{faculty.specialization}</Badge>
              </CardHeader>
              
              <CardContent className="space-y-3 text-sm">
                <div className="space-y-1">
                  <p className="font-medium">Qualifications:</p>
                  <p className="text-gray-600">{faculty.qualifications}</p>
                </div>
                
                <div className="flex justify-between text-center">
                  <div>
                    <div className="font-bold text-blue-600">{faculty.experience}</div>
                    <div className="text-xs text-gray-500">Experience</div>
                  </div>
                  <div>
                    <div className="font-bold text-blue-600">{faculty.publications}</div>
                    <div className="text-xs text-gray-500">Publications</div>
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Faculty Stats */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <Card className="bg-blue-600 text-white">
            <CardContent className="p-6">
              <div className="text-3xl font-bold mb-2">85+</div>
              <div className="text-blue-100">Faculty Members</div>
            </CardContent>
          </Card>
          
          <Card className="bg-green-600 text-white">
            <CardContent className="p-6">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-green-100">Research Publications</div>
            </CardContent>
          </Card>
          
          <Card className="bg-purple-600 text-white">
            <CardContent className="p-6">
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-purple-100">Research Centers</div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <Button size="lg">
            View All Faculty
            <BookOpen className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
