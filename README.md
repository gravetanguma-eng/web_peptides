# Peptide manufacturing website

High-end B2B manufacturing website built with Next.js App Router, TypeScript,
Tailwind CSS, Framer Motion and Lucide React.

## Commands

```bash
pnpm install
pnpm dev
pnpm lint
pnpm typecheck
pnpm build
pnpm start
pnpm test:e2e
```

## Content configuration

All company-controlled facts are intentionally centralized:

- `src/data/company.ts` — identity, contact details, metrics and quality standards
- `src/data/products.ts` — product catalogue and specifications
- `src/data/capabilities.ts` — manufacturing process and supporting media

Before publication, replace:

- legal name, corporate colors and any approved alternate logo variants
- WhatsApp number, email, address and canonical production URL
- all `XX+` metrics with sourced and approved data
- placeholder product names, specifications and intended-use statements
- quality-system, certification and testing statements with verified scope
- concept imagery with licensed company photography and hero video
- privacy, terms and research-use statements with legally reviewed copy

Organization JSON-LD uses the configured PEPTINOVA display name while omitting
unprovided address, certification and legal-entity fields.
