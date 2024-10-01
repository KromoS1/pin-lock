import { COLORS } from '@/src/constants/colorsApp'
import { APP_PADDING, moderateScale, WIDTH } from '@/src/constants/scaleSIzes'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		width: WIDTH,
		height: 95,
		backgroundColor: COLORS.greenM,
		justifyContent: 'flex-end',
		paddingBottom: 12,
		paddingHorizontal: APP_PADDING,
	},
	wrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: COLORS.greenM,
	},
	back: {
		flexBasis: '10%',
		backgroundColor: COLORS.greenM,
	},
	title: {
		backgroundColor: COLORS.greenM,
		flexBasis: '80%',
		alignItems: 'center',
	},
	text: {
		color: COLORS.white,
		fontSize: moderateScale(18),
		fontFamily: 'Montserrat',
	},
})
