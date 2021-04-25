import { useEffect, useState } from 'react'

// Hook
interface Sizes {
  width: undefined | number
  height: undefined | number
}
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<Sizes>({
    width: undefined,
    height: undefined
  })
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return windowSize
}

export function useQuery() {
  return new URLSearchParams(window.location.search)
}
