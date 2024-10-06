import React, { useState } from "react";
import { S } from "../Header_Styles";
import { Menu } from "../menu/Menu";
import { headerMenuItems } from "../Header";

type MobileMenuType = {
	headerMenuItems: Array<{title: string, ancor: string}>;
};

export const MobileMenu: React.FC<{headerMenuItems: Array<{title: string, ancor: string}>}> = (props: MobileMenuType) => {
	const [menuIsOpen, setmenuIsOpen] = useState(false)
	const onBurgerBtnClick = () => {setmenuIsOpen(!menuIsOpen)}
	return (
		<S.MobileMenu>
			<S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
				<span></span>
			</S.BurgerButton>
			<S.MobileMenuPopUp isOpen={menuIsOpen} onClick={()=>{setmenuIsOpen(false)}}>
				<Menu headerMenuItems={headerMenuItems} />
			</S.MobileMenuPopUp>
		</S.MobileMenu>
	);
};