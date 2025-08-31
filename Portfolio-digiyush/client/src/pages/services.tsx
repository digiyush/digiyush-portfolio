import { Facebook, Search, Share2, Palette, Edit, User } from "lucide-react";
import { SiGoogle } from "react-icons/si";
import { Card } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      icon: <Facebook className="h-8 w-8 text-primary" />,
      title: "Meta Ads Management",
      description: "Strategic Facebook and Instagram advertising campaigns that convert. Advanced targeting, creative optimization, and ROI-focused management.",
      features: [
        "Campaign Strategy & Setup",
        "Advanced Audience Targeting",
        "Creative Testing & Optimization",
        "Performance Analytics"
      ]
    },
    {
      icon: <SiGoogle className="h-8 w-8 text-primary" />,
      title: "Google Ads Optimization",
      description: "Drive qualified traffic with expertly managed Google Ads campaigns. Search, Display, and Shopping ads that deliver results.",
      features: [
        "Keyword Research & Strategy",
        "Ad Copy Development",
        "Bid Management",
        "Conversion Tracking"
      ]
    },
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "SEO & Content Strategy",
      description: "Improve organic visibility with comprehensive SEO strategies. Technical optimization, content planning, and link building.",
      features: [
        "Technical SEO Audit",
        "Content Strategy",
        "Link Building",
        "Performance Monitoring"
      ]
    },
    {
      icon: <Share2 className="h-8 w-8 text-primary" />,
      title: "Social Media Marketing",
      description: "Build engaged communities across social platforms. Content creation, community management, and influencer partnerships.",
      features: [
        "Content Calendar Planning",
        "Community Management",
        "Influencer Outreach",
        "Analytics & Reporting"
      ]
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "Brand Development",
      description: "Create compelling brand identities that resonate. Logo design, brand guidelines, and visual identity systems.",
      features: [
        "Brand Strategy",
        "Visual Identity Design",
        "Brand Guidelines",
        "Market Positioning"
      ]
    },
    {
      icon: <Edit className="h-8 w-8 text-primary" />,
      title: "Content Creation",
      description: "Engaging content that converts. Blog posts, social media graphics, video content, and email marketing campaigns.",
      features: [
        "Blog Writing",
        "Graphic Design",
        "Video Production",
        "Email Campaigns"
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="section-padding bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Services That Scale Your Business</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital marketing solutions tailored to your business goals and target audience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-background p-8 hover-lift border border-border"
                data-testid={`card-service-${index}`}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} data-testid={`feature-${index}-${featureIndex}`}>
                      • {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss your marketing goals and create a strategy that delivers results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
              data-testid="button-get-started"
            >
              Get Started Today
            </a>
            <a 
              href="/booking" 
              className="border border-border text-foreground px-8 py-3 rounded-lg hover:bg-background transition-colors font-medium"
              data-testid="button-free-consultation"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
