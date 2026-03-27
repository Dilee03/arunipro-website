"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Shield, Clock } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="absolute inset-0 bg-grid-gray-900/[0.02] bg-[size:50px_50px]" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Maximize Your Refund.{" "}
            <span className="text-secondary">Simplify Your Taxes.</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Expert tax preparation, accounting, and consulting services across all Canadian provinces. 
            We're here for you 365 days a year.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary-dark text-white shadow-lg">
              <Link href="/contact" className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Book Appointment
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services" className="flex items-center gap-2">
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-secondary" />
              <span>20+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-secondary" />
              <span>365 Days Service</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}