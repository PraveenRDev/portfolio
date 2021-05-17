import { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { LANG, MODE } from './Utils/Constants'
import { ThemeProvider } from 'styled-components'
import { themes } from './Utils/theme'
import IntroScreen from './Pages/Intro'
import AboutScreen from './Pages/About'
import { AppWrapper } from './Components/Container'
import ProjectScreen from './Pages/Projects'
import ContactScreen from './Pages/Contact'
import Footer from './Components/Footer'
import Navigation from './Components/Navigation'

function App() {
	const introRef = useRef(null)
	const aboutRef = useRef(null)
	const projectRef = useRef(null)
	const contactRef = useRef(null)

	const [theme, setTheme] = useState(MODE.LIGHT)
	const [lang, setLang] = useState(LANG.EN)

	useEffect(() => {
		if (localStorage.getItem('theme')) {
			setTheme(localStorage.getItem('theme'))
		}
		if (localStorage.getItem('lang')) {
			setLang(localStorage.getItem('lang'))
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('theme', theme)
		localStorage.setItem('lang', lang)
	}, [theme, lang])

	const handleTheme = () => {
		const newTheme = theme === MODE.LIGHT ? MODE.DARK : MODE.LIGHT
		setTheme(newTheme)
	}

	const handleLang = () => {
		const newLang = lang === LANG.EN ? LANG.FR : LANG.EN
		setLang(newLang)
	}

	const allRefs = {
		introRef,
		aboutRef,
		projectRef,
		contactRef,
	}

	return (
		<ThemeProvider theme={themes[theme]}>
			<AppWrapper>
				<Router>
					<Route path='*'>
						<Navigation lang={lang} theme={theme} allRefs={allRefs} toggleLanguage={handleLang} toggleTheme={handleTheme} />
						<IntroScreen ref={introRef} lang={lang} />
						<AboutScreen ref={aboutRef} lang={lang} />
						<ProjectScreen ref={projectRef} lang={lang} />
						<ContactScreen ref={contactRef} lang={lang} />
						<Footer lang={lang} />
					</Route>
				</Router>
			</AppWrapper>
		</ThemeProvider>
	)
}

export default App
