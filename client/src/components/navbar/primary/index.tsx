"use client";

import Link from "next/link";
import { DESKTOP_NAV_LINKS } from "@/assets/data";
import { Logo, Menu } from "@/components";
import "./index.scss";
import { useRouter } from "next/navigation";
import { logIn } from "@/utils/app.mjs";

import { connectWallet } from "@/utils/auth/connectWallet";

import { ConnectKitButton } from "connectkit";

export const PrimaryNav = () => {
	const router = useRouter();

	async function handleMenuItem(id: number) {
		// function to be triggered for the login action
		try {
			id === 3 &&
				// router.push((await logIn()) ? "/profile" : "/profile/edit");
				connectWallet();
		} catch (error) {
			console.warn(error);
		}
	}

	async function connect() {
		try {
			await connectWallet();
		} catch (error) {
			console.error(error);
		}
	}

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
							<li
								key={id || index}
								onClick={() => {
									// handleMenuItem(id);
								}}
							>
								{/* Link to specific route */}
								<Link href={to}>{title}</Link>
							</li>
						);
					})}
					<ConnectKitButton.Custom>
						{({ isConnected, show, ensName, truncatedAddress }) => (
							<li onClick={show}>
								{/* {isConnected ? truncatedAddress : "Sign In"} */}
								Login
							</li>
						)}
					</ConnectKitButton.Custom>
				</ul>
			</div>
		</nav>
	);
};
