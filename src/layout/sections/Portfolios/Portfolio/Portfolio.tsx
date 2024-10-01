import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Icon } from "../../../../components/Icon/Icon";
import { S } from "../Portfolios_Styles";
import React from "react";

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

export const Portfolio: React.FC<PortfolioType> = (props: PortfolioType) => {
	return (
		<S.Portfolio>
			<FlexWrapper wrap="wrap" align={"center"}>
				<Icon
					iconId={props.iconId}
					width={props.iconWidth}
					height={props.iconHeight}
					viewBox={props.viewBox}
				/>
				<S.PortfolioWrapper>
					<S.Title>{props.title}</S.Title>
					<S.TitleCathegory>{props.titleCathegory}</S.TitleCathegory>
				</S.PortfolioWrapper>

				<S.Imgage>
					<source srcSet={`${props.imgage2x} 2x, ${props.imgage1x} 1x`} />
					<img src={props.imgage1x} alt={props.imageDescription} />
				</S.Imgage>
			</FlexWrapper>
		</S.Portfolio>
	);
};
