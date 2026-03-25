import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Arun iPro Services
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        Tax preparation, accounting, and consulting services across all Canadian provinces.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Button asChild size="lg" className="bg-secondary hover:bg-secondary-dark">
          <Link href="/contact">Book Appointment</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/login">Client Login</Link>
        </Button>
      </div>
    </div>
  );
}