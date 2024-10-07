import { COLORS } from '@/src/constants/colorsApp'
import { FONT_WEIGHT } from '@/src/constants/fontWeight'
import { moderateScale } from '@/src/constants/scaleSIzes'
import { StyleSheet } from 'react-native'

const colorContained = StyleSheet.create({
	default: { backgroundColor: COLORS.grey },
	success: { backgroundColor: COLORS.greenD },
	error: { backgroundColor: COLORS.red },
	default_title: { color: COLORS.white },
	success_title: { color: COLORS.white },
	error_title: { color: COLORS.white },
	default_subtitle: { color: COLORS.white },
	success_subtitle: { color: COLORS.white },
	error_subtitle: { color: COLORS.white },
})

const colorOutlined = StyleSheet.create({
	default: { borderColor: COLORS.white, borderWidth: 1 },
	success: {
		backgroundColor: COLORS.white,
		borderColor: COLORS.greenD,
		borderWidth: 1,
	},
	error: {
		backgroundColor: COLORS.redLight,
		borderColor: COLORS.red,
		borderWidth: 1,
	},
	default_title: { color: COLORS.white },
	success_title: { color: COLORS.greenD },
	error_title: { color: COLORS.white },
	default_subtitle: { color: COLORS.black },
	success_subtitle: { color: COLORS.white },
	error_subtitle: { color: COLORS.white },
})

export const variantStyles = {
	contained: colorContained,
	outlined: colorOutlined,
}

export const baseStyles = StyleSheet.create({
	pressable: {
		width: '100%',
		paddingVertical: 16,
		paddingHorizontal: 0,
		borderRadius: 12,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 8,
	},
	boxTitle: { justifyContent: 'flex-start', gap: 12, maxWidth: '70%' },
	title: {
		fontWeight: FONT_WEIGHT.semiBold,
		fontSize: moderateScale(16),
		letterSpacing: -0.5,
		lineHeight: 20,
		textAlign: 'center',
	},
	subtitle: {
		fontSize: moderateScale(12),
		letterSpacing: -0.5,
		textAlign: 'center',
	},
})
