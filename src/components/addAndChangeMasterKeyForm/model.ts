import * as Yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

export type AddAndChangeMasterKeyType = {
  masterKey: string
  confirmMasterKey: string
}

const schema = Yup.object().shape({
  masterKey: Yup.string()
    .min(2, 'Минимальная длина 6 символов')
    .max(100, 'Максимальная длина 18 символов')
    .required('Обязательное поле'),
  confirmMasterKey: Yup.string()
    .required('Мастер ключ должен совпадать')
    .oneOf([Yup.ref('masterKey')], 'Мастер ключ должен совпадать'),
})

export const useAddAndChangeMasterKeyForm = () => {
  return useForm<AddAndChangeMasterKeyType>({
    defaultValues: {
      masterKey: '',
      confirmMasterKey: '',
    },
    resolver: yupResolver(schema),
  })
}
