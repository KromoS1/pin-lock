import { COLORS } from '@/src/constants/colorsApp'
import { moderateScale } from '@/src/constants/scaleSIzes'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	modalView: {
		width: '90%',
		backgroundColor: COLORS.white,
		borderRadius: 20,
		padding: moderateScale(25),

		shadowColor: COLORS.greenM,
		shadowOffset: {
			width: 6,
			height: 6,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
})
