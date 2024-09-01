import { useEffect, useRef, useState } from 'react'

export const useDebounce = (value: string, delay: number = 800) => {
  const [debouncedValue, setDebouncedValue] = useState('')
  const timerRef = useRef<number>(0)

  useEffect(() => {
    timerRef.current = +setTimeout(() => setDebouncedValue(value), delay)

    return () => {
      clearTimeout(timerRef.current)
    }
  }, [value, delay])

  return debouncedValue
}
