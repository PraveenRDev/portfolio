import styled from 'styled-components'
import { DEVICES, MODE } from '../Utils/Constants'

export const FeaturedCard = styled.div`
	margin: 1em auto 0 auto;
	background-color: ${(props) => (props.theme.mode === MODE.DARK ? props.theme.mid : props.theme.white)};
	min-height: 10em;
	border-radius: 0.5em;
	border-top: 3px solid ${(props) => props.theme.primaryColor};
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
	width: 100%;
	@media (min-width: ${DEVICES.LAPTOP}) {
		width: 90%;
	}
`

export const Card = styled.div`
	background-color: ${(props) => (props.theme.mode === MODE.DARK ? props.theme.mid : props.theme.white)};
	margin: 2em auto 2em auto;
	width: 100%;
	@media (min-width: ${DEVICES.OLD_PHONE}) {
	}
	@media (min-width: ${DEVICES.PHONE}) {
	}
	@media (min-width: ${DEVICES.TABLET}) {
	}
	@media (min-width: ${DEVICES.LAPTOP}) {
		/* width: 35%; */
	}
	@media (min-width: ${DEVICES.LAPTOP}) {
		width: 90%;
	}
`

export const CardContent = styled.div`
	padding: 1em 1em;
	@media (min-width: ${DEVICES.OLD_PHONE}) {
		padding: 1em 1.5em;
	}
	@media (min-width: ${DEVICES.PHONE}) {
		padding: 1.5em 2em;
	}
	@media (min-width: ${DEVICES.TABLET}) {
		padding: 2em 3em;
	}
	@media (min-width: ${DEVICES.LAPTOP}) {
		width: 100%;
	}
`
export const CardTitle = styled.h4`
	color: ${(props) => props.theme.alternateTextColor};
	font-size: ${(props) => props.theme.fontSize.xSmall};
	letter-spacing: ${(props) => props.theme.spacing.xSmall};
	font-weight: ${(props) => props.theme.fontWeight.regular};
	@media (min-width: ${DEVICES.OLD_PHONE}) {
		font-size: ${(props) => props.theme.fontSize.small};
	}
	@media (min-width: ${DEVICES.PHONE}) {
		font-size: ${(props) => props.theme.fontSize.mid};
	}
	@media (min-width: ${DEVICES.TABLET}) {
		font-size: ${(props) => props.theme.fontSize.medium};
	}
`

export const CardImage = styled.img`
	width: 100%;
	margin-top: 1em;
	cursor: pointer;
	border: ${(props) => `2px solid ${props.theme.primary}`};
	border-radius: 1em;
	transition: transform 0.5s ease;
	:hover {
		transform: scale(1.03);
	}
`

export const CardDescription = styled.p`
	margin-top: 0.5em;
	color: ${(props) => props.theme.textColor};
	font-size: ${(props) => props.theme.fontSize.xSmall};
	text-align: left;
	line-height: ${(props) => props.theme.lineHeight.large};
	letter-spacing: ${(props) => props.theme.spacing.xxSmall};

	@media (min-width: ${DEVICES.PHONE}) {
		font-size: ${(props) => props.theme.fontSize.small};
	}
	@media (min-width: ${DEVICES.TABLET}) {
		font-size: ${(props) => props.theme.fontSize.medium};
	}
`
export const CardSubTitle = styled(CardTitle)`
	margin: 0.5em 0;
	color: ${(props) => props.theme.alternateTextColor};
	font-size: ${(props) => props.theme.fontSize.xSmall};
	letter-spacing: ${(props) => props.theme.spacing.xSmall};
	font-weight: ${(props) => props.theme.fontWeight.regular};

	@media (min-width: ${DEVICES.OLD_PHONE}) {
		font-size: ${(props) => props.theme.fontSize.small};
	}
	@media (min-width: ${DEVICES.PHONE}) {
		font-size: ${(props) => props.theme.fontSize.mid};
	}
	@media (min-width: ${DEVICES.TABLET}) {
		font-size: ${(props) => props.theme.fontSize.medium};
	}
`
export const CardFooter = styled.footer`
	background-color: ${(props) => props.theme.alternateTextColor};
	padding: 0.5em 1em;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	@media (min-width: ${DEVICES.TABLET}) {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 1em 4em;
	}
`
