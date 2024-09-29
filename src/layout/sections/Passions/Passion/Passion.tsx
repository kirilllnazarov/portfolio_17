import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Icon } from "../../../../components/Icon/Icon";
import { theme } from "../../../../styles/Theme";

type PassionType = {
	iconId: string;
	titleStrongFont: string;
	titleFont: string;
	text: string;
};

export function Passion(props: PassionType) {
	return (
		<StyledPassion>
			<FlexWrapper direction={"column"} align={"center"} justify={"center"}>
				<Icon
					iconId={props.iconId}
					width={"255"}
					height={"159"}
					viewBox={"0 0 255 159"}
				/>
				<Title>
					{props.titleStrongFont} <span>{props.titleFont}</span>
				</Title>
				<Text>({props.text})</Text>
			</FlexWrapper>
		</StyledPassion>
	);
}

const StyledPassion = styled.div`
	color: ${theme.colors.passionText};
	background-color: ${theme.colors.background};
	border-radius: 13px;
	box-shadow: 0px 5px 26px 5px ${theme.colors.boxShadow};
	padding-top: 20px;
	overflow: auto;
	width: 346px;
	height: 280px;

	outline: 1px solid red;
`;

const Title = styled.h2`
	font-size: 25px;
	font-weight: 600;
	letter-spacing: 1.375px;
	padding-top: 18px;

	& span {
		font-size: 25px;
		font-weight: 400;
		letter-spacing: 1.375px;
	}
`;

const Text = styled.span`
	padding-top: 15px;
	font-size: 18px;
	font-weight: 400;
	letter-spacing: 0.99px;
`;
