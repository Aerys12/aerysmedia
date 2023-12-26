import type { Metadata } from "next";
import Footer from "./components/Footer";
import "./globals.css";
import Header from "./components/Header";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { ClerkProvider } from "@clerk/nextjs";

const montserrat = Montserrat({
	subsets: ["latin"],
	variable: "--font-montserrat",
});

export const metadata: Metadata = {
	title: {
		default: "Aerys Media",
		template: "%s - Aerys Media",
	},
	description: "Toronto based photographer",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body
				className={`${montserrat.className} w-full text-sm md:text-lg bg-white`}
			>
				<Header />

				{children}
				<Analytics />
				<Footer />
			</body>
		</html>
	);
}
