import React from "react";
import { S } from "../Header_Styles";


type HeaderMenyType = {
	menuItems: Array<{title: string, ancor: string}>;
};

export const HeaderMenu: React.FC<HeaderMenyType>=(props: HeaderMenyType) =>{
	return (
		<S.HeaderMeny>
			<S.HeaderMenyList>
				{props.menuItems.map((item, i) => {
					return (
						<S.HeaderMenyItem key={i}>
							<S.HeaderMenyLink href={`#${item.ancor}`}>{item.title}</S.HeaderMenyLink>
						</S.HeaderMenyItem>
					);
				})}
			</S.HeaderMenyList>
		</S.HeaderMeny>
	);
}
