import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Passion } from "./Passion/Passion";
import React from "react";
import { S } from "./Passions_Styles";

export const Passions: React.FC = () => {
	return (
		<S.Passions id={'passions'}>
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
		</S.Passions>
	);
};
