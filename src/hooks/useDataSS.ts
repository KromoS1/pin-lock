import {useEffect} from "react";
import {SS} from "@src/utils/secureStorage";
import {KeySS} from "@src/constants/keySS";
import {useSecret} from "@src/stores/secrets/secrets.store";
import {useApp} from "@src/stores/app/app.store";

export const useDataSS = () => {
  const addSecrets = useSecret.use.addSecrets()
  const setIsMasterKey = useApp.use.setIsMasterKey()

  useEffect(() => {
    ;(async () => {
      const masterKey = await SS.get(KeySS.masterKey)
      try {
          if(masterKey) {
            setIsMasterKey(true)
          }
      } catch (e) {
        console.log(e)
      }
    })()
    ;(async () => {
      const secretsString = (await SS.get(KeySS.codes)) as string
      try {
        if (secretsString) {
          const secrets = JSON.parse(secretsString)
          addSecrets(secrets)
        }
      } catch (e) {
        console.log(e)
      }
    })()
  }, [])
}
