import React from "react";
import styled from "styled-components";
import { SocialContainer } from "../components/SocialContainer";
import logoYoutube from "../assets/logoYoutube.svg";
import logoTwitter from "../assets/logoTwitter.svg";
import logoTiktok from "../assets/logoTiktok.svg";
import { AnimatedLogo } from "../components/AnimatedLogo";
import { Colors } from "../theme/colors";

export const HomeScreen = () => {
	return (
		<Container>
			<SocialContainer
				title="Wanro & Flrt"
				color={Colors.logoYoutube}
				logo={
					<AnimatedLogo>
						<Logo
							src={logoYoutube}
							alt="Logo Youtube"
							shadowColor={Colors.logoYoutube}
						/>
					</AnimatedLogo>
				}
			/>
			<SocialContainer
				title="WanroLol"
				color={Colors.logoTwitter}
				logo={
					<AnimatedLogo>
						<Logo
							src={logoTwitter}
							alt="Logo Twitter"
							shadowColor={Colors.logoTwitter}
						/>
					</AnimatedLogo>
				}
			/>
			<SocialContainer
				title="@wanrosansflrt"
				color={Colors.logoTiktok}
				logo={
					<AnimatedLogo>
						<Logo
							src={logoTiktok}
							alt="Logo TikTok"
							shadowColor={Colors.logoTiktok}
						/>
					</AnimatedLogo>
				}
			/>
		</Container>
	);
};

const Logo = styled.img<{ shadowColor: string }>`
	height: 64px;
	border-radius: 20px;
	filter: drop-shadow(0px 0px 20px ${(props) => props.shadowColor});
`;

const Container = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
`;
