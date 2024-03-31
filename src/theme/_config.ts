import { DarkTheme } from '@react-navigation/native';

import type { ThemeConfiguration } from '@/types/theme/config';

const colorsLight = {


	gray400: '#98A2B3',
	gray200: '#EAECF0',
	gray100: '#DFDFDF',
	gray50: '#EFEFEF',



	gradient1: '#F06100',
	gradient2: '#F04900',
	gradient3: '#F03000',
	gradient4: '#F00030',
	gradient5: '#F0006D',
	red900: '#FF0000',
	red500: '#C13333',

	danger500: '#F04438',
	danger200: '#FECDCA',
	danger100: '#FFEEED',
	textblack: '#101828',
	gray800: '#1D2939',
	gray600: '#475467',
	gray700: '#344054',
	black: '#000000',
	white: '#FFFFFF',

	blue500:'#0BA5EC'


} as const;

const colorsDark = {
	gray400: '#98A2B3',
	gray200: '#EAECF0',
	gray100: '#DFDFDF',
	gray50: '#EFEFEF',



	gradient1: '#F06100',
	gradient2: '#F04900',
	gradient3: '#F03000',
	gradient4: '#F00030',
	gradient5: '#F0006D',
	red900: '#FF0000',
	red500: '#C13333',

	danger500: '#F04438',
	danger200: '#FECDCA',
	danger100: '#FFEEED',
	textblack: '#101828',
	gray800: '#1D2939',
	gray700: '#344054',
	black: '#000000',
	white: '#FFFFFF',

	blue500:'#0BA5EC'

} as const;

const sizes = [10, 11, 12, 14, 16, 24, 32, 40, 80] as const;

export const config = {
	colors: colorsLight,
	fonts: {
		sizes,
		colors: colorsLight,
	},
	gutters: sizes,
	backgrounds: colorsLight,
	borders: {
		widths: [1, 2],
		radius: [4, 16],
		colors: colorsLight,
	},
	navigationColors: {
		...DarkTheme.colors,
		background: colorsLight.white,
		card: colorsLight.white,
	},
	variants: {
		dark: {
			colors: colorsDark,
			fonts: {
				colors: colorsDark,
			},
			backgrounds: colorsDark,
			navigationColors: {
				...DarkTheme.colors,
				background: colorsDark.purple50,
				card: colorsDark.purple50,
			},
		},
	},
} as const satisfies ThemeConfiguration;
