export const site = {
  name: "K&O Landscaping & Handyman Services LLC",
  shortName: "K&O Landscaping",
  tagline: "The yard you wanted when you bought the house.",
  phone: "(480) 930-5833",
  phoneHref: "tel:+14809305833",
  smsHref: "sms:+14809305833",
  email: "kolandscapinghandymanllc@gmail.com",
  emailHref: "mailto:kolandscapinghandymanllc@gmail.com",
  facebook:
    "https://www.facebook.com/people/KO-Landscaping-Handyman-Services-LLC/61554964804781/",
  maps: "https://maps.google.com/?cid=7094902542892105654",
  addressLine: "N Gantzel Rd",
  city: "San Tan Valley",
  state: "AZ",
  zip: "85143",
  region: "East Valley",
  rating: 4.9,
  reviewCount: 400,
  bbb: "A+",
  founded: 2023,
  experienceYears: 15,
  owners: ["Joel Delgado", "Alberto Marquez"],
  hours: [
    { days: "Monday – Friday", short: "Mon–Fri", open: "8:00 AM", close: "6:00 PM", openH: 8, closeH: 18 },
    { days: "Saturday", short: "Sat", open: "8:00 AM", close: "5:00 PM", openH: 8, closeH: 17 },
    { days: "Sunday", short: "Sun", open: "8:00 AM", close: "3:00 PM", openH: 8, closeH: 15 },
  ],
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/areas", label: "Areas" },
  { href: "/contact", label: "Contact" },
] as const;
