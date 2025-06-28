
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, Bell } from "lucide-react";

const NewsSection = () => {
  const news = [
    {
      title: "Admission Process 2024-26 Batch Commences",
      date: "March 15, 2024",
      category: "Admissions",
      description: "Applications are now open for the MBA and Executive programs for the 2024-26 batch.",
      isNew: true
    },
    {
      title: "IIM Rohtak Signs MoU with Leading Corporate Partners",
      date: "March 10, 2024",
      category: "Partnerships",
      description: "Strategic partnerships established to enhance industry exposure and placement opportunities."
    },
    {
      title: "Research Conference on Digital Transformation",
      date: "March 8, 2024",
      category: "Research",
      description: "International conference bringing together thought leaders in digital business transformation."
    },
    {
      title: "Alumni Achievement: Promoted to CEO",
      date: "March 5, 2024",
      category: "Alumni",
      description: "Congratulations to our alumnus on being promoted to CEO of a Fortune 500 company."
    }
  ];

  const announcements = [
    "Summer Internship Fair 2024 - March 25",
    "Guest Lecture Series: Leadership in Digital Age",
    "Campus Placement Drive - Multiple Companies",
    "Cultural Fest 'Ataraxia' Registration Open",
    "Research Paper Submission Deadline - April 15"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* News & Updates */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Latest News & Updates</h2>
              <Button variant="outline">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid gap-6">
              {news.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary">{item.category}</Badge>
                          {item.isNew && <Badge className="bg-red-500">New</Badge>}
                        </div>
                        <CardTitle className="text-xl hover:text-blue-600 cursor-pointer">
                          {item.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-3">{item.description}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {item.date}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Announcements Sidebar */}
          <div>
            <div className="sticky top-24 space-y-6">
              {/* Quick Announcements */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Bell className="h-5 w-5 mr-2 text-blue-600" />
                    Quick Announcements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {announcements.map((announcement, index) => (
                      <div key={index} className="border-l-4 border-blue-500 pl-3 py-2 hover:bg-blue-50 cursor-pointer transition-colors">
                        <p className="text-sm font-medium text-gray-800">{announcement}</p>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    View All Announcements
                  </Button>
                </CardContent>
              </Card>

              {/* Important Links */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Important Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {[
                      "Academic Calendar",
                      "Student Portal",
                      "Library Resources",
                      "Placement Cell",
                      "Alumni Network",
                      "Research Centers"
                    ].map((link, index) => (
                      <Button key={index} variant="ghost" className="w-full justify-start text-left h-auto p-2">
                        {link}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div>📍 Management City, Rohtak, Haryana - 124010</div>
                  <div>📞 +91-1262-246-500</div>
                  <div>✉️ info@iimrohtak.ac.in</div>
                  <Button className="w-full mt-3" size="sm">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
