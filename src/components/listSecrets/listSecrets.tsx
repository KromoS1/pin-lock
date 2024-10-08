import { APP_PADDING } from '@/src/constants/scaleSIzes'
import { useSecret } from '@/src/stores/secrets/secrets.store'
import { SecretsType } from '@/src/types/pin.type'
import { useLocalAuth } from '@src/hooks/useLocalAuth'
import { useBiometrics } from '@src/stores/biometrics/biometrics.store'
import React, { memo, useCallback, useEffect } from 'react'
import { FlatList } from 'react-native'
import { Secret } from './secret'
import { styles } from './style'

import { useSelectedMode } from '@/src/hooks/useSelectedMode'
import { ButtonApp } from '@/src/simple/buttonApp/ButtonApp'
import { Text, View } from '../Themed'

export const ListSecrets = memo(() => {
	const secrets = useSecret.use.state().secrets
	const showSecret = useSecret.use.state().showSecret
	const isAccess = useBiometrics.use.state().isAccess
	const { selectMode, selectedSecret, setSelectSecret, offSelectMode } =
		useSelectedMode()

	const setAccess = useBiometrics().setAccess
	const deleteSecret = useSecret.use.deleteSecrets()

	const { checkFinger } = useLocalAuth()

	const renderItem = useCallback(
		({ item }: { item: SecretsType }) => {
			const isSelected = selectedSecret.includes(item.id)

			const setSecretForSelect = () => {
				setSelectSecret(item.id)
			}

			return (
				<Secret
					secret={item}
					isSelectMode={selectMode.value}
					isSelected={isSelected}
					toggleSelectMode={selectMode.toggle}
					setSelectedSecret={setSecretForSelect}
				/>
			)
		},
		[secrets, selectMode.value, selectedSecret]
	)

	useEffect(() => {
		if (isAccess && !showSecret) {
			deleteSecret(selectedSecret)
			offSelectMode()
			setAccess(false)
		}
	}, [isAccess])

	const renderDeleteActions = () => {
		return (
			<>
				{selectMode.value ? (
					<View style={styles.deleteActionsButtonContainer}>
						<ButtonApp
							containerStyles={{
								flexBasis: '40%',
								paddingTop: 4,
								paddingBottom: 4,
							}}
							onPress={offSelectMode}
							title={'Отменить'}
							variant='contained'
							color={'success'}
						/>
						<ButtonApp
							disabled={!selectedSecret.length}
							onPress={checkFinger}
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
