// Central company config — edit values here or via Visual Edits
export const COMPANY = {
  name: "Khatir Real Estate & Builders",
  shortName: "KHATIR",
  tagline: "Real Estate & Construction Company",
  services: "Consultancy · Construction · Projects",
  address: "Office #17, Commercial Area, AWT Housing Scheme, Kohat Road, Peshawar",
  city: "Peshawar, Pakistan",
  founded: "2015",
  // Primary contacts
  contacts: [
    { name: "Ikhtiar Khatir", phone: "+92 301 8934165", phoneRaw: "+923018934165" },
    { name: "Badam Sher", phone: "+92 300 5898080", phoneRaw: "+923005898080" },
  ],
  email: "info@khatirrealestate.com",
  // Primary WhatsApp number for floating button (Ikhtiar)
  whatsapp: {
    number: "923018934165", // E.164 without + for wa.me
    defaultMessage:
      "Assalam-o-Alaikum! I'm interested in Khatir Real Estate & Builders. Please share more details.",
  },
  // Social links (placeholders — update via Visual Edits)
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    youtube: "https://youtube.com/",
    tiktok: "https://tiktok.com/",
    linkedin: "https://linkedin.com/",
  },
};

export const waLink = (message?: string) =>
  `https://wa.me/${COMPANY.whatsapp.number}?text=${encodeURIComponent(
    message || COMPANY.whatsapp.defaultMessage
  )}`;
