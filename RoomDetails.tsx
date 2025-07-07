import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Check, Users, Bed, Car, Wifi } from "lucide-react";
import { useState } from "react";

const RoomDetails = () => {
const { id } = useParams();
const [currentImageIndex, setCurrentImageIndex] = useState(0);

const roomsData = {
standard: {
name: "Standard Room",
price: "$199",
images: [
"https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop",
"https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
"https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=600&fit=crop"
],
description: "Our Standard Room offers the perfect blend of comfort and elegance. Thoughtfully designed with modern amenities and premium furnishings, this room provides a peaceful retreat for both business and leisure travelers.",
features: [
"Queen-size bed with luxury linens",
"Free high-speed Wi-Fi",
"City view windows",
"Mini bar and coffee station",
"24/7 room service",
"En-suite bathroom with rain shower",
"Air conditioning and heating",
"Flat-screen TV with cable channels"
],
amenities: [
{ icon: <Users className="w-5 h-5" />, text: "2 Guests" },
{ icon: <Bed className="w-5 h-5" />, text: "Queen Bed" },
{ icon: <Car className="w-5 h-5" />, text: "Free Parking" },
{ icon: <Wifi className="w-5 h-5" />, text: "Free WiFi" }
],
size: "350 sq ft"
},
deluxe: {
name: "Deluxe Suite",
price: "$349",
images: [
"https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop",
"https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
"https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=600&fit=crop"
],
description: "Experience elevated luxury in our Deluxe Suite featuring a separate living area, premium furnishings, and stunning city views. Perfect for extended stays or special occasions.",
features: [
"King-size bed with premium bedding",
"Separate living area with sofa",
"Premium amenities and toiletries",
"Private balcony with city views",
"Complimentary breakfast included",
"Marble bathroom with deep soaking tub",
"Work desk and seating area",
"Smart TV with streaming services"
],
amenities: [
{ icon: <Users className="w-5 h-5" />, text: "4 Guests" },
{ icon: <Bed className="w-5 h-5" />, text: "King Bed" },
{ icon: <Car className="w-5 h-5" />, text: "Valet Parking" },
{ icon: <Wifi className="w-5 h-5" />, text: "Premium WiFi" }
],
size: "600 sq ft"
},
presidential: {
name: "Presidential Suite",
price: "$599",
images: [
"https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
"https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop",
"https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=800&h=600&fit=crop"
],
description: "The ultimate in luxury accommodation. Our Presidential Suite offers unparalleled comfort with panoramic views, exclusive amenities, and personalized butler service.",
features: [
"Master bedroom with California King bed",
"Panoramic city and ocean views",
"Personal butler service",
"Private dining area for 8 guests",
"Exclusive spa access",
"Premium bar and wine selection",
"Home theater system",
"Private terrace with outdoor seating"
],
amenities: [
{ icon: <Users className="w-5 h-5" />, text: "6 Guests" },
{ icon: <Bed className="w-5 h-5" />, text: "Cal King Bed" },
{ icon: <Car className="w-5 h-5" />, text: "Chauffeur Service" },
{ icon: <Wifi className="w-5 h-5" />, text: "VIP WiFi" }
],
size: "1200 sq ft"
}
};

const room = roomsData[id as keyof typeof roomsData];

if (!room) {
return (
<div className="min-h-screen flex items-center justify-center">
<div className="text-center">
<h1 className="text-2xl font-bold mb-4">Room not found</h1>
<Button asChild>
<Link to="/rooms">Back to Rooms</Link>
</Button>
</div>
</div>
);
}

const nextImage = () => {
setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
};

const prevImage = () => {
setCurrentImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
};

return (
<div className="min-h-screen">
{/* Image Carousel */}
<section className="relative h-96 md:h-[500px] overflow-hidden">
<img   
src={room.images[currentImageIndex]}   
alt={room.name}  
className="w-full h-full object-cover"  
/>
<div className="absolute inset-0 bg-black/20"></div>

{/* Navigation buttons */}  
    <button  
      onClick={prevImage}  
      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"  
      aria-label="Previous image"  
    >  
      <ChevronLeft className="w-6 h-6" />  
    </button>  
    <button  
      onClick={nextImage}  
      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"  
      aria-label="Next image"  
    >  
      <ChevronRight className="w-6 h-6" />  
    </button>  

    {/* Image indicators */}  
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">  
      {room.images.map((_, index) => (  
        <button  
          key={index}  
          onClick={() => setCurrentImageIndex(index)}  
          className={`w-3 h-3 rounded-full transition-colors ${  
            index === currentImageIndex ? 'bg-luxury-gold' : 'bg-white/50'  
          }`}  
          aria-label={`View image ${index + 1}`}  
        />  
      ))}  
    </div>  
  </section>  

  {/* Room Details */}  
  <section className="py-12 bg-luxury-cream">  
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">  
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">  
        {/* Main Content */}  
        <div className="lg:col-span-2 space-y-8">  
          <div>  
            <div className="flex items-center justify-between mb-4">  
              <h1 className="text-4xl font-light text-luxury-charcoal">{room.name}</h1>  
              <div className="text-right">  
                <div className="text-3xl font-semibold text-luxury-gold">{room.price}</div>  
                <div className="text-sm text-gray-600">per night</div>  
              </div>  
            </div>  
            <p className="text-lg text-gray-600 leading-relaxed">{room.description}</p>  
          </div>  

          {/* Room Features */}  
          <Card className="border-0 luxury-shadow">  
            <CardContent className="p-6">  
              <h3 className="text-2xl font-semibold text-luxury-charcoal mb-4">Room Features</h3>  
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">  
                {room.features.map((feature, index) => (  
                  <div key={index} className="flex items-center space-x-3">  
                    <Check className="w-5 h-5 text-luxury-gold" />  
                    <span className="text-gray-600">{feature}</span>  
                  </div>  
                ))}  
              </div>  
            </CardContent>  
          </Card>  

          {/* Room Info */}  
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">  
            {room.amenities.map((amenity, index) => (  
              <Card key={index} className="border-0 luxury-shadow text-center">  
                <CardContent className="p-4">  
                  <div className="text-luxury-gold mb-2 flex justify-center">  
                    {amenity.icon}  
                  </div>  
                  <div className="text-sm font-medium text-luxury-charcoal">{amenity.text}</div>  
                </CardContent>  
              </Card>  
            ))}  
          </div>  
        </div>  

        {/* Booking Sidebar */}  
        <div className="lg:col-span-1">  
          <Card className="border-0 luxury-shadow sticky top-24">  
            <CardContent className="p-6">  
              <div className="text-center mb-6">  
                <div className="text-3xl font-semibold text-luxury-gold mb-1">{room.price}</div>  
                <div className="text-sm text-gray-600">per night</div>  
                <div className="text-sm text-gray-500 mt-2">Room size: {room.size}</div>  
              </div>  

              <div className="space-y-4">  
                <Button   
                  asChild   
                  className="w-full bg-luxury-gold hover:bg-luxury-gold/90 text-white py-3 text-lg"  
                >  
                  <Link to="/booking">Book This Room</Link>  
                </Button>  
                  
                <Button   
                  asChild   
                  variant="outline"   
                  className="w-full border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white"  
                >  
                  <Link to="/contact">Contact Us</Link>  
                </Button>  
              </div>  

              <div className="mt-6 pt-6 border-t border-gray-200">  
                <h4 className="font-semibold text-luxury-charcoal mb-3">Quick Info</h4>  
                <ul className="space-y-2 text-sm text-gray-600">  
                  <li>• Free cancellation up to 24 hours</li>  
                  <li>• No booking fees</li>  
                  <li>• Instant confirmation</li>  
                  <li>• Best price guarantee</li>  
                </ul>  
              </div>  
            </CardContent>  
          </Card>  
        </div>  
      </div>  
    </div>  
  </section>  
</div>

);
};

export default RoomDetails;


