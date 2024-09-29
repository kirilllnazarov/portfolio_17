import styled from "styled-components";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Passion } from "./Passion/Passion";
import ellipse from "../../../assets/images/ellipse.svg";

export function Passions() {
	return (
		<StyledPassions>
			<Container>
				<SectionTitle>
					Additional <span>passions</span>
				</SectionTitle>
				<FlexWrapper wrap={"wrap"} justify={"space-between"}>
					<Passion
						iconId={"front"}
						titleStrongFont={"Front-End"}
						titleFont={"Developer"}
						text={"React, TS"}
					/>
					<Passion
						iconId={"back"}
						titleStrongFont={"Back-End"}
						titleFont={"Developer"}
						text={"NodeJS"}
					/>
					<Passion
						iconId={"design"}
						titleStrongFont={"UI/UX"}
						titleFont={"Designer"}
						text={"Figma"}
					/>
				</FlexWrapper>
			</Container>
		</StyledPassions>
	);
}

const StyledPassions = styled.section`
	padding-top: 118px;
	

	& ${Container} {
		position: relative;

		& ${SectionTitle} {
		&::after {
			content: "";
			display: inline-block;
			width: 115px;
			height: 104px;
			background-image: url(${ellipse});
			background-size: cover;

			position: absolute;
			bottom: 0;
			left: 0;
		}
	}
	}
	
	

`;

