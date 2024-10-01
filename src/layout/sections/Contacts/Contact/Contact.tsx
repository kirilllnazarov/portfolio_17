import React from "react";
import { Icon } from "../../../../components/Icon/Icon";
import { S } from "../Contacts_Styles";

type ContactType = {
	iconId: string;
	titleLink?: string;
};

export const Contact: React.FC<ContactType> = (props: ContactType) => {
	return (
		<S.Contact>
			<S.IconWrapper>
				<Icon
					iconId={props.iconId}
					width={"100"}
					height={"100"}
					viewBox={"0 0 100 100"}
				/>
			</S.IconWrapper>
			<S.Link href="">{props.titleLink}</S.Link>
		</S.Contact>
	);
};
