import { createStitches } from "@stitches/react";

export const {
	config,
	styled,
	css,
	globalCss,
	keyframes,
	getCssText,
	theme,
	createTheme,
} = createStitches({
	theme: {
		colors: {
			white: '#FFF',

			gray900: '#202024',
			gray800: '#202024',
			gray300: '#c4c4cc',
			gray100: '#e1e1e6',

			green500: '#00875f',
			green300: '#00b37e',

			variant1: '#1ea483',
			variant2: '#7465d4',

			backgroudfooter: 'rgba(0, 0, 0, 0.6)',
		},

		fontSizes: {
			md: '1.125rem',
			lg: '1.25rem',
			xl: '1.5rem',
			'2xl': '2rem',
		},
	}
})