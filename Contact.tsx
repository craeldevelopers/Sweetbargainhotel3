import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
const [formData, setFormData] = useState({
name: "",
email: "",
phone: "",
subject: "",
message: ""
});

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
setFormData({
...formData,
[e.target.name]: e.target.value
});
};

const handleSubmit = (e: React.FormEvent) => {
e.preventDefault();

if (!formData.name || !formData.email || !formData.message) {  
  toast({  
    title: "Missing Information",  
    description: "Please fill in all required fields.",  
    variant: "destructive"  
  });  
  return;  
}  

// Mock form submission  
toast({  
  title: "Message Sent!",  
  description: "Thank you for contacting us. We'll get back to you within 24 hours.",  
});  

// Reset form  
setFormData({  
  name: "",  
  email: "",  
  phone: "",  
  subject: "",  
  message: ""  
});

};

const contactInfo = [
{
icon: <MapPin className="w-6 h-6" />,
title: "Address",
details: ["123 Luxury Avenue", "Downtown District", "Metro City, MC 12345"]
},
{
icon: <Phone className="w-6 h-6" />,
title: "Phone",
details: ["+1 (555) 123-4567", "+1 (555) 123-4568"]
},
{
icon: <Mail className="w-6 h-6" />,
title: "Email",
details: ["info@sweetbargainhotel.com", "reservations@sweetbargainhotel.com"]
},
{
icon: <Clock className="w-6 h-6" />,
title: "Hours",
details: ["Front Desk: 24/7", "Concierge: 6 AM - 11 PM"]
}
];

return (
<div className="min-h-screen">
{/* Hero Section */}
<section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-luxury-charcoal to-gray-800">
<div className="text-center text-white">
<h1 className="text-5xl font-light mb-4">Contact Us</h1>
<p className="text-xl font-light">We're here to help make your stay perfect</p>
</div>
</section>

{/* Contact Form & Info */}  
  <section className="py-20 bg-luxury-cream">  
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">  
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">  
        {/* Contact Form */}  
        <Card className="border-0 luxury-shadow">  
          <CardContent className="p-8">  
            <h2 className="text-3xl font-light text-luxury-charcoal mb-6">Send us a Message</h2>  
            <form onSubmit={handleSubmit} className="space-y-6">  
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">  
                <div className="space-y-2">  
                  <Label htmlFor="name">Full Name *</Label>  
                  <Input  
                    id="name"  
                    name="name"  
                    value={formData.name}  
                    onChange={handleInputChange}  
                    placeholder="Enter your full name"  
                    required  
                  />  
                </div>  
                <div className="space-y-2">  
                  <Label htmlFor="email">Email Address *</Label>  
                  <Input  
                    id="email"  
                    name="email"  
                    type="email"  
                    value={formData.email}  
                    onChange={handleInputChange}  
                    placeholder="Enter your email"  
                    required  
                  />  
                </div>  
              </div>  

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">  
                <div className="space-y-2">  
                  <Label htmlFor="phone">Phone Number</Label>  
                  <Input  
                    id="phone"  
                    name="phone"  
                    type="tel"  
                    value={formData.phone}  
                    onChange={handleInputChange}  
                    placeholder="Enter your phone number"  
                  />  
                </div>  
                <div className="space-y-2">  
                  <Label htmlFor="subject">Subject</Label>  
                  <Input  
                    id="subject"  
                    name="subject"  
                    value={formData.subject}  
                    onChange={handleInputChange}  
                    placeholder="What is this regarding?"  
                  />  
                </div>  
              </div>  

              <div className="space-y-2">  
                <Label htmlFor="message">Message *</Label>  
                <textarea  
                  id="message"  
                  name="message"  
                  value={formData.message}  
                  onChange={handleInputChange}  
                  className="w-full p-3 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-luxury-gold focus:border-transparent"  
                  rows={6}  
                  placeholder="How can we help you?"  
                  required  
                />  
              </div>  

              <Button   
                type="submit"   
                className="w-full bg-luxury-gold hover:bg-luxury-gold/90 text-white py-3 text-lg"  
              >  
                Send Message  
              </Button>  
            </form>  
          </CardContent>  
        </Card>  

        {/* Contact Information */}  
        <div className="space-y-8">  
          <div>  
            <h2 className="text-3xl font-light text-luxury-charcoal mb-6">Get in Touch</h2>  
            <p className="text-lg text-gray-600 leading-relaxed mb-8">  
              Whether you have questions about our accommodations, need assistance with your   
              reservation, or want to plan a special event, our dedicated team is here to help.   
              We pride ourselves on providing exceptional service and personalized attention   
              to every guest.  
            </p>  
          </div>  

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">  
            {contactInfo.map((info, index) => (  
              <Card key={index} className="border-0 luxury-shadow hover-lift">  
                <CardContent className="p-6">  
                  <div className="flex items-start space-x-4">  
                    <div className="text-luxury-gold mt-1">  
                      {info.icon}  
                    </div>  
                    <div>  
                      <h3 className="font-semibold text-luxury-charcoal mb-2">{info.title}</h3>  
                      {info.details.map((detail, idx) => (  
                        <p key={idx} className="text-gray-600 text-sm">{detail}</p>  
                      ))}  
                    </div>  
                  </div>  
                </CardContent>  
              </Card>  
            ))}  
          </div>  

          {/* Additional Services */}  
          <Card className="border-0 luxury-shadow">  
            <CardContent className="p-6">  
              <h3 className="text-xl font-semibold text-luxury-charcoal mb-4">Additional Services</h3>  
              <ul className="space-y-2 text-gray-600">  
                <li className="flex items-center">  
                  <span className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></span>  
                  Airport Transportation Arrangements  
                </li>  
                <li className="flex items-center">  
                  <span className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></span>  
                  Event Planning & Catering Services  
                </li>  
                <li className="flex items-center">  
                  <span className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></span>  
                  Spa & Wellness Appointments  
                </li>  
                <li className="flex items-center">  
                  <span className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></span>  
                  Restaurant Reservations  
                </li>  
                <li className="flex items-center">  
                  <span className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></span>  
                  Business Center Services  
                </li>  
              </ul>  
            </CardContent>  
          </Card>  
        </div>  
      </div>  
    </div>  
  </section>  

  {/* Map Section */}  
  <section className="py-20">  
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">  
      <div className="text-center mb-12">  
        <h2 className="text-4xl font-light text-luxury-charcoal mb-4">Find Us</h2>  
        <p className="text-xl text-gray-600">  
          Located in the heart of downtown, easily accessible from all major attractions  
        </p>  
      </div>  

      <div className="max-w-4xl mx-auto">  
        <Card className="border-0 luxury-shadow overflow-hidden">  
          <div className="bg-gray-200 h-96 flex items-center justify-center">  
            <div className="text-center text-gray-600">  
              <div className="text-6xl mb-4">🗺️</div>  
              <h3 className="text-2xl font-semibold mb-2">Interactive Map</h3>  
              <p className="text-lg">123 Luxury Avenue, Downtown District</p>  
              <p className="text-sm text-gray-500 mt-2">  
                Click to open in Google Maps  
              </p>  
            </div>  
          </div>  
        </Card>  

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">  
          <Card className="border-0 luxury-shadow text-center">  
            <CardContent className="p-6">  
              <h4 className="font-semibold text-luxury-charcoal mb-2">From Airport</h4>  
              <p className="text-gray-600 text-sm">25 minutes by car</p>  
              <p className="text-gray-600 text-sm">Shuttle service available</p>  
            </CardContent>  
          </Card>  
          <Card className="border-0 luxury-shadow text-center">  
            <CardContent className="p-6">  
              <h4 className="font-semibold text-luxury-charcoal mb-2">Public Transit</h4>  
              <p className="text-gray-600 text-sm">Metro Station: 2 blocks</p>  
              <p className="text-gray-600 text-sm">Bus Stop: 1 block</p>  
            </CardContent>  
          </Card>  
          <Card className="border-0 luxury-shadow text-center">  
            <CardContent className="p-6">  
              <h4 className="font-semibold text-luxury-charcoal mb-2">Parking</h4>  
              <p className="text-gray-600 text-sm">Valet parking available</p>  
              <p className="text-gray-600 text-sm">Self-parking garage</p>  
            </CardContent>  
          </Card>  
        </div>  
      </div>  
    </div>  
  </section>  
</div>

);
};

export default Contact;


