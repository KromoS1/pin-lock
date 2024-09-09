import { COLORS } from '@/src/constants/colorsApp'
import { APP_PADDING } from '@/src/constants/scaleSIzes'
import { useBoolean } from '@/src/hooks'
import { ButtonApp } from '@/src/simple/buttonApp/ButtonApp'
import { FontAwesomeIcon } from '@/src/simple/icons'
import { InputApp } from '@/src/simple/inputApp/InputApp'
import { useSecret } from '@/src/stores/secrets/secrets.store'
import { useRouter } from 'expo-router'
import React, { FC, memo } from 'react'
import { Controller } from 'react-hook-form'
import { TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Text, View } from '../Themed'
import { AddSecretType, useAddSecretForm } from './model'
import { styles } from './style'

export const AddSecretForm: FC = memo(() => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useAddSecretForm()

	const showSecret = useBoolean()
	const { back } = useRouter()
	const addSecret = useSecret.use.addSecret()

	const submit = async (data: AddSecretType) => {
		addSecret(data)
		back()
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
					Добавьте ваш секретик, что бы в случае, если вы его забудете, вы
					сможете его легко узнать
				</Text>
				<View style={styles.form}>
					<View style={{ gap: 36 }}>
						<Controller
							name='title'
							control={control}
							render={({ field: { value, onChange } }) => {
								return (
									<InputApp
										placeholder='Введите название секрет'
										textError={errors?.title?.message}
										value={value}
										onChangeText={value => onChange(value)}
									/>
								)
							}}
						/>
						<Controller
							name='value'
							control={control}
							render={({ field: { value, onChange } }) => {
								return (
									<InputApp
										secureTextEntry={!showSecret.value}
										placeholder='Введите секрет'
										textError={errors?.value?.message}
										value={value}
										onChangeText={value => onChange(value)}
										endIcon={
											<TouchableOpacity onPress={showSecret.toggle}>
												<FontAwesomeIcon
													name={showSecret.value ? 'unlock' : 'lock'}
													color={COLORS.darkGreen}
													size={18}
												/>
											</TouchableOpacity>
										}
									/>
								)
							}}
						/>
					</View>
					<ButtonApp
						title='Сохранить'
						variant='contained'
						color='success'
						onPress={handleSubmit(submit)}
					/>
				</View>
			</View>
		</KeyboardAwareScrollView>
	)
})
