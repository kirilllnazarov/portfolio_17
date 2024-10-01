import React from "react";
import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Contact } from "./Contact/Contact";
import { S } from "./Contacts_Styles";

const contactsData = [
	{
		iconId: "github",
		titleLink: "Github",
	},
	{
		iconId: "instagram",
		titleLink: "Instagram",
	},
	{
		iconId: "email",
		titleLink: "Email",
	},
	{
		iconId: "telp",
		titleLink: "Telp",
	},
];

export const Contacts: React.FC = () => {
	return (
		<S.Contacts>
			<Container>
				<SectionTitle>
					Contact <span>Me</span>
				</SectionTitle>
				<FlexWrapper wrap={"wrap"} justify="space-between">
					{contactsData.map((c, i) => {
						return (
							<Contact key={i} iconId={c.iconId} titleLink={c.titleLink} />
						);
					})}
				</FlexWrapper>
			</Container>
		</S.Contacts>
	);
};
