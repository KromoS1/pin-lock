import * as SecureStore from 'expo-secure-store'
import { KeySS } from '../constants/keySS'

export const SS = {
	get: async <T>(key: KeySS): Promise<T | null> => {
		try {
			const res = await SecureStore.getItemAsync(key)

			if (!res) {
				return null
			}

			return res ? JSON.parse(res) : undefined
		} catch (e) {
			console.log('SS get ERROR', e)

			return null
		}
	},
	set: async <V>(key: KeySS, value: V): Promise<void | null> => {
		try {
			const serialized = JSON.stringify(value)

			await SecureStore.setItemAsync(key, serialized)
		} catch (e) {
			console.log('SS set ERROR', e)

			return null
		}
	},
}

// async function getValueFor(key) {
//   let result = await SecureStore.getItemAsync(key);
//   if (result) {
//     alert("🔐 Here's your value 🔐 \n" + result);
//   } else {
//     alert('No values stored under that key.');
//   }
// }
