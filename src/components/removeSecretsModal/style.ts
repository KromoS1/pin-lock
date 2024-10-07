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
		color: COLORS.grey,
		marginBottom: scale(6),
	},
	btns: {
		marginTop: scale(16),
		flexDirection: 'row',
		justifyContent: 'space-between',
		gap: scale(16),
		backgroundColor: COLORS.white,
	},
})
