/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  urlImports: [
    'https://cdn.rsvp-popup.com/webcomponents/rsvp-elements/1.0/rsvp.esm.js',
    'https://cdn.rsvp-popup.com/webcomponents/rsvp-elements/1.0/rsvp.js',
  ],
};

module.exports = nextConfig;
