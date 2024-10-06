import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Icon } from "../../components/Icon/Icon";
import { S } from "./Header_Styles";
import React from "react";
import { DeskTopMenu } from "./desktopMenu/DesktopMenu";
import { MobileMenu } from './mobileMenu/MobileMenu'

export const headerMenuItems = [
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
	const [width, setWidth] = React.useState(window.innerWidth);
	const breakpoint = 700;

	React.useEffect(() => {
		const handleWindowResize = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleWindowResize);

		return () => window.removeEventListener("resize", handleWindowResize);
	}, []);

	return (
		<S.Header>
			<Container>
				<FlexWrapper justify={"space-between"} align={"center"} wrap={"wrap"}>
					<Icon iconId="logo" width="55" height="38" viewBox="0 0 50 50" />
					{width < breakpoint ? (
						<MobileMenu headerMenuItems={headerMenuItems} />
					) : (
						<DeskTopMenu headerMenuItems={headerMenuItems} />
					)}
				</FlexWrapper>
			</Container>
		</S.Header>
	);
};
