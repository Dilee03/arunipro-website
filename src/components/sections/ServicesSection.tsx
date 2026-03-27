"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Building2, GraduationCap, Briefcase, ArrowRight, Sparkles } from "lucide-react";

const services = [
  {
    title: "Personal Tax",
    description: "Individual income tax, rental property, capital gains, and more.",
    icon: Users,
    href: "/services/personal-tax",
    gradient: "from-blue-500/10 to-cyan-500/10",
    iconBg: "bg-blue-500/20 text-blue-600",
    hoverIconBg: "group-hover:bg-blue-500 group-hover:text-white",
  },
  {
    title: "Corporate Tax",
    description: "Incorporation, GST/PST returns, payroll services, and bookkeeping.",
    icon: Building2,
    href: "/services/corporate-tax",
    gradient: "from-purple-500/10 to-pink-500/10",
    iconBg: "bg-purple-500/20 text-purple-600",
    hoverIconBg: "group-hover:bg-purple-500 group-hover:text-white",
  },
  {
    title: "International Students",
    description: "Tax refunds, GST/HST credits, and career advice for students.",
    icon: GraduationCap,
    href: "/services/international-students",
    gradient: "from-green-500/10 to-emerald-500/10",
    iconBg: "bg-green-500/20 text-green-600",
    hoverIconBg: "group-hover:bg-green-500 group-hover:text-white",
  },
  {
    title: "Small Business",
    description: "Self-employed, commission income, partnership returns, and more.",
    icon: Briefcase,
    href: "/services/small-business",
    gradient: "from-orange-500/10 to-red-500/10",
    iconBg: "bg-orange-500/20 text-orange-600",
    hoverIconBg: "group-hover:bg-orange-500 group-hover:text-white",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export function ServicesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-4">
              <Sparkles className="h-4 w-4" />
              <span>Expert Solutions</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Tax & Accounting Services
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Whether you're an individual, a business owner, or an international student,
              we have the expertise to meet your needs.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Link href={service.href} className="block h-full group">
                <div className="relative h-full rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl border border-gray-100 hover:border-gray-200 overflow-hidden">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Icon */}
                  <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center ${service.iconBg} ${service.hoverIconBg} transition-all duration-300 mb-6 group-hover:scale-110`}>
                    <service.icon className="h-8 w-8" />
                  </div>

                  <h3 className="relative text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="relative text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="relative inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Optional CTA below services */}
        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-primary hover:text-secondary font-semibold transition-colors"
          >
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}