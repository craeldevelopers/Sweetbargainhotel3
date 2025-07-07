import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Wifi, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Index = () => {
const [email, setEmail] = useState("");

const handleNewsletterSubmit = (e: React.FormEvent) => {
e.preventDefault();
if (email) {
toast({
title: "Thank you for subscribing!",
description: "You'll receive our latest updates and exclusive offers.",
});
setEmail("");
}
};

const rooms = [
{
id: "standard",
name: "Standard Room",
price: "$199",
image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=300&fit=crop",
description: "Comfortable and elegantly designed room with modern amenities."
},
{
id: "deluxe",
name: "Deluxe Suite",
price: "$349",
image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=300&fit=crop",
description: "Spacious suite with premium furnishings and city views."
},
{
id: "presidential",
name: "Presidential Suite",
price: "$599",
image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500&h=300&fit=crop",
description: "Ultimate luxury with panoramic views and exclusive amenities."
}
];

const amenities = [
{
icon: <Wifi className="w-8 h-8 text-luxury-gold" />,
title: "Free Wi-Fi",
description: "High-speed internet throughout the property"
},
{
icon: <div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center"><span className="text-white text-xs">🍳</span></div>,
title: "Breakfast",
description: "Complimentary gourmet breakfast daily"
},
{
icon: <div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center"><span className="text-white text-xs">🏊</span></div>,
title: "Pool & Spa",
description: "Rooftop infinity pool with spa services"
},
{
icon: <MapPin className="w-8 h-8 text-luxury-gold" />,
title: "Airport Shuttle",
description: "Complimentary shuttle service available"
}
];

const testimonials = [
{
text: "Absolutely stunning hotel with impeccable service. The attention to detail is remarkable.",
author: "Sarah Johnson",
rating: "⭐⭐⭐⭐⭐"
},
{
text: "A truly luxurious experience. The rooms are beautiful and the staff went above and beyond.",
author: "Michael Chen",
rating: "⭐⭐⭐⭐⭐"
},
{
text: "Perfect location and amenities. Will definitely be returning on our next trip.",
author: "Emma Davis",
rating: "⭐⭐⭐⭐⭐"
}
];

return (
<div className="space-y-0">
{/* Hero Section */}
<section className="relative h-screen flex items-center justify-center">
<div
className="absolute inset-0 bg-cover bg-center bg-no-repeat"
style={{
backgroundImage: "url('https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=1920&h=1080&fit=crop')"
}}
>
<div className="absolute inset-0 bg-black/40"></div>
</div>

<div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">  
      <h1 className="text-5xl md:text-7xl font-light mb-6 animate-fade-in">  
        Welcome to  
        <span className="block font-semibold text-luxury-gold">Sweet Bargain Hotel</span>  
      </h1>  
      <p className="text-xl md:text-2xl mb-8 animate-slide-up font-light">  
        Experience luxury redefined in the heart of the city  
      </p>  
      <Button   
        asChild   
        size="lg"   
        className="bg-luxury-gold hover:bg-luxury-gold/90 text-white px-8 py-4 text-lg animate-scale-in"  
      >  
        <Link to="/booking">Book Your Stay</Link>  
      </Button>  
    </div>  
  </section>  

  {/* Room Categories */}  
  <section className="py-20 bg-luxury-pearl">  
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">  
      <div className="text-center mb-16">  
        <h2 className="text-4xl font-light text-luxury-charcoal mb-4">Our Rooms</h2>  
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">  
          Each room is thoughtfully designed to provide the perfect blend of comfort and elegance  
        </p>  
      </div>  

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">  
        {rooms.map((room) => (  
          <Card key={room.id} className="hover-lift overflow-hidden border-0 luxury-shadow">  
            <div className="relative h-64 overflow-hidden">  
              <img   
                src={room.image}   
                alt={room.name}  
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"  
              />  
              <div className="absolute top-4 right-4 bg-luxury-gold text-white px-3 py-1 rounded-full text-sm font-medium">  
                {room.price}/night  
              </div>  
            </div>  
            <CardContent className="p-6">  
              <h3 className="text-2xl font-semibold text-luxury-charcoal mb-2">{room.name}</h3>  
              <p className="text-gray-600 mb-4">{room.description}</p>  
              <Button asChild variant="outline" className="w-full border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white">  
                <Link to={`/rooms/${room.id}`}>View Details</Link>  
              </Button>  
            </CardContent>  
          </Card>  
        ))}  
      </div>  
    </div>  
  </section>  

  {/* Amenities */}  
  <section className="py-20">  
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">  
      <div className="text-center mb-16">  
        <h2 className="text-4xl font-light text-luxury-charcoal mb-4">Amenities</h2>  
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">  
          Everything you need for a perfect stay  
        </p>  
      </div>  

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">  
        {amenities.map((amenity, index) => (  
          <div key={index} className="text-center group">  
            <div className="flex justify-center mb-4 transition-transform group-hover:scale-110">  
              {amenity.icon}  
            </div>  
            <h3 className="text-xl font-semibold text-luxury-charcoal mb-2">{amenity.title}</h3>  
            <p className="text-gray-600">{amenity.description}</p>  
          </div>  
        ))}  
      </div>  
    </div>  
  </section>  

  {/* Testimonials */}  
  <section className="py-20 bg-luxury-pearl">  
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">  
      <div className="text-center mb-16">  
        <h2 className="text-4xl font-light text-luxury-charcoal mb-4">What Our Guests Say</h2>  
      </div>  

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">  
        {testimonials.map((testimonial, index) => (  
          <Card key={index} className="border-0 luxury-shadow">  
            <CardContent className="p-8 text-center">  
              <div className="mb-4 text-2xl">{testimonial.rating}</div>  
              <p className="text-gray-600 italic mb-4 text-lg">"{testimonial.text}"</p>  
              <p className="font-semibold text-luxury-charcoal">— {testimonial.author}</p>  
            </CardContent>  
          </Card>  
        ))}  
      </div>  
    </div>  
  </section>  

  {/* Newsletter */}  
  <section className="py-20">  
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">  
      <Card className="max-w-2xl mx-auto border-0 luxury-shadow">  
        <CardContent className="p-8">  
          <h2 className="text-3xl font-light text-luxury-charcoal mb-4">Stay Updated</h2>  
          <p className="text-gray-600 mb-6">  
            Subscribe to our newsletter for exclusive offers and updates  
          </p>  
          <form onSubmit={handleNewsletterSubmit} className="flex gap-4">  
            <Input  
              type="email"  
              placeholder="Enter your email"  
              value={email}  
              onChange={(e) => setEmail(e.target.value)}  
              className="flex-1"  
              required  
            />  
            <Button type="submit" className="bg-luxury-gold hover:bg-luxury-gold/90 text-white px-8">  
              Subscribe  
            </Button>  
          </form>  
        </CardContent>  
      </Card>  
    </div>  
  </section>  
</div>

);
};

export default Index;


