
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle, Facebook } from "lucide-react";

interface ContactGridProps {
  isVisible: boolean;
}

const ContactGrid = ({ isVisible }: ContactGridProps) => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      subtitle: "Marwan2772002@gmail.com",
      href: "mailto:Marwan2772002@gmail.com",
      gradient: "from-blue-500/20 to-blue-600/20"
    },
    {
      icon: Phone,
      title: "Phone",
      subtitle: "+20 127 470 0987",
      href: "tel:+201274700987",
      gradient: "from-green-500/20 to-green-600/20"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      subtitle: "Quick Chat",
      href: "https://wa.me/201274700987",
      gradient: "from-emerald-500/20 to-emerald-600/20"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's discuss your next project.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => (
            <Card 
              key={index}
              className={`bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-yellow-400/20 backdrop-blur-sm hover:border-yellow-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/10 group cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                <a 
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block text-center"
                >
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${method.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="w-10 h-10 text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{method.title}</h3>
                  <p className="text-gray-400 group-hover:text-yellow-400 transition-colors duration-300">
                    {method.subtitle}
                  </p>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Facebook Link */}
        <div className={`text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-yellow-400/20 backdrop-blur-sm max-w-md mx-auto hover:border-yellow-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/10 group cursor-pointer">
            <CardContent className="p-6">
              <p className="text-gray-400 text-sm mb-4">Connect with me on social media</p>
              <a
                href="https://www.facebook.com/MarwanM.Allipe"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button 
                  variant="outline"
                  className="border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/10 hover:border-yellow-400 transition-all duration-300 w-full"
                >
                  <Facebook className="w-4 h-4 mr-2" />
                  Follow on Facebook
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactGrid;
