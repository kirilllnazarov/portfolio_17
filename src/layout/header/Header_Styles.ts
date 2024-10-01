import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Header = styled.header`
	background-color: ${theme.colors.background};
	padding: 35px 0 0;
	top: 0;
	left: 0;
	right: 0;
`;

const HeaderMeny = styled.nav``;

const HeaderMenyList = styled.ul`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 45px;
`;

const HeaderMenyItem = styled.li``;

const HeaderMenyLink = styled.a`
	font-size: 25px;
	font-weight: 400;
	letter-spacing: 1.375px;
	width: 100%;
`;

export const S = {
	Header,
	HeaderMeny,
	HeaderMenyList,
	HeaderMenyItem,
	HeaderMenyLink,
};
