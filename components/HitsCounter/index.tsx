import { useEffect, useState } from 'react'
export default function HitCounter() {
  const [value, setValue] = useState(0)
  useEffect(() => {
    ;(async () => {
      const response = await fetch(`${window.location.href}/api/hit-counter`)
      const data = await response.json()
      setValue(data.value)
    })()
  }, [])
  return <p className="text-gray-300">Hits {value || 'counting...'}</p>
}
