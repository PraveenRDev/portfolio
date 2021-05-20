import styled from 'styled-components'
import { DEVICES } from '../Utils/Constants'

const XPaddingContainer = styled.div`
	padding: 0 0.5em;
	@media (min-width: ${DEVICES.OLD_PHONE}) {
		padding: 0 1em;
	}
	@media (min-width: ${DEVICES.LAPTOP}) {
		padding: 0 2em;
	}
`

const XPadContContainer = styled.div`
	padding: 0 1em;
	@media (min-width: ${DEVICES.OLD_PHONE}) {
		padding: 0 2em;
	}
	@media (min-width: ${DEVICES.PHONE}) {
		padding: 0 3em;
	}
	@media (min-width: ${DEVICES.TABLET}) {
		padding: 0 4em;
	}
	@media (min-width: ${DEVICES.LAPTOP}) {
		padding: 0 5em;
	}
	@media (min-width: ${DEVICES.LARGE_SCREEN}) {
		padding: 0 10em;
	}
	@media (min-width: ${DEVICES.BIG_SCREEN}) {
		padding: 0 25em;
	}
`

const YMarginContainer = styled.section`
	padding-top: 4em;
	@media (min-width: ${DEVICES.OLD_PHONE}) {
		padding-top: 5em;
	}
	@media (min-width: ${DEVICES.PHONE}) {
		padding-top: 7em;
	}
	@media (min-width: ${DEVICES.TABLET}) {
		padding-top: 8em;
	}
	@media (min-width: ${DEVICES.LAPTOP}) {
		padding-top: 9em;
	}
	@media (min-width: ${DEVICES.LARGE_SCREEN}) {
		padding-top: 10em;
	}
`

const AppWrapper = styled.main`
	background-color: ${(props) => props.theme.pageColor};
	margin-bottom: 7vh;
	@media (min-width: ${DEVICES.OLD_PHONE}) {
		margin-bottom: 8vh;
	}
	@media (min-width: ${DEVICES.PHONE}) {
		margin-bottom: 7vh;
	}
	@media (min-width: ${DEVICES.TABLET}) {
		margin-bottom: 0;
	}
`

export { XPaddingContainer, XPadContContainer, YMarginContainer, AppWrapper }
