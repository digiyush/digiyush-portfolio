import { useEffect } from 'react';
import { useLocation } from 'wouter';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  article?: boolean;
  author?: string;
  publishedTime?: string;
}

export default function SEOHead({ 
  title = "DigiYush - Digital Marketing Expert in Ahmedabad, Gujarat",
  description = "Professional digital marketing services including Meta Ads, Google Ads, SEO, and social media marketing. Helping businesses grow in Ahmedabad, Gujarat.",
  keywords = ["digital marketing", "Meta ads", "Google ads", "SEO", "Ahmedabad", "Gujarat", "social media marketing"],
  image = "/attached_assets/profile-optimized.jpeg",
  article = false,
  author = "DigiYush",
  publishedTime
}: SEOHeadProps) {
  const [location] = useLocation();
  const currentUrl = `${window.location.origin}${location}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name: string, content: string, property?: string) => {
      const selector = property ? `meta[property="${property}"]` : `meta[name="${name}"]`;
      let tag = document.querySelector(selector) as HTMLMetaElement;
      
      if (!tag) {
        tag = document.createElement('meta');
        if (property) {
          tag.setAttribute('property', property);
        } else {
          tag.setAttribute('name', name);
        }
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    // Basic SEO tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords.join(', '));
    updateMetaTag('author', author);
    updateMetaTag('robots', 'index, follow');
    
    // Open Graph tags
    updateMetaTag('og:title', title, 'og:title');
    updateMetaTag('og:description', description, 'og:description');
    updateMetaTag('og:image', image, 'og:image');
    updateMetaTag('og:url', currentUrl, 'og:url');
    updateMetaTag('og:type', article ? 'article' : 'website', 'og:type');
    updateMetaTag('og:site_name', 'DigiYush Digital Marketing', 'og:site_name');
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    updateMetaTag('twitter:creator', '@digiyush');
    
    // Article specific tags
    if (article && publishedTime) {
      updateMetaTag('article:author', author, 'article:author');
      updateMetaTag('article:published_time', publishedTime, 'article:published_time');
    }

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = currentUrl;

    // JSON-LD Structured Data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": article ? "Article" : "Person",
      ...(article ? {
        "headline": title,
        "description": description,
        "image": image,
        "author": {
          "@type": "Person",
          "name": author
        },
        "publisher": {
          "@type": "Organization",
          "name": "DigiYush Digital Marketing",
          "logo": {
            "@type": "ImageObject",
            "url": image
          }
        },
        "datePublished": publishedTime,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": currentUrl
        }
      } : {
        "name": "DigiYush",
        "jobTitle": "Digital Marketing Expert",
        "description": description,
        "image": image,
        "url": currentUrl,
        "sameAs": [
          "https://linkedin.com/in/digiyush",
          "https://twitter.com/digiyush"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Ahmedabad",
          "addressRegion": "Gujarat",
          "addressCountry": "IN"
        },
        "knowsAbout": [
          "Digital Marketing",
          "Meta Advertising",
          "Google Ads",
          "SEO",
          "Social Media Marketing",
          "Content Marketing"
        ]
      })
    };

    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);

  }, [title, description, keywords, image, article, author, publishedTime, location]);

  return null;
}