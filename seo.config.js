const seo = {
  defaultSeo: {
    title: "Tony Sun - Senior Software Engineer",
    description:
      "Hey, I am a professional software developer who loves to build things for the web with 100% client satisfaction.",
    canonical: "https://tony-sun.netlify.app/",
    themeColor: "#3b82f6",
    openGraph: {
      title: "Tony Sun - Senior Software Engineer",
      description:
        "Hey, I am a professional software developer who loves to build things for the web with 100% client satisfaction.",
      url: "https://tony-sun.netlify.app/",
      type: "profile",
      profile: {
        firstName: "Tony",
        lastName: "Sun",
        username: "tony-sun",
        gender: "male",
      },
      images: [
        {
          url: "https://tony-sun.netlify.app/assets/tony.png",
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
      url: "https://tony-sun.netlify.app/",
      sameAs: ["https://twitter.com/tony-sun"],
    },
    webpageJsonLd: {
      description: "What does the fox say?",
      id: "https://tony-sun.netlify.app/#home",
      lastReviewed: new Date().toISOString(),
      reviewedBy: {
        type: "Person",
        name: "Tony Sun",
      },
    },
  },
};

export default seo;
