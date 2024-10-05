import { KeySS } from '@src/constants/keySS'
import { useApp } from '@src/stores/app/app.store'
import { useSecret } from '@src/stores/secrets/secrets.store'
import { SS } from '@src/utils/secureStorage'
import { useEffect } from 'react'

export const useDataSS = () => {
	const addSecrets = useSecret.use.addSecrets()
	const setIsMasterKey = useApp.use.setIsMasterKey()

	useEffect(() => {
		;(async () => {
			try {
				const secretsString = (await SS.get(KeySS.codes)) as string
				if (secretsString) {
					const secrets = JSON.parse(secretsString)
					addSecrets(secrets)
				}

				const masterKey = await SS.get(KeySS.masterKey)
				masterKey && setIsMasterKey(true)
			} catch (e) {
				console.log(e)
			}
		})()
	}, [])
}
