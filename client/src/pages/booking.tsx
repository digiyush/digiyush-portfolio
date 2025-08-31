import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, CheckCircle, ArrowRight } from "lucide-react";

export default function Booking() {
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => setIsCalendlyLoaded(true);
    document.head.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const bookingOptions = [
    {
      title: "Free Strategy Call",
      duration: "30 minutes",
      description: "Perfect for discussing your marketing goals and challenges",
      features: ["Marketing audit overview", "Strategy recommendations", "Q&A session"],
      calendlyUrl: "https://calendly.com/digiyush/strategy-call"
    },
    {
      title: "Deep Dive Consultation", 
      duration: "60 minutes",
      description: "Comprehensive review of your current marketing efforts",
      features: ["Complete marketing analysis", "Custom strategy roadmap", "Implementation timeline"],
      calendlyUrl: "https://calendly.com/digiyush/consultation"
    }
  ];

  const openCalendly = (url: string) => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url });
    } else {
      // Fallback to direct link
      window.open(url, '_blank');
    }
  };

  return (
    <div className="pt-16">
      <section className="section-padding bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Book Your Strategy Session</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the consultation that best fits your needs. All sessions include actionable insights and a clear roadmap for your digital marketing success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {bookingOptions.map((option, index) => (
              <Card key={index} className="bg-background border border-border hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-6 w-6 text-primary mr-3" />
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{option.title}</h3>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        {option.duration}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">{option.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {option.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    onClick={() => openCalendly(option.calendlyUrl)}
                    className="w-full"
                    data-testid={`button-book-${index}`}
                  >
                    Book {option.title}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Alternative Contact Section */}
          <div className="text-center">
            <Card className="bg-muted border-0 inline-block">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Prefer a Different Time?</h3>
                <p className="text-muted-foreground mb-4">
                  Email me directly and I'll work with your schedule
                </p>
                <Button variant="outline" asChild>
                  <a href="mailto:digiyush@gmail.com" data-testid="button-email-direct">
                    Email Me Directly
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
