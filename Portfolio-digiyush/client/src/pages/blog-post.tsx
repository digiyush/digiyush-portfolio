import { useRoute } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";
import { Link } from "wouter";

export default function BlogPost() {
  const [match, params] = useRoute("/blog/:id");

  // Mock blog post data (in a real app, this would come from an API or CMS)
  const blogPosts = [
    {
      id: 1,
      title: "10 Facebook Ad Mistakes That Are Killing Your ROI",
      content: `Facebook advertising can be incredibly powerful when done right, but many businesses make critical mistakes that drain their budget without delivering results. Here are the top 10 mistakes and how to fix them:

## 1. Poor Audience Targeting

Many advertisers cast too wide a net, thinking broader reach means better results. Instead, focus on specific demographics, interests, and behaviors that align with your ideal customer profile.

**Solution**: Use Facebook's detailed targeting options to narrow down your audience. Start with a smaller, well-defined audience and expand based on performance.

## 2. Ignoring Mobile Optimization

Over 90% of Facebook users access the platform on mobile devices. If your ads and landing pages aren't mobile-friendly, you're losing potential customers.

**Solution**: Always preview your ads on mobile devices and ensure your landing pages load quickly and look great on small screens.

## 3. Weak Ad Creative

Your visuals and copy need to stop the scroll in a sea of content. Generic stock photos and bland copy won't cut it.

**Solution**: Use high-quality, eye-catching images that relate to your product. Write compelling headlines that speak directly to your audience's pain points.

## 4. Not Testing Enough

Many advertisers create one ad and hope for the best. Successful campaigns require continuous testing and optimization.

**Solution**: A/B test everything - headlines, images, audiences, and calls-to-action. Even small changes can lead to significant improvements in performance.

## 5. Setting and Forgetting

Facebook's algorithm and user behavior constantly evolve. Campaigns that perform well today might not tomorrow.

**Solution**: Monitor your campaigns daily. Check metrics, pause underperforming ads, and scale successful ones.

## 6. Ignoring the Facebook Pixel

The Facebook Pixel is crucial for tracking conversions and building custom audiences for retargeting.

**Solution**: Install the Facebook Pixel on your website and set up conversion tracking for key actions like purchases, sign-ups, and downloads.

## 7. Poor Landing Page Experience

Driving traffic to a poorly designed or irrelevant landing page is a waste of ad spend.

**Solution**: Ensure your landing page matches your ad's promise and provides a seamless user experience with a clear call-to-action.

## 8. Bidding Strategy Mistakes

Many advertisers don't understand Facebook's bidding options and end up overpaying for results.

**Solution**: Start with automatic bidding and gradually move to manual bidding as you understand your campaign performance better.

## 9. Neglecting Retargeting

Not everyone will convert on their first visit. Retargeting helps you stay top-of-mind with potential customers.

**Solution**: Create retargeting campaigns for website visitors, video viewers, and people who engaged with your previous ads.

## 10. Not Analyzing Data Properly

Facebook provides extensive analytics, but many advertisers don't dig deep enough into the data.

**Solution**: Regularly review your campaign metrics, identify trends, and use insights to inform future campaign strategies.

By avoiding these common mistakes and implementing these solutions, you'll be well on your way to creating Facebook ad campaigns that deliver real ROI for your business.`,
      author: "DigiYush",
      date: "2024-08-25",
      readTime: "8 min read",
      category: "Facebook Ads",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Facebook Ads", "ROI", "Digital Marketing"]
    }
  ];

  const postId = parseInt(params?.id || "1");
  const post = blogPosts.find(p => p.id === postId) || blogPosts[0];

  const sharePost = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        url: window.location.href,
      });
    } else {
      // Fallback to copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="pt-16">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Back Button */}
        <Link href="/blog">
          <Button variant="ghost" className="mb-8" data-testid="button-back-to-blog">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Button>
        </Link>

        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
              {post.category}
            </span>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {new Date(post.date).toLocaleDateString()}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {post.readTime}
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                <User className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-medium text-foreground">{post.author}</div>
                <div className="text-sm text-muted-foreground">Digital Marketing Expert</div>
              </div>
            </div>
            
            <Button variant="outline" size="sm" onClick={sharePost} data-testid="button-share">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>

        {/* Featured Image */}
        <img 
          src={post.image}
          alt={post.title}
          className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          data-testid="img-post-header"
        />

        {/* Article Content */}
        <Card className="bg-card border-0">
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-foreground mt-8 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return (
                    <p key={index} className="font-semibold text-foreground mb-4">
                      {paragraph.replace(/\*\*/g, '')}
                    </p>
                  );
                } else {
                  return (
                    <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                      {paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}
                    </p>
                  );
                }
              })}
            </div>
          </CardContent>
        </Card>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-8">
          {post.tags.map((tag, index) => (
            <span 
              key={index} 
              className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
              data-testid={`tag-${index}`}
            >
              #{tag.toLowerCase().replace(/\s+/g, '')}
            </span>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="bg-primary/5 border-primary/20 mt-12">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Improve Your Marketing Results?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how I can help you avoid these mistakes and create campaigns that actually convert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <Button size="lg" data-testid="button-book-consultation">
                  Book Free Consultation
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" data-testid="button-contact-now">
                  Contact Me
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}