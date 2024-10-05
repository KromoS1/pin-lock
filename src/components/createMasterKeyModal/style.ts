import { COLORS } from '@/src/constants/colorsApp'
import { moderateScale, scale } from '@/src/constants/scaleSIzes'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	title: {
		textAlign: 'center',
		fontFamily: 'Montserrat',
		fontSize: moderateScale(26),
		color: COLORS.black,
		marginBottom: scale(10),
	},
	text: {
		textAlign: 'center',
		fontFamily: 'Montserrat',
		fontSize: moderateScale(18),
		color: COLORS.black,
		marginBottom: scale(5),
	},
	mk: {
		textAlign: 'center',
		fontFamily: 'Montserrat',
		fontSize: moderateScale(20),
		color: COLORS.black,
		marginBottom: scale(20),
	},
})
