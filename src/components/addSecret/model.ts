import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'

export type AddSecretType = {
	title: string
	value: string
}

const schema = Yup.object().shape({
	title: Yup.string()
		.min(5, 'Минимальная длина 5 символов')
		.max(100, 'Максимальная длина 100 символов')
		.required('Обязательное поле'),
	value: Yup.string()
		.min(5, 'Минимальная длина 5 символов')
		.max(10, 'Максимальная длина 100 символов')
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
