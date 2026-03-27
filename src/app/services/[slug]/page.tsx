import { notFound } from "next/navigation";
import { servicesData } from "@/lib/constants/services";
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  return servicesData.map((service) => ({ slug: service.slug }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const Icon = service.icon;

  return (
    <>
      <PageHeader
        title={service.title}
        description={service.longDescription}
        background="from-white to-blue-50/30"
      />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">Who It's For</h2>
                <p className="mt-2 text-gray-600">{service.whoIsItFor}</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">Documents You'll Need</h2>
                <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {service.documents.map((doc) => (
                    <li key={doc} className="flex items-center gap-2 text-gray-600">
                      <CheckCircle2 className="h-5 w-5 text-secondary" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">Benefits</h2>
                <ul className="mt-4 space-y-2">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-gray-600">
                      <CheckCircle2 className="h-5 w-5 text-secondary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-4 mx-auto">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-center text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center text-sm mb-6">
                    Let us handle your taxes so you can focus on what matters.
                  </p>
                  <Button asChild className="w-full bg-secondary hover:bg-secondary-dark text-white">
                    <Link href={service.ctaLink}>
                      {service.ctaText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}