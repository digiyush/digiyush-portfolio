import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertTestimonialSchema, type InsertTestimonial } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, CheckCircle } from "lucide-react";
import SEOHead from "@/components/seo-head";

export default function TestimonialForm() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<InsertTestimonial>({
    resolver: zodResolver(insertTestimonialSchema),
    defaultValues: {
      name: "",
      role: "",
      company: "",
      content: "",
      rating: 5,
      image: "",
    },
  });

  const testimonialMutation = useMutation({
    mutationFn: async (data: InsertTestimonial) => {
      const response = await apiRequest("POST", "/api/testimonials", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Testimonial submitted successfully!",
        description: "Thank you for your feedback. It will be reviewed and published soon.",
      });
      form.reset();
      setIsSubmitted(true);
    },
    onError: (error) => {
      toast({
        title: "Error submitting testimonial",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertTestimonial) => {
    testimonialMutation.mutate(data);
  };

  if (isSubmitted) {
    return (
      <>
        <SEOHead 
          title="Thank You - Testimonial Submitted | DigiYush"
          description="Thank you for submitting your testimonial. Your feedback helps us serve our clients better."
        />
        <div className="pt-16">
          <div className="max-w-2xl mx-auto px-6 py-16 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-foreground mb-4">Thank You!</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Your testimonial has been submitted successfully. It will be reviewed and published on our website soon.
            </p>
            <Button onClick={() => setIsSubmitted(false)} data-testid="button-submit-another">
              Submit Another Testimonial
            </Button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEOHead 
        title="Share Your Experience - Testimonial Form | DigiYush"
        description="Share your experience working with DigiYush. Your feedback helps potential clients understand the value of our digital marketing services."
      />
      <div className="pt-16">
        <section className="section-padding bg-muted">
          <div className="max-w-2xl mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Share Your Experience</h1>
              <p className="text-lg text-muted-foreground">
                Your feedback helps potential clients understand the value of working with me. Please share your honest experience.
              </p>
            </div>

            <Card className="bg-card border border-border">
              <CardContent className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your full name" 
                                data-testid="input-testimonial-name"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="role"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Role *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="e.g., Marketing Director, CEO" 
                                data-testid="input-testimonial-role"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company (Optional)</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your company name" 
                              data-testid="input-testimonial-company"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="rating"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Rating *</FormLabel>
                          <Select onValueChange={(value) => field.onChange(parseInt(value))} defaultValue={field.value?.toString()}>
                            <FormControl>
                              <SelectTrigger data-testid="select-testimonial-rating">
                                <SelectValue placeholder="Select rating" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {[5, 4, 3, 2, 1].map((rating) => (
                                <SelectItem key={rating} value={rating.toString()}>
                                  <div className="flex items-center">
                                    <div className="flex mr-2">
                                      {[...Array(5)].map((_, i) => (
                                        <Star 
                                          key={i} 
                                          className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                                        />
                                      ))}
                                    </div>
                                    {rating} Star{rating !== 1 ? 's' : ''}
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="content"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Testimonial *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your experience working with DigiYush. What results did you achieve? How was the communication and service?"
                              className="resize-none"
                              rows={6}
                              data-testid="textarea-testimonial-content"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="image"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Profile Image URL (Optional)</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="https://example.com/your-photo.jpg" 
                              data-testid="input-testimonial-image"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="bg-muted p-4 rounded-lg text-sm text-muted-foreground">
                      <p><strong>Note:</strong> Your testimonial will be reviewed before being published on the website. We may contact you to verify the authenticity of your feedback.</p>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full"
                      disabled={testimonialMutation.isPending}
                      data-testid="button-submit-testimonial"
                    >
                      {testimonialMutation.isPending ? "Submitting..." : "Submit Testimonial"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}