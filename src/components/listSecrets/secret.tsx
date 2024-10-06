import {COLORS} from '@/src/constants/colorsApp'
import {useLocalAuth} from '@/src/hooks/useLocalAuth'
import {useApp} from '@/src/stores/app/app.store'
import {useBiometrics} from '@/src/stores/biometrics/biometrics.store'
import {useSecret} from '@/src/stores/secrets/secrets.store'
import {SecretsType} from '@/src/types/pin.type'
import {Feather, Octicons} from '@expo/vector-icons'
import {FC, memo} from 'react'
import {Pressable} from 'react-native'
import {Text, View} from '../Themed'
import {styles} from './style'
import {moderateScale} from "@src/constants/scaleSIzes";

type PropsType = {
	secret: SecretsType
	isDeleteMode: boolean
	isSelected: boolean
	onShowDeleteMode: () => void
	selectDeleteSecret: (secretsId: string ) => void
}

export const Secret: FC<PropsType> = memo(({ secret, isDeleteMode, onShowDeleteMode, selectDeleteSecret, isSelected }) => {
	const setMasterKeyModal = useApp.use.setMasterKeyModal()
	const setShowSecret = useSecret.use.setShowSecret()
	const { checkFinger } = useLocalAuth()

	const { fingerprint, isBiometricSupported } =
		useBiometrics.use.state()

	const pressLock = async () => {
		if (fingerprint && isBiometricSupported) {
			await checkFinger()
			setShowSecret(secret)
		} else {
			setMasterKeyModal(true)
			setShowSecret(secret)
		}
	}
	const selectSecretHandler =() => {
		selectDeleteSecret(secret.id)
	}
	const showDeleteModeHandler = () => {
		onShowDeleteMode()
		selectSecretHandler()
	}


	return (
		<Pressable onLongPress={showDeleteModeHandler} style={styles.secret} >
			<View style={styles.info}>
				<Text style={styles.title}>{secret.title}</Text>
				<View style={styles.timeBox}>
					<Text style={styles.timeInfo}>Последнее изменения</Text>
					<Text style={styles.time}>{secret.createdAt}</Text>
				</View>
			</View>
			<View style={{gap: 25}}>
				{isDeleteMode && (
					<Pressable onPress={selectSecretHandler} hitSlop={moderateScale(5)}>
						<Feather name={isSelected ? 'check-circle' : 'circle'}  size={24} color={COLORS.greenL} />
					</Pressable>
				)}
			<Pressable style={styles.iconBox} onPress={pressLock} hitSlop={moderateScale(5)}>
				<Octicons name={'lock'} color={COLORS.greenL} size={30} />
			</Pressable>
			</View>
		</Pressable>
	)
})
