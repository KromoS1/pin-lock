import { APP_PADDING } from '@/src/constants/scaleSIzes'
import { useSecret } from '@/src/stores/secrets/secrets.store'
import { SecretsType } from '@/src/types/pin.type'
import { memo, useCallback } from 'react'
import { FlatList } from 'react-native'
import { Text, View } from '../Themed'
import { Secret } from './secret'
import { styles } from './style'

export const ListSecrets = memo(() => {
	const secrets = useSecret.use.state().secrets

	const renderItem = useCallback(
		({ item }: { item: SecretsType }) => {
			return <Secret secret={item} />
		},
		[secrets]
	)

	return (
		<FlatList
			data={secrets}
			renderItem={renderItem}
			ListEmptyComponent={() => {
				return (
					<View style={styles.boxEmpty}>
						<Text style={styles.emptyText}>Список секретов пока пуст</Text>
					</View>
				)
			}}
			ListHeaderComponent={() => <View style={styles.separator30} />}
			ListFooterComponent={() => <View style={styles.separator100} />}
			ItemSeparatorComponent={() => <View style={styles.separator30} />}
			keyExtractor={item => item.id}
			style={{ paddingHorizontal: APP_PADDING }}
		/>
	)
})
