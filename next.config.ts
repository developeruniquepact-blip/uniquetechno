import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: 'export',

	images: {
		unoptimized: true, // ✅ This line fixes the image optimization error
	},

	eslint: {
		ignoreDuringBuilds: true,
	},

	reactStrictMode: false,
};

export default nextConfig;        
