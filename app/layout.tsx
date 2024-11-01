import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
	src: [
		{
			path: '../public/fonts/Inter-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../public/fonts/Inter-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
	]
})

export const metadata: Metadata = {
	title: "My Banking App",
	description: "Generated by create next app",
	icons: {
		icon: "/icons/logo.svg",
	}
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased`} >
				{children}
			</body>
		</html>
	);
}
