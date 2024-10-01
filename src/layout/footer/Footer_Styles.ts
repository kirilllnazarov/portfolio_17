import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Footer = styled.section`
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

export const S = {
	Footer,
	Text,
};
