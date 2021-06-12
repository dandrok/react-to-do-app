import React from 'react'
import AssemblyLine from './components/AssemblyLine'
const App = () => {
  return (
    <div>
      <AssemblyLine stages={['Idea', 'Development', 'Testing', 'Deployment']} />
    </div>
  )
}

export default App
