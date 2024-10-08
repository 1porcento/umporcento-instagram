import { BrowserRouter } from 'react-router-dom'
import RoutesApp from './src/routes'
import GlobalStyle from './src/styles/globalStyles'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <RoutesApp/>
    </BrowserRouter>
  )
}

export default App