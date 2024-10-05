import { COLORS } from '@/src/constants/colorsApp'
import { useLocalAuth } from '@/src/hooks/useLocalAuth'
import { useApp } from '@/src/stores/app/app.store'
import { useBiometrics } from '@/src/stores/biometrics/biometrics.store'
import { useSecret } from '@/src/stores/secrets/secrets.store'
import { SecretsType } from '@/src/types/pin.type'
import { Octicons } from '@expo/vector-icons'
import { FC, memo } from 'react'
import { TouchableOpacity } from 'react-native'
import { Text, View } from '../Themed'
import { styles } from './style'

type PropsType = {
	secret: SecretsType
}

export const Secret: FC<PropsType> = memo(({ secret }) => {
	const setMasterKeyModal = useApp.use.setMasterKeyModal()
	const setShowSecret = useSecret.use.setShowSecret()
	const { checkFinger } = useLocalAuth()

	const { fingerprint, isBiometricSupported, isAccess } =
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

	return (
		<View style={styles.secret}>
			<View style={styles.info}>
				<Text style={styles.title}>{secret.title}</Text>
				<View style={styles.timeBox}>
					<Text style={styles.timeInfo}>Последнее изменения</Text>
					<Text style={styles.time}>{secret.createdAt}</Text>
				</View>
			</View>
			<TouchableOpacity style={styles.iconBox} onPress={pressLock}>
				<Octicons name={'lock'} color={COLORS.greenL} size={30} />
			</TouchableOpacity>
		</View>
	)
})
