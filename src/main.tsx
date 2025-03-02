import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import { MediaPage } from './pages/media/index.tsx'
import { Home } from './pages/home/index.tsx'
import { Search } from './pages/search/index.tsx'

const client = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache()
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Routes>
          <Route element={<App />} >
            <Route path='/' element={<Home />} />
            <Route path='/search/:query' element={<Search />} />
            <Route path='/media/:id' element={<MediaPage />} />
          </Route>
        </Routes>
      </ApolloProvider>
    </BrowserRouter>
  </StrictMode>
)
