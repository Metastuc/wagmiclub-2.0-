import { ReactNode } from "react";
import { SecondaryNav } from "@/components";
import { Web3Auth } from "@/hooks";
import "@/styles/main.scss";

export const metadata = {
	title: "Profile - WagmiClub",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className="container">
				<Web3Auth>
					<SecondaryNav />
					<section>{children}</section>
				</Web3Auth>
			</body>
		</html>
	);
}
