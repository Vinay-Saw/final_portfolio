import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Download, Send, Loader2 } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { personalConfig, getEmail, getGithubUrl, getLinkedinUrl, getMailtoLink, getResumeDownloadUrl } from "@/config/personal";
import { emailConfig } from "@/config/email";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

// Form validation schema
const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      console.log('Attempting to send email with EmailJS...');
      console.log('Service ID:', emailConfig.serviceId);
      console.log('Template ID:', emailConfig.templateId);
      console.log('Public Key:', emailConfig.publicKey ? 'Set' : 'Not set');
      console.log('Form data:', data);
      console.log('Recipient email:', getEmail());

      const templateParams = {
        from_name: `${data.firstName} ${data.lastName}`,
        from_email: data.email,
        to_email: getEmail(), // Your email from personal config
        subject: data.subject,
        message: data.message,
        reply_to: data.email,
      };

      console.log('Template params:', templateParams);

      // Initialize EmailJS
      emailjs.init(emailConfig.publicKey);
      console.log('EmailJS initialized');

      // Send email
      const result = await emailjs.send(emailConfig.serviceId, emailConfig.templateId, templateParams);
      console.log('EmailJS response:', result);

      // Success notification
      toast.success("Message sent successfully!", {
        description: "Thank you for reaching out. I'll get back to you soon!",
        duration: 5000,
      });

      // Reset form
      reset();
    } catch (error) {
      console.error('Detailed error information:', error);
      
      let errorMessage = "Please try again or contact me directly via email.";
      
      if (error instanceof Error) {
        console.error('Error message:', error.message);
        console.error('Error stack:', error.stack);
        
        // Provide more specific error messages based on the error
        if (error.message.includes('Invalid service ID')) {
          errorMessage = "Email service configuration error. Please contact me directly.";
        } else if (error.message.includes('Invalid template ID')) {
          errorMessage = "Email template configuration error. Please contact me directly.";
        } else if (error.message.includes('Invalid public key')) {
          errorMessage = "Email authentication error. Please contact me directly.";
        } else if (error.message.includes('network') || error.message.includes('fetch')) {
          errorMessage = "Network error. Please check your connection and try again.";
        }
      }
      
      // Error notification
      toast.error("Failed to send message", {
        description: errorMessage,
        duration: 6000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on data-driven solutions or discuss opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="hover-glow border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
              <CardDescription>
                I'd love to hear about your project or opportunity
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input 
                      {...register("firstName")}
                      placeholder="What's your first name?" 
                      className="border-border/50" 
                    />
                    {errors.firstName && (
                      <p className="text-sm text-red-500">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input 
                      {...register("lastName")}
                      placeholder="What's your last name?" 
                      className="border-border/50" 
                    />
                    {errors.lastName && (
                      <p className="text-sm text-red-500">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input 
                    {...register("email")}
                    type="email" 
                    placeholder="Enter your email" 
                    className="border-border/50" 
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input 
                    {...register("subject")}
                    placeholder="Enter the subject line" 
                    className="border-border/50" 
                  />
                  {errors.subject && (
                    <p className="text-sm text-red-500">{errors.subject.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    {...register("message")}
                    placeholder="Tell me about your project or opportunity..."
                    className="border-border/50 min-h-[120px]"
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-primary text-primary-foreground hover-glow"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="hover-glow border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
                <CardDescription>
                  Let's start a conversation about data science
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">{getEmail()}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 gradient-secondary rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">{personalConfig.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 gradient-accent rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">{personalConfig.location.city}, {personalConfig.location.state}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-glow border-border/50">
              <CardContent className="pt-6">
                <div className="text-center space-y-6">
                  <h3 className="text-xl font-semibold">Follow My Journey</h3>
                  
                  <div className="flex justify-center gap-4">
                    <a 
                      href={getGithubUrl()} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary/20 transition-colors group"
                    >
                      <SiGithub className="w-6 h-6 text-muted-foreground group-hover:text-primary" />
                    </a>
                    <a 
                      href={getLinkedinUrl()} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary/20 transition-colors group"
                    >
                      <SiLinkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary" />
                    </a>
                    <a 
                      href={getMailtoLink()} 
                      className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary/20 transition-colors group"
                    >
                      <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary" />
                    </a>
                  </div>
                  
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
                    <a href={getResumeDownloadUrl()} target="_blank" rel="noopener noreferrer">
                      <Download className="w-4 h-4 mr-2" />
                      Download Resume
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;