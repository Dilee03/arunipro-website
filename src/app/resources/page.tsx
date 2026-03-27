"use client";

import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Download, CheckCircle, Globe } from "lucide-react";

// Language options with display names and distinct styles
const languages = [
  { code: "en", label: "English", color: "bg-blue-100 text-blue-800 hover:bg-blue-200 border-blue-200" },
  { code: "es", label: "Spanish", color: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200 border-yellow-200" },
  { code: "fr", label: "French", color: "bg-purple-100 text-purple-800 hover:bg-purple-200 border-purple-200" },
];

// Resources data structure with language-specific file URLs
const resources = [
  {
    category: "Personal Tax",
    items: [
      {
        name: "Client Data Sheet",
        description: "Saveable & fillable client data sheet to collect all your tax information.",
        files: {
          en: "#",
          es: "#",
          fr: "#",
        },
        isFillable: true,
      },
      {
        name: "Personal Tax Checklist",
        description: "Complete checklist for filing personal taxes.",
        files: {
          en: "#",
          es: "#",
          fr: "#",
        },
        isFillable: true,
      },
      {
        name: "Personal Income Statement",
        description: "Template to track your income.",
        files: {
          en: "#",
          es: "#",
          fr: "#",
        },
        isFillable: true,
      },
      {
        name: "Personal Expense Statement",
        description: "Organize your expenses.",
        files: {
          en: "#",
          es: "#",
          fr: "#",
        },
        isFillable: true,
      },
      {
        name: "Home Renovation Checklist",
        description: "Track eligible home renovation expenses.",
        files: {
          en: "#",
          es: "#",
          fr: "#",
        },
        isFillable: true,
      },
    ],
  },
  {
    category: "Business & Self-Employed",
    items: [
      {
        name: "Small Business Expense Statement",
        description: "Track business expenses.",
        files: {
          en: "#",
          es: "#",
          fr: "#",
        },
        isFillable: true,
      },
      {
        name: "Record Keeping Tips",
        description: "Best practices for business records.",
        files: {
          en: "#",
          es: "#",
          fr: "#",
        },
        isFillable: false,
      },
      {
        name: "Business Plan Template",
        description: "Plan your business growth.",
        files: {
          en: "#",
          es: "#",
          fr: "#",
        },
        isFillable: true,
      },
    ],
  },
  {
    category: "Rental Property",
    items: [
      {
        name: "Rental Property Expense Statement",
        description: "Track rental income and expenses.",
        files: {
          en: "#",
          es: "#",
          fr: "#",
        },
        isFillable: true,
      },
      {
        name: "Rental Receipt Sample",
        description: "Sample receipt for tenants.",
        files: {
          en: "#",
          es: "#",
          fr: "#",
        },
        isFillable: false,
      },
      {
        name: "Record Keeping Tips for Landlords",
        description: "Keep your rental records organized.",
        files: {
          en: "#",
          es: "#",
          fr: "#",
        },
        isFillable: false,
      },
    ],
  },
  {
    category: "Investment & Capital Gains",
    items: [
      {
        name: "Stock Market Investment Checklist",
        description: "Track your investments and trades.",
        files: {
          en: "#",
          es: "#",
          fr: "#",
        },
        isFillable: true,
      },
      {
        name: "Capital Gains/Losses Worksheet",
        description: "Calculate your capital gains and losses.",
        files: {
          en: "#",
          es: "#",
          fr: "#",
        },
        isFillable: true,
      },
    ],
  },
];

export default function Resources() {
  return (
    <>
      <PageHeader
        title="Resources & Forms"
        description="Download essential forms, checklists, and templates in English, Spanish, or French."
        gradientText
      />

      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {resources.map((category) => (
            <div key={category.category} className="mb-12 last:mb-0">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <Globe className="h-6 w-6 text-secondary" />
                {category.category}
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item) => (
                  <Card
                    key={item.name}
                    className="group hover:shadow-lg transition-all duration-300 border border-gray-100"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="rounded-lg bg-primary/10 p-2 text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                          <FileText className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{item.name}</h3>
                          <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                          {item.isFillable && (
                            <div className="mt-2 text-xs text-gray-400 flex items-center gap-1">
                              <CheckCircle className="h-3 w-3 text-green-500" />
                              <span>Fillable PDF</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Language download buttons */}
                      <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap gap-2">
                        {languages.map((lang) => (
                          <a
                            key={lang.code}
                            href={item.files[lang.code as keyof typeof item.files]}
                            className={`
                              inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium
                              transition-all duration-200 border
                              ${lang.color}
                              hover:shadow-md hover:-translate-y-0.5
                            `}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Download className="h-3.5 w-3.5" />
                            {lang.label}
                          </a>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}