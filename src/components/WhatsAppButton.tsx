import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/company";

const WhatsAppButton = () => {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-4 text-white shadow-architectural transition-transform duration-300 hover:scale-105 hover:shadow-gold"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden sm:inline text-sm font-medium tracking-wide">
        Chat on WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
