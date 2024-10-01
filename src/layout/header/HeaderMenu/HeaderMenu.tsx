import React from "react";
import { S } from "../Header_Styles";


type HeaderMenyType = {
	menuItems: Array<string>;
};

export const HeaderMenu: React.FC<HeaderMenyType>=(props: HeaderMenyType) =>{
	return (
		<S.HeaderMeny>
			<S.HeaderMenyList>
				{props.menuItems.map((el, i) => {
					return (
						<S.HeaderMenyItem key={i}>
							<S.HeaderMenyLink href={"#"}>{el}</S.HeaderMenyLink>
						</S.HeaderMenyItem>
					);
				})}
			</S.HeaderMenyList>
		</S.HeaderMeny>
	);
}
