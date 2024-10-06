import styled, { css } from "styled-components";
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
	color: ${theme.colors.textColor}
`;

const BurgerButton = styled.div<{ isOpen: boolean }>`
	position: fixed;
	width: 25px;
	height: 25px;
	top: 80px;
	right: 70px;
	z-index: 99999;

	& span {
		display: block;
		width: 21px;
		height: 3px;
		border-radius: 2px;
		background-color: ${theme.colors.passionText};
		position: absolute;
		left: 40px;
		bottom: 50px;

		${(props) =>
			props.isOpen &&
			css<{ isOpen: boolean }>`
				background-color: rgba(255, 255, 255, 0);
			`}

		&::before {
			content: "";
			display: block;
			width: 21px;
			height: 3px;
			border-radius: 2px;
			background-color: ${theme.colors.passionText};
			position: absolute;
			transform: translateY(-5px);

			${(props) =>
				props.isOpen &&
				css<{ isOpen: boolean }>`
					transform: rotate(-45deg) translateY(0);
				`}
		}
		&::after {
			content: "";
			display: block;
			width: 21px;
			height: 3px;
			border-radius: 2px;
			background-color: ${theme.colors.passionText};
			position: absolute;
			transform: translateY(5px);

			${(props) =>
				props.isOpen &&
				css<{ isOpen: boolean }>`
					width: 21px;
					transform: rotate(45deg) translateY(0);
				`}
		}
	}
`;

const MobileMenu = styled.nav``;

const MobileMenuPopUp = styled.div<{ isOpen: boolean }>`
	position: fixed;
	background-color: rgba(255, 255, 255, 0.9);
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 999;
	display: flex;
	justify-content: center;
	align-items: center;
	transform: translateY(-100%);
	transition: 0.6s ease-in-out;

	ul {
		display: flex;
		gap: 10px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		transition: ${theme.animations.transition};
	}

	${(props) =>
		props.isOpen &&
		css<{ isOpen: boolean }>`
			transform: translateY(0);
			& ul {
				gap: 30px;
			}
		`}
`;

const DeskTopMenu = styled.nav`
	ul {
		display: flex;
		gap: 30px;
		justify-content: center;
	}
`;

export const S = {
	Header,
	HeaderMeny,
	HeaderMenyList,
	HeaderMenyItem,
	HeaderMenyLink,
	BurgerButton,
	MobileMenu,
	MobileMenuPopUp,
	DeskTopMenu,
};
