import styled from "styled-components";
import { theme } from "../../styles/Theme";
import footerBgc from '../../assets/images/footer.svg'

const Footer = styled.section`
	background-image: url(${footerBgc});
	background-repeat: no-repeat;
	background-position: center bottom;
	background-size: 1170px;
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
