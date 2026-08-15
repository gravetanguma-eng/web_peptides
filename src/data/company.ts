export type CompanyMetric = {
  label: string;
  value: number | null;
  prefix?: string;
  suffix: string;
  placeholder: string;
};

export type QualityStandard = {
  name: string;
  description: string;
  status: "pending" | "verified";
};

export const company = {
  name: "PEPTINOVA",
  legalName: "",
  descriptor: "Peptide Manufacturing",
  logo: {
    src: "/media/peptinova-logo-transparent.png",
    alt: "PEPTINOVA"
  },
  tagline: "Precision for every peptide program.",
  introduction:
    "A focused manufacturing partner for international research, development and procurement teams.",
  about:
    "We bring technical requirements, manufacturing planning and quality documentation into one clear conversation. Final company claims will be published only after verification.",
  companyStatement:
    "Peptide manufacturing, shaped around precision and clear collaboration.",
  whatsappNumber: "447848436280",
  whatsappMessage:
    "Hello, I would like to know more information.",
  email: "one441119@gmail.com",
  address: "",
  canonicalUrl: "https://example.com",
  researchUseNotice: "Product use statement pending legal and regulatory review.",
  hero: {
    image: "/media/hero-lab-placeholder.png",
    video: "/media/hero-video.mp4",
    alt: "Concept image of a modern peptide manufacturing laboratory",
    notice: "Concept imagery — replace with verified company media before publication."
  },
  metrics: [
    { label: "Years of Expertise", value: 10, suffix: "+", placeholder: "XX+" },
    { label: "Manufacturing Facility", value: 8000, suffix: "+ m²", placeholder: "XX,XXX+ m²" },
    { label: "Annual Peptide Capacity", value: 300, suffix: "+ kg", placeholder: "XX+ kg" },
    { label: "Employees", value: 150, suffix: "+", placeholder: "XX+" },
    { label: "Countries Served", value: null, suffix: "+", placeholder: "XX+" },
    { label: "Quality Control Tests", value: null, suffix: "+", placeholder: "XX+" }
  ] satisfies CompanyMetric[],
  qualityStandards: [
    {
      name: "GMP",
      description:
        "Manufacturing processes are designed around GMP-aligned quality principles, with controlled procedures, documented workflows, and quality oversight across production activities.",
      status: "pending"
    },
    {
      name: "ISO",
      description:
        "Quality management practices are structured with reference to applicable ISO standards, supporting consistency, documentation, and continuous process improvement.",
      status: "pending"
    },
    {
      name: "HPLC",
      description:
        "High-performance liquid chromatography is used to evaluate peptide purity, identify related impurities, and support batch-level analytical assessment.",
      status: "pending"
    },
    {
      name: "MS Testing",
      description:
        "Mass spectrometry supports molecular weight confirmation and peptide identity verification, providing an additional layer of analytical confidence.",
      status: "pending"
    },
    {
      name: "COA",
      description:
        "Each qualified batch can be supported by a Certificate of Analysis summarizing key analytical results, specifications, and relevant quality parameters.",
      status: "pending"
    },
    {
      name: "Batch Traceability",
      description:
        "Production records are maintained throughout the manufacturing workflow, enabling traceability from raw materials and processing steps through final batch release.",
      status: "pending"
    }
  ] satisfies QualityStandard[]
} as const;

export const companyLinks = {
  whatsapp: "https://wa.me/message/2BPFPF6XUTS6M1",
  products: "https://peptinovasale.com/collections/all-product",
  email: company.email ? `mailto:${company.email}` : ""
};

