import { COLORS } from '@/src/constants/colorsApp'
import { APP_PADDING, WIDTH } from '@/src/constants/scaleSIzes'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		width: WIDTH,
		height: 95,
		backgroundColor: COLORS.mainGreen,
		justifyContent: 'flex-end',
		paddingBottom: 12,
		paddingHorizontal: APP_PADDING,
	},
	wrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: COLORS.mainGreen,
	},
	back: {
		flexBasis: '10%',
		backgroundColor: COLORS.mainGreen,
	},
	title: {
		backgroundColor: COLORS.mainGreen,
		flexBasis: '80%',
		alignItems: 'center',
	},
})
