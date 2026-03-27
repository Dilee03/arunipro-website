"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  background?: string;      // Tailwind gradient classes (e.g., "from-white to-gray-50")
  pattern?: boolean;        // Show subtle pattern overlay
  centered?: boolean;       // Center text (default true)
  icon?: ReactNode;         // Optional icon above title
  gradientText?: boolean;   // Apply gradient to title
  reducedPadding?: boolean; // Use even smaller padding (default false)
}

export function PageHeader({
  title,
  description,
  background = "from-white to-gray-100",
  pattern = true,
  centered = true,
  icon,
  gradientText = false,
  reducedPadding = false,
}: PageHeaderProps) {
  const textAlign = centered ? "text-center" : "text-left";
  const containerClasses = centered ? "items-center" : "items-start";
  const paddingY = reducedPadding ? "py-8 md:py-12" : "py-12 md:py-16";

  return (
    <section className={`relative overflow-hidden bg-gradient-to-b ${background} ${paddingY}`}>
      {/* Subtle pattern overlay */}
      {pattern && (
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        />
      )}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`flex flex-col ${containerClasses} ${textAlign}`}>
          {icon && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="mb-3 inline-flex"
            >
              {icon}
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`
              text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl
              ${gradientText ? "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" : "text-gray-900"}
            `}
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`mt-3 text-base text-gray-600 max-w-2xl ${centered ? "mx-auto" : "ml-0"}`}
            >
              {description}
            </motion.p>
          )}

          {/* Decorative element for centered mode */}
          {centered && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 h-0.5 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-full mx-auto"
            />
          )}

          {!centered && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 h-0.5 bg-primary rounded-full"
            />
          )}
        </div>
      </div>
    </section>
  );
}