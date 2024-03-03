/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "q-xx.bstatic.com",
        port: "",
        pathname: "/xdata/**",
      },
    ],
  },
};

export default nextConfig;
