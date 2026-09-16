import { site } from "@/data/site";
import { faqs } from "@/data/faqs";
import { services } from "@/data/services";
import { asset } from "@/lib/utils";

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: site.name,
  image: [asset("/work/front-curb.jpg"), asset("/work/backyard-turf.jpg"), asset("/work/paver-walk.jpg")],
  telephone: "+1-480-930-5833",
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.addressLine,
    addressLocality: site.city,
    addressRegion: site.state,
    postalCode: site.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.1706,
    longitude: -111.5724,
  },
  areaServed: [
    "San Tan Valley AZ",
    "Queen Creek AZ",
    "Florence AZ",
    "Apache Junction AZ",
    "Gilbert AZ",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "08:00",
      closes: "15:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.rating,
    reviewCount: site.reviewCount,
    bestRating: 5,
  },
  priceRange: "$$",
  founder: site.owners.map((name) => ({ "@type": "Person", name })),
  sameAs: [site.facebook, site.maps],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Landscaping and handyman services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, description: s.summary },
    })),
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
