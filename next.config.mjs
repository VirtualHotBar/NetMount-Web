/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    /*     i18n:{
            locales:['zh','en'],
            defaultLocale:'zh',
        } */
    images: {
        unoptimized: true,
        remotePatterns: [
            { protocol: 'https', hostname: 'p1.hotpe.top' },
            { protocol: 'https', hostname: 'i.vhbs.top' }
        ]
    }
};

export default nextConfig;
