import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Rooms = () => {
const rooms = [
{
id: "standard",
name: "Standard Room",
price: "$199",
image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop",
description: "Comfortable and elegantly designed room with modern amenities, perfect for business or leisure travelers.",
features: ["Queen bed", "Free Wi-Fi", "City view", "Mini bar", "24/7 room service"]
},
{
id: "deluxe",
name: "Deluxe Suite",
price: "$349",
image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop",
description: "Spacious suite with premium furnishings, separate living area, and stunning city views.",
features: ["King bed", "Separate living area", "Premium amenities", "Balcony", "Complimentary breakfast"]
},
{
id: "presidential",
name: "Presidential Suite",
price: "$599",
image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
description: "Ultimate luxury with panoramic views, exclusive amenities, and personalized service.",
features: ["Master bedroom", "Panoramic views", "Butler service", "Private dining", "Spa access"]
},
{
id: "executive",
name: "Executive Room",
price: "$279",
image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=600&h=400&fit=crop",
description: "Designed for business travelers with workspace and premium business amenities.",
features: ["King bed", "Work desk", "Business center access", "Express check-in", "Lounge access"]
},
{
id: "family",
name: "Family Suite",
price: "$399",
image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600&h=400&fit=crop",
description: "Perfect for families with connecting rooms and child-friendly amenities.",
features: ["Two bedrooms", "Connecting rooms", "Kid-friendly amenities", "Family entertainment", "Kitchenette"]
},
{
id: "penthouse",
name: "Penthouse Suite",
price: "$899",
image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop",
description: "The pinnacle of luxury living with exclusive rooftop access and unparalleled views.",
features: ["Rooftop terrace", "360° views", "Private elevator", "Concierge service", "Jacuzzi"]
}
];

return (
<div className="min-h-screen">
{/* Hero Section */}
<section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-luxury-charcoal to-gray-800">
<div className="text-center text-white">
<h1 className="text-5xl font-light mb-4">Our Rooms</h1>
<p className="text-xl font-light">Discover your perfect sanctuary</p>
</div>
</section>

{/* Rooms Grid */}    
  <section className="py-20 bg-luxury-cream">    
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">    
        {rooms.map((room) => (    
          <Card key={room.id} className="hover-lift overflow-hidden border-0 luxury-shadow group">    
            <div className="relative h-64 overflow-hidden">    
              <img     
                src={room.image}     
                alt={room.name}    
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"    
              />    
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">    
                <Button     
                  asChild     
                  className="bg-luxury-gold hover:bg-luxury-gold/90 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"    
                >    
                  <Link to={`/rooms/${room.id}`}>View Details</Link>    
                </Button>    
              </div>    
              <div className="absolute top-4 right-4 bg-luxury-gold text-white px-3 py-1 rounded-full text-sm font-medium">    
                {room.price}/night    
              </div>    
            </div>    
            <CardContent className="p-6">    
              <h3 className="text-2xl font-semibold text-luxury-charcoal mb-2">{room.name}</h3>    
              <p className="text-gray-600 mb-4">{room.description}</p>    
              <ul className="space-y-1 mb-4">    
                {room.features.slice(0, 3).map((feature, index) => (    
                  <li key={index} className="text-sm text-gray-500 flex items-center">    
                    <span className="w-2 h-2 bg-luxury-gold rounded-full mr-2"></span>    
                    {feature}    
                  </li>    
                ))}    
              </ul>    
              <div className="flex gap-2">    
                <Button     
                  asChild     
                  variant="outline"     
                  className="flex-1 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white"    
                >    
                  <Link to={`/rooms/${room.id}`}>Learn More</Link>    
                </Button>    
                <Button     
                  asChild     
                  className="flex-1 bg-luxury-gold hover:bg-luxury-gold/90 text-white"    
                >    
                  <Link to="/booking">Book Now</Link>    
                </Button>    
              </div>    
            </CardContent>    
          </Card>    
        ))}    
      </div>    
    </div>    
  </section>    
</div>

);
};

export default Rooms;


