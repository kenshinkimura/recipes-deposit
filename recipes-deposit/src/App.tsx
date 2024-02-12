import './App.css';
import { Home } from '@/components/pages/Home.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AddRecipe } from '@/components/pages/AddRecipe.tsx';

import { RootLayout } from '@/components/pages/Root.tsx';
import { ErrorPage } from '@/components/pages/Error.tsx';
import { Recipe } from '@/components/pages/Recipe.tsx';
import { SignUpPage } from '@/components/pages/SignUp.tsx';
import { RecipeList } from '@/components/pages/RecipeList.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            { path: '/', element: <Home/> },
            { path: '/recipe/:recipeId', element: <Recipe/> },
            { path: '/addrecipe', element: <AddRecipe/> },
            { path: '/recipeList', element: <RecipeList/> },
            { path: '/signUp', element: <SignUpPage/> },
        ],
    },
]);

// const routeDefinitions = createRoutesFromElements(
//     <Route>
//         <Route path= '/' element={<RootLayout/>} children={[
//             <Route path='/' element={<Home/>}></Route>
//             <Route path='/recipe' element={<AddRecipe/>}></Route>
//         ]}/>
//     </Route>
// )

// const router = createBrowserRouter(routeDefinitions)

function App(): JSX.Element {
    return (
        <><RouterProvider router={router} />

        </>
    );
}

export default App;
