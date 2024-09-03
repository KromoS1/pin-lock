import { COLORS } from '@/src/constants/colorsApp'
import { APP_PADDING, WIDTH } from '@/src/constants/scaleSIzes'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		width: WIDTH,
		height: 95,
		backgroundColor: COLORS.mainGreen,
		justifyContent: 'flex-end',
		alignItems: 'center',
		paddingHorizontal: APP_PADDING,
	},
})
