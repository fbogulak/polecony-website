import { useState, useEffect } from 'react'

export function usePlatform() {
  const [platform, setPlatform] = useState('unknown')

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase()
    
    if (/(iphone|ipad|ipod)/.test(userAgent)) {
      setPlatform('ios')
    } else if (/android/.test(userAgent)) {
      setPlatform('android')
    } else if (/macintosh|mac os x/.test(userAgent)) {
      setPlatform('macos')
    } else if (/windows/.test(userAgent)) {
      setPlatform('windows')
    } else if (/linux/.test(userAgent)) {
      setPlatform('linux')
    } else {
      setPlatform('unknown')
    }
  }, [])

  return platform
}
