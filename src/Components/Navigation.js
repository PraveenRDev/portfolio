import { useEffect } from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { DEVICES, LANG, MODE, NAV_PAGES } from '../Utils/Constants'
import { NAV_ITEMS, QUICK_LINKS, SETTINGS } from '../Utils/Contents/Navigation'
import { ConfigButton, SpecialLink } from './Button'
import Resume from '../Assets/Files/Resume Praveen Ramkumar.pdf'
import Resume_FR from '../Assets/Files/Resume Praveen Ramkumar_French.pdf'
import Code from '../Assets/Images/icons/code-slash.svg'
import Home from '../Assets/Images/icons/home.svg'
import Person from '../Assets/Images/icons/person.svg'
import Mail from '../Assets/Images/icons/mail.svg'
import Download from '../Assets/Images/icons/download.svg'

const Nav = styled.nav`
	position: fixed;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${(props) => (props.theme.mode === MODE.DARK ? props.theme.mid : props.theme.dark)};
	box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
	width: 100%;
	z-index: 1000;
	height: 7vh;
	bottom: 0;
	left: 0;
	@media (min-width: ${DEVICES.OLD_PHONE}) {
		height: 8vh;
	}
	@media (min-width: ${DEVICES.PHONE}) {
		height: 7vh;
	}
	@media (min-width: ${DEVICES.TABLET}) {
		justify-content: space-between;
		top: 0;
	}
	@media (min-width: ${DEVICES.LAPTOP}) {
		justify-content: space-around;
	}
`
const NavLinks = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	& a {
		text-decoration: none;
		color: ${(props) => props.theme.light};
		font-size: ${(props) => props.theme.fontSize.small};
		letter-spacing: ${(props) => props.theme.spacing.xSmall};
		:hover {
			color: ${(props) => props.theme.primaryMix};
		}
	}
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
const Settings = styled.div`
	display: flex;
	width: 20%;
	justify-content: space-evenly;
	flex-direction: column;

	@media (min-width: ${DEVICES.TABLET}) {
		flex-direction: row;
	}
	@media (min-width: ${DEVICES.LAPTOP}) {
		font-size: ${(props) => props.theme.fontSize.small};
	}
`

const LinkWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: space-around;
	height: 5em;
`

const Icon = styled.img`
	height: 2.6em;
	@media (min-width: ${DEVICES.PHONE}) {
		height: 2.3em;
	}
	@media (min-width: ${DEVICES.TABLET}) {
		display: none;
	}
`

const Navigation = function ({ lang, theme, allRefs, toggleLanguage, toggleTheme }) {
	let location = useLocation()
	const { introRef, aboutRef, projectRef, contactRef } = allRefs

	useEffect(() => {
		if (location.pathname === NAV_PAGES.HOME) {
			introRef.current.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			})
		} else if (location.pathname === NAV_PAGES.ABOUT) {
			aboutRef.current.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			})
		} else if (location.pathname === NAV_PAGES.PROJECTS) {
			projectRef.current.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			})
		} else if (location.pathname === NAV_PAGES.CONTACT_ME) {
			contactRef.current.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			})
		}
	}, [location, introRef, aboutRef, projectRef, contactRef])

	return (
		<Nav>
			<Settings>
				<ConfigButton onClick={toggleLanguage}>{SETTINGS.LANGUAGE[lang]}</ConfigButton>
				<ConfigButton onClick={toggleTheme}>{theme === MODE.DARK ? SETTINGS.MODE[lang].DARK : SETTINGS.MODE[lang].LIGHT}</ConfigButton>
			</Settings>
			<NavLinks>
				<Link to={NAV_PAGES.HOME}>
					<LinkWrapper>
						<Icon src={Home} alt={`Icon of ${Home}`}></Icon>
						{NAV_ITEMS[lang].HOME}
					</LinkWrapper>
				</Link>

				<Link to={NAV_PAGES.ABOUT}>
					<LinkWrapper>
						<Icon src={Person} alt={`Icon of ${Person}`}></Icon>
						{NAV_ITEMS[lang].ABOUT}
					</LinkWrapper>
				</Link>

				<Link to={NAV_PAGES.PROJECTS}>
					<LinkWrapper>
						<Icon src={Code} alt={`Icon of ${Code}`}></Icon>
						{NAV_ITEMS[lang].PROJECTS}
					</LinkWrapper>
				</Link>

				<Link to={NAV_PAGES.CONTACT_ME}>
					<LinkWrapper>
						<Icon src={Mail} alt={`Icon of ${Mail}`}></Icon>
						{NAV_ITEMS[lang].CONTACT}
					</LinkWrapper>
				</Link>

				<SpecialLink href={lang === LANG.EN ? Resume : Resume_FR} target='_blank' download>
					<LinkWrapper>
						<Icon src={Download} alt={`Icon of ${Download}`}></Icon>
						{QUICK_LINKS[lang].RESUME}
					</LinkWrapper>
				</SpecialLink>
			</NavLinks>
		</Nav>
	)
}

export default Navigation
