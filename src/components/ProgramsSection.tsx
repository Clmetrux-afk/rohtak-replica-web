
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, BookOpen, Award, ArrowRight } from "lucide-react";

const ProgramsSection = () => {
  const programs = [
    {
      title: "Post Graduate Programme in Management (PGP)",
      duration: "2 Years",
      batch: "180 Students",
      description: "Our flagship MBA program designed to develop future business leaders with comprehensive management skills.",
      highlights: ["Full-time Residential", "Industry Immersion", "Global Exchange"],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop"
    },
    {
      title: "Executive Post Graduate Programme (EPGP)",
      duration: "1 Year",
      batch: "60 Students",
      description: "Intensive program for experienced professionals seeking to advance their management careers.",
      highlights: ["Working Professionals", "Weekend Classes", "Industry Projects"],
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=250&fit=crop"
    },
    {
      title: "Fellow Programme in Management (FPM)",
      duration: "4-5 Years",
      batch: "20 Students",
      description: "Doctoral program for those aspiring to pursue careers in academics and research.",
      highlights: ["Research Focus", "Teaching Opportunities", "International Collaborations"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
    },
    {
      title: "Executive Education Programs",
      duration: "Varies",
      batch: "Custom",
      description: "Tailored programs for corporate executives and senior management professionals.",
      highlights: ["Customized Content", "Corporate Training", "Flexible Schedule"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Academic Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse range of management programs designed to meet the evolving needs 
            of the business world and prepare leaders for tomorrow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {programs.map((program, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white">{program.title.split(' ')[0]}</Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl mb-2">{program.title}</CardTitle>
                <div className="flex space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {program.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {program.batch}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-4">{program.description}</p>
                
                <div className="space-y-2 mb-4">
                  <h4 className="font-semibold text-sm">Key Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button className="flex-1">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">Apply Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Program Statistics */}
        <div className="bg-blue-900 text-white rounded-lg p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">98%</div>
              <div className="text-blue-200">Placement Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">₹24.5L</div>
              <div className="text-blue-200">Average CTC</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">150+</div>
              <div className="text-blue-200">Recruiting Companies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">15+</div>
              <div className="text-blue-200">International Partners</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
