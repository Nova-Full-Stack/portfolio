import company from "./data/company";

const title = `${company.name} - Web & Software Development Agency`;
const description =
  "Nova Full Stack designs, builds and ships production web applications — from architecture through cloud deployment.";

const seo = {
  defaultSeo: {
    title,
    description,
    canonical: `${company.url}/`,
    themeColor: "#3b82f6",
    openGraph: {
      title,
      description,
      url: `${company.url}/`,
      type: "website",
      siteName: company.name,
      // Square. Most social cards crop to ~1.91:1, so a dedicated 1200x630
      // version would present better — this at least matches the real file.
      images: [
        {
          url: `${company.url}${company.logo}`,
          width: company.logoWidth,
          height: company.logoHeight,
          alt: company.name,
        },
      ],
    },
  },
  jsonLd: {
    socialProfileJsonLd: {
      type: "Organization",
      name: company.name,
      url: `${company.url}/`,
      // next-seo stamps @type only at the top level, so the nested PostalAddress
      // must carry its own.
      address: {
        "@type": "PostalAddress",
        addressLocality: company.location.city,
        addressRegion: company.location.region,
        addressCountry: company.location.country,
      },
      sameAs: [
        "https://github.com/Nova-Full-Stack",
        "https://www.linkedin.com/company/136095481",
      ],
    },
    webpageJsonLd: {
      description,
      id: `${company.url}/#home`,
      // Static, not `new Date()` — a value that differs between build and render
      // produces a React hydration mismatch on this JSON-LD script tag.
      lastReviewed: "2026-07-10T00:00:00.000Z",
      // No `type` key: next-seo derives '@type' from it and then spreads the
      // object on top, emitting a bogus duplicate `"type"` alongside `"@type"`.
      // It already defaults to Organization.
      reviewedBy: {
        name: company.name,
      },
    },
  },
};

export default seo;
