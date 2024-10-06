import React from "react";
import { Menu } from "../menu/Menu";
import { S } from "../Header_Styles";
import { headerMenuItems } from "../Header";

type HeaderMenyType = {
	headerMenuItems: Array<{ title: string; ancor: string }>;
};

export const DeskTopMenu: React.FC<{
	headerMenuItems: Array<{ title: string; ancor: string }>;
}> = (props: HeaderMenyType) => {
	return (
		<S.DeskTopMenu>
			<Menu headerMenuItems={headerMenuItems} />
		</S.DeskTopMenu>
	);
};
