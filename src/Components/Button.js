import styled from 'styled-components'
import { DEVICES, MODE } from '../Utils/Constants'

export const PrimaryLinkBtn = styled.a`
	text-decoration: none;
	text-align: center;
	margin: ${(props) => (props.center ? '1em auto 0 auto' : '1em 0 0 0')};
	display: block;
	width: 100%;
	text-transform: uppercase;
	letter-spacing: ${(props) => props.theme.spacing.small};
	color: ${(props) => (props.outline && props.theme.mode === MODE.LIGHT ? props.theme.dark : props.theme.light)};
	border: ${(props) => `2px solid ${props.theme.primaryColor}`};
	background-color: ${(props) => (props.outline ? 'unset' : props.theme.primaryColor)};
	padding: 0.6em 1em;
	font-size: ${(props) => props.theme.fontSize.xxSmall};
	min-width: 6em;
	/* max-width: 50%; */

	:hover {
		background-color: ${(props) => props.theme.primaryMix};
		color: ${(props) => props.theme.light};
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
	color: ${(props) => props.theme.light};
	text-decoration: none;
	cursor: pointer;
	font-size: ${(props) => props.theme.fontSize.xxSmall};
	margin-top: 0.3em;
	@media (min-width: ${DEVICES.PHONE}) {
		font-size: ${(props) => props.theme.fontSize.small};
	}
	@media (min-width: ${DEVICES.TABLET}) {
		font-size: ${(props) => props.theme.fontSize.mid};
		margin-top: 0;
	}
	:hover {
		color: ${(props) => props.theme.primaryMix};
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
	background-color: ${(props) => (props.theme.mode === MODE.LIGHT ? props.theme.dark : props.theme.mid)};
	color: ${(props) => props.theme.light};
	margin-top: 0.2em;
	font-size: ${(props) => props.theme.fontSize.nano};
	padding: 0.3em 0.1em;
	border: 0.5px solid white;

	@media (min-width: ${DEVICES.PHONE}) {
		font-size: ${(props) => props.theme.fontSize.xxSmall};
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
	}
`

export const SpecialLink = styled.a`
	color: ${(props) => props.theme.primaryColor} !important;
	font-weight: ${(props) => props.theme.fontWeight.strong} !important;
	:hover {
		color: ${(props) => props.theme.primaryMix} !important;
	}
`
