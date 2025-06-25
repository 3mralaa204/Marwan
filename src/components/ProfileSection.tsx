
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Monitor, Camera } from "lucide-react";

interface ProfileSectionProps {
  isVisible: boolean;
}

const ProfileSection = ({ isVisible }: ProfileSectionProps) => {
  return (
    <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <Card className="bg-gray-900/80 border-gray-700 backdrop-blur-sm hover:bg-gray-900/90 transition-all duration-300">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-yellow-400 flex items-center gap-2">
            <Camera className="w-6 h-6" />
            About Me
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            I am a dedicated media management graduate with a Bachelor's degree from the International Academy for Engineering and Media Sciences. With a strong foundation in media production and management.
          </p>
          
          <div className="space-y-6">
            {/* Education */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-yellow-400 flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Education
              </h3>
              <div className="space-y-2 text-gray-300">
                <div>
                  <p className="font-medium">Bachelor's in Media</p>
                  <p className="text-sm text-gray-400">International Academy for Engineering and Media Sciences (2020–2024)</p>
                </div>
                <div>
                  <p className="font-medium">Film Making</p>
                  <p className="text-sm text-gray-400">City of Media Production (2024)</p>
                </div>
              </div>
            </div>

            {/* Training Courses */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-yellow-400 flex items-center gap-2">
                <Award className="w-5 h-5" />
                Training Courses
              </h3>
              <div className="space-y-2 text-gray-300">
                <div>
                  <p className="font-medium">Photo Editing Course</p>
                  <p className="text-sm text-gray-400">2018</p>
                </div>
                <div>
                  <p className="font-medium">UP Skill – Content Creation & Directing</p>
                  <p className="text-sm text-gray-400">2024</p>
                </div>
              </div>
            </div>

            {/* Software Skills */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-yellow-400 flex items-center gap-2">
                <Monitor className="w-5 h-5" />
                Software Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Adobe Photoshop', 'Adobe Premiere', 'Adobe Lightroom'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-sm border border-yellow-400/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileSection;
