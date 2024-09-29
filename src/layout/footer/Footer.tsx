import styled from "styled-components";
import { Container } from "../../components/Container";
import { theme } from "../../styles/Theme";

export function Footer() {
	return (
		<StyledFooter>
			<Container>
				<Text>Design By Rauliqbal</Text>
			</Container>
		</StyledFooter>
	);
}

const StyledFooter = styled.section`

	&::after {
		content: "";
		display: inline-block;
		width: 100%;
		height: 100%;
		background-image: url(../../assets/images/footer.svg);
		background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
	}
`;

const Text = styled.p`
	color: ${theme.colors.background};
	text-align: center;
	padding: 236px 0 20px;
	font-size: 35px;
	font-weight: 400;
	letter-spacing: 1.925px;
`;
