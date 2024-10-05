import { View } from '@/src/components/Themed'
import { FC, PropsWithChildren } from 'react'
import { Modal, ModalBaseProps } from 'react-native'
import { styles } from './style'

export const ModalApp: FC<PropsWithChildren<ModalBaseProps>> = ({
	visible,
	onRequestClose,
	children,
}) => {
	return (
		<Modal
			animationType='fade'
			transparent={true}
			visible={visible}
			onRequestClose={onRequestClose}
		>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>{children}</View>
			</View>
		</Modal>
	)
}
