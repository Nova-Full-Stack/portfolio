// Single source of truth for company identity. Every name, address and URL on
// the site reads from here, so rebranding is a one-file change.
const company = {
    name: 'Nova Full Stack',
    shortName: 'Nova Full Stack',

    // TODO: replace with the real business address before launch.
    email: 'hello@novafullstack.com',

    // TODO: replace with the production domain before launch.
    url: 'https://novafullstack.com',

    // `label` is what renders on the page; the parts feed schema.org address.
    location: {
        label: 'Fairburn, GA, USA',
        city: 'Fairburn',
        region: 'GA',
        country: 'US',
    },

    copyrightYear: 2026,

    // The source PNG has no alpha channel — its blue-grey backdrop is baked in.
    // Components therefore render it as a rounded tile rather than a free-standing
    // mark. Drop a transparent SVG/PNG here and remove the tile styling in
    // components/common/Logo.jsx if you get one.
    logo: '/assets/nova-logo.png',
    logoWidth: 360,
    logoHeight: 360,
}

export default company
