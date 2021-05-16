import styled from 'styled-components'
import { DEVICES, MODE } from '../Utils/Constants'

const TagWrapper = styled.div`
	display: inline-block;
	background-color: ${(props) => (props.theme.mode === MODE.DARK ? props.theme.dark : props.theme.light)};
	margin: 0.2em 0.3em;
	padding: 0.5em;
	color: ${(props) => props.theme.alternateTextColor};
	border-radius: 0.2em;
	font-size: ${(props) => props.theme.fontSize.xxSmall};

	@media (min-width: ${DEVICES.PHONE}) {
		font-size: ${(props) => props.theme.fontSize.xSmall};
	}
	@media (min-width: ${DEVICES.TABLET}) {
		font-size: ${(props) => props.theme.fontSize.small};
		line-height: ${(props) => props.theme.lineHeight.xlarge};
	}
`

const Tag = function ({ name }) {
	return <TagWrapper>{name}</TagWrapper>
}

export default Tag
