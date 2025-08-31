import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Link } from "wouter";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Facebook Ad Mistakes That Are Killing Your ROI",
      excerpt: "Learn the most common Facebook advertising mistakes that businesses make and how to avoid them to maximize your return on investment.",
      content: `Facebook advertising can be incredibly powerful when done right, but many businesses make critical mistakes that drain their budget without delivering results. Here are the top 10 mistakes and how to fix them:

1. **Poor Audience Targeting**: Many advertisers cast too wide a net. Instead, focus on specific demographics, interests, and behaviors that align with your ideal customer.

2. **Ignoring Mobile Optimization**: Over 90% of Facebook users access the platform on mobile. Ensure your ads and landing pages are mobile-friendly.

3. **Weak Ad Creative**: Your visuals and copy need to stop the scroll. Use high-quality images, compelling headlines, and clear value propositions.

4. **Not Testing Enough**: A/B test everything - headlines, images, audiences, and calls-to-action. Small changes can lead to big improvements.

5. **Setting and Forgetting**: Successful campaigns require ongoing optimization. Monitor performance daily and make adjustments as needed.`,
      author: "DigiYush",
      date: "2024-08-25",
      readTime: "8 min read",
      category: "Facebook Ads",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      tags: ["Facebook Ads", "ROI", "Digital Marketing"]
    },
    {
      id: 2,
      title: "SEO Strategy for Local Businesses in 2024",
      excerpt: "A comprehensive guide to optimizing your local business for search engines and dominating local search results.",
      content: `Local SEO is crucial for businesses serving specific geographic areas. Here's how to dominate local search in 2024:

**Google My Business Optimization**
Your GMB profile is your digital storefront. Ensure it's complete with accurate information, regular updates, and customer reviews.

**Local Keyword Strategy**
Target location-specific keywords like "digital marketing agency Ahmedabad" or "SEO services Gujarat".

**Content Marketing for Local Audience**
Create content that resonates with your local community. Write about local events, partnerships, and industry insights specific to your area.

**Building Local Citations**
Ensure your business information is consistent across all online directories and platforms.

**Customer Reviews Management**
Actively encourage and manage customer reviews. Respond to all reviews professionally and promptly.`,
      author: "DigiYush",
      date: "2024-08-20",
      readTime: "12 min read",
      category: "SEO",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      tags: ["SEO", "Local Business", "Google My Business"]
    },
    {
      id: 3,
      title: "Content Marketing That Converts: A Complete Framework",
      excerpt: "Discover how to create content that not only engages your audience but also drives measurable business results.",
      content: `Content marketing isn't just about creating content—it's about creating content that converts. Here's a proven framework:

**Understanding Your Audience**
Before creating any content, develop detailed buyer personas. Know their pain points, goals, and preferred content formats.

**Content Mapping to Buyer's Journey**
- **Awareness Stage**: Educational blog posts, social media content
- **Consideration Stage**: Comparison guides, case studies, webinars
- **Decision Stage**: Free trials, demos, testimonials

**Measuring Content Performance**
Track metrics that matter:
- Engagement rates
- Lead generation
- Conversion rates
- Customer acquisition cost

**Content Distribution Strategy**
Great content means nothing if no one sees it. Develop a multi-channel distribution strategy including:
- Social media platforms
- Email marketing
- Partner networks
- Paid promotion`,
      author: "DigiYush",
      date: "2024-08-15",
      readTime: "10 min read",
      category: "Content Marketing",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      tags: ["Content Marketing", "Conversion", "Strategy"]
    }
  ];

  const categories = ["All", "Facebook Ads", "SEO", "Content Marketing", "Google Ads", "Social Media"];

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="section-padding bg-muted">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Marketing Insights & Strategies</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Latest tips, strategies, and insights to help you grow your business through effective digital marketing.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                data-testid={`filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Post */}
          <Card className="bg-card border border-border mb-16 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative">
                <img 
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-64 md:h-full object-cover"
                  data-testid="img-featured-post"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {blogPosts[0].category}
                  </span>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(blogPosts[0].date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {blogPosts[0].readTime}
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">{blogPosts[0].title}</h2>
                <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
                <Link href={`/blog/${blogPosts[0].id}`}>
                  <Button data-testid="button-read-featured">
                    Read Article
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </div>
          </Card>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="bg-card border border-border hover-lift overflow-hidden">
                <div className="relative">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                    data-testid={`img-post-${post.id}`}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </span>
                    <Link href={`/blog/${post.id}`}>
                      <Button variant="ghost" size="sm" data-testid={`button-read-${post.id}`}>
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Stay Updated with Marketing Tips</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get weekly insights and strategies delivered to your inbox. No spam, just valuable content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              data-testid="input-newsletter-email"
            />
            <Button data-testid="button-subscribe">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}