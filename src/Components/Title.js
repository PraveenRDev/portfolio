import styled from 'styled-components'
import { DEVICES, MODE } from '../Utils/Constants'

const IntroTitle = styled.h2`
	font-size: ${(props) => props.theme.fontSize.xxSmall};
	font-weight: ${(props) => props.theme.fontWeight.light};
	color: ${(props) => (props.theme.mode === MODE.LIGHT ? props.theme.dark : props.theme.light)};
	text-transform: uppercase;
	letter-spacing: ${(props) => props.theme.spacing.xxSmall};
	line-height: ${(props) => props.theme.lineHeight.regular};
	@media (min-width: ${DEVICES.OLD_PHONE}) {
		font-size: ${(props) => props.theme.fontSize.xSmall};
	}
	@media (min-width: ${DEVICES.PHONE}) {
		font-size: ${(props) => props.theme.fontSize.small};
	}
	@media (min-width: ${DEVICES.TABLET}) {
		font-size: ${(props) => props.theme.fontSize.large};
		letter-spacing: ${(props) => props.theme.spacing.large};
	}
	@media (min-width: ${DEVICES.LAPTOP}) {
		font-size: ${(props) => props.theme.fontSize.xlarge};
	}
	@media (min-width: ${DEVICES.LARGE_SCREEN}) {
		font-size: ${(props) => props.theme.fontSize.xxLarge};
	}
`

const NameTitle = styled.h1`
	font-weight: ${(props) => props.theme.fontWeight.strong};
	text-transform: uppercase;
	font-size: ${(props) => props.theme.fontSize.small};
	color: ${(props) => props.theme.alt};
	letter-spacing: ${(props) => props.theme.spacing.regular};

	@media (min-width: ${DEVICES.OLD_PHONE}) {
		font-size: ${(props) => props.theme.fontSize.mid};
	}
	@media (min-width: ${DEVICES.PHONE}) {
		font-size: ${(props) => props.theme.fontSize.regular};
	}
	@media (min-width: ${DEVICES.TABLET}) {
		font-size: ${(props) => props.theme.fontSize.xlarge};
		letter-spacing: ${(props) => props.theme.spacing.large};
	}
	@media (min-width: ${DEVICES.LAPTOP}) {
		font-size: ${(props) => props.theme.fontSize.xxLarge};
	}
	@media (min-width: ${DEVICES.LARGE_SCREEN}) {
		font-size: ${(props) => props.theme.fontSize.big};
	}
`

const JobTitle = styled.h2`
	font-weight: 300;
	letter-spacing: ${(props) => props.theme.spacing.xSmall};
`
const Slogan = styled.h2`
	font-weight: 300;
	color: ${(props) => props.theme.light};
	font-size: ${(props) => props.theme.fontSize.xxSmall};
	background-color: ${(props) => props.theme.mid};
	padding: 0.8em 0.3em;
	max-width: 35em;
	text-transform: uppercase;
	border-radius: 0.25em;
	line-height: ${(props) => props.theme.lineHeight.regular};
	opacity: ${(props) => (props.theme.mode === MODE.LIGHT ? 0.95 : 0.85)};
	@media (min-width: ${DEVICES.OLD_PHONE}) {
		font-size: ${(props) => props.theme.fontSize.xSmall};
	}
	@media (min-width: ${DEVICES.PHONE}) {
		font-size: ${(props) => props.theme.fontSize.small};
	}
	@media (min-width: ${DEVICES.TABLET}) {
		padding: 0.8em 0.5em;
		font-size: ${(props) => props.theme.fontSize.large};
		letter-spacing: ${(props) => props.theme.spacing.large};
	}
	@media (min-width: ${DEVICES.LAPTOP}) {
		font-size: ${(props) => props.theme.fontSize.xlarge};
	}
	@media (min-width: ${DEVICES.LARGE_SCREEN}) {
		font-size: ${(props) => props.theme.fontSize.xxLarge};
	}
`

const MainTitle = styled.h1`
	color: ${(props) => props.theme.alt};
	font-size: ${(props) => props.theme.fontSize.small};
	font-weight: ${(props) => props.theme.fontWeight.strong};
	text-transform: uppercase;
	letter-spacing: ${(props) => props.theme.spacing.large};
	margin-bottom: 0.2em;
	width: fit-content;
	@media (min-width: ${DEVICES.TABLET}) {
		font-size: ${(props) => props.theme.fontSize.large};
		letter-spacing: ${(props) => props.theme.spacing.large};
	}
`
const SectionTitle = styled.h3`
	text-align: center;
	color: ${(props) => props.theme.primaryColor};
	font-size: ${(props) => props.theme.fontSize.medium};
	letter-spacing: ${(props) => props.theme.spacing.regular};
	font-weight: ${(props) => (props.theme.mode === MODE.DARK ? props.theme.fontWeight.thin : props.theme.fontWeight.light)};

	@media (min-width: ${DEVICES.OLD_PHONE}) {
		font-size: ${(props) => props.theme.fontSize.regular};
	}
	@media (min-width: ${DEVICES.PHONE}) {
		font-size: ${(props) => props.theme.fontSize.large};
	}
	@media (min-width: ${DEVICES.TABLET}) {
		font-size: ${(props) => props.theme.fontSize.xlarge};
	}
`
const SectionContent = styled.p`
	font-weight: ${(props) => (props.theme.mode === MODE.DARK ? props.theme.fontWeight.light : props.theme.fontWeight.regular)};
	color: ${(props) => props.theme.textColor};
	font-size: ${(props) => props.theme.fontSize.xSmall};
	line-height: ${(props) => props.theme.lineHeight.regular};
	letter-spacing: ${(props) => props.theme.spacing.small};
	margin-top: 1em;
	text-align: left;

	@media (min-width: ${DEVICES.PHONE}) {
		font-size: ${(props) => props.theme.fontSize.small};
	}
	@media (min-width: ${DEVICES.TABLET}) {
		font-size: ${(props) => props.theme.fontSize.medium};
		line-height: ${(props) => props.theme.lineHeight.xlarge};
	}
`

export { IntroTitle, MainTitle, SectionTitle, SectionContent, NameTitle, JobTitle, Slogan }
