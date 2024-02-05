import './App.css'
import { Home } from '@/components/pages/Home.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Recipe } from '@/components/pages/Recipe.tsx'
import { Header } from '@/components/layout/Header.tsx'
import { Footer } from '@/components/layout/Footer.tsx'
import { RootLayout } from '@/components/pages/Root.tsx'
import { ErrorPage } from '@/components/pages/Error.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      { path: '/', element: <Home/> },
      { path: '/recipe', element: <Recipe/> }
    ]
  }
])

// const routeDefinitions = createRoutesFromElements(
//     <Route>
//         <Route path= '/' element={<RootLayout/>} children={[
//             <Route path='/' element={<Home/>}></Route>
//             <Route path='/recipe' element={<Recipe/>}></Route>
//         ]}/>
//     </Route>
// )

// const router = createBrowserRouter(routeDefinitions)

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
