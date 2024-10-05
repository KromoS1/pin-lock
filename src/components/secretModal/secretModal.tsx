import { ButtonApp } from '@/src/simple/buttonApp/ButtonApp'
import { ModalApp } from '@/src/simple/modalApp/modalApp'
import { useBiometrics } from '@/src/stores/biometrics/biometrics.store'
import { useSecret } from '@/src/stores/secrets/secrets.store'
import { FC } from 'react'
import { Text, View } from '../Themed'
import { styles } from './style'

export const SecretModal: FC = () => {
	const access = useBiometrics.use.state().isAccess
	const secret = useSecret.use.state().showSecret

	const setAccess = useBiometrics.use.setAccess()
	const setShowSecret = useSecret.use.setShowSecret()

	const close = () => {
		setAccess(false)
		setShowSecret(null)
	}

	return (
		<ModalApp visible={access} onRequestClose={close}>
			<Text style={styles.title}>Ваш секретик</Text>

			<Text style={styles.name}>{secret?.title}</Text>

			<View style={styles.secretContainer}>
				<Text style={styles.secret}>{secret?.value}</Text>
			</View>

			<View style={styles.btn}>
				<ButtonApp
					title='Закрыть'
					variant='contained'
					color='success'
					onPress={close}
				/>
			</View>
		</ModalApp>
	)
}
