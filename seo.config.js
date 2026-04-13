const seo = {
  defaultSeo: {
    title: "Tony Sun - Senior Software Engineer",
    description:
      "Hey, I am a professional software developer who loves to build things for the web with 100% client satisfaction.",
    canonical: "https://jflores.netlify.app/",
    themeColor: "#3b82f6",
    openGraph: {
      title: "Tony Sun - Senior Software Engineer",
      description:
        "Hey, I am a professional software developer who loves to build things for the web with 100% client satisfaction.",
      url: "https://jflores.netlify.app/",
      type: "profile",
      profile: {
        firstName: "Zhifu",
        lastName: "Zhang",
        username: "zhifu-zhang",
        gender: "male",
      },
      images: [
        {
          url: "https://jflores.netlify.app/assets/juan.png",
          width: 360,
          height: 360,
          alt: "Tony Sun",
        },
      ],
    },
  },
  jsonLd: {
    socialProfileJsonLd: {
      type: "Person",
      name: "Tony Sun",
      url: "https://jflores.netlify.app/",
      sameAs: ["https://twitter.com/juanflores"],
    },
    webpageJsonLd: {
      description: "What does the fox say?",
      id: "https://jflores.netlify.app/#home",
      lastReviewed: new Date().toISOString(),
      reviewedBy: {
        type: "Person",
        name: "Tony Sun",
      },
    },
  },
};

export default seo;
