import { COLORS } from '@/src/constants/colorsApp'
import { moderateScale, scale } from '@/src/constants/scaleSIzes'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		marginTop: scale(16),
		width: '100%',
		minHeight: '65%',
		alignItems: 'center',
		fontFamily: 'Montserrat',
	},
	title: {
		textAlign: 'center',
		marginTop: scale(16),
		fontSize: moderateScale(20),
		color: COLORS.black,
	},
	form: {
		marginTop: scale(48),
		width: '100%',
		height: '100%',
		gap: 24,
		justifyContent: 'space-between',
	},
})
