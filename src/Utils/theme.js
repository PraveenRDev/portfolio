const fontSize = {
	nano: '0.5em',
	micro: '0.6em',
	xxSmall: '0.7em',
	xSmall: '0.8em',
	small: '1.1em',
	mid: '1.2em',
	medium: '1.4em',
	regular: '1.6em',
	large: '1.8em',
	xlarge: '2.2em',
	xxLarge: '2.8em',
	big: '3.2em',
}

const fontWeight = {
	thin: '100',
	light: '300',
	regular: '400',
	bold: '500',
	strong: '700',
}

const spacing = {
	xxSmall: '0.01em',
	xSmall: '0.04em',
	small: '0.06em',
	regular: '0.07em',
	large: '0.08em',
}

const lineHeight = {
	xSmall: '1.2em',
	small: '1.3em',
	regular: '1.4',
	large: '1.5',
	xlarge: '1.6',
}

const colors = {
	dark: '#1F2632',
	light: '#fcf6f5',
	primaryColor: '#ff3864',
	primaryMix: '#DA0049',
	white: '#fff',
	black: '#000',
	alt: '#3d5a80',
}

const options = {
	...colors,
	lineHeight: { ...lineHeight },
	fontWeight: { ...fontWeight },
	fontSize: { ...fontSize },
	spacing: { ...spacing },
}

const lightTheme = {
	...options,
	mode: 'light',
	pageColor: '#fcf6f5',
	textColor: '#293241',
	alternateTextColor: '#3d5a80',
	mid: '#293241',
}

const darkTheme = {
	...options,
	mode: 'dark',
	pageColor: '#1F2632',
	textColor: '#fcf6f5',
	alternateTextColor: '#64a6bd',
	mid: '#293241',
}

export const themes = {
	light: lightTheme,
	dark: darkTheme,
}
