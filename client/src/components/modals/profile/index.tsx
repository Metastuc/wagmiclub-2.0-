"use client";

import { usePathname } from "next/navigation";
import { useDisconnect } from "wagmi";
import Link from "next/link";
import "./index.scss";

const Profile = ({ onClose }: { onClose: () => void }) => {
	const group = "profileModal";

	const pathname = usePathname();
	const { disconnect } = useDisconnect();

	let links: { name: string; href: string }[] = [];

	switch (pathname) {
		case `/profile`:
			links = [
				{
					name: "Explore",
					href: "/explore",
				},
				{
					name: "Edit profile",
					href: "/profile/edit",
				},
				{
					name: "Sign out",
					href: "/",
				},
			];
			break;

		case `/create`:
			links = [
				{
					name: "Profile",
					href: "/profile",
				},
				{
					name: "Explore",
					href: "/explore",
				},
				{
					name: "Sign out",
					href: "/",
				},
			];
			break;

		default:
			links = [
				{
					name: "Profile",
					href: "/profile",
				},
				{
					name: "Edit profile",
					href: "/profile/edit",
				},
				{
					name: "Sign out",
					href: "/",
				},
			];
			break;
	}

	function handleClick(index: number) {
		index === 2 && disconnect();
	}

	function RenderList() {
		return (
			<ul className={`${group}__list`}>
				{links.map((link, index) => {
					const { name, href } = link;

					return (
						<li
							key={index}
							className={`${group}__item`}
							onClick={onClose}
						>
							<Link
								href={href}
								onClick={() => handleClick(index)}
							>
								{name}
							</Link>
						</li>
					);
				})}
			</ul>
		);
	}

	return (
		<section className={`${group}`}>
			<div className={`${group}__wrapper`}>
				<div className={`${group}__header`}>
					<span className={`${group}__image`}>
						<img
							src="/defi_pfp.jpg"
							alt="profile__picture"
						/>
					</span>
					<div className={`${group}__displayNames`}>
						<span>Sabinus</span>
						<span>Investor</span>
					</div>
				</div>

				<hr />

				<RenderList />
			</div>
		</section>
	);
};

export { Profile as ProfileModal };
