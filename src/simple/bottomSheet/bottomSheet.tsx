import {
	PropsWithChildren,
	forwardRef,
	memo,
	useCallback,
	useImperativeHandle,
} from 'react'

import Animated, {
	Extrapolate,
	interpolate,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated'

import { HEIGHT } from '@/src/constants/scaleSIzes'
import { AllModalsType } from '@/src/hooks/useModals'
import { Platform, ScrollView } from 'react-native'
import { styles } from './bottomSheet.style'

export const MAX_BOTTOM_SHEET = -HEIGHT + 50

const offsetOS = Platform.OS === 'ios' ? 0 : -20

const openModalY: { [key in AllModalsType]: number } = {
	addPin: MAX_BOTTOM_SHEET + 90 + offsetOS,
}

export type BottomSheetRefType = {
	isActive: () => boolean
	scrollTo: (scrollValue: number) => void
	putMax: (modal: AllModalsType | undefined) => number
}

type PropsType = {
	isScroll?: boolean
	isMaxSize?: boolean
}

export const BottomSheet = memo(
	forwardRef<BottomSheetRefType | null, PropsWithChildren<PropsType>>(
		({ children, isScroll = true, isMaxSize = false }, ref) => {
			const translateY = useSharedValue(0)
			const context = useSharedValue({ y: 0 })
			const maxY = useSharedValue(MAX_BOTTOM_SHEET)
			const active = useSharedValue(false)

			const scrollTo = useCallback((destination: number) => {
				'worklet'
				active.value = destination !== 0

				translateY.value = withTiming(destination, { duration: 100 })
			}, [])

			const isActive = useCallback(() => {
				return active.value
			}, [])

			const putMax = useCallback((modal: AllModalsType | undefined) => {
				'worklet'
				const value = !!modal ? openModalY[modal] : MAX_BOTTOM_SHEET
				maxY.value = value

				return value
			}, [])

			useImperativeHandle(ref, () => ({ scrollTo, isActive, putMax }), [
				scrollTo,
				putMax,
			])

			// const gesture = Gesture.Pan()
			// 	.onStart(() => {
			// 		context.value = { y: translateY.value }
			// 	})
			// 	.onUpdate(event => {
			// 		translateY.value = event.translationY + context.value.y
			// 		translateY.value = Math.max(
			// 			translateY.value,
			// 			isMaxSize ? MAX_BOTTOM_SHEET : maxY.value
			// 		)
			// 		if (isMaxSize) {
			// 			maxY.value = event.translationY + context.value.y
			// 		}
			// 	})
			// 	.onEnd(() => {
			// 		if (translateY.value > -HEIGHT / 2.5) {
			// 			scrollTo(0)
			// 		} else if (translateY.value < -HEIGHT / 1.5) {
			// 			if (isMaxSize) {
			// 				scrollTo(MAX_BOTTOM_SHEET)
			// 				maxY.value = MAX_BOTTOM_SHEET
			// 			} else {
			// 				scrollTo(maxY.value)
			// 			}
			// 		}
			// 	})

			const rBottomSheetStyles = useAnimatedStyle(() => {
				const borderRadius = interpolate(
					translateY.value,
					[MAX_BOTTOM_SHEET + 50, MAX_BOTTOM_SHEET],
					[25, 15],
					Extrapolate.CLAMP
				)
				return {
					borderRadius,
					transform: [{ translateY: translateY.value }],
				}
			})

			const bottomSheetContentStyles = useAnimatedStyle(() => {
				const offset = Platform.OS === 'ios' ? 10 : 25
				return {
					height: -(maxY.value + offset),
				}
			})

			return (
				<Animated.View style={[styles.container, rBottomSheetStyles]}>
					{/* <GestureDetector gesture={gesture}> */}
					{/* <Animated.View>
						<Animated.View style={styles.line} />
					</Animated.View> */}
					{/* </GestureDetector> */}
					<Animated.View style={[styles.content, bottomSheetContentStyles]}>
						{isScroll ? (
							<ScrollView
								style={{ flex: 1 }}
								showsVerticalScrollIndicator={false}
							>
								{children}
							</ScrollView>
						) : (
							children
						)}
					</Animated.View>
				</Animated.View>
			)
		}
	)
)
