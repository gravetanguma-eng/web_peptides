export type Capability = {
  number: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
};

export const capabilities: Capability[] = [
  {
    number: "01",
    title: "Peptide Synthesis",
    description:
      "The peptide chain is assembled step by step according to the target amino acid sequence, typically using solid-phase peptide synthesis (SPPS).",
    image: "/media/process-01-synthesis.png",
    imageAlt: "Technician operating automated peptide synthesis equipment"
  },
  {
    number: "02",
    title: "Cleavage & Deprotection",
    description:
      "After synthesis, the peptide is cleaved from the resin support and protective groups are removed to obtain the crude peptide.",
    image: "/media/process-02-cleavage.png",
    imageAlt: "Blue-gloved hand handling a peptide sample vial near laboratory equipment"
  },
  {
    number: "03",
    title: "Purification",
    description:
      "Preparative HPLC and other purification techniques are used to separate the target peptide from impurities and improve overall purity.",
    image: "/media/process-03-purification.png",
    imageAlt: "Cleanroom technicians reviewing peptide purification equipment and analytical data"
  },
  {
    number: "04",
    title: "Concentration & Lyophilization",
    description:
      "The purified peptide solution is concentrated and freeze-dried into a stable powder for easier storage and further processing.",
    image: "/media/process-04-lyophilization.png",
    imageAlt: "Gloved hands inspecting a clear vial in a controlled laboratory"
  },
  {
    number: "05",
    title: "Analytical Testing",
    description:
      "Analytical methods such as HPLC and LC-MS are used to verify purity, molecular weight, content, and other key quality parameters.",
    image: "/media/process-05-analytical.png",
    imageAlt: "HPLC analytical workstation with chromatogram display and laboratory technician"
  },
  {
    number: "06",
    title: "Filling & Quality Release",
    description:
      "Qualified peptide products are filled, packaged, documented by batch, and released after final quality review.",
    image: "/media/process-06-filling.png",
    imageAlt: "Automated stainless steel filling line processing clear glass vials"
  }
];
