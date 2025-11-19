import { useState } from 'react'

import AppRouter from './router.jsx'

function App() {
  const [count, setCount] = useState(0)

  return <AppRouter />
}

export default App
