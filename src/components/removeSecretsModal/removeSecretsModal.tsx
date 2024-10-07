import { useLocalAuth } from '@/src/hooks/useLocalAuth'
import { ButtonApp } from '@/src/simple/buttonApp/ButtonApp'
import { ModalApp } from '@/src/simple/modalApp/modalApp'
import { useApp } from '@/src/stores/app/app.store'
import { useBiometrics } from '@/src/stores/biometrics/biometrics.store'
import { useSecret } from '@/src/stores/secrets/secrets.store'
import { FC, useEffect } from 'react'
import { Text, View } from '../Themed'
import { styles } from './style'

type Props = {
	visible: boolean
	close: () => void
}

export const RemoveSecretsModal: FC<Props> = ({ visible, close }) => {
	const setMasterKeyModal = useApp.use.setMasterKeyModal()
	const setAccess = useBiometrics.use.setAccess()
	const removeSecrets = useSecret.use.removeSecrets()
	const { checkFinger } = useLocalAuth()

	const { fingerprint, isBiometricSupported, isAccess } =
		useBiometrics.use.state()

	const pressYes = async () => {
		if (fingerprint && isBiometricSupported) {
			await checkFinger()
		} else {
			setMasterKeyModal(true)
		}
	}

	useEffect(() => {
		if (isAccess) {
			removeSecrets()
			setAccess(false)
			close()
		}
	}, [isAccess])

	return (
		<ModalApp visible={visible} onRequestClose={close}>
			<Text style={styles.title}>
				Вы действительно хотите удалить все секреты?
			</Text>
			<View style={styles.btns}>
				<ButtonApp
					title='Нет'
					variant='contained'
					color='error'
					onPress={close}
					containerStyles={{ flexBasis: '45%' }}
				/>
				<ButtonApp
					title='Да'
					variant='contained'
					color='success'
					onPress={pressYes}
					containerStyles={{ flexBasis: '45%' }}
				/>
			</View>
		</ModalApp>
	)
}
