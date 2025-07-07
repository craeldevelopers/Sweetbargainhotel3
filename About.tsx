import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, Star } from "lucide-react";

const About = () => {
const stats = [
{ icon: <Award className="w-8 h-8" />, number: "15+", label: "Years of Excellence" },
{ icon: <Users className="w-8 h-8" />, number: "50K+", label: "Happy Guests" },
{ icon: <Clock className="w-8 h-8" />, number: "24/7", label: "Concierge Service" },
{ icon: <Star className="w-8 h-8" />, number: "4.9", label: "Guest Rating" }
];

const values = [
{
title: "Excellence",
description: "We strive for perfection in every detail, from the thread count of our linens to the temperature of your welcome drink."
},
{
title: "Hospitality",
description: "Our guests are not just visitors; they are honored members of our extended family, treated with warmth and genuine care."
},
{
title: "Innovation",
description: "We continuously evolve our services and amenities to exceed expectations and create memorable experiences."
},
{
title: "Sustainability",
description: "We are committed to environmental responsibility while maintaining the highest standards of luxury and comfort."
}
];

return (
<div className="min-h-screen">
{/* Hero Section */}
<section className="relative h-96 flex items-center justify-center">
<div
className="absolute inset-0 bg-cover bg-center bg-no-repeat"
style={{
backgroundImage: "url('https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=1920&h=800&fit=crop')"
}}
>
<div className="absolute inset-0 bg-black/50"></div>
</div>

<div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">  
      <h1 className="text-5xl font-light mb-4">Our Story</h1>  
      <p className="text-xl font-light">Where luxury meets hospitality</p>  
    </div>  
  </section>  

  {/* Main Story */}  
  <section className="py-20 bg-luxury-cream">  
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">  
      <div className="max-w-4xl mx-auto">  
        <div className="text-center mb-16">  
          <h2 className="text-4xl font-light text-luxury-charcoal mb-6">Welcome to Sweet Bargain Hotel</h2>  
          <p className="text-xl text-gray-600 leading-relaxed">  
            Founded in 2008 with a vision to redefine luxury hospitality, Sweet Bargain Hotel has become   
            a beacon of excellence in the heart of the city. Our journey began with a simple belief:   
            that every guest deserves an extraordinary experience that goes beyond mere accommodation.  
          </p>  
        </div>  

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">  
          <div>  
            <img   
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop"   
              alt="Hotel interior"  
              className="w-full h-80 object-cover rounded-lg luxury-shadow"  
            />  
          </div>  
          <div className="space-y-6">  
            <h3 className="text-3xl font-light text-luxury-charcoal">Our Heritage</h3>  
            <p className="text-gray-600 leading-relaxed">  
              What started as a boutique hotel with 20 rooms has grown into a luxury destination   
              featuring 150 meticulously designed accommodations. Each room tells a story of   
              craftsmanship, attention to detail, and unwavering commitment to guest satisfaction.  
            </p>  
            <p className="text-gray-600 leading-relaxed">  
              Our architectural design seamlessly blends contemporary elegance with timeless   
              sophistication, creating spaces that inspire and rejuvenate. From our marble-clad   
              lobby to our rooftop infinity pool, every corner of our hotel reflects our   
              dedication to luxury.  
            </p>  
          </div>  
        </div>  

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">  
          <div className="order-2 md:order-1 space-y-6">  
            <h3 className="text-3xl font-light text-luxury-charcoal">Our Mission</h3>  
            <p className="text-gray-600 leading-relaxed">  
              We exist to create moments that matter. Whether you're traveling for business,   
              celebrating a special occasion, or simply seeking a retreat from the ordinary,   
              our team is dedicated to curating experiences that exceed your expectations.  
            </p>  
            <p className="text-gray-600 leading-relaxed">  
              Our award-winning restaurant, world-class spa, and personalized concierge services   
              are all designed with one goal in mind: to make your stay not just comfortable,   
              but truly unforgettable.  
            </p>  
          </div>  
          <div className="order-1 md:order-2">  
            <img   
              src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop"   
              alt="Hotel service"  
              className="w-full h-80 object-cover rounded-lg luxury-shadow"  
            />  
          </div>  
        </div>  
      </div>  
    </div>  
  </section>  

  {/* Statistics */}  
  <section className="py-20">  
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">  
      <div className="text-center mb-16">  
        <h2 className="text-4xl font-light text-luxury-charcoal mb-4">Our Achievements</h2>  
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">  
          Numbers that reflect our commitment to excellence and guest satisfaction  
        </p>  
      </div>  

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">  
        {stats.map((stat, index) => (  
          <Card key={index} className="text-center border-0 luxury-shadow hover-lift">  
            <CardContent className="p-8">  
              <div className="text-luxury-gold mb-4 flex justify-center">  
                {stat.icon}  
              </div>  
              <div className="text-4xl font-bold text-luxury-charcoal mb-2">{stat.number}</div>  
              <div className="text-gray-600 font-medium">{stat.label}</div>  
            </CardContent>  
          </Card>  
        ))}  
      </div>  
    </div>  
  </section>  

  {/* Values */}  
  <section className="py-20 bg-luxury-pearl">  
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">  
      <div className="text-center mb-16">  
        <h2 className="text-4xl font-light text-luxury-charcoal mb-4">Our Values</h2>  
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">  
          The principles that guide everything we do  
        </p>  
      </div>  

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">  
        {values.map((value, index) => (  
          <Card key={index} className="border-0 luxury-shadow hover-lift">  
            <CardContent className="p-8">  
              <h3 className="text-2xl font-semibold text-luxury-charcoal mb-4">{value.title}</h3>  
              <p className="text-gray-600 leading-relaxed">{value.description}</p>  
            </CardContent>  
          </Card>  
        ))}  
      </div>  
    </div>  
  </section>  

  {/* Location */}  
  <section className="py-20">  
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">  
      <div className="max-w-4xl mx-auto text-center">  
        <h2 className="text-4xl font-light text-luxury-charcoal mb-6">Prime Location</h2>  
        <p className="text-xl text-gray-600 mb-12">  
          Strategically located in the heart of downtown, Sweet Bargain Hotel offers easy access   
          to the city's finest attractions, business districts, and cultural landmarks. Whether   
          you're here for business or pleasure, everything you need is just moments away.  
        </p>  
          
        <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center luxury-shadow">  
          <div className="text-center text-gray-600">  
            <div className="text-4xl mb-2">🗺️</div>  
            <p className="text-lg font-medium">Interactive Map</p>  
            <p className="text-sm">123 Luxury Ave, Downtown</p>  
            <p className="text-sm">Prime Location in City Center</p>  
          </div>  
        </div>  
      </div>  
    </div>  
  </section>  
</div>

);
};

export default About;


