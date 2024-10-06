import { COLORS } from '@/src/constants/colorsApp'
import { FONT_WEIGHT } from '@/src/constants/fontWeight'
import { APP_PADDING, HEIGHT, scale, WIDTH } from '@/src/constants/scaleSIzes'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		width: WIDTH,
		height: HEIGHT,
		backgroundColor: COLORS.white,
	},
	textBox: {
		paddingHorizontal: APP_PADDING,
		gap: scale(12),
		backgroundColor: COLORS.white,
		marginTop: scale(12),
		paddingBottom: scale(24),
	},
	welcome: {
		textAlign: 'center',
		fontFamily: 'Montserrat',
		fontSize: scale(18),
		color: COLORS.black,
	},
	appName: {
		textAlign: 'center',
		fontFamily: 'PTSans',
		fontSize: scale(36),
		fontWeight: FONT_WEIGHT.bold,
		color: COLORS.greenL,

		textShadowOffset: { width: 2, height: 3 },
		textShadowRadius: 3,
		textShadowColor: COLORS.greenD,
	},
	text: {
		textAlign: 'justify',
		fontFamily: 'Montserrat',
		fontSize: scale(16),
		color: COLORS.black,
	},
	boldText: {
		fontFamily: 'Montserrat',
		fontSize: scale(16),
		color: COLORS.black,
		fontWeight: 700,
	},
	points: {
		fontFamily: 'Montserrat',
		textAlign: 'justify',
		fontSize: scale(16),
		color: COLORS.black,
	},
})
