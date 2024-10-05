import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'

export type AddSecretType = {
	title: string
	value: string
}

const schema = Yup.object().shape({
	title: Yup.string()
		.min(2, 'Минимальная длина 2 символов')
		.max(50, 'Максимальная длина 50 символов')
		.required('Обязательное поле'),
	value: Yup.string()
		.min(3, 'Минимальная длина 3 символов')
		.max(50, 'Максимальная длина 50 символов')
		.required('Обязательное поле'),
})

export const useAddSecretForm = () => {
	return useForm<AddSecretType>({
		defaultValues: {
			title: '',
			value: '',
		},
		resolver: yupResolver(schema),
	})
}
