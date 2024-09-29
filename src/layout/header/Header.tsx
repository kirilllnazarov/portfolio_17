import styled from "styled-components";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Icon } from "../../components/Icon/Icon";
import { theme } from "../../styles/Theme";
import { HeaderMenu } from "./HeaderMenu/HeaderMenu";

const headerItems = ['About', 'Passions', 'Portfolio', 'Contact Me']

export function Header() {
	return (
		<StyledHeader>
			<Container>
				<FlexWrapper justify={'space-between'} align={'center'} wrap={'wrap'}>
					<Icon iconId="logo" width="55" height="38" viewBox="0 0 50 50"/>
					<HeaderMenu menuItems={headerItems}/>
				</FlexWrapper>
			</Container>
		</StyledHeader>
	);
}

const StyledHeader = styled.header`
	background-color: ${theme.colors.background};
	padding: 35px 0 0;
	top: 0;
	left: 0;
	right: 0;
`;
