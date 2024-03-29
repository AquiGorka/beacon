import { useState, useEffect } from 'react'

import Header from './Header'
import Dashboard from './Dashboard'
import Pages from './Pages'
import Footer from './Footer'

type MockData = {
  id: string
  labels: string[]
  status: string
  confirm: string[]
}

const hardcodedData = {
  id: '27658930',
  labels: ['Carrier', 'Carrier Info'],
  status: 'High',
  confirm: ['Carrier info'],
}

function useSidePanel() {
  const [data, setData] = useState<MockData | null>(null)

  useEffect(() => {
    setData(hardcodedData)
  }, [])

  return data
}

export function SidePanel() {
  const data = useSidePanel()

  if (!data) {
    return null
  }

  return (
    <>
      <Header />
      <Dashboard data={data} />
      <Pages />
      <Footer />
    </>
  )
}

export default SidePanel
