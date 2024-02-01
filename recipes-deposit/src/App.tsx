import './App.css'
import {Home} from "@/components/Home.tsx";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom'
import {Recipe} from '@/components/Recipe.tsx';

const routeDefinitions = createRoutesFromElements(
    <Route>
        <Route path='/' element={<Home/>}/>
        <Route path='/recipe' element={<Recipe/>}/>
    </Route>
)


const router = createBrowserRouter(routeDefinitions)

function App() {


    return (
        <>
            <RouterProvider router={router}></RouterProvider>

        </>
    )
}

export default App
