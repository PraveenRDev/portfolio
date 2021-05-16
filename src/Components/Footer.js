import styled from 'styled-components'
import { DEVICES, MODE } from '../Utils/Constants'
import { FOOTER_CONTENT } from '../Utils/Contents/Footer'
const FooterWrapper = styled.footer`
	display: block;
	margin-top: 5em;
	text-align: center;
	padding: 1em;
	background-color: ${(props) => (props.theme.mode === MODE.DARK ? props.theme.mid : props.theme.dark)};
	color: ${(props) => (props.theme.mode === MODE.LIGHT ? props.theme.light : props.theme.black)};
	font-size: ${(props) => props.theme.fontSize.xxSmall};
	letter-spacing: ${(props) => props.theme.spacing.xSmall};
	@media (min-width: ${DEVICES.PHONE}) {
		font-size: ${(props) => props.theme.fontSize.xSmall};
	}
	@media (min-width: ${DEVICES.TABLET}) {
		font-size: ${(props) => props.theme.fontSize.small};
	}
`

function Footer({ lang }) {
	return <FooterWrapper>{FOOTER_CONTENT[lang]}</FooterWrapper>
}

export default Footer
