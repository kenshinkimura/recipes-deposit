import './App.css'
import { Home } from '@/components/Home.tsx'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import { Recipe } from '@/components/Recipe.tsx'
import { Header } from '@/components/Header.tsx'
import { Footer } from '@/components/Footer.tsx'

const routeDefinitions = createRoutesFromElements(
    <Route>
        <Route path='/' element={<Home/>}/>
        <Route path='/recipe' element={<Recipe/>}/>
    </Route>
)

const router = createBrowserRouter(routeDefinitions)

function App (): JSX.Element {
  return (
        <>
            <Header />
            <RouterProvider router={router}></RouterProvider>
<Footer></Footer>
        </>
  )
}

export default App
