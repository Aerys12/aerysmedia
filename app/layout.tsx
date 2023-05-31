import Footer from "./components/Footer";
import "./globals.css";
import Header from "./components/Header";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
	subsets: ["latin"],
	variable: "--font-montserrat",
});

export const metadata = {
	title: "aerys media",
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
				<Footer />
			</body>
		</html>
	);
}
