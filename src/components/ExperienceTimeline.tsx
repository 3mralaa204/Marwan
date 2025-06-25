
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin } from "lucide-react";

interface ExperienceTimelineProps {
  isVisible: boolean;
}

const ExperienceTimeline = ({ isVisible }: ExperienceTimelineProps) => {
  const experiences = [
    {
      title: "Studio Manager",
      company: '"Marwan" Studio',
      period: "2015–Present",
      description: "Managing studio operations and photography projects",
      current: true
    },
    {
      title: "Photography Team Leader",
      company: "ENACTUS",
      period: "2022–2023",
      description: "Leading photography team for various projects",
      current: false
    },
    {
      title: "Photography Instructor",
      company: "Point Team",
      period: "2020–2021",
      description: "Teaching photography techniques and skills",
      current: false
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 to-yellow-600"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={`relative pl-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-5 top-6 w-6 h-6 rounded-full border-4 ${exp.current ? 'bg-yellow-400 border-yellow-400 animate-pulse' : 'bg-gray-800 border-yellow-400/60'}`}></div>
                  
                  <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-yellow-400/20 backdrop-blur-sm hover:border-yellow-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/10">
                    <CardContent className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                          <p className="text-yellow-400 font-semibold text-lg flex items-center gap-2">
                            <Briefcase className="w-5 h-5" />
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 mt-2 lg:mt-0">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm font-medium">{exp.period}</span>
                          {exp.current && (
                            <span className="px-3 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-xs font-semibold">
                              Current
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
