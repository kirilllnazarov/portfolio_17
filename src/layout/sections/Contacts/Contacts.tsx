import React from "react";
import { Container } from "../../../components/Container";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import imageBgc from "../../../assets/images/contactBgc.svg";
import { Contact } from "./Contact/Contact";


export function Contacts() {
	return (
		<StyledContacts>
			<Container>
				<SectionTitle>
					Contact <span>Me</span>
				</SectionTitle>
				<FlexWrapper wrap={"wrap"} justify="space-between">
					<Contact iconId={"github"} titleLink={"Github"} />
					<Contact iconId={"instagram"} titleLink={"Instagram"} />
					<Contact iconId={"email"} titleLink={"Email"} />
					<Contact iconId={"telp"} titleLink={"Telp"} />
                    
				</FlexWrapper>
			</Container>
		</StyledContacts>
	);
}

const StyledContacts = styled.section`
	padding-top: 168px;
    max-width: 100%;

	& ${FlexWrapper} {
		padding: 60px 38px 0 38px;
	}
`;
