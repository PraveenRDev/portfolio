import styled from 'styled-components'
import { OUTRO, TITLE, EMAIL, LINKED_IN } from '../Utils/Contents/Contact'
import { SectionContent, SectionTitle } from '../Components/Title'
import { XPadContContainer, YMarginContainer } from '../Components/Container'
import { PrimaryLinkBtn } from '../Components/Button'
import { DEVICES } from '../Utils/Constants'
import { forwardRef } from 'react'

const ContactSection = styled(YMarginContainer)``

const ContactWrapper = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	@media (min-width: ${DEVICES.PHONE}) {
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	@media (min-width: ${DEVICES.TABLET}) {
	}
	@media (min-width: ${DEVICES.LAPTOP}) {
	}
	@media (min-width: ${DEVICES.LARGE_SCREEN}) {
	}
`

const ContactScreen = forwardRef(({ lang }, ref) => {
	return (
		<ContactSection ref={ref}>
			<XPadContContainer>
				<SectionTitle>{TITLE[lang]}</SectionTitle>
				<SectionContent>{OUTRO[lang]}</SectionContent>
				<ContactWrapper>
					<PrimaryLinkBtn outline={true} target='_blank' href={LINKED_IN}>
						LinkedIn
					</PrimaryLinkBtn>
					<PrimaryLinkBtn href={EMAIL.URL}>{EMAIL.NAME[lang]}</PrimaryLinkBtn>
				</ContactWrapper>
			</XPadContContainer>
		</ContactSection>
	)
})

export default ContactScreen
