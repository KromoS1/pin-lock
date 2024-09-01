import { COLORS } from '@/src/constants/colorts'
import { HEIGHT, STATUS_BAR_HEIGHT, WIDTH } from '@/src/constants/scaleSIzes'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		width: WIDTH,
		height: HEIGHT - STATUS_BAR_HEIGHT,
		backgroundColor: COLORS.white,
	},
})
