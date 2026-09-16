import { asset } from "@/lib/utils";

export const gallery = [
  {
    src: asset("/work/front-curb.jpg"),
    alt: "Finished front yard with turf, plantings, and a clean driveway in San Tan Valley",
    title: "Front yard, finished",
    caption: "Turf, gravel, and a young tree — the curb look HOAs actually want.",
    area: "San Tan Valley",
  },
  {
    src: asset("/work/backyard-turf.jpg"),
    alt: "Backyard artificial turf rectangle with hedges and block wall",
    title: "A backyard people use",
    caption: "Turf, paver border, trimmed hedges. Shade and string lights after dark.",
    area: "East Valley",
  },
  {
    src: asset("/work/paver-walk.jpg"),
    alt: "Clay paver walkway beside a stucco home",
    title: "The side yard, finally",
    caption: "A paver walk that takes you from the gate to the patio without tracking gravel.",
    area: "San Tan Valley",
  },
  {
    src: asset("/work/front-plantings.jpg"),
    alt: "Lush shrubs and pink blooms along a sidewalk",
    title: "Plantings that fill in",
    caption: "Shape, color, and gravel that looks tended — not forgotten.",
    area: "San Tan Valley",
  },
  {
    src: asset("/work/front-trees.jpg"),
    alt: "Young trees and gravel landscaping against a stucco ranch house",
    title: "New-build, not barren",
    caption: "Trees, shrubs, and rock laid so the lot looks like someone lives there.",
    area: "San Tan Valley",
  },
] as const;
