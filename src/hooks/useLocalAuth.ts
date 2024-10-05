import * as LocalAuthentication from 'expo-local-authentication'
import { useEffect } from 'react'
import { useBiometrics } from '../stores/biometrics/biometrics.store'

export const useInitLocalAuth = () => {
	const { setBiometricSupported, setFingerprint } = useBiometrics()

	useEffect(() => {
		;(async () => {
			//Определите, имеется ли на устройстве сканер лица или отпечатков пальцев
			const compatible = await LocalAuthentication.hasHardwareAsync()
			setBiometricSupported(compatible)

			//Определите, сохранило ли устройство отпечатки пальцев или данные лица для использования при аутентификации.
			const enroll = await LocalAuthentication.isEnrolledAsync()
			if (enroll) {
				setFingerprint(true)
			}
		})()
	}, [])
}

export const useLocalAuth = () => {
	const { isBiometricSupported, fingerprint, isAccess, isError } =
		useBiometrics().state
	const setAccess = useBiometrics().setAccess
	const setError = useBiometrics().setError

	const checkFinger = async () => {
		if (!isBiometricSupported || !fingerprint) {
			return
		}

		try {
			const biometricAuth = await LocalAuthentication.authenticateAsync({
				biometricsSecurityLevel: 'strong',
				disableDeviceFallback: true,
				promptMessage: 'Подтвердите свою личность',
				cancelLabel: 'Отмена',
			})

			if (biometricAuth.success) {
				setAccess(biometricAuth.success)
			} else {
				// если прошли все попытки, надо включить мастер ключ
				setError(true)
			}
		} catch (error) {
			setError(true)
			console.log(error)
		}
	}

	return { isAccess, isError, checkFinger }
}
