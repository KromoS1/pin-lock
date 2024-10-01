import { COLORS } from '@/src/constants/colorsApp'
import { moderateScale, scale } from '@/src/constants/scaleSIzes'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	secret: {
		paddingVertical: scale(16),
		paddingHorizontal: scale(12),

		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
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
	info: {
		gap: scale(12),
	},
	title: {
		maxWidth: '85%',
		fontFamily: 'Montserrat',
		fontSize: moderateScale(18),
	},
	timeBox: {
		gap: 4,
	},
	timeInfo: {
		fontFamily: 'Montserrat',
		fontSize: moderateScale(12),
		color: COLORS.grey,
	},
	time: {
		fontFamily: 'Montserrat',
		fontSize: moderateScale(12),
		color: COLORS.grey,
	},
})
