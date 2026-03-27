import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary" />
                <span>416-565-0101 / 416-565-4576</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary" />
                <a href="mailto:itax365@gmail.com" className="hover:text-white">itax365@gmail.com</a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Locations</h3>
            <div className="mt-4 space-y-2">
              <div>
                <p className="font-medium">Scarborough</p>
                <p className="text-sm">70 Dikemans Road, Scarborough, ON M1R 4C2</p>
              </div>
              <div>
                <p className="font-medium">Downtown</p>
                <p className="text-sm">126 Yonge St - Unit 2201, Toronto, H3B 5M6</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-1 text-sm">
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/resources" className="hover:text-white">Resources</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/login" className="hover:text-white">Client Portal</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-xs">
          <p>Arun iPro Services. Copyright © {currentYear}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}