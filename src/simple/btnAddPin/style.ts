import { COLORS } from '@/src/constants/colorsApp'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		bottom: '10%',
		right: 20,
		zIndex: 20,
		backgroundColor: COLORS.transparent,
	},
})
