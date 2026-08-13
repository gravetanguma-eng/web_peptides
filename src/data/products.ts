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
    summary: "Verified product description and intended-use information required.",
    specification: "",
    image: "/product/10001.webp",
    imageAlt: "Retatrutide research product vial",
    status: "placeholder"
  },
  {
    slug: "product-placeholder-02",
    name: "Tizrepatide",
    category: "Category pending",
    summary: "Verified product description and intended-use information required.",
    specification: "",
    image: "/product/10003.webp",
    imageAlt: "Tirzepatide research product vial",
    status: "placeholder"
  },
  {
    slug: "product-placeholder-03",
    name: "NAD+",
    category: "Category pending",
    summary: "Verified product description and intended-use information required.",
    specification: "",
    image: "/product/10004.webp",
    imageAlt: "NAD+ research product vial",
    status: "placeholder"
  },
  {
    slug: "product-placeholder-04",
    name: "GHK-Cu",
    category: "Category pending",
    summary: "Verified product description and intended-use information required.",
    specification: "",
    image: "/product/10005.webp",
    imageAlt: "GHK-Cu research product vial",
    status: "placeholder"
  }
];
