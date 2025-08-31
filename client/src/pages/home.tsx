import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { type Testimonial } from "@shared/schema";
import profileImage from "@/assets/profile-optimized.jpeg";
import SEOHead from "@/components/seo-head";

export default function Home() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechCorp",
      content: "Alex transformed our digital marketing strategy and delivered exceptional results. Our lead generation increased by 300% in just 3 months.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60"
    },
    {
      name: "Michael Rodriguez",
      role: "Marketing Director, E-Store Plus",
      content: "Professional, data-driven, and results-focused. Alex's Google Ads optimization saved us 40% on ad spend while doubling our conversions.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60"
    },
    {
      name: "Emily Johnson",
      role: "Founder, StartupXYZ",
      content: "The comprehensive social media strategy Alex developed helped us build a community of 50K+ engaged followers and increased brand awareness significantly.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60"
    }
  ];

  const clients = [
    "TechCorp", "StartupXYZ", "E-Store Plus", "HealthTech", "FinanceApp", "EduPlatform"
  ];

  return (
    <>
      <SEOHead 
        title="DigiYush - Digital Marketing Expert in Ahmedabad, Gujarat"
        description="Professional digital marketing services including Meta Ads, Google Ads, SEO, and social media marketing. Helping businesses grow in Ahmedabad, Gujarat with data-driven strategies."
        keywords={["digital marketing expert", "Meta ads specialist", "Google ads management", "SEO services Ahmedabad", "social media marketing Gujarat", "DigiYush"]}
      />
      <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background to-muted">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                <span className="text-primary">Digital Marketing</span><br />
                That Drives Results
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                Transform your business with data-driven marketing strategies. I help brands grow through Meta Ads, Google Ads, SEO, and comprehensive digital marketing solutions from Ahmedabad, Gujarat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/services" data-testid="button-work-together">
                  <span className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium inline-block">
                    Let's Work Together
                  </span>
                </Link>
                <Link href="/portfolio" data-testid="button-view-work">
                  <span className="border border-border text-foreground px-8 py-3 rounded-lg hover:bg-muted transition-colors font-medium inline-block">
                    View My Work
                  </span>
                </Link>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <img 
                src={profileImage} 
                alt="DigiYush - Digital Marketing Expert" 
                className="rounded-full w-80 h-80 object-cover shadow-2xl border-4 border-card"
                data-testid="img-profile"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take my word for it. Here's what business owners say about working with me.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-background p-8 border border-border" data-testid={`card-testimonial-${index}`}>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                    data-testid={`img-testimonial-${index}`}
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="section-padding bg-muted">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-foreground mb-8">Trusted by Leading Brands</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity">
              {clients.map((client, index) => (
                <div 
                  key={index} 
                  className="bg-card p-4 rounded-lg border border-border flex items-center justify-center h-16"
                  data-testid={`card-client-${index}`}
                >
                  <span className="font-semibold text-muted-foreground">{client}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
