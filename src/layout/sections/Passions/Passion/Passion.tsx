import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Icon } from "../../../../components/Icon/Icon";
import { theme } from "../../../../styles/Theme";
import React from "react";
import { S } from "../Passions_Styles";

type PassionType = {
	iconId: string;
	titleStrongFont: string;
	titleFont: string;
	text: string;
};

export const Passion: React.FC<PassionType> = (props: PassionType) => {
	return (
		<S.Passion>
			<FlexWrapper direction={"column"} align={"center"} justify={"center"}>
				<Icon
					iconId={props.iconId}
					width={"255"}
					height={"159"}
					viewBox={"0 0 255 159"}
				/>
				<S.Title>
					{props.titleStrongFont} <span>{props.titleFont}</span>
				</S.Title>
				<S.Text>({props.text})</S.Text>
			</FlexWrapper>
		</S.Passion>
	);
}
