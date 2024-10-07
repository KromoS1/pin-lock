import { FC, PropsWithChildren } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export const PageContainer: FC<PropsWithChildren> = ({ children }) => {
	return (
		<SafeAreaView
			style={{ flex: 1, backgroundColor: 'white' }}
			edges={['bottom', 'left', 'right']}
		>
			{children}
		</SafeAreaView>
	)
}
