import styled from "styled-components";

const Portfolios = styled.section`
	padding-top: 168px;
`;

const Portfolio = styled.div`
	padding: 20px 12px 16px 16px;
	font-weight: 600;
	max-width: 348px;
	width: 100%;
	height: 100%;
	outline: 1px dotted red;
	overflow: auto;
`;

const PortfolioWrapper = styled.div`
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

export const S = {
    Portfolios,Portfolio,PortfolioWrapper,Title,TitleCathegory,Imgage
}