import styled from "styled-components";

type HeaderMenyType = {
	menuItems: Array<string>;
};

export function HeaderMenu(props: HeaderMenyType) {
	return (
		<StyledHeaderMeny>
			<UnodoredList>
				{props.menuItems.map((el, i) => {
					return (
						<ListItem key={i}>
							<Link href={"#"}>{el}</Link>
						</ListItem>
					);
				})}
			</UnodoredList>
		</StyledHeaderMeny>
	);
}

const StyledHeaderMeny = styled.nav`

`;

const UnodoredList = styled.ul`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 45px;
`;

const ListItem = styled.li``;

const Link = styled.a`
	font-size: 25px;
	font-weight: 400;
	letter-spacing: 1.375px;
  width: 100%;
`;
