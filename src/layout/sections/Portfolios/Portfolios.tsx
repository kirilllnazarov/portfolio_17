import { SectionTitle } from "../../../components/SectionTitle";
import { Portfolio } from "./Portfolio/Portfolio";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import React from "react";

import sendpayImage1x from "../../../assets/images/sendPay-1x.jpg";
import sendpayImage2x from "../../../assets/images/sendPay-2x.jpg";

import eCommerceImage1x from "../../../assets/images/e-commerce-1x.jpg";
import eCommerceImage2x from "../../../assets/images/e-commerce-2x.jpg";

import bestLearningImage1x from "../../../assets/images/bestLearning-1x.jpg";
import bestLearningImage2x from "../../../assets/images/bestLearning-2x.jpg";
import { S } from "./Portfolios_Styles";

const portfolioData = [
	{
		
	}
]

export const Portfolios: React.FC = () => {
	return (
		<S.Portfolios>
			<Container>
				<SectionTitle>
					My <span>Portfolio</span>
				</SectionTitle>
				<FlexWrapper justify="space-between" wrap="wrap">
{/* 
					{portfolioData.map((p, i) => {return(
						<Portfolio
						iconId={"eLogo"}
						iconWidth={"50"}
						iconHeight={"50"}
						viewBox={"0 0 50 50"}
						fontFamily={""}
						title={"Sendpay"}
						imgage1x={sendpayImage1x}
						imgage2x={sendpayImage2x}
						imageDescription={"Sendpay"}
					/>
					)})} */}


					<Portfolio
						iconId={"eLogo"}
						iconWidth={"50"}
						iconHeight={"50"}
						viewBox={"0 0 50 50"}
						fontFamily={""}
						title={"Sendpay"}
						imgage1x={sendpayImage1x}
						imgage2x={sendpayImage2x}
						imageDescription={"Sendpay"}
					/>
					<Portfolio
						iconId={""}
						title={"E- Commerce "}
						titleCathegory={"Website"}
						fontFamily={""}
						imgage1x={eCommerceImage1x}
						imgage2x={eCommerceImage2x}
						imageDescription={"E- Commerce"}
					/>
					<Portfolio
						iconId={""}
						title={"BeatsLearning"}
						titleCathegory={"A simphony of skills"}
						imgage1x={bestLearningImage1x}
						imgage2x={bestLearningImage2x}
						imageDescription={"Best Learning"}
					/>
				</FlexWrapper>
			</Container>
		</S.Portfolios>
	);
};
