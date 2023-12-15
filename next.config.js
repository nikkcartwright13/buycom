/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
     API_URL: "http://localhost:3000",
   //API_URL: "https://buyitnow-4cr2rxabo-nikkcartwrights-projects.vercel.app",
    DB_LOCAL_URI: "mongodb://localhost:27017/buyitnow",
    // DB_URI:"mongodb+srv://nikkcartwrighttt:nikkcartwright@nikkcartwright.gdblwyh.mongodb.net/?retryWrites=true&w=majority",
    DB_URI: "mongodb+srv://nikkcartwrighttt:nikkcartwright@nikkcartwright.gdblwyh.mongodb.net/test?retryWrites=true&w=majority",
    NEXTAUTH_SECRET: "codingwithabbas",
    CLOUD_NAME: "dwj0vhfrl",
    CLOUDINARY_API_KEY: "586961345245574",
    CLOUDINARY_API_SECRET: "qz0UBJyGoBR4QXsdzV8g6Nenaq4",
    STRIPE_PUBLICK_KEY: "pk_test_51O6w7dDOjQS6A0boQ6DXmTsWCDvluKV9e8W7gZHXrOvAbUV7cQUIHnzJ32STuCp3mU3RTBsHTPKaGpZuO8trHcqq000YDX69Pa",
    STRIPE_PRIVATE_KEY: "sk_test_51O6w7dDOjQS6A0boeDUVdNmwuuXUircOJmLi73IpTuVxyf5xdQT95w1WPNiv3W1PkhvbrMkBA3u0tYL3IXjPnN6l00LOMLbS2Y",
    STRIPE_WEBHOOK_SECRET: "whsec_0758d6d05b0889fae95277a5705415a84ce714e60055949213a98d6f6405a523"
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
