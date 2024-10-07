import { APP_PADDING } from '@/src/constants/scaleSIzes'
import { useSecret } from '@/src/stores/secrets/secrets.store'
import { SecretsType } from '@/src/types/pin.type'
import { useLocalAuth } from '@src/hooks/useLocalAuth'
import { useApp } from '@src/stores/app/app.store'
import { useBiometrics } from '@src/stores/biometrics/biometrics.store'
import React, { memo, useCallback, useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { Secret } from './secret'
import { styles } from './style'

import { useBoolean } from '@/src/hooks'
import { ButtonApp } from '@/src/simple/buttonApp/ButtonApp'
import { Text, View } from '../Themed'

export const ListSecrets = memo(() => {
	const secrets = useSecret.use.state().secrets
	const showSecret = useSecret.use.state().showSecret
	const setMasterKeyModal = useApp.use.setMasterKeyModal()
	const deleteSecret = useSecret.use.deleteSecrets()

	const { checkFinger } = useLocalAuth()

	const { fingerprint, isBiometricSupported, isAccess } =
		useBiometrics.use.state()

	const deleteMode = useBoolean()
	const [deleteSecretsList, setDeleteSecretsList] = useState<string[]>([])

	const selectDeleteSecret = (secretId: string) => {
		setDeleteSecretsList(prev =>
			prev.includes(secretId)
				? prev.filter(id => id !== secretId)
				: [...prev, secretId]
		)
	}

	const cancelDeleteActionsModeHandler = () => {
		deleteMode.setFalse()
		setDeleteSecretsList([])
	}

	const deleteSecretsHandler = async () => {
		if (fingerprint && isBiometricSupported) {
			await checkFinger()
		} else {
			setMasterKeyModal(true)
		}
	}

	const renderItem = useCallback(
		({ item }: { item: SecretsType }) => {
			const isSelected = deleteSecretsList.includes(item.id)

			return (
				<Secret
					secret={item}
					isDeleteMode={deleteMode.value}
					isSelected={isSelected}
					onShowDeleteMode={deleteMode.toggle}
					selectDeleteSecret={selectDeleteSecret}
				/>
			)
		},
		[secrets, deleteMode.value, deleteSecretsList]
	)

	useEffect(() => {
		if (isAccess && !showSecret) {
			deleteSecret(deleteSecretsList)
			deleteMode.setFalse()
		}
	}, [isAccess])

	const renderDeleteActions = () => {
		return (
			<>
				{deleteMode.value ? (
					<View style={styles.deleteActionsButtonContainer}>
						<ButtonApp
							containerStyles={{
								flexBasis: '40%',
								paddingTop: 4,
								paddingBottom: 4,
							}}
							onPress={cancelDeleteActionsModeHandler}
							title={'Отменить'}
							variant='contained'
							color={'success'}
						/>
						<ButtonApp
							disabled={!deleteSecretsList.length}
							onPress={deleteSecretsHandler}
							containerStyles={{ flexBasis: '40%' }}
							title={'Удалить'}
							variant='contained'
							color={'error'}
						/>
					</View>
				) : (
					<View style={styles.separator30} />
				)}
			</>
		)
	}

	return (
		<FlatList
			data={secrets}
			renderItem={renderItem}
			keyExtractor={item => item.id}
			style={{ paddingHorizontal: APP_PADDING }}
			ListHeaderComponent={renderDeleteActions}
			ListFooterComponent={() => <View style={styles.separator100} />}
			ItemSeparatorComponent={() => <View style={styles.separator30} />}
			ListEmptyComponent={() => {
				return (
					<View style={styles.boxEmpty}>
						<Text style={styles.emptyText}>Список секретов пока пуст</Text>
					</View>
				)
			}}
		/>
	)
})
