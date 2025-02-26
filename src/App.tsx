import { Footer } from './components/footer'
import { Header } from './components/header'
import { Outlet } from 'react-router'

function App() {

  return <div className='flex flex-col min-h-screen justify-between'>
    <Header />
    <Outlet />
    <Footer />
  </div>
}

export default App
