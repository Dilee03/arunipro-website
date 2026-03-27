"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { servicesData } from "@/lib/constants/services";
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield, Clock, Users, Award } from "lucide-react";

export default function ServicesOverview() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  const stats = [
    { icon: Users, label: "Clients Served", value: "5,000+", bg: "bg-blue-500/10", color: "text-blue-600" },
    { icon: Shield, label: "Years Experience", value: "20+", bg: "bg-green-500/10", color: "text-green-600" },
    { icon: Clock, label: "Days a Year", value: "365", bg: "bg-orange-500/10", color: "text-orange-600" },
    { icon: Award, label: "Satisfaction Rate", value: "99%", bg: "bg-purple-500/10", color: "text-purple-600" },
  ];

  return (
    <>
      <PageHeader
        title="Our Services"
        description="We offer comprehensive tax and accounting solutions tailored to your unique needs."
        background="from-white to-blue-50/30"
        gradientText
      />

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={item} className="text-center">
                <div className={`mx-auto w-16 h-16 rounded-2xl ${stat.bg} flex items-center justify-center mb-4`}>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {servicesData.map((service) => (
              <motion.div key={service.slug} variants={item} whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 400 }}>
                <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="relative">
                      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <service.icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center text-primary font-medium group"
                      >
                        Learn more
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Arun iPro Services?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We combine expertise with a personal touch to deliver exceptional service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Experienced Professionals",
                description: "Over 20 years of experience in Canadian tax and accounting.",
                icon: Shield,
              },
              {
                title: "365 Days Service",
                description: "We're here for you year-round, not just during tax season.",
                icon: Clock,
              },
              {
                title: "Personalized Approach",
                description: "Tailored solutions that fit your unique financial situation.",
                icon: Users,
              },
            ].map((feature) => (
              <div key={feature.title} className="text-center p-6">
                <div className="mx-auto w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary-dark text-white">
              <Link href="/contact">Book a Free Consultation →</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}