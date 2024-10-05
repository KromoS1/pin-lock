import {
	AddAndChangeMasterKeyType,
	useAddAndChangeMasterKeyForm,
} from '@src/components/addAndChangeMasterKeyForm/model'
import { Text, View } from '@src/components/Themed'
import { APP_PADDING } from '@src/constants/scaleSIzes'
import { useBoolean } from '@src/hooks'
import { ButtonApp } from '@src/simple/buttonApp/ButtonApp'
import { InputApp } from '@src/simple/inputApp/InputApp'
import { useApp } from '@src/stores/app/app.store'
import { useRouter } from 'expo-router'
import React from 'react'
import { Controller } from 'react-hook-form'

import { KeySS } from '@/src/constants/keySS'
import { useHashApp } from '@/src/hooks/useHash'
import { SS } from '@/src/utils/secureStorage'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { styles } from './styles'

export const AddAndChangeMasterKeyForm = () => {
	const isMasterKey = useApp.use.state().isMasterKey
	const {
		control,
		handleSubmit,
		watch,
		formState: { errors },
	} = useAddAndChangeMasterKeyForm()

	const showSecret = useBoolean()
	const { back } = useRouter()
	const setIsMasterKey = useApp.use.setIsMasterKey()
	const createHash = useHashApp()

	const submit = async (data: AddAndChangeMasterKeyType) => {
		const hash = await createHash(data.masterKey)
		if (hash) {
			setIsMasterKey(true)
			await SS.set(KeySS.masterKey, hash)
			back()
		}
	}

	return (
		<KeyboardAwareScrollView
			style={{
				flex: 1,
				paddingHorizontal: APP_PADDING,
			}}
		>
			<View style={styles.container}>
				<Text style={styles.title}>
					Мастер ключ нужен для последующего доступа к вашим секретам. Ни кому
					его не передавайте.
				</Text>
				<View style={styles.form}>
					<View style={styles.fields}>
						<Controller
							control={control}
							name='masterKey'
							render={({ field: { value, onChange } }) => {
								return (
									<InputApp
										secureTextEntry={!showSecret.value}
										placeholder='Введите мастер ключ'
										textError={errors?.masterKey?.message}
										value={value}
										onChangeText={value => onChange(value)}
									/>
								)
							}}
						/>
						<Controller
							name='confirmMasterKey'
							control={control}
							render={({ field: { value, onChange } }) => {
								return (
									<InputApp
										secureTextEntry={!showSecret.value}
										placeholder='Повторите мастер ключ'
										textError={errors?.confirmMasterKey?.message}
										value={value}
										onChangeText={value => onChange(value)}
									/>
								)
							}}
						/>
					</View>
					<ButtonApp
						disabled={
							!watch('masterKey').length || !watch('confirmMasterKey').length
						}
						title={isMasterKey ? 'Изменить' : 'Добавить'}
						variant='contained'
						color='success'
						onPress={handleSubmit(submit)}
					/>
				</View>
			</View>
		</KeyboardAwareScrollView>
	)
}
