import React from "react";
import { S } from "../Header_Styles";

type MenyType = {
	headerMenuItems: Array<{ title: string; ancor: string }>;
};

export const Menu: React.FC<MenyType> = (props: MenyType) => {
	return (
		<S.HeaderMeny>
			<S.HeaderMenyList>
				{props.headerMenuItems.map((item, i) => {
					return (
						<S.HeaderMenyItem key={i}>
							<S.HeaderMenyLink href={`#${item.ancor}`}>
								{item.title}
							</S.HeaderMenyLink>
						</S.HeaderMenyItem>
					);
				})}
			</S.HeaderMenyList>
		</S.HeaderMeny>
	);
};
