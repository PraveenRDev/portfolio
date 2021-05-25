import { forwardRef } from 'react'
import { SectionContent, SectionTitle } from '../Components/Title'
import { TITLE, INTRO, BACKGROUND, CONCLUSION, RESUME } from '../Utils/Contents/About'
import { XPadContContainer, YMarginContainer } from '../Components/Container'
import { PrimaryLinkBtn } from '../Components/Button'
import { LANG } from '../Utils/Constants'
import Resume from '../Assets/Files/Resume Praveen Ramkumar.pdf'
import Resume_FR from '../Assets/Files/Resume Praveen Ramkumar_French.pdf'

// const AboutSection = styled(YMarginContainer)``

const AboutScreen = forwardRef(({ lang }, ref) => {
	return (
		<YMarginContainer ref={ref}>
			<XPadContContainer>
				<SectionTitle>{TITLE[lang]}</SectionTitle>
				<SectionContent>{INTRO[lang]}</SectionContent>
				<SectionContent>{BACKGROUND[lang]}</SectionContent>
				<SectionContent>{CONCLUSION[lang]}</SectionContent>
				<PrimaryLinkBtn center={true} href={lang === LANG.EN ? Resume : Resume_FR} target='_blank' rel='noreferrer' download>
					{RESUME[lang]}
				</PrimaryLinkBtn>
			</XPadContContainer>
		</YMarginContainer>
	)
})

export default AboutScreen
