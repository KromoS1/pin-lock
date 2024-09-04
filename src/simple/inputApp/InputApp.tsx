import { FC, ReactNode, memo, useRef } from 'react'
import { Pressable, Text, TextInput, TextInputProps, View } from 'react-native'

import { COLORS } from '@/src/constants/colorsApp'
import { useBoolean } from '@/src/hooks'
import { styles } from './style'

type Props = TextInputProps & {
	textError?: string
	endIcon?: ReactNode
}

export const InputApp: FC<Props> = memo(
	({ endIcon, textError, ...resProps }) => {
		const valueFocus = useBoolean(false)
		const refInput = useRef<TextInput | null>(null)

		const onFocusInput = () => {
			refInput.current?.focus()
		}

		return (
			<View>
				<Pressable
					onPress={onFocusInput}
					style={[
						styles.box,
						valueFocus.value && styles.activeBox,
						!!textError && styles.errorBox,
					]}
				>
					<TextInput
						ref={refInput}
						style={[styles.input]}
						placeholderTextColor={COLORS.grey}
						onFocus={valueFocus.setTrue}
						onBlur={valueFocus.setFalse}
						{...resProps}
					/>
					{endIcon && <View style={styles.icon}>{endIcon}</View>}
				</Pressable>
				<View style={styles.error}>
					{textError && <Text style={styles.textError}>{textError}</Text>}
				</View>
			</View>
		)
	}
)
