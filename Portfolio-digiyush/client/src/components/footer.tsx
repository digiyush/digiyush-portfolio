import { Link } from "wouter";
import { Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">DigiYush</h3>
            <p className="text-background/80 mb-4 max-w-md">
              Digital Marketing Expert helping businesses grow through data-driven strategies and creative campaigns.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                data-testid="link-linkedin"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                data-testid="link-twitter"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                data-testid="link-instagram"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-background/80">
              <li><Link href="/services" className="hover:text-background transition-colors" data-testid="link-footer-meta-ads">Meta Ads</Link></li>
              <li><Link href="/services" className="hover:text-background transition-colors" data-testid="link-footer-google-ads">Google Ads</Link></li>
              <li><Link href="/services" className="hover:text-background transition-colors" data-testid="link-footer-seo">SEO</Link></li>
              <li><Link href="/services" className="hover:text-background transition-colors" data-testid="link-footer-social-media">Social Media</Link></li>
              <li><Link href="/services" className="hover:text-background transition-colors" data-testid="link-footer-branding">Branding</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li><Link href="/" className="hover:text-background transition-colors" data-testid="link-footer-home">Home</Link></li>
              <li><Link href="/services" className="hover:text-background transition-colors" data-testid="link-footer-services">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-background transition-colors" data-testid="link-footer-portfolio">Portfolio</Link></li>
              <li><Link href="/blog" className="hover:text-background transition-colors" data-testid="link-footer-blog">Blog</Link></li>
              <li><Link href="/testimonials/submit" className="hover:text-background transition-colors" data-testid="link-footer-testimonials">Write Review</Link></li>
              <li><Link href="/contact" className="hover:text-background transition-colors" data-testid="link-footer-contact">Contact</Link></li>
              <li><Link href="/booking" className="hover:text-background transition-colors" data-testid="link-footer-booking">Book Call</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p>&copy; 2024 DigiYush Digital Marketing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
