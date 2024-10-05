import { Dimensions, Platform, StatusBar } from 'react-native'

export const WIDTH = Dimensions.get('screen').width
export const HEIGHT = Dimensions.get('screen').height

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350
const guidelineBaseHeight = 680

export const scale = (size: number) => (WIDTH / guidelineBaseWidth) * size
export const verticalScale = (size: number) =>
	(HEIGHT / guidelineBaseHeight) * size
export const moderateScale = (size: number, factor: number = 0.5) =>
	size + (scale(size) - size) * factor

export const MAIN_PADDING = 16

export const PLATFORM_OS = Platform.OS

export const IS_IOS = PLATFORM_OS === 'ios'
export const IS_ANDROID = PLATFORM_OS === 'android'

export const STATUS_BAR_HEIGHT = StatusBar.currentHeight || 85

export const APP_PADDING = scale(MAIN_PADDING)
