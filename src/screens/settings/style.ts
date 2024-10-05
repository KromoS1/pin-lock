import { COLORS } from '@/src/constants/colorsApp'
import {
	APP_PADDING,
	HEIGHT,
	moderateScale,
	scale,
	WIDTH,
} from '@/src/constants/scaleSIzes'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		width: WIDTH,
		height: HEIGHT,
		backgroundColor: COLORS.white,
	},
	listBox: {
		paddingHorizontal: APP_PADDING,
		marginVertical: scale(20),
		gap: 30,
		backgroundColor: COLORS.white,
	},
	button: {
		paddingVertical: scale(16),
		paddingHorizontal: scale(12),
		backgroundColor: COLORS.white,
		borderWidth: 1,
		borderColor: COLORS.greenL,
		borderRadius: 16,

		// Тень для iOS
		shadowColor: COLORS.greenD,
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.3,
		shadowRadius: 8,
		// Тень для Android
		elevation: 5,
	},
	text: {
		fontFamily: 'Montserrat',
		fontSize: moderateScale(18),
		color: COLORS.black,
	},
})
