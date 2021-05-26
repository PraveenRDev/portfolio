import { forwardRef } from 'react'
import styled from 'styled-components'
import { INTRO_CONTENT, NAME } from '../Utils/Contents/Intro'
import { NameTitle, Slogan } from '../Components/Title'
import { NameAndSlogan, NameContainer, XPaddingContainer } from '../Components/Container'
import { DEVICES, MODE } from '../Utils/Constants'
import skyhigh from '../Assets/Images/skyhigh.jpg'

const IntroSection = styled.section`
	font-family: 'Lato', sans-serif;
	text-align: center;

	height: 30vh;
	background-color: gray;
	display: flex;
	flex-direction: column;
	justify-content: center;

	background: ${(props) =>
			props.theme.mode === MODE.LIGHT
				? `linear-gradient(
		90deg,
		rgba(0,0,0,0.2),
		rgba(0,0,0,0.3)
	),
	url(${skyhigh})`
				: `linear-gradient(
		90deg,
		rgba(0, 0, 0, 0.85),
		rgba(0, 0, 0, 0.8)
	)`},
		url(${skyhigh});
	background-size: cover;
	background-position: center;
	@media (min-width: ${DEVICES.TABLET}) {
		height: 50vh;
	}
	@media (min-width: ${DEVICES.LARGE_SCREEN}) {
		height: 100vh;
		background-attachment: fixed;
	}
`

const IntroScreen = forwardRef(({ lang }, ref) => {
	return (
		<IntroSection ref={ref}>
			<XPaddingContainer>
				<NameAndSlogan>
					<NameContainer>
						<NameTitle>{NAME[lang]}</NameTitle>
					</NameContainer>
					<Slogan>{INTRO_CONTENT[lang]}</Slogan>
				</NameAndSlogan>
			</XPaddingContainer>
		</IntroSection>
	)
})

export default IntroScreen
