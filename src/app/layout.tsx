import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Products",
	description: "Super sklep",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		
			<html lang="en">
				<body className={`${inter.className} flex min-h-svh flex-col `}>
				
					<main className="mx-auto flex max-w-md flex-auto flex-col   sm:max-w-2xl  md:max-w-4xl lg:max-w-7xl">
						{children}
					</main>
				</body>
			</html>
	
	);
}