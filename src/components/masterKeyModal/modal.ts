import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'

export type MasterKyeFormType = {
	masterKey: string
}

const schema = Yup.object().shape({
	masterKey: Yup.string()
		.min(2, 'Минимальная длина 2 символов')
		.max(100, 'Максимальная длина 100 символов')
		.required('Обязательное поле'),
})

export const useCheckMasterKeyForm = () => {
	return useForm<MasterKyeFormType>({
		defaultValues: {
			masterKey: '',
		},
		resolver: yupResolver(schema),
	})
}
