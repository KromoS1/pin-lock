import { COLORS } from '@/src/constants/colorsApp'
import { useBoolean } from '@/src/hooks'
import { useLocalAuth } from '@/src/hooks/useLocalAuth'
import { useBiometrics } from '@/src/stores/biometrics/biometrics.store'
import { useSecret } from '@/src/stores/secrets/secrets.store'
import { SecretsType } from '@/src/types/pin.type'
import { Feather, Octicons } from '@expo/vector-icons'
import { moderateScale } from '@src/constants/scaleSIzes'
import { FC, memo, useEffect } from 'react'
import { Pressable } from 'react-native'
import { Text, View } from '../Themed'
import { styles } from './style'

type PropsType = {
	secret: SecretsType
	isSelectMode: boolean
	isSelected: boolean
	toggleSelectMode: () => void
	setSelectedSecret: () => void
}

export const Secret: FC<PropsType> = memo(
	({
		secret,
		isSelectMode,
		toggleSelectMode,
		setSelectedSecret,
		isSelected,
	}) => {
		const isPressLock = useBoolean()
		const isAccess = useBiometrics.use.state().isAccess
		const setShowSecret = useSecret.use.setShowSecret()

		const { checkFinger } = useLocalAuth()

		const pressLock = async () => {
			isPressLock.setTrue()
			const isAccess = await checkFinger()
			// если пользователь нажал отмену биометрии
			if (!isAccess) {
				isPressLock.setFalse()
			}
		}

		const toggleSelectedMode = () => {
			if (isSelectMode) return
			toggleSelectMode()
			setSelectedSecret()
		}

		useEffect(() => {
			if (isAccess && isPressLock.value) {
				setShowSecret(secret)
				isPressLock.setFalse()
			}
		}, [isAccess])

		return (
			<Pressable onLongPress={toggleSelectedMode} style={styles.secret}>
				<View style={styles.info}>
					<Text style={styles.title}>{secret.title}</Text>
					<View style={styles.timeBox}>
						<Text style={styles.timeInfo}>Последнее изменения</Text>
						<Text style={styles.time}>{secret.createdAt}</Text>
					</View>
				</View>
				<View style={{ gap: 25 }}>
					{isSelectMode ? (
						<Pressable
							onPress={setSelectedSecret}
							hitSlop={moderateScale(5)}
							style={styles.iconBox}
						>
							<Feather
								name={isSelected ? 'check-circle' : 'circle'}
								size={30}
								color={COLORS.greenL}
							/>
						</Pressable>
					) : (
						<Pressable
							style={styles.iconBox}
							onPress={pressLock}
							hitSlop={moderateScale(5)}
						>
							<Octicons name={'lock'} color={COLORS.greenL} size={30} />
						</Pressable>
					)}
				</View>
			</Pressable>
		)
	}
)
