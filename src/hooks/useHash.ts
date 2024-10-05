import { CONSTANTS, JSHash } from 'react-native-hash'

export const useHashApp = () => {
	const createHash = async (value: string) => {
		try {
			return await JSHash(value, CONSTANTS.HashAlgorithms.md5)
		} catch (error) {
			console.log(error)
			return null
		}
	}

	return createHash
}
