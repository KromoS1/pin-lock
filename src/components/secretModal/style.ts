import { COLORS } from '@/src/constants/colorsApp'
import { FONT_WEIGHT } from '@/src/constants/fontWeight'
import { scale } from '@/src/constants/scaleSIzes'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	title: {
		textAlign: 'center',
		fontFamily: 'Montserrat',
		fontSize: scale(18),
		fontWeight: FONT_WEIGHT.semiBold,
		color: COLORS.black,
		marginBottom: scale(6),
	},
	name: {
		textAlign: 'center',
		fontFamily: 'Montserrat',
		fontSize: scale(16),
		color: COLORS.text,
	},
	secretContainer: {
		marginTop: scale(12),
		paddingHorizontal: scale(16),
		paddingVertical: scale(8),
		borderRadius: scale(12),
		borderWidth: 1,
		borderColor: COLORS.greenL,
		backgroundColor: COLORS.white,
	},
	secret: {
		textAlign: 'center',
		fontFamily: 'Montserrat',
		fontSize: scale(26),
		color: COLORS.black,
		fontWeight: FONT_WEIGHT.bold,
	},
	btn: {
		marginTop: scale(30),
		backgroundColor: COLORS.white,
	},
})
