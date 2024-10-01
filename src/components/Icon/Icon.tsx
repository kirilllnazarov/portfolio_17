import React from "react";
import iconSprite from "../../assets/images/icon-sprite.svg";

type IconType = {
	iconId?: string;
	width?: string;
	height?: string;
	viewBox?: string;
};
export const Icon: React.FC<IconType> = (props: IconType) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={props.width || "0"}
			height={props.height || "0"}
			viewBox={props.viewBox || "0 0 0 0"}
			fill="none"
		>
			<use xlinkHref={`${iconSprite}#${props.iconId}`}></use>
		</svg>
	);
};
