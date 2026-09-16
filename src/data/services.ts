import { asset } from "@/lib/utils";

export type Service = {
  slug: string;
  title: string;
  navLabel: string;
  eyebrow: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  bullets: string[];
  seoTitle: string;
  seoDescription: string;
};

export const services: Service[] = [
  {
    slug: "landscape-maintenance",
    title: "Landscape maintenance",
    navLabel: "Maintenance",
    eyebrow: "Weekly & biweekly",
    summary:
      "The crew your street already knows. Trimming, weeding, debris haul-off, and a yard that stays HOA-clean.",
    description:
      "Most San Tan Valley lots don’t fail from a lack of plants — they fail from weeks of dust, monsoon drop, and weeds coming up through the gravel. K&O runs reliable weekly and biweekly maintenance so the front looks finished on a Tuesday, not just the day after a big job. We trim and shape, knock down weeds, blow off hardscape, and haul the debris. Neighbors on the same street often share a route, which is why the work stays consistent and the price stays fair.",
    image: asset("/work/front-plantings.jpg"),
    imageAlt: "Trimmed shrubs, gravel beds, and pink blooms along a San Tan Valley sidewalk",
    bullets: [
      "Shrub trim and shape that looks intentional, not scalped",
      "Weed control and pre-emergent in gravel and beds",
      "Blow-off of drives, walks, and patios",
      "Debris hauled — we do not leave piles at the curb",
      "Drip lines and sprinklers checked while we’re on site",
    ],
    seoTitle: "Landscape Maintenance in San Tan Valley, AZ | K&O Landscaping",
    seoDescription:
      "Weekly and biweekly landscape maintenance in San Tan Valley and Queen Creek. Trimming, weeds, debris haul-off, and HOA-ready curb appeal. Call (480) 930-5833.",
  },
  {
    slug: "artificial-turf",
    title: "Artificial turf",
    navLabel: "Turf",
    eyebrow: "Low-water yards",
    summary:
      "A green rectangle that survives July. Proper base, clean edges, and turf that doesn’t look like a putting-green sticker.",
    description:
      "East Valley summers punish real grass. A well-built turf yard is the difference between a dust lot and a backyard people actually use. We install residential turf with a compacted base, clean paver or concrete borders, and seams you shouldn’t notice from the patio. Front yards, rear rectangles, and play areas — built to drain, stay cool enough to walk, and look right against Arizona stucco and gravel.",
    image: asset("/work/backyard-turf.jpg"),
    imageAlt: "Rectangular artificial turf lawn with paver border and hedges in a San Tan Valley backyard",
    bullets: [
      "Residential turf for front yards, backyards, and play areas",
      "Compacted base and drainage so it doesn’t puddle",
      "Paver or concrete borders that keep the edge true",
      "Seams hidden and infill finished for a natural lie",
      "Pairs cleanly with gravel, hedges, and block walls",
    ],
    seoTitle: "Artificial Turf Installation in San Tan Valley, AZ | K&O",
    seoDescription:
      "Artificial turf installation for San Tan Valley and Queen Creek homes. Proper base, clean borders, low-water yards that stay green in the desert heat.",
  },
  {
    slug: "pavers-hardscape",
    title: "Pavers & hardscape",
    navLabel: "Pavers",
    eyebrow: "Patios, walks, pads",
    summary:
      "Side yards that were wasted space, now a place to sit. Walkways, pads, and patio work that matches the house.",
    description:
      "A lot of East Valley homes have a side yard that does nothing. A paver walk or a sitting pad changes how you use the property — especially in the evening, when the block wall holds the heat and the lights come on. We set clay and concrete pavers on a proper base so they don’t rock the first monsoon. Walkways along the house, patio extensions, and small gathering pads are the jobs we get called back for.",
    image: asset("/work/paver-walk.jpg"),
    imageAlt: "Clay paver walkway along a stucco home with gravel beds in San Tan Valley",
    bullets: [
      "Paver walkways, side-yard pads, and patio work",
      "Proper base so pavers don’t heave or rock",
      "Color and pattern chosen to match existing hardscape",
      "Clean gravel transitions — no leftover dirt rings",
      "Built for Arizona sun, monsoon, and daily foot traffic",
    ],
    seoTitle: "Paver Walkways & Hardscape in San Tan Valley | K&O Landscaping",
    seoDescription:
      "Paver walkways, side-yard pads, and hardscape in San Tan Valley, AZ. Proper base, clean edges, and outdoor space you will actually use.",
  },
  {
    slug: "irrigation-repair",
    title: "Irrigation repair",
    navLabel: "Irrigation",
    eyebrow: "Leaks, drip, timers",
    summary:
      "The leak you called about at 3. The fix that showed up at 4. Drip lines, broken heads, and timers that actually run.",
    description:
      "Irrigation is the quiet reason desert landscaping lives or dies. A broken head, a split drip line, a timer that never kicked on — that’s how a $4,000 front yard turns gray in two weeks. K&O is known in the East Valley for showing up fast on irrigation calls, pulling parts off the truck, and finishing the repair on the spot when we can. We also check lines during regular maintenance so small leaks don’t become dead zones.",
    image: asset("/work/front-plantings.jpg"),
    imageAlt: "Maintained planting bed in a San Tan Valley front yard",
    bullets: [
      "Broken heads, split drip, and valve issues",
      "Timer and zone checks so plants actually get water",
      "Same-day or next-day response on many leak calls",
      "Parts on the truck for common East Valley systems",
      "Walkthrough so you know what failed and why",
    ],
    seoTitle: "Irrigation Repair in San Tan Valley, AZ | Same-Day Leaks",
    seoDescription:
      "Irrigation and drip repair in San Tan Valley and Queen Creek. Broken heads, leaks, timers. Fast response — call or text (480) 930-5833.",
  },
  {
    slug: "yard-cleanup",
    title: "Yard cleanup & hauling",
    navLabel: "Cleanup",
    eyebrow: "One-time resets",
    summary:
      "Overgrown, monsoon-trashed, or just ignored. We cut it back, haul it out, and leave the lot walkable.",
    description:
      "The one-time cleanup is how a lot of neighbors find us. A yard that got away from the last crew. A monsoon that filled the rock with branches. A garage and backyard that collected junk until it was easier not to look. We cut, pull, haul, and leave it clean — not “stacked by the gate for you to deal with.” After a reset, many homeowners put the same crew on a biweekly route so it never gets back there.",
    image: asset("/work/front-trees.jpg"),
    imageAlt: "Cleaned and planted front yard with gravel and young trees in San Tan Valley",
    bullets: [
      "Full front and back cleanups",
      "Weed, brush, and cactus removal",
      "Junk and debris hauled to the dump",
      "Monsoon drop and storm reset",
      "Ready for maintenance, turf, or new plantings after",
    ],
    seoTitle: "Yard Cleanup & Junk Hauling in San Tan Valley | K&O",
    seoDescription:
      "Yard cleanup, brush removal, and junk hauling in San Tan Valley, AZ. We cut it back, haul it out, and leave the property clean.",
  },
  {
    slug: "handyman",
    title: "Handyman services",
    navLabel: "Handyman",
    eyebrow: "The other list",
    summary:
      "Painting, small repairs, and the indoor jobs that never make the contractor’s calendar. Same crew. Same standard.",
    description:
      "Joel and Alberto’s crew comes from landscaping and construction/remodeling — which is why neighbors ask us to stay after the yard is done. Painting, small interior fixes, lighting, and the punch-list work around a house. We are a local handyman and landscape company, not a general contractor for large remodels. If the job is a good fit, we quote it clearly. If it isn’t, we say so.",
    image: asset("/work/front-curb.jpg"),
    imageAlt: "San Tan Valley home exterior after landscaping and property care",
    bullets: [
      "Interior and exterior painting",
      "Small home repairs and punch-list work",
      "Lighting and simple fixture installs",
      "The jobs that sit on the refrigerator list for months",
      "Honest quote — we won’t take work we shouldn’t",
    ],
    seoTitle: "Handyman Services in San Tan Valley, AZ | K&O",
    seoDescription:
      "Local handyman services in San Tan Valley and the East Valley. Painting, small repairs, and punch-list work from the same family crew that does your yard.",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
