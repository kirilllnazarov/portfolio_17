import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/Icon/Icon";

type ContactType = {
	iconId: string;
	titleLink?: string;
};

export function Contact(props: ContactType) {
	return (
		<StyledContact>
			<IconWrapper>
				<Icon
					iconId={props.iconId}
					width={"100"}
					height={"100"}
					viewBox={"0 0 100 100"}
				/>
			</IconWrapper>

			<Link href=''>{props.titleLink}</Link>
		</StyledContact>
	);
}

const StyledContact = styled.div`
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
	height: 160px;`;

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
