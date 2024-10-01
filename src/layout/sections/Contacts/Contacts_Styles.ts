import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";

const Contacts = styled.section`
	padding-top: 168px;
	max-width: 100%;

	& ${FlexWrapper} {
		padding: 60px 38px 0 38px;
	}
`;

const Contact = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: column;
align-items: center;
overflow: auto;
`;

const IconWrapper = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
	background-color: #608AF5;
	background-size: cover;
	width: 166px;
	height: 160px;
    `

const Link = styled.a`
	padding-top: 60px;
	color: #3f3d56;
	font-family: Poppins;
	font-size: 35px;
	font-weight: 400;
	letter-spacing: 1.925px;

	&:hover {
		font-weight: 500;
	}
`;



export const S = {
    Contacts,Contact,IconWrapper,Link
}