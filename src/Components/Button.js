import styled from 'styled-components'
import { DEVICES, MODE } from '../Utils/Constants'

export const PrimaryLinkBtn = styled.a`
	text-decoration: none;
	text-align: center;
	margin: ${(props) => (props.center ? '1em auto 0 auto' : '1em 1em 0 0')};
	display: block;
	width: 100%;
	text-transform: uppercase;
	letter-spacing: ${(props) => props.theme.spacing.small};
	color: ${(props) => (props.outline && props.theme.mode === MODE.LIGHT ? props.theme.dark : props.theme.light)};
	border: ${(props) => `2px solid ${props.theme.primaryColor}`};
	background-color: ${(props) => (props.outline ? 'unset' : props.theme.primaryColor)};
	padding: 0.6em 1.2em;
	font-size: ${(props) => props.theme.fontSize.xxSmall};
	min-width: 6em;
	/* max-width: 50%; */

	:hover {
		background-color: ${(props) => props.theme.primaryMix};
		color: ${(props) => props.theme.light};
		transition: all 0.2s ease-in;
	}
	:active {
		background-color: ${(props) => (props.theme.mode === MODE.LIGHT ? props.theme.dark : props.theme.light)};
		color: ${(props) => (props.theme.mode === MODE.LIGHT ? props.theme.light : props.theme.dark)};
	}
	@media (min-width: ${DEVICES.OLD_PHONE}) {
		font-size: ${(props) => props.theme.fontSize.xSmall};
	}
	@media (min-width: ${DEVICES.PHONE}) {
		font-size: ${(props) => props.theme.fontSize.small};
	}
	@media (min-width: ${DEVICES.TABLET}) {
		font-size: ${(props) => props.theme.fontSize.mid};
		width: fit-content;
	}
`

export const LinkButton = styled.a`
	color: ${(props) => (props.theme.mode === MODE.LIGHT ? props.theme.light : props.theme.black)};
	text-decoration: none;
	cursor: pointer;
	font-size: ${(props) => props.theme.fontSize.xSmall};
	margin: 0.4em 0;
	@media (min-width: ${DEVICES.PHONE}) {
		font-size: ${(props) => props.theme.fontSize.small};
	}
	@media (min-width: ${DEVICES.TABLET}) {
		font-size: ${(props) => props.theme.fontSize.mid};
		margin: 0;
	}
	:hover {
		font-weight: ${(props) => props.theme.fontWeight.strong};
		transition: all 0.1s ease-in;
	}
	:active {
		color: ${(props) => (props.theme.mode === MODE.LIGHT ? props.theme.light : props.theme.dark)};
	}
`
export const ConfigButton = styled.button`
	outline: none;
	border: none;
	font-family: inherit;
	cursor: pointer;
	min-width: 3em;
	background-color: transparent;
	color: ${(props) => props.theme.light};
	margin-top: 0.2em;
	font-size: ${(props) => props.theme.fontSize.nano};
	padding: 0.4em 0.1em;
	border: 0.5px solid white;
	text-transform: uppercase;
	:hover {
		font-weight: ${(props) => props.theme.fontWeight.strong};
		transition: all 0.1s ease-in;
	}
	@media (min-width: ${DEVICES.PHONE}) {
		font-size: ${(props) => props.theme.fontSize.xSmall};
	}
	@media (min-width: ${DEVICES.TABLET}) {
		padding: 0.2em 0.7em;
		margin-left: 0.5em;
		font-size: ${(props) => props.theme.fontSize.small};
		border: unset;
		margin: unset;
		padding: unset;
	}
	@media (min-width: ${DEVICES.LAPTOP}) {
		max-width: 50%;
		font-size: ${(props) => props.theme.fontSize.small};
		letter-spacing: ${(props) => props.theme.spacing.large};
	}
`

export const NavLinks = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	font-size: ${(props) => props.theme.fontSize.nano};
	width: 80%;

	@media (min-width: ${DEVICES.OLD_PHONE}) {
		width: 80%;
	}

	@media (min-width: ${DEVICES.PHONE}) {
		font-size: ${(props) => props.theme.fontSize.micro};
		width: 76%;
	}
	@media (min-width: ${DEVICES.TABLET}) {
		font-size: ${(props) => props.theme.fontSize.small};
		width: 75%;
	}
	@media (min-width: ${DEVICES.LAPTOP}) {
		font-size: ${(props) => props.theme.fontSize.small};
		width: 60%;
	}
	@media (min-width: ${DEVICES.LARGE_SCREEN}) {
		width: 50%;
	}
	@media (min-width: ${DEVICES.BIG_SCREEN}) {
		width: 40%;
	}
`

export const NavLink = styled.span`
	text-decoration: none;
	border: unset;
	font-size: ${(props) => props.theme.fontSize.small};
	letter-spacing: ${(props) => props.theme.spacing.xSmall};
	color: ${(props) => (props.special ? props.theme.primaryColor : props.current ? props.theme.primaryMix : props.theme.light)};
	font-weight: ${(props) => (props.special ? props.theme.fontWeight.strong : props.theme.fontWeight.regular)};
	:hover {
		color: ${(props) => props.theme.primaryMix};
		transition: all 0.2s ease-in;
	}
`
