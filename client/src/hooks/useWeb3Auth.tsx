"use client";

import React, { FC, ReactNode } from "react";
import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { polygon, polygonMumbai } from "viem/chains";
import { useShutTheFuckUpAboutENS } from "./useShutTheFuckUpAboutENS";

interface Props {
	children: ReactNode;
}

export const chains = [polygonMumbai, polygon];

const Web3Auth: FC<Props> = ({ children }) => {
	useShutTheFuckUpAboutENS();

	const config = createConfig(
		getDefaultConfig({
			alchemyId: process.env.NEXT_PUBLIC_ALCHEMY_ID,
			walletConnectProjectId:
				process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
			appName: "WAGMI Club",
			chains,
		}),
	);

	return (
		<WagmiConfig config={config}>
			<ConnectKitProvider>{children}</ConnectKitProvider>
		</WagmiConfig>
	);
};

export default Web3Auth;
