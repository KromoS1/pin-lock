import { COLORS } from '@/src/constants/colorsApp'
import { FeatherIcon } from '@/src/simple/icons'
import { FC, useEffect, useRef } from 'react'
import { Animated } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { useSharedValue } from 'react-native-reanimated'
import { styles } from './style'

type PropsType = {
	index: number
	currentIndex: number
	keyScreen: string
	navigation: any
}

const icons = {
	index: (props: any) => <FeatherIcon name='home' size={24} {...props} />,
	addSecrets: (props: any) => (
		<FeatherIcon name='plus-circle' size={24} {...props} />
	),
	settings: (props: any) => (
		<FeatherIcon name='settings' size={24} {...props} />
	),
}

export const TabApp: FC<PropsType> = ({
	index,
	currentIndex,
	keyScreen,
	navigation,
}) => {
	const isFocused = currentIndex === index

	const scale1 = useSharedValue(1)

	const scale = useRef(new Animated.Value(1)).current
	const translateY = useRef(new Animated.Value(0)).current
	const colorBG = useRef(new Animated.Value(0)).current

	const interpolateColorBG = colorBG.interpolate({
		inputRange: [0, 1],
		outputRange: [COLORS.greenM, COLORS.white],
	})

	const onPress = () => {
		const event = navigation.emit({
			type: 'tabPress',
			target: keyScreen,
			canPreventDefault: true,
		})

		if (!isFocused && !event.defaultPrevented) {
			navigation.navigate(keyScreen)
		}
	}

	useEffect(() => {
		Animated.timing(scale, {
			toValue: isFocused ? 1.3 : 1,
			duration: 200,
			useNativeDriver: true,
		}).start()
		Animated.timing(translateY, {
			toValue: isFocused ? -10 : 0,
			duration: 200,
			useNativeDriver: true,
		}).start()
		Animated.timing(colorBG, {
			toValue: isFocused ? 1 : 0,
			duration: 400,
			useNativeDriver: true,
		}).start()
	}, [isFocused])

	return (
		<TouchableWithoutFeedback
			style={[
				styles.tab,
				{
					transform: [{ scale }, { translateY }],
				},
			]}
			accessibilityRole='button'
			accessibilityState={isFocused ? { selected: true } : {}}
			onPress={onPress}
		>
			<Animated.View style={[styles.iconBox]}>
				<Animated.View
					style={[
						{
							backgroundColor: interpolateColorBG,
							borderRadius: 999,
							padding: 6,
						},
					]}
				>
					{/* @ts-ignore */}

					{icons[keyScreen]({
						color: isFocused ? COLORS.greenM : COLORS.white,
					})}
				</Animated.View>
			</Animated.View>
		</TouchableWithoutFeedback>
	)
}
