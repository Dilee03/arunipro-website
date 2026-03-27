import { Phone, Mail } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export function TopBar() {
  return (
    <div className="bg-primary text-white text-sm py-2">
      <div className="mx-auto max-w-7xl px-6 flex justify-between items-center gap-2 flex-wrap">
        <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
          <a href="tel:+14165650101" className="flex items-center gap-1 hover:text-secondary transition whitespace-nowrap">
            <Phone className="h-3.5 w-3.5" />
            <span>416-565-0101</span>
          </a>
          <span className="text-white/30 hidden sm:inline">|</span>
          <a href="tel:+14165654576" className="flex items-center gap-1 hover:text-secondary transition whitespace-nowrap hidden sm:flex">
            <Phone className="h-3.5 w-3.5" />
            <span>416-565-4576</span>
          </a>
          <span className="text-white/30 hidden sm:inline">|</span>
          <a href="mailto:itax365@gmail.com" className="hidden sm:flex items-center gap-1 hover:text-secondary transition whitespace-nowrap">
            <Mail className="h-3.5 w-3.5" />
            <span>itax365@gmail.com</span>
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" aria-label="Facebook" className="hover:text-secondary transition">
            <FaFacebook className="h-4 w-4" />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-secondary transition">
            <FaTwitter className="h-4 w-4" />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-secondary transition">
            <FaLinkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}