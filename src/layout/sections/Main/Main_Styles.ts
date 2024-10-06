import styled from "styled-components";
import ellipse from "../../../assets/images/ellipse.svg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/Theme";

const Main = styled.section`
	padding-top: 40px;
	color: #002265;
	display: flex;

	& ${FlexWrapper} {
		@media ${theme.media.mobile} {
			flex-wrap: wrap-reverse;
			justify-content: center;
		}
	}
`;

const Text = styled.div`
	position: relative;

	&::after {
		content: "";
		display: inline-block;
		width: 140px;
		height: 130px;
		background-image: url(${ellipse});
		background-size: cover;
		position: absolute;
		top: -69px;
		left: 94px;

		@media ${theme.media.mobile} {
			display: none;
		}
	}
`;

const Greeting = styled.p`
	font-size: 35px;
	font-weight: 400;
	letter-spacing: 0.175px;

	& span {
		font-size: 50px;
		font-weight: 600;
		letter-spacing: 0.25px;
	}

	@media ${theme.media.mobile} {
		font-size: 25px;
		margin-top: 22px;

		& span {
			font-size: 30px;
		}
	}
`;

const Title = styled.h1`
	margin-top: 32px;
	font-size: 23px;
	font-weight: 400;
	letter-spacing: 0.345px;
	position: relative;

	&::after {
		content: "";
		display: inline-block;
		width: 96px;
		height: 96px;
		background-image: url(${ellipse});
		background-size: cover;
		position: absolute;
		top: 93px;
		left: 347px;

		@media ${theme.media.mobile} {
			display: none;
		}
	}

	@media ${theme.media.mobile} {
		font-size: 14px;
	}
`;

const Image = styled.img`
	max-width: 500px;
	width: 100%;
	max-height: 470px;
	object-fit: cover;

	@media ${theme.media.mobile} {
		max-width: 290px;
		width: 100%;
		max-height: 260px;
	}
`;

export const S = {
	Main,
	Text,
	Greeting,
	Title,
	Image,
};
