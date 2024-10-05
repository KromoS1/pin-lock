import { COLORS } from '@/src/constants/colorsApp'
import { moderateScale, scale } from '@/src/constants/scaleSIzes'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		width: '100%',
		minHeight: '55%',
		alignItems: 'center',
		fontFamily: 'Montserrat',
		marginTop: scale(20),
		backgroundColor: COLORS.white,
	},
	title: {
		textAlign: 'center',
		fontSize: moderateScale(20),
		color: COLORS.black,
	},
	form: {
		marginTop: scale(48),
		width: '100%',
		height: '100%',
		gap: 36,
		backgroundColor: COLORS.white,
	},
	fields: {
		backgroundColor: COLORS.white,
		gap: 36,
	},
})
