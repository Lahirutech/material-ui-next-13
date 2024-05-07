/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        // port: "3000",
        // pathname: "/aa7f294677adda00fa96235a76426c01.jpg",
      },
    ],
  },
};

export default nextConfig;
