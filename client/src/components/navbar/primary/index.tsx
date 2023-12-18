"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect } from "react";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import { ConnectKitButton } from "connectkit";
import { DESKTOP_NAV_LINKS } from "@/assets/data";
import { Logo, Menu } from "@/components";
import "./index.scss";

export const PrimaryNav = () => {
	const router = useRouter();
	const { address, isConnected } = useAccount();

	const baseAPIURL = process.env.NEXT_PUBLIC_API_URL;

	useEffect(() => {
		isConnected &&
			(async () => {
				const { exists } = (
					await axios.get(`${baseAPIURL}checkUser/${address}`)
				).data;

				// !exists && router.replace("/profile/edit");
			})();
	}, [isConnected]);

	return (
		<nav className="primaryNav">
			{/* Wrapper for the logo, menu, and desktop navigation */}
			<div className="primaryNav__wrapper">
				{/* Application Logo */}
				<Logo />

				{/* Navigation Menu (Mobile) */}
				<Menu />

				{/* Desktop Navigation Menu */}
				<ul className="primaryNav__desktop">
					{/* Mapping through desktop navigation links */}
					{DESKTOP_NAV_LINKS.map((item, index) => {
						const {
							id,
							value: { title, to },
						} = item;

						return (
							<li key={id || index}>
								{/* Link to specific route */}
								<Link href={to}>{title}</Link>
							</li>
						);
					})}

					<ConnectKitButton.Custom>
						{({ isConnected, show, truncatedAddress }) => (
							<li
								onClick={() => {
									show!();
								}}
							>
								{isConnected ? (
									<span>
										<i>icon</i> truncatedAddress
									</span>
								) : (
									"Login"
								)}
							</li>
						)}
					</ConnectKitButton.Custom>
				</ul>
			</div>
		</nav>
	);
};
