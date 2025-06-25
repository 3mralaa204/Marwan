
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

interface ExperienceSectionProps {
  isVisible: boolean;
}

const ExperienceSection = ({ isVisible }: ExperienceSectionProps) => {
  const experiences = [
    {
      title: "Studio Manager",
      company: '"Marwan" Studio',
      period: "2015–Present",
      description: "Managing studio operations and photography projects"
    },
    {
      title: "Photography Instructor",
      company: "Point Team",
      period: "2020–2021",
      description: "Teaching photography techniques and skills"
    },
    {
      title: "Photography Team Leader",
      company: "ENACTUS",
      period: "2022–2023",
      description: "Leading photography team for various projects"
    }
  ];

  return (
    <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <Card className="bg-gray-900/80 border-gray-700 backdrop-blur-sm hover:bg-gray-900/90 transition-all duration-300">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-yellow-400 flex items-center gap-2">
            <Briefcase className="w-6 h-6" />
            Work Experience
          </h2>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="border-l-2 border-yellow-400/30 pl-4 pb-4 last:pb-0 relative"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-yellow-400 rounded-full"></div>
                <div>
                  <h3 className="font-semibold text-white">{exp.title}</h3>
                  <p className="text-yellow-400 font-medium">{exp.company}</p>
                  <p className="text-sm text-gray-400 flex items-center gap-1 mt-1">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </p>
                  <p className="text-gray-300 text-sm mt-2">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExperienceSection;
