import { COLORS } from '@/src/constants/colorsApp'
import { APP_PADDING, scale, WIDTH } from '@/src/constants/scaleSIzes'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		position: 'absolute',
		bottom: scale(25),
		marginHorizontal: APP_PADDING,

		width: WIDTH - APP_PADDING * 2,
		borderRadius: scale(20),
		borderCurve: 'continuous',

		backgroundColor: COLORS.greenM,
		// Тень для iOS
		shadowColor: COLORS.greenD,
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.3,
		shadowRadius: 8,
		// Тень для Android
		elevation: 5,
	},
	tab: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	iconBox: {
		backgroundColor: COLORS.greenM,
		padding: 4,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 999,
	},
})
