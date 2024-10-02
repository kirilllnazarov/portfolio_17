import { Container } from "../../components/Container";
import React from "react";
import { S } from "./Footer_Styles";

export const Footer: React.FC = () => {
	return (
		<S.Footer>
			<Container>
				<S.Text>Design By Rauliqbal</S.Text>
			</Container>
		</S.Footer>
	);
};
