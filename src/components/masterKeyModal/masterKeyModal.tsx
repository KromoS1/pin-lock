import { COLORS } from '@/src/constants/colorsApp'
import { KeySS } from '@/src/constants/keySS'
import { scale } from '@/src/constants/scaleSIzes'
import { useBoolean } from '@/src/hooks'
import { useHashApp } from '@/src/hooks/useHash'
import { ButtonApp } from '@/src/simple/buttonApp/ButtonApp'
import { InputApp } from '@/src/simple/inputApp/InputApp'
import { SS } from '@/src/utils/secureStorage'
import { FC } from 'react'
import { Controller } from 'react-hook-form'
import { Pressable, View } from 'react-native'

import { FontAwesomeIcon } from '@/src/simple/icons'
import { ModalApp } from '@/src/simple/modalApp/modalApp'
import { useApp } from '@/src/stores/app/app.store'
import { useBiometrics } from '@/src/stores/biometrics/biometrics.store'
import { Text } from '../Themed'
import { MasterKyeFormType, useCheckMasterKeyForm } from './modal'
import { styles } from './styles'

export const MasterKeyModal: FC = () => {
	const {
		control,
		handleSubmit,
		reset,
		watch,
		formState: { errors },
	} = useCheckMasterKeyForm()

	const visibleText = useBoolean()
	const createHash = useHashApp()
	const setAccess = useBiometrics().setAccess
	const setError = useBiometrics().setError
	const masterKeyModal = useApp.use.state().masterKeyModal
	const setMasterKeyModal = useApp.use.setMasterKeyModal()

	const close = () => {
		reset()
		visibleText.setFalse()
		setMasterKeyModal(false)
	}

	const submit = async (data: MasterKyeFormType) => {
		const masterKeyHash = await SS.get<string>(KeySS.masterKey)

		const currentHashKey = await createHash(data.masterKey)

		if (masterKeyHash === currentHashKey) {
			setAccess(true)
		}
		setError(false)
		close()
	}

	return (
		<ModalApp visible={masterKeyModal} onRequestClose={close}>
			<View style={{ gap: scale(18), marginBottom: scale(24) }}>
				<Text style={styles.modalText}>Подтвердите ваш мастер ключ</Text>

				<Controller
					name='masterKey'
					control={control}
					render={({ field: { value, onChange } }) => {
						return (
							<InputApp
								placeholder='Введите мастер ключ'
								secureTextEntry={!visibleText.value}
								textError={errors?.masterKey?.message}
								value={value}
								onChangeText={value => onChange(value)}
								endIcon={
									<Pressable
										hitSlop={{
											bottom: 50,
											left: 50,
											right: 50,
											top: 50,
										}}
										onPress={visibleText.toggle}
									>
										<FontAwesomeIcon
											name={visibleText.value ? 'unlock' : 'lock'}
											color={COLORS.greenL}
											size={18}
										/>
									</Pressable>
								}
							/>
						)
					}}
				/>
			</View>

			<View style={styles.btns}>
				<ButtonApp
					title='Отмена'
					variant='contained'
					color='error'
					onPress={close}
					containerStyles={{ flexBasis: '30%' }}
				/>
				<ButtonApp
					disabled={!watch('masterKey').length}
					title='Подтвердить'
					variant='contained'
					color='success'
					onPress={handleSubmit(submit)}
					containerStyles={{ flexBasis: '60%' }}
				/>
			</View>
		</ModalApp>
	)
}
