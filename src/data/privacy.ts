import type { LegalSection } from "@/components/legal/LegalDocument";

export const privacyIntroduction = [
  'Welcome to PEPTINOVA ("PEPTINOVA," "we," "our," or "us"). We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, store, and protect your information when you visit our website, purchase products, submit inquiries, or otherwise interact with our services.',
  "By using our website, you agree to the collection and use of information in accordance with this Privacy Policy."
] as const;

export const privacySections: readonly LegalSection[] = [
  {
    title: "1. Information We Collect",
    paragraphs: [
      "1.1 Personal Information — We may collect personal information that you voluntarily provide when you create an account, place an order, request a quotation, contact customer support, subscribe to newsletters, or complete website forms.",
      "1.2 Automatically Collected Information — When you visit our website, we may automatically collect technical and interaction information. This information helps us improve website performance, security, and user experience.",
      "1.3 Cookies and Tracking Technologies — We use cookies, web beacons, pixels, and similar technologies. You may disable cookies through your browser settings; however, some website functions may not operate properly."
    ],
    bullets: [
      "Full name", "Company name", "Email address", "Phone number", "Billing address", "Shipping address", "Payment information", "Order history", "Customer support communications", "Business verification documents (if applicable)",
      "IP address", "Browser type", "Device information", "Operating system", "Referral URLs", "Pages visited", "Date and time of access", "Website interaction data",
      "Remember user preferences", "Improve website functionality", "Analyze website traffic", "Measure marketing performance", "Enhance security"
    ]
  },
  {
    title: "2. How We Use Your Information",
    bullets: ["Process and fulfill orders", "Verify customer identity", "Provide customer support", "Respond to inquiries", "Improve products and services", "Send transactional communications", "Send promotional communications (where permitted)", "Prevent fraud and abuse", "Maintain website security", "Comply with legal obligations"]
  },
  {
    title: "3. Marketing Communications",
    paragraphs: ["If you subscribe to our mailing list, we may send product updates, industry news, promotional offers, educational content, and company announcements. You may unsubscribe at any time by clicking the unsubscribe link or contacting us directly. We will never sell your email address to third parties."]
  },
  {
    title: "4. Payment Processing",
    paragraphs: ["Payments are processed through secure third-party payment processors. PEPTINOVA does not store complete credit card numbers on its servers. All payment information is protected using industry-standard encryption and security protocols. Each provider maintains its own privacy practices."],
    bullets: ["Stripe", "PayPal", "Shopify Payments", "Authorized banking partners"]
  },
  {
    title: "5. Sharing of Information",
    paragraphs: ["We do not sell or rent personal information. We may share information with trusted service providers that assist in operating our business. These providers only receive information necessary to perform their services."],
    bullets: ["Logistics providers: FedEx, DHL, UPS, USPS", "Payment providers: Stripe, PayPal, banking institutions", "Technology providers: Cloudflare, Google Analytics, hosting providers, customer support platforms"]
  },
  {
    title: "6. International Data Transfers",
    paragraphs: ["Because PEPTINOVA serves customers worldwide, your information may be transferred to and processed in countries outside your jurisdiction, including the United States. Where required by law, we implement appropriate safeguards for international data transfers."]
  },
  {
    title: "7. Data Retention",
    paragraphs: ["We retain personal information only as long as necessary to fulfill orders, meet contractual obligations, comply with legal requirements, resolve disputes, and enforce agreements. When information is no longer needed, it is securely deleted or anonymized."]
  },
  {
    title: "8. Data Security",
    paragraphs: ["We implement reasonable administrative, technical, and physical safeguards to protect your information. Although no system is completely secure, we take commercially reasonable measures to protect your information."],
    bullets: ["SSL/TLS encryption", "Secure servers", "Access controls", "Firewall protection", "Continuous security monitoring", "Employee confidentiality obligations"]
  },
  {
    title: "9. Your Privacy Rights",
    paragraphs: ["Depending on your location, you may have the following rights. To exercise these rights, contact us using the information provided by PEPTINOVA."],
    bullets: ["Right to Access — Request a copy of your personal information.", "Right to Correction — Request correction of inaccurate information.", "Right to Deletion — Request deletion of personal information, subject to legal obligations.", "Right to Restrict Processing — Request limitations on how your information is used.", "Right to Data Portability — Receive your information in a portable format.", "Right to Withdraw Consent — Withdraw previously provided consent at any time."]
  },
  {
    title: "10. GDPR Compliance (European Union)",
    paragraphs: ["If you are located in the European Economic Area (EEA), we process your information under lawful bases including contract performance, legal compliance, legitimate business interests, and consent. You have rights under the General Data Protection Regulation (GDPR). Requests may be submitted to our privacy contact."],
    bullets: ["Access", "Rectification", "Erasure", "Restriction", "Portability", "Objection"]
  },
  {
    title: "11. California Privacy Rights (CCPA/CPRA)",
    paragraphs: ["California residents may have rights to know what personal information is collected, access collected information, delete personal information, correct inaccurate information, and limit use of sensitive information. PEPTINOVA does not sell personal information as defined under California law."]
  },
  {
    title: "12. Children's Privacy",
    paragraphs: ["Our products and services are intended for adults and business customers. We do not knowingly collect information from individuals under 18 years of age. If we become aware that personal information from a minor has been collected, we will promptly delete it."]
  },
  {
    title: "13. Third-Party Links",
    paragraphs: ["Our website may contain links to third-party websites. We are not responsible for the privacy practices, content, or security of external websites. Users should review the privacy policies of those websites independently."]
  },
  {
    title: "14. Regulatory Disclaimer",
    paragraphs: ["Certain products offered by PEPTINOVA are intended solely for laboratory research, product development, manufacturing, or other lawful purposes. Information presented on this website is not intended to diagnose, treat, cure, or prevent any disease. Customers are responsible for ensuring compliance with applicable laws and regulations in their jurisdiction."]
  },
  {
    title: "15. Changes to This Privacy Policy",
    paragraphs: ["We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated effective date. Continued use of our website after updates constitutes acceptance of the revised policy."]
  }
];
