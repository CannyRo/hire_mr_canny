import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/hire_mr_canny",
    output: 'export',
    reactStrictMode: true,
};
export default withNextIntl(nextConfig);
