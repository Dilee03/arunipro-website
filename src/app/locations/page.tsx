import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const locations = [
  {
    name: "Scarborough Office",
    address: "70 Dikemans Road, Scarborough, ON M1R 4C2",
    landmark: "Near Parkway Mall",
    phone: "416-565-0101",
    email: "itax365@gmail.com",
    hours: "Monday - Friday: 9:00 AM - 7:00 PM<br/>Saturday: 10:00 AM - 4:00 PM<br/>Sunday: Closed",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.076940092619!2d-79.35725128428596!3d43.7303227791197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4ccf69caed4b7%3A0x3f47a6a7a0e4c1e0!2s70%20Dikemans%20Rd%2C%20Scarborough%2C%20ON%20M1R%204C2%2C%20Canada!5e0!3m2!1sen!2sus!4v1711234567890!5m2!1sen!2sus",
  },
  {
    name: "Downtown Eaton Centre Office",
    address: "126 Yonge St - Unit 2201, Toronto, ON H3B 5M6",
    landmark: "Yonge St and Dundas Square",
    phone: "416-565-4576",
    email: "itax365@gmail.com",
    hours: "Monday - Friday: 9:00 AM - 7:00 PM<br/>Saturday: 10:00 AM - 4:00 PM<br/>Sunday: Closed",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.076940092619!2d-79.35725128428596!3d43.7303227791197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4c8f2d5a8f4b5%3A0x7c7b9c8e0d8a3f2!2s126%20Yonge%20St%2C%20Toronto%2C%20ON%20M5C%201X1!5e0!3m2!1sen!2sus!4v1711234567891!5m2!1sen!2sus",
  },
];

export default function Locations() {
  return (
    <>
      <PageHeader
        title="Our Offices"
        description="Visit us at one of our convenient locations in Toronto."
        gradientText
      />
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {locations.map((location) => (
              <Card key={location.name} className="overflow-hidden">
                <div className="h-64 w-full">
                  <iframe
                    src={location.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${location.name} map`}
                  />
                </div>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-900">{location.name}</h2>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-5 w-5 text-secondary mt-0.5" />
                      <div>
                        <p>{location.address}</p>
                        {location.landmark && <p className="text-sm text-gray-500">{location.landmark}</p>}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-secondary" />
                      <a href={`tel:${location.phone}`} className="hover:text-primary">{location.phone}</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-secondary" />
                      <a href={`mailto:${location.email}`} className="hover:text-primary">{location.email}</a>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="h-5 w-5 text-secondary mt-0.5" />
                      <div dangerouslySetInnerHTML={{ __html: location.hours }} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}