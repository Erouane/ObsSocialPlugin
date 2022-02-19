import React, { useEffect } from "react";
import { animated, useSpring } from "@react-spring/web";
import styled from "styled-components";
import { getRandomInteger } from "../utils/randomInteger";

interface AnimatedLogoProps {
	children: React.ReactNode;
}

export const AnimatedLogo = (props: AnimatedLogoProps) => {
	const [style, api] = useSpring(() => ({
		loop: true,
		delay: getRandomInteger(5000, 10000),
		from: {
			transform: `rotate3d(0,1,0,0deg)`,
		},
		to: {
			transform: `rotate3d(0,1,0,-360deg)`,
		},
	}));

	useEffect(() => {
		api.start({
			config: { tension: 50, mass: 10, clamp: true },
		});
	});

	return <AnimatedContainer style={style}>{props.children}</AnimatedContainer>;
};

const AnimatedContainer = styled(animated.div)``;
