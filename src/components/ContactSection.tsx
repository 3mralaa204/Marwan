
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle, ExternalLink } from "lucide-react";

interface ContactSectionProps {
  isVisible: boolean;
}

const ContactSection = ({ isVisible }: ContactSectionProps) => {
  return (
    <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <Card className="bg-gray-900/80 border-gray-700 backdrop-blur-sm hover:bg-gray-900/90 transition-all duration-300">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-yellow-400 text-center">
            Let's Work Together
          </h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            {/* Email */}
            <Button 
              asChild
              variant="outline"
              className="bg-transparent border-yellow-400/30 text-white hover:bg-yellow-400/10 hover:border-yellow-400 transition-all duration-300 h-auto p-4"
            >
              <a href="mailto:Marwan2772002@gmail.com" className="flex flex-col items-center gap-2">
                <Mail className="w-6 h-6 text-yellow-400" />
                <span className="text-sm">Email</span>
                <span className="text-xs text-gray-400">Marwan2772002@gmail.com</span>
              </a>
            </Button>

            {/* Phone/WhatsApp */}
            <Button 
              asChild
              variant="outline"
              className="bg-transparent border-yellow-400/30 text-white hover:bg-yellow-400/10 hover:border-yellow-400 transition-all duration-300 h-auto p-4"
            >
              <a href="tel:+201274700987" className="flex flex-col items-center gap-2">
                <Phone className="w-6 h-6 text-yellow-400" />
                <span className="text-sm">Phone</span>
                <span className="text-xs text-gray-400">+20 127 470 0987</span>
              </a>
            </Button>

            {/* WhatsApp */}
            <Button 
              asChild
              variant="outline"
              className="bg-transparent border-yellow-400/30 text-white hover:bg-yellow-400/10 hover:border-yellow-400 transition-all duration-300 h-auto p-4"
            >
              <a 
                href="https://wa.me/201274700987" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2"
              >
                <MessageCircle className="w-6 h-6 text-yellow-400" />
                <span className="text-sm">WhatsApp</span>
                <span className="text-xs text-gray-400">Quick Chat</span>
              </a>
            </Button>
          </div>

          {/* Facebook Link Placeholder */}
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm mb-2">Connect with me on social media</p>
            <Button 
              variant="outline"
              className="bg-transparent border-yellow-400/30 text-white hover:bg-yellow-400/10 hover:border-yellow-400 transition-all duration-300"
              disabled
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Facebook (Link to be provided)
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactSection;
