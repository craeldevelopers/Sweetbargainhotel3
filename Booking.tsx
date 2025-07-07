import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Users, MapPin } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

const Booking = () => {
const [checkIn, setCheckIn] = useState<Date>();
const [checkOut, setCheckOut] = useState<Date>();
const [formData, setFormData] = useState({
firstName: "",
lastName: "",
email: "",
phone: "",
roomType: "",
guests: "",
specialRequests: ""
});

const rooms = [
{ id: "standard", name: "Standard Room", price: 199 },
{ id: "deluxe", name: "Deluxe Suite", price: 349 },
{ id: "presidential", name: "Presidential Suite", price: 599 },
{ id: "executive", name: "Executive Room", price: 279 },
{ id: "family", name: "Family Suite", price: 399 },
{ id: "penthouse", name: "Penthouse Suite", price: 899 }
];

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
setFormData({
...formData,
[e.target.name]: e.target.value
});
};

const handleSelectChange = (name: string, value: string) => {
setFormData({
...formData,
[name]: value
});
};

const calculateNights = () => {
if (checkIn && checkOut) {
const timeDiff = checkOut.getTime() - checkIn.getTime();
return Math.ceil(timeDiff / (1000 * 3600 * 24));
}
return 0;
};

const calculateTotal = () => {
const selectedRoom = rooms.find(room => room.id === formData.roomType);
if (selectedRoom && checkIn && checkOut) {
const nights = calculateNights();
return selectedRoom.price * nights;
}
return 0;
};

const handleSubmit = (e: React.FormEvent) => {
e.preventDefault();

// Basic validation  
if (!checkIn || !checkOut || !formData.firstName || !formData.lastName || !formData.email || !formData.roomType) {  
  toast({  
    title: "Missing Information",  
    description: "Please fill in all required fields.",  
    variant: "destructive"  
  });  
  return;  
}  

// Save booking to localStorage (mock persistence)  
const booking = {  
  id: Date.now().toString(),  
  ...formData,  
  checkIn: checkIn.toISOString(),  
  checkOut: checkOut.toISOString(),  
  nights: calculateNights(),  
  total: calculateTotal(),  
  status: "confirmed",  
  bookingDate: new Date().toISOString()  
};  

const existingBookings = JSON.parse(localStorage.getItem('bookings') || '[]');  
existingBookings.push(booking);  
localStorage.setItem('bookings', JSON.stringify(existingBookings));  

toast({  
  title: "Booking Confirmed!",  
  description: `Your reservation has been confirmed. Booking ID: ${booking.id}`,  
});  

// Reset form  
setFormData({  
  firstName: "",  
  lastName: "",  
  email: "",  
  phone: "",  
  roomType: "",  
  guests: "",  
  specialRequests: ""  
});  
setCheckIn(undefined);  
setCheckOut(undefined);

};

return (
<div className="min-h-screen bg-luxury-cream py-12">
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h1 className="text-4xl font-light text-luxury-charcoal mb-4">Book Your Stay</h1>
<p className="text-xl text-gray-600">Complete your reservation in just a few steps</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">  
      {/* Booking Form */}  
      <div className="lg:col-span-2">  
        <Card className="border-0 luxury-shadow">  
          <CardHeader>  
            <CardTitle className="text-2xl font-light text-luxury-charcoal">Reservation Details</CardTitle>  
          </CardHeader>  
          <CardContent className="p-6">  
            <form onSubmit={handleSubmit} className="space-y-6">  
              {/* Check-in/Check-out */}  
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">  
                <div className="space-y-2">  
                  <Label htmlFor="checkin">Check-in Date *</Label>  
                  <Popover>  
                    <PopoverTrigger asChild>  
                      <Button  
                        variant="outline"  
                        className={cn(  
                          "w-full pl-3 text-left font-normal",  
                          !checkIn && "text-muted-foreground"  
                        )}  
                      >  
                        {checkIn ? format(checkIn, "PPP") : <span>Pick a date</span>}  
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />  
                      </Button>  
                    </PopoverTrigger>  
                    <PopoverContent className="w-auto p-0" align="start">  
                      <Calendar  
                        mode="single"  
                        selected={checkIn}  
                        onSelect={setCheckIn}  
                        disabled={(date) => date < new Date()}  
                        initialFocus  
                        className="pointer-events-auto"  
                      />  
                    </PopoverContent>  
                  </Popover>  
                </div>  

                <div className="space-y-2">  
                  <Label htmlFor="checkout">Check-out Date *</Label>  
                  <Popover>  
                    <PopoverTrigger asChild>  
                      <Button  
                        variant="outline"  
                        className={cn(  
                          "w-full pl-3 text-left font-normal",  
                          !checkOut && "text-muted-foreground"  
                        )}  
                      >  
                        {checkOut ? format(checkOut, "PPP") : <span>Pick a date</span>}  
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />  
                      </Button>  
                    </PopoverTrigger>  
                    <PopoverContent className="w-auto p-0" align="start">  
                      <Calendar  
                        mode="single"  
                        selected={checkOut}  
                        onSelect={setCheckOut}  
                        disabled={(date) => date <= (checkIn || new Date())}  
                        initialFocus  
                        className="pointer-events-auto"  
                      />  
                    </PopoverContent>  
                  </Popover>  
                </div>  
              </div>  

              {/* Room Selection */}  
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">  
                <div className="space-y-2">  
                  <Label htmlFor="roomType">Room Type *</Label>  
                  <Select onValueChange={(value) => handleSelectChange("roomType", value)}>  
                    <SelectTrigger>  
                      <SelectValue placeholder="Select a room" />  
                    </SelectTrigger>  
                    <SelectContent>  
                      {rooms.map((room) => (  
                        <SelectItem key={room.id} value={room.id}>  
                          {room.name} - ${room.price}/night  
                        </SelectItem>  
                      ))}  
                    </SelectContent>  
                  </Select>  
                </div>  

                <div className="space-y-2">  
                  <Label htmlFor="guests">Number of Guests *</Label>  
                  <Select onValueChange={(value) => handleSelectChange("guests", value)}>  
                    <SelectTrigger>  
                      <SelectValue placeholder="Select guests" />  
                    </SelectTrigger>  
                    <SelectContent>  
                      <SelectItem value="1">1 Guest</SelectItem>  
                      <SelectItem value="2">2 Guests</SelectItem>  
                      <SelectItem value="3">3 Guests</SelectItem>  
                      <SelectItem value="4">4 Guests</SelectItem>  
                      <SelectItem value="5+">5+ Guests</SelectItem>  
                    </SelectContent>  
                  </Select>  
                </div>  
              </div>  

              {/* Guest Information */}  
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">  
                <div className="space-y-2">  
                  <Label htmlFor="firstName">First Name *</Label>  
                  <Input  
                    id="firstName"  
                    name="firstName"  
                    value={formData.firstName}  
                    onChange={handleInputChange}  
                    placeholder="Enter first name"  
                    required  
                  />  
                </div>  

                <div className="space-y-2">  
                  <Label htmlFor="lastName">Last Name *</Label>  
                  <Input  
                    id="lastName"  
                    name="lastName"  
                    value={formData.lastName}  
                    onChange={handleInputChange}  
                    placeholder="Enter last name"  
                    required  
                  />  
                </div>  
              </div>  

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">  
                <div className="space-y-2">  
                  <Label htmlFor="email">Email Address *</Label>  
                  <Input  
                    id="email"  
                    name="email"  
                    type="email"  
                    value={formData.email}  
                    onChange={handleInputChange}  
                    placeholder="Enter email address"  
                    required  
                  />  
                </div>  

                <div className="space-y-2">  
                  <Label htmlFor="phone">Phone Number</Label>  
                  <Input  
                    id="phone"  
                    name="phone"  
                    type="tel"  
                    value={formData.phone}  
                    onChange={handleInputChange}  
                    placeholder="Enter phone number"  
                  />  
                </div>  
              </div>  

              {/* Special Requests */}  
              <div className="space-y-2">  
                <Label htmlFor="specialRequests">Special Requests</Label>  
                <textarea  
                  id="specialRequests"  
                  name="specialRequests"  
                  value={formData.specialRequests}  
                  onChange={handleInputChange}  
                  className="w-full p-3 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-luxury-gold focus:border-transparent"  
                  rows={4}  
                  placeholder="Any special requests or requirements..."  
                />  
              </div>  

              <Button   
                type="submit"   
                className="w-full bg-luxury-gold hover:bg-luxury-gold/90 text-white py-3 text-lg"  
              >  
                Confirm Booking  
              </Button>  
            </form>  
          </CardContent>  
        </Card>  
      </div>  

      {/* Booking Summary */}  
      <div className="lg:col-span-1">  
        <Card className="border-0 luxury-shadow sticky top-24">  
          <CardHeader>  
            <CardTitle className="text-xl font-light text-luxury-charcoal">Booking Summary</CardTitle>  
          </CardHeader>  
          <CardContent className="p-6">  
            <div className="space-y-4">  
              {/* Hotel Info */}  
              <div className="flex items-start space-x-3">  
                <MapPin className="w-5 h-5 text-luxury-gold mt-1" />  
                <div>  
                  <h3 className="font-semibold text-luxury-charcoal">Sweet Bargain Hotel</h3>  
                  <p className="text-sm text-gray-600">123 Luxury Ave, Downtown</p>  
                </div>  
              </div>  

              <hr className="border-gray-200" />  

              {/* Dates */}  
              {checkIn && checkOut && (  
                <div>  
                  <div className="flex justify-between items-center mb-2">  
                    <span className="text-sm font-medium text-luxury-charcoal">Check-in</span>  
                    <span className="text-sm text-gray-600">{format(checkIn, "MMM dd, yyyy")}</span>  
                  </div>  
                  <div className="flex justify-between items-center mb-2">  
                    <span className="text-sm font-medium text-luxury-charcoal">Check-out</span>  
                    <span className="text-sm text-gray-600">{format(checkOut, "MMM dd, yyyy")}</span>  
                  </div>  
                  <div className="flex justify-between items-center">  
                    <span className="text-sm font-medium text-luxury-charcoal">Duration</span>  
                    <span className="text-sm text-gray-600">{calculateNights()} night(s)</span>  
                  </div>  
                </div>  
              )}  

              {/* Room & Guests */}  
              {formData.roomType && (  
                <div>  
                  <div className="flex justify-between items-center mb-2">  
                    <span className="text-sm font-medium text-luxury-charcoal">Room</span>  
                    <span className="text-sm text-gray-600">  
                      {rooms.find(r => r.id === formData.roomType)?.name}  
                    </span>  
                  </div>  
                  {formData.guests && (  
                    <div className="flex justify-between items-center">  
                      <span className="text-sm font-medium text-luxury-charcoal">Guests</span>  
                      <span className="text-sm text-gray-600 flex items-center">  
                        <Users className="w-4 h-4 mr-1" />  
                        {formData.guests}  
                      </span>  
                    </div>  
                  )}  
                </div>  
              )}  

              <hr className="border-gray-200" />  

              {/* Total */}  
              {calculateTotal() > 0 && (  
                <div>  
                  <div className="flex justify-between items-center text-lg font-semibold text-luxury-charcoal">  
                    <span>Total</span>  
                    <span className="text-luxury-gold">${calculateTotal()}</span>  
                  </div>  
                  <p className="text-xs text-gray-500 mt-1">  
                    Includes taxes and fees  
                  </p>  
                </div>  
              )}  

              {/* Policies */}  
              <div className="mt-6 pt-4 border-t border-gray-200">  
                <h4 className="font-semibold text-luxury-charcoal mb-2 text-sm">Booking Policies</h4>  
                <ul className="space-y-1 text-xs text-gray-600">  
                  <li>• Free cancellation up to 24 hours before check-in</li>  
                  <li>• No booking or credit card fees</li>  
                  <li>• Instant confirmation</li>  
                  <li>• Check-in: 3:00 PM | Check-out: 11:00 AM</li>  
                </ul>  
              </div>  
            </div>  
          </CardContent>  
        </Card>  
      </div>  
    </div>  
  </div>  
</div>

);
};

export default Booking;


