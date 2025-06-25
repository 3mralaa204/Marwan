
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Monitor, Palette } from "lucide-react";

interface AboutGridProps {
  isVisible: boolean;
}

const AboutGrid = ({ isVisible }: AboutGridProps) => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I am a dedicated media management graduate with a Bachelor's degree from the International Academy for Engineering and Media Sciences. With a strong foundation in media production and management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Education Card */}
          <Card className={`bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-yellow-400/20 backdrop-blur-sm hover:border-yellow-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-yellow-400/20 rounded-full">
                  <GraduationCap className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-yellow-400">Education</h3>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-black/30 rounded-lg border-l-4 border-yellow-400/50">
                  <p className="font-semibold text-white">Bachelor's in Media</p>
                  <p className="text-sm text-gray-400">International Academy for Engineering and Media Sciences</p>
                  <p className="text-xs text-yellow-400 mt-1">2020–2024</p>
                </div>
                <div className="p-4 bg-black/30 rounded-lg border-l-4 border-yellow-400/30">
                  <p className="font-semibold text-white">Film Making</p>
                  <p className="text-sm text-gray-400">City of Media Production</p>
                  <p className="text-xs text-yellow-400 mt-1">2024</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Training Card */}
          <Card className={`bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-yellow-400/20 backdrop-blur-sm hover:border-yellow-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-yellow-400/20 rounded-full">
                  <Award className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-yellow-400">Training</h3>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-black/30 rounded-lg border-l-4 border-yellow-400/50">
                  <p className="font-semibold text-white">Photo Editing Course</p>
                  <p className="text-xs text-yellow-400 mt-1">2018</p>
                </div>
                <div className="p-4 bg-black/30 rounded-lg border-l-4 border-yellow-400/30">
                  <p className="font-semibold text-white">UP Skill – Content Creation & Directing</p>
                  <p className="text-xs text-yellow-400 mt-1">2024</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills Card */}
          <Card className={`bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-yellow-400/20 backdrop-blur-sm hover:border-yellow-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/10 md:col-span-2 lg:col-span-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-yellow-400/20 rounded-full">
                  <Palette className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-yellow-400">Software</h3>
              </div>
              
              <div className="space-y-3">
                {['Adobe Photoshop', 'Adobe Premiere', 'Adobe Lightroom'].map((skill, index) => (
                  <div 
                    key={skill}
                    className="flex items-center gap-3 p-3 bg-gradient-to-r from-yellow-400/10 to-yellow-400/5 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300"
                  >
                    <Monitor className="w-5 h-5 text-yellow-400" />
                    <span className="text-white font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutGrid;
