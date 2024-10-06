import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import image from "../../../assets/images/photo.webp";
import { S } from "./Main_Styles";
import React from "react";

export const Main: React.FC = () => {
	return (
		<S.Main id={'about'}>
			<Container>
				<FlexWrapper align="center" justify="space-between" wrap="wrap">
					<S.Text>
						<S.Greeting>
							Hi !<br />
							<span>
								I’m Kirill Nazarov.
								<br />a Front-End Developer
							</span>
						</S.Greeting>
						<S.Title>
							Front-End developer based in Moscow, Russia
							<br />
							I’am coding with a clean and beautiful problem
							<br />
							solving in mind.
						</S.Title>
					</S.Text>
					<S.Image src={image} alt="photo by Kirill" />
				</FlexWrapper>
			</Container>
		</S.Main>
	);
};
