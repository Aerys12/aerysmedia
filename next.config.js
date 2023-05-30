/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "d2kukao61u3x53.cloudfront.net",
				port: "",
				pathname: "/*/**",
			},
		],
	},
};

module.exports = nextConfig;
