export type Product = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  specification: string;
  image: string;
  imageAlt: string;
  status: "placeholder" | "verified";
};

export const products: Product[] = [
  {
    slug: "product-placeholder-01",
    name: "Retatrutide",
    category: "Category pending",
    summary:
      "A multi-receptor agonist peptide studied for metabolism, weight management, and energy balance.",
    specification: "",
    image: "/product/10001.webp",
    imageAlt: "Retatrutide research product vial",
    status: "placeholder"
  },
  {
    slug: "product-placeholder-02",
    name: "Tirzepatide",
    category: "Category pending",
    summary:
      "A dual-receptor agonist peptide used in research related to blood sugar regulation, appetite control, and weight management.",
    specification: "",
    image: "/product/10003.webp",
    imageAlt: "Tirzepatide research product vial",
    status: "placeholder"
  },
  {
    slug: "product-placeholder-03",
    name: "NAD+",
    category: "Category pending",
    summary:
      "An essential coenzyme involved in cellular energy production, repair processes, and healthy aging research.",
    specification: "",
    image: "/product/10004.webp",
    imageAlt: "NAD+ research product vial",
    status: "placeholder"
  },
  {
    slug: "product-placeholder-04",
    name: "GHK-Cu",
    category: "Category pending",
    summary:
      "A copper-binding peptide commonly studied for skin repair, collagen production, anti-aging, and hair health.",
    specification: "",
    image: "/product/10005.webp",
    imageAlt: "GHK-Cu research product vial",
    status: "placeholder"
  }
];
