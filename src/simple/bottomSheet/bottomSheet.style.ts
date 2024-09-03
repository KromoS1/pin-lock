import { COLORS } from '@/src/constants/colorsApp'
import { APP_PADDING, HEIGHT, scale } from '@/src/constants/scaleSIzes'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		height: HEIGHT,
		width: '100%',
		position: 'absolute',
		top: HEIGHT,
		borderRadius: 25,
		zIndex: 200,
		backgroundColor: COLORS.white,
		paddingHorizontal: APP_PADDING,
		paddingBottom: scale(30),
	},
	line: {
		width: 75,
		height: 4,
		backgroundColor: 'gray',
		alignSelf: 'center',
		marginVertical: 15,
		borderRadius: 2,
	},
	content: {
		paddingBottom: scale(50),
	},
})
