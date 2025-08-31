import { Card } from "@/components/ui/card";

export default function Portfolio() {
  const caseStudies = [
    {
      title: "E-commerce Growth Campaign",
      description: "Transformed an online retailer's digital presence through integrated Meta and Google Ads strategy.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      metrics: [
        { value: "245%", label: "ROAS Increase" },
        { value: "3.2x", label: "Traffic Growth" },
        { value: "180%", label: "Revenue Boost" }
      ],
      tags: ["Meta Ads", "Google Ads", "SEO"]
    },
    {
      title: "SaaS Lead Generation",
      description: "Built a comprehensive lead funnel for a B2B SaaS company using LinkedIn and Google Ads.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      metrics: [
        { value: "450", label: "Qualified Leads" },
        { value: "28%", label: "Conversion Rate" },
        { value: "$85K", label: "Revenue Generated" }
      ],
      tags: ["LinkedIn Ads", "Email Marketing", "Landing Pages"]
    }
  ];

  const clients = [
    "TechCorp", "StartupXYZ", "E-Store Plus", "HealthTech", "FinanceApp", "EduPlatform"
  ];

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="section-padding bg-muted">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Portfolio & Case Studies</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from real campaigns. See how I've helped businesses achieve their marketing goals.
            </p>
          </div>

          {/* Case Studies */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {caseStudies.map((study, index) => (
              <Card 
                key={index} 
                className="bg-card p-8 hover-lift border border-border"
                data-testid={`card-case-study-${index}`}
              >
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-48 object-cover rounded-lg mb-6"
                  data-testid={`img-case-study-${index}`}
                />
                <h3 className="text-xl font-semibold text-foreground mb-3">{study.title}</h3>
                <p className="text-muted-foreground mb-4">{study.description}</p>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {study.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center" data-testid={`metric-${index}-${metricIndex}`}>
                      <div className="text-2xl font-bold text-primary">{metric.value}</div>
                      <div className="text-sm text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 flex-wrap">
                  {study.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                      data-testid={`tag-${index}-${tagIndex}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Client Logos */}
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

      {/* CTA Section */}
      <section className="section-padding bg-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Want Results Like These?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how I can help you achieve similar success for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
              data-testid="button-start-project"
            >
              Start Your Project
            </a>
            <a 
              href="/booking" 
              className="border border-border text-foreground px-8 py-3 rounded-lg hover:bg-muted transition-colors font-medium"
              data-testid="button-schedule-call"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
