import { FC, ReactNode, memo, useMemo } from 'react'
import {
	ActivityIndicator,
	Pressable,
	PressableProps,
	Text,
	TextStyle,
	View,
	ViewStyle,
} from 'react-native'

import { baseStyles, variantStyles } from './styles'
import {
	AlignButtonType,
	ColorButtonType,
	KeyStyleColor,
	VariantButtonType,
} from './types'

type Props = PressableProps & {
	title: string
	subTitle?: string
	variant?: VariantButtonType
	color?: ColorButtonType
	startIcon?: ReactNode
	endIcon?: ReactNode
	startTitleIcon?: ReactNode
	align?: AlignButtonType
	containerStyles?: ViewStyle
	boxTitle?: ViewStyle
	titleStyles?: TextStyle
	subtitleStyles?: TextStyle
	isLoading?: boolean
}

export const ButtonApp: FC<Props> = memo(
	({
		title,
		subTitle,
		variant,
		color,
		startIcon,
		endIcon,
		startTitleIcon,
		align,
		containerStyles,
		boxTitle,
		titleStyles,
		subtitleStyles,
		isLoading,
		disabled,
		...resProps
	}) => {
		const styles = useMemo(() => {
			const nameTypeColorTitle: KeyStyleColor = color
				? `${color}_title`
				: 'default_title'

			const nameTypeColorSubTitle: KeyStyleColor = color
				? `${color}_subtitle`
				: 'default_subtitle'

			return {
				pressable: {
					...baseStyles.pressable,
					...variantStyles[variant || 'contained'][color || 'default'],
					...containerStyles,
					justifyContent: isLoading ? 'center' : align || 'center',
					opacity: disabled ? 0.5 : 1,
				},
				boxTitle: {
					...baseStyles.boxTitle,
					...boxTitle,
				},
				title: {
					...baseStyles.title,
					...variantStyles[variant || 'contained'][nameTypeColorTitle],
					...titleStyles,
				},
				subtitle: {
					...baseStyles.subtitle,
					...variantStyles[variant || 'contained'][nameTypeColorSubTitle],
					...subtitleStyles,
				},
			}
		}, [
			variant,
			color,
			containerStyles,
			titleStyles,
			align,
			boxTitle,
			subtitleStyles,
			isLoading,
			disabled,
		])

		return (
			<Pressable style={styles.pressable} disabled={disabled} {...resProps}>
				{isLoading ? (
					<ActivityIndicator color={styles.title.color} />
				) : (
					<>
						{startIcon && startIcon}
						<View style={baseStyles.boxTitle}>
							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'flex-start',
									gap: 6,
								}}
							>
								{startTitleIcon}
								<Text style={styles.title}>{title}</Text>
							</View>
							{subTitle && <Text style={styles.subtitle}>{subTitle}</Text>}
						</View>
						{endIcon && endIcon}
					</>
				)}
			</Pressable>
		)
	}
)
