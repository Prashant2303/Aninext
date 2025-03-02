import { Footer } from './components/footer'
import { Header } from './components/header'
import { Outlet } from 'react-router'

function App() {

  return <div>
    <Header />
    <section className='p-4 xl:mx-40'>
      <Outlet />
    </section>
    <Footer />
  </div>
}

export default App
