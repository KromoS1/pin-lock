import {ButtonApp} from '@/src/simple/buttonApp/ButtonApp'
import {ModalApp} from '@/src/simple/modalApp/modalApp'
import {useBiometrics} from '@/src/stores/biometrics/biometrics.store'
import {useSecret} from '@/src/stores/secrets/secrets.store'
import {FC} from 'react'
import {Pressable} from "react-native";
import {Feather} from "@expo/vector-icons";
import * as Clipboard from 'expo-clipboard';
import {Text, View} from '../Themed'
import {styles} from './style'
import {COLORS} from "@src/constants/colorsApp";
import {useBoolean} from "@src/hooks";

export const SecretModal: FC = () => {
	const copiedSecret = useBoolean()
	const access = useBiometrics.use.state().isAccess
	const secret = useSecret.use.state().showSecret

	const setAccess = useBiometrics.use.setAccess()
	const setShowSecret = useSecret.use.setShowSecret()

	const close = () => {
		setShowSecret(null)
		setAccess(false)
		copiedSecret.setFalse()
	}


	const copyToClipboard = async () => {
		try {
			await Clipboard.setStringAsync(secret?.value ?? '');
			copiedSecret.setTrue()
		} catch (e) {
			console.log('Error copy to clipboard',e)
		}
	};

	return (
		<ModalApp visible={access && !!secret} onRequestClose={close}>
			<Text style={styles.title}>Ваш секретик</Text>

			<Text style={styles.name}>{secret?.title}</Text>

			<View style={styles.secretContainer}>
				<Text style={styles.secret}>{secret?.value}</Text>
			</View>

			<Pressable onPress={copyToClipboard} style={styles.copyBtn}>
				<Text style={styles.name}>{copiedSecret.value ? 'Скопировано' : 'Скопировать'}</Text>
				<Feather name={copiedSecret.value ? 'check-circle' : 'copy'} size={24} color={COLORS.text} />
			</Pressable>

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
