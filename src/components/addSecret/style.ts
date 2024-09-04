import { moderateScale, scale } from '@/src/constants/scaleSIzes'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		marginTop: scale(16),
		width: '100%',
		height: '100%',
		alignItems: 'center',
		fontFamily: 'Montserrat',
	},
	cross: {
		alignSelf: 'flex-end',
	},
	title: {
		marginTop: scale(16),
		fontSize: moderateScale(28),
	},
	subTitle: {
		textAlign: 'center',
		marginTop: scale(12),
		fontSize: moderateScale(14),
		color: 'grey',
	},
	form: {
		marginTop: scale(48),
		width: '100%',
		height: '85%',
		gap: 24,
		justifyContent: 'space-between',
	},
})
