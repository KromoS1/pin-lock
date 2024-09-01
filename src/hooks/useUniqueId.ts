import { useEffect, useState } from 'react'

import DeviceInfo from 'react-native-device-info'

export const useUniqueId = () => {
  const [uniqueId, setUniqueId] = useState<string | null>(null)

  useEffect(() => {
    const fetchUniqueId = async () => {
      const id = await DeviceInfo.getUniqueId()

      setUniqueId(id)
    }

    fetchUniqueId()
  }, [])

  return uniqueId
}
