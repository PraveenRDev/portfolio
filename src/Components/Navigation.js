import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { DEVICES, LANG, MODE, NAV_PAGES } from '../Utils/Constants'
import { NAV_ITEMS, QUICK_LINKS, SETTINGS } from '../Utils/Contents/Navigation'
import { ConfigButton, NavLinks, NavLink } from './Button'
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
	justify-content: space-around;
	align-items: center;
	background-color: ${(props) => props.theme.mid};
	box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
	width: 100%;
	z-index: 1000;
	height: 9vh;
	bottom: 0;
	left: 0;
	a {
		text-decoration: none;
	}
	@media (min-width: ${DEVICES.TABLET}) {
		justify-content: flex-end;
		top: 0;
		height: 7vh;
	}
	@media (min-width: ${DEVICES.LAPTOP}) {
		justify-content: flex-end;
	}
`
const Settings = styled.div`
	display: flex;
	justify-content: space-evenly;
	flex-direction: column;
	width: 22%;
	@media (min-width: ${DEVICES.TABLET}) {
		flex-direction: row;
		font-size: ${(props) => props.theme.fontSize.xlSmall};
		width: 18%;
	}
	@media (min-width: ${DEVICES.LAPTOP}) {
		font-size: ${(props) => props.theme.fontSize.lSmall};
		width: 15%;
	}
	@media (min-width: ${DEVICES.LARGE_SCREEN}) {
		width: 12%;
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
	height: 3.6em;
	@media (min-width: ${DEVICES.PHONE}) {
		height: 2.3em;
	}
	@media (min-width: ${DEVICES.TABLET}) {
		display: none;
	}
`

const LogoWrapper = styled.div`
	flex: 1;
	display: none;
	@media (min-width: ${DEVICES.TABLET}) {
		display: block;
		margin-left: 1em;
	}
	@media (min-width: ${DEVICES.LARGE_SCREEN}) {
		margin-left: 3em;
	}
`

const Logo = styled.h1`
	font-family: 'Lato', sans-serif;
	width: fit-content;
	font-weight: 900;
	color: ${(props) => props.theme.primaryColor};
	letter-spacing: ${(props) => props.theme.spacing.regular};
	line-height: 1.3;
	:hover {
		color: ${(props) => props.theme.primaryMix};
	}
	@media (min-width: ${DEVICES.TABLET}) {
		font-size: ${(props) => props.theme.fontSize.xSmall};
	}
	@media (min-width: ${DEVICES.LAPTOP}) {
		font-size: ${(props) => props.theme.fontSize.lSmall};
	}
	@media (min-width: ${DEVICES.LARGE_SCREEN}) {
		font-size: ${(props) => props.theme.fontSize.small};
	}
`

const Navigation = function ({ lang, theme, allRefs, toggleLanguage, toggleTheme }) {
	let location = useLocation()
	const { introRef, aboutRef, projectRef, contactRef } = allRefs
	const [currentPage, setCurrentPage] = useState(null)

	useEffect(() => {
		if (location.pathname === NAV_PAGES.HOME) {
			setCurrentPage(NAV_PAGES.HOME)
			introRef.current.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			})
		} else if (location.pathname === NAV_PAGES.ABOUT) {
			setCurrentPage(NAV_PAGES.ABOUT)
			aboutRef.current.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			})
		} else if (location.pathname === NAV_PAGES.PROJECTS) {
			setCurrentPage(NAV_PAGES.PROJECTS)
			projectRef.current.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			})
		} else if (location.pathname === NAV_PAGES.CONTACT_ME) {
			setCurrentPage(NAV_PAGES.CONTACT_ME)
			contactRef.current.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			})
		}
	}, [location, introRef, aboutRef, projectRef, contactRef])

	return (
		<Nav>
			<LogoWrapper>
				<Link to={NAV_PAGES.HOME}>
					<Logo>
						Think <br /> Outside
					</Logo>
				</Link>
			</LogoWrapper>
			<NavLinks isSmall={lang === LANG.FR}>
				<Link to={NAV_PAGES.HOME}>
					<LinkWrapper>
						<Icon src={Home} alt={`Icon of ${Home}`}></Icon>
						<NavLink>{NAV_ITEMS[lang].HOME}</NavLink>
					</LinkWrapper>
				</Link>

				<Link to={NAV_PAGES.ABOUT}>
					<LinkWrapper>
						<Icon src={Person} alt={`Icon of ${Person}`}></Icon>
						<NavLink current={currentPage === NAV_PAGES.ABOUT}>{NAV_ITEMS[lang].ABOUT}</NavLink>
					</LinkWrapper>
				</Link>

				<Link to={NAV_PAGES.PROJECTS}>
					<LinkWrapper>
						<Icon src={Code} alt={`Icon of ${Code}`}></Icon>
						<NavLink current={currentPage === NAV_PAGES.PROJECTS}>{NAV_ITEMS[lang].PROJECTS}</NavLink>
					</LinkWrapper>
				</Link>

				<Link to={NAV_PAGES.CONTACT_ME}>
					<LinkWrapper>
						<Icon src={Mail} alt={`Icon of ${Mail}`}></Icon>
						<NavLink current={currentPage === NAV_PAGES.CONTACT_ME}>{NAV_ITEMS[lang].CONTACT}</NavLink>
					</LinkWrapper>
				</Link>

				<Link className='link' to={lang === LANG.EN ? Resume : Resume_FR} target='_blank' download>
					<LinkWrapper>
						<Icon src={Download} alt={`Icon of ${Download}`}></Icon>
						<NavLink special={true}>{QUICK_LINKS[lang].RESUME}</NavLink>
					</LinkWrapper>
				</Link>
			</NavLinks>
			<Settings>
				<ConfigButton onClick={toggleLanguage}>{SETTINGS.LANGUAGE[lang]}</ConfigButton>
				<ConfigButton onClick={toggleTheme}>{theme === MODE.DARK ? SETTINGS.MODE[lang].DARK : SETTINGS.MODE[lang].LIGHT}</ConfigButton>
			</Settings>
		</Nav>
	)
}

export default Navigation
