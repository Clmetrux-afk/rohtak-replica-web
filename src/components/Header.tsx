
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#", hasDropdown: true },
    { name: "Academics", href: "#", hasDropdown: true },
    { name: "Admissions", href: "#", hasDropdown: true },
    { name: "Faculty", href: "#" },
    { name: "Research", href: "#", hasDropdown: true },
    { name: "Placements", href: "#" },
    { name: "Campus Life", href: "#" },
    { name: "Alumni", href: "#" },
    { name: "Contact", href: "#" }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex space-x-4">
            <span>📞 +91-1262-246-500</span>
            <span>✉️ info@iimrohtak.ac.in</span>
          </div>
          <div className="flex space-x-2">
            <Button variant="ghost" size="sm" className="text-white hover:text-blue-200">
              Student Portal
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-blue-200">
              Faculty Portal
            </Button>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img 
              src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=80&h=80&fit=crop&crop=center" 
              alt="IIM Rohtak Logo" 
              className="h-12 w-12 rounded-full"
            />
            <div>
              <h1 className="text-xl font-bold text-blue-900">IIM Rohtak</h1>
              <p className="text-sm text-gray-600">Indian Institute of Management</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Button 
                  variant="ghost" 
                  className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center"
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </Button>
              </div>
            ))}
            <Button size="sm" className="ml-4">
              <Search className="h-4 w-4" />
            </Button>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className="justify-start text-gray-700 hover:text-blue-600"
                >
                  {item.name}
                </Button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
