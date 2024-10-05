import Image from 'next/image';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Professional Power Washing Services</h1>
        <p className="text-xl mb-8">Transform your property with our expert cleaning solutions</p>
        <Button size="lg">Get a Quote</Button>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Residential', 'Commercial', 'Deck & Fence'].map((service) => (
            <Card key={service}>
              <CardHeader>
                <CardTitle>{service}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Professional power washing for your {service.toLowerCase()} needs.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-8 text-center">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { name: 'John D.', text: 'Excellent service! My driveway looks brand new.' },
            { name: 'Sarah M.', text: 'Professional team and outstanding results. Highly recommended!' },
          ].map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <p className="mb-4">"{testimonial.text}"</p>
                <p className="font-semibold">- {testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Sign Up Calendar Section */}
      <section className="py-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Book Your Service</h2>
        <div className="flex justify-center">
          <Calendar
            mode="single"
            className="rounded-md border"
          />
        </div>
        <div className="mt-8 text-center">
          <Button size="lg">Schedule Now</Button>
        </div>
      </section>
    </div>
  );
}