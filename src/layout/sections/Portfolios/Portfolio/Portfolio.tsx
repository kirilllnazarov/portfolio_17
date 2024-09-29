import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Icon } from "../../../../components/Icon/Icon";

type PortfolioType = {
	iconId?: string;
	iconWidth?: string;
	iconHeight?: string;
	viewBox?: string;
	fontFamily?: string;
	title: string;
	titleCathegory?: string;
	imgage1x: string;
	imgage2x: string;
	imageDescription: string;
};

export function Portfolio(props: PortfolioType) {
	return (
		<StyledPortfolio>
			<FlexWrapper wrap="wrap" align={"center"}>
				<Icon
					iconId={props.iconId}
					width={props.iconWidth}
					height={props.iconHeight}
					viewBox={props.viewBox}
				/>
				<Wrapper>
					<Title>{props.title}</Title>
					<TitleCathegory>{props.titleCathegory}</TitleCathegory>
				</Wrapper>

				<Imgage>
					<source srcSet={`${props.imgage2x} 2x, ${props.imgage1x} 1x`} />
					<img src={props.imgage1x} alt={props.imageDescription} />
				</Imgage>
			</FlexWrapper>
		</StyledPortfolio>
	);
}

const StyledPortfolio = styled.div`
	padding: 20px 12px 16px 16px;
	font-weight: 600;
	max-width: 348px;
	width: 100%;
	height: 100%;
	outline: 1px dotted red;
	overflow: auto;
`;

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	justify-content: start;

	outline: 1px solid red;
`;

const Title = styled.h2`
	color: #4581f6;
	font-family: "Montserrat", sans-serif;
	font-size: 25px;
	font-weight: 600;
`;

const TitleCathegory = styled.h3`
	color: #4581f6;
	font-family: "Montserrat", sans-serif;
	font-size: 13px;
	font-weight: 600;
`;

const Imgage = styled.picture`
	padding-top: 14px;
	max-width: 286px;;
	width: 100%;
	object-fit: cover;
`;
