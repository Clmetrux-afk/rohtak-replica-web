
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlayCircle, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&h=1080&fit=crop')"
        }}
      ></div>
      
      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Excellence in
                <span className="block text-yellow-400">Management Education</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                IIM Rohtak stands as a beacon of excellence in management education, 
                fostering innovation, leadership, and global business acumen.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                Explore Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                <PlayCircle className="mr-2 h-5 w-5" />
                Campus Tour
              </Button>
            </div>

            <div className="flex flex-wrap gap-8 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">15+</div>
                <div className="text-sm text-blue-200">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">2000+</div>
                <div className="text-sm text-blue-200">Alumni Network</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">100+</div>
                <div className="text-sm text-blue-200">Industry Partners</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1466442929976-97f336a657be?w=600&h=400&fit=crop" 
              alt="IIM Rohtak Campus" 
              className="rounded-lg shadow-2xl"
            />
            <Card className="absolute -bottom-6 -left-6 bg-white text-black">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">🏆</span>
                  </div>
                  <div>
                    <div className="font-semibold">NIRF Ranking</div>
                    <div className="text-sm text-gray-600">Top Management Institute</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
