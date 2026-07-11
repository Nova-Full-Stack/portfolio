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

    // The source images are opaque (white background), so components render them
    // on a rounded white tile rather than as free-standing marks. If you obtain a
    // transparent version, drop it in and remove the tile styling in
    // components/common/Logo.jsx.
    // `logo` is the full lockup (rocket + wordmark), used for the Open Graph image
    // and other large/social contexts. `mark` is the rocket cropped out of it,
    // used in the header/footer <Logo> and as the favicon / app-icon source.
    logo: '/assets/nova-logo.png',
    mark: '/assets/nova-mark.png',
    logoWidth: 1254,
    logoHeight: 1254,
}

export default company
