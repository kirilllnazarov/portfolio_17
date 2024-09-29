import styled from "styled-components";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import image from "../../../assets/images/photo.webp";
import ellipse from "../../../assets/images/ellipse.svg";

export function Main() {
	return (
		<StyledMain>
			<Container>
				<FlexWrapper align="center" justify="space-between" wrap="wrap">
					<Text>
						<Greeting>
							Hi !<br />
							<span>
								I’m Kirill Nazarov.
								<br />a Front-End Developer
							</span>
						</Greeting>
						<Title>
							Front-End developer based in Moscow, Russia
							<br />
							I’am coding with a clean and beautiful problem
							<br />
							solving in mind.
						</Title>
					</Text>
					<Image src={image} alt="photo by Kirill" />
				</FlexWrapper>
			</Container>
		</StyledMain>
	);
}

const StyledMain = styled.section`
	padding-top: 40px;
	color: #002265;
	display: flex;



`;

const Text = styled.div`
	position: relative;

	&::after {
		content: "";
		display: inline-block;
		width: 140px;
		height: 130px;
		background-image: url(${ellipse});
		background-size: cover;
		position: absolute;
		top: -69px;
		left: 94px;
	}
	`;

const Greeting = styled.p`
	font-size: 35px;
	font-weight: 400;
	letter-spacing: 0.175px;

	& span {
		font-size: 50px;
		font-weight: 600;
		letter-spacing: 0.25px;
	}
`;

const Title = styled.h1`
	margin-top: 32px;
	font-size: 23px;
	font-weight: 400;
	letter-spacing: 0.345px;
position: relative;

&::after {
		content: "";
		display: inline-block;
		width: 96px;
		height: 96px;
		background-image: url(${ellipse});
		background-size: cover;
		position: absolute;
		top: 93px;
		left: 347px;
	}
`;

const Image = styled.img`
	max-width: 500px;
	width: 100%;
	max-height: 470px;
	object-fit: cover;
`;
