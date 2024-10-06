import styled from "styled-components";
import { theme } from "../styles/Theme";

export const SectionTitle = styled.h2`
	text-align: center;
	color: #14279b;
	font-size: 35px;
	font-weight: 400;
	letter-spacing: 1.925px;
	padding-bottom: 60px;
	overflow: auto;

	& span {
		font-size: 35px;
		font-weight: 600;
		letter-spacing: 1.925px;
	}

	@media ${theme.media.mobile} {
		padding-bottom: 30px;
	}
`;