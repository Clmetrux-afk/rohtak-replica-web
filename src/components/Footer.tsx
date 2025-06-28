
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube, 
  Instagram,
  Mail,
  Phone,
  MapPin,
  Clock
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About IIM Rohtak", href: "#" },
    { name: "Academic Programs", href: "#" },
    { name: "Admissions", href: "#" },
    { name: "Faculty", href: "#" },
    { name: "Research", href: "#" },
    { name: "Campus Life", href: "#" }
  ];

  const importantLinks = [
    { name: "Student Portal", href: "#" },
    { name: "Faculty Portal", href: "#" },
    { name: "Alumni Network", href: "#" },
    { name: "Placement Cell", href: "#" },
    { name: "Library", href: "#" },
    { name: "Career Opportunities", href: "#" }
  ];

  const resources = [
    { name: "Academic Calendar", href: "#" },
    { name: "Fee Structure", href: "#" },
    { name: "Tenders", href: "#" },
    { name: "RTI", href: "#" },
    { name: "Annual Reports", href: "#" },
    { name: "Media Coverage", href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-blue-800 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Stay Connected</h3>
            <p className="text-blue-100 mb-6">Subscribe to our newsletter for latest updates and announcements</p>
            <div className="flex max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-4 py-2 rounded-l-lg text-gray-900"
              />
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-l-none">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Institute Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=50&h=50&fit=crop" 
                  alt="IIM Rohtak Logo" 
                  className="h-12 w-12 rounded-full"
                />
                <div>
                  <h3 className="text-xl font-bold">IIM Rohtak</h3>
                  <p className="text-gray-400 text-sm">Excellence in Education</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Indian Institute of Management Rohtak is committed to fostering excellence 
                in management education and developing future business leaders.
              </p>
              
              <div className="flex space-x-3">
                {[Facebook, Twitter, Linkedin, Youtube, Instagram].map((Icon, index) => (
                  <Button 
                    key={index}
                    size="sm" 
                    variant="outline" 
                    className="border-gray-600 text-gray-300 hover:text-white hover:border-blue-500"
                  >
                    <Icon className="h-4 w-4" />
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-white hover:underline text-sm transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Important Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Important Links</h4>
              <ul className="space-y-2">
                {importantLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-white hover:underline text-sm transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-blue-400 mt-1" />
                  <div>
                    <p className="text-gray-300">Management City</p>
                    <p className="text-gray-300">Rohtak, Haryana - 124010, India</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-blue-400" />
                  <p className="text-gray-300">+91-1262-246-500</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <p className="text-gray-300">info@iimrohtak.ac.in</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 text-blue-400" />
                  <p className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-700" />

      {/* Bottom Footer */}
      <div className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 Indian Institute of Management Rohtak. All rights reserved.</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
