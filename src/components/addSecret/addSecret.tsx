import { COLORS } from '@/src/constants/colorsApp'
import { useBoolean } from '@/src/hooks'
import { useMapModals } from '@/src/hooks/useModals'
import { BottomSheet } from '@/src/simple/bottomSheet/bottomSheet'
import { BtnAddPin } from '@/src/simple/btnAddPin/btnAddPin'
import { ButtonApp } from '@/src/simple/buttonApp/ButtonApp'
import { FeatherIcon, FontAwesomeIcon } from '@/src/simple/icons'
import { InputApp } from '@/src/simple/inputApp/InputApp'
import { useApp } from '@/src/stores/app/app.store'
import React, { FC, memo, useCallback } from 'react'
import { Controller } from 'react-hook-form'
import { TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Text, View } from '../Themed'
import { AddSecretType, useAddSecretForm } from './model'
import { styles } from './style'

export const AddSecret: FC = memo(() => {
	const { modal, toggleModal, refs, onClose } = useMapModals()
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useAddSecretForm()

	const showSecret = useBoolean()

	const setIsOpenModal = useApp.use.setIsOpenModal()

	const open = useCallback(() => {
		toggleModal('addPin', refs.addPin)
		setIsOpenModal(true)
	}, [refs])

	const submit = async (data: AddSecretType) => {
		console.log(data)
	}
	console.log(errors)

	return (
		<>
			<BtnAddPin press={open} />
			<BottomSheet ref={refs.addPin} isScroll={false}>
				{modal === 'addPin' && (
					<KeyboardAwareScrollView style={{ flex: 1 }}>
						<View style={styles.container}>
							<TouchableOpacity onPress={onClose} style={styles.cross}>
								<FeatherIcon color={COLORS.grey} name='x-circle' />
							</TouchableOpacity>
							<Text style={styles.title}>Добавление секрета</Text>
							<Text style={styles.subTitle}>
								Добавьте ваш секретик, что бы в случае, если вы его забудете, вы
								сможете его легко узнать
							</Text>
							<View style={styles.form}>
								<View style={{ gap: 32 }}>
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
													textError={errors?.title?.message}
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
				)}
			</BottomSheet>
		</>
	)
})
