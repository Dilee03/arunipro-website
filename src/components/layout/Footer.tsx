import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-gray-900">Contact</h3>
            <p className="mt-2 text-sm text-gray-600">
              Tel: 416-565-0101 / 416-565-4576
              <br />
              Email: itax365@gmail.com
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-6 text-gray-900">Locations</h3>
            <p className="mt-2 text-sm text-gray-600">
              <strong>Scarborough:</strong> 70 Dikemans Road, Scarborough, ON M1R 4C2
              <br />
              <strong>Downtown:</strong> 126 Yonge St - Unit 2201, Toronto, H3B 5M6
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-6 text-gray-900">Quick Links</h3>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li><Link href="/services" className="hover:text-primary">Services</Link></li>
              <li><Link href="/resources" className="hover:text-primary">Resources</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-xs text-gray-500">
          <p>Arun iPro Services. Copyright © {currentYear}</p>
        </div>
      </div>
    </footer>
  );
}