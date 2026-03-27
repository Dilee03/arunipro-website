"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-primary to-primary-dark text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Contact us today to schedule an appointment or learn more about our services.
              We're here to help you navigate your taxes with confidence.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-6 w-6 text-secondary" />
                <span>416-565-0101 / 416-565-4576</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-secondary" />
                <span>itax365@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-secondary mt-0.5" />
                <div>
                  <p><strong>Scarborough:</strong> 70 Dikemans Road, Scarborough, ON M1R 4C2</p>
                  <p><strong>Downtown:</strong> 126 Yonge St - Unit 2201, Toronto, H3B 5M6</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary-dark text-white">
                <Link href="/contact">Book Appointment →</Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.076940092619!2d-79.35725128428596!3d43.7303227791197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4ccf69caed4b7%3A0x3f47a6a7a0e4c1e0!2s70%20Dikemans%20Rd%2C%20Scarborough%2C%20ON%20M1R%204C2%2C%20Canada!5e0!3m2!1sen!2sus!4v1711234567890!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Scarborough office location"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}