import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Icon } from "../../components/Icon/Icon";
import { S } from "./Header_Styles";
import { HeaderMenu } from "./HeaderMenu/HeaderMenu";
import React from "react";

export const headerItems = [
	{
		title: "About",
		ancor: "about",
	},
	{
		title: "Passions",
		ancor: "passions",
	},
	{
		title: "Portfolio",
		ancor: "portfolio",
	},
	{
		title: "Contact Me",
		ancor: "contact",
	},
];

export const Header: React.FC = () => {
	return (
		<S.Header>
			<Container>
				<FlexWrapper justify={"space-between"} align={"center"} wrap={"wrap"}>
					<Icon iconId="logo" width="55" height="38" viewBox="0 0 50 50" />
					<HeaderMenu menuItems={headerItems} />
				</FlexWrapper>
			</Container>
		</S.Header>
	);
};
