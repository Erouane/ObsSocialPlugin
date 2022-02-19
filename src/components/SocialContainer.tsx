import React from "react";
import styled from "styled-components";

interface SocialContainerProps {
	title: string;
	logo: React.ReactNode;
	color: string;
}

export const SocialContainer = (props: SocialContainerProps) => {
	const { title, logo, color } = { ...props };

	return (
		<Container>
			<LogoContainer>{logo}</LogoContainer>
			<Spacer />
			<Title color={color}>{title}</Title>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-grow: 1;
	flex-direction: row;
`;

const LogoContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 3;
`;

const Spacer = styled.div`
	flex: 2;
`;

const Title = styled.h1<{ color: string }>`
	display: flex;
	align-items: center;
	flex: 7;
	font-size: 5em;
	text-shadow: 5px 5px 20px ${(props) => props.color};
`;
