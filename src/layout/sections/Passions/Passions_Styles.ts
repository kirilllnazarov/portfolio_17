import styled from "styled-components";
import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle";
import ellipse from "../../../assets/images/ellipse.svg";
import { theme } from "../../../styles/Theme";
import { FlexWrapper } from "../../../components/FlexWrapper";

const Passions = styled.section`
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

				@media ${theme.media.mobile} {
					display: none;
				}
			}
		}
	}

	@media ${theme.media.mobile} {
		padding-top: 70px;
	}

	& ${FlexWrapper} {
		@media ${theme.media.mobile} {
			gap: 30px;
			justify-content: center;
		}
	}
`;

const Passion = styled.div`
	color: ${theme.colors.passionText};
	background-color: ${theme.colors.background};
	border-radius: 13px;
	box-shadow: 0px 5px 26px 5px ${theme.colors.boxShadow};
	padding-top: 20px;
	overflow: auto;
	width: 346px;
	height: 280px;

	/* outline: 1px solid red; */
`;

const Title = styled.h2`
	font-size: 25px;
	font-weight: 600;
	letter-spacing: 1.375px;
	padding-top: 18px;

	& span {
		font-size: 25px;
		font-weight: 400;
		letter-spacing: 1.375px;
	}
`;

const Text = styled.span`
	padding-top: 15px;
	font-size: 18px;
	font-weight: 400;
	letter-spacing: 0.99px;
`;

export const S = {
	Passions,
	Passion,
	Title,
	Text,
};
