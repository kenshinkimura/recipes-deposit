import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { AddRecipe } from '@/pages/AddRecipe.tsx';
import { EditRecipe } from '@/pages/EditRecipe.tsx';
import { ErrorPage } from '@/pages/Error.tsx';
import { Home } from '@/pages/Home.tsx';
import { RecipeDetail } from '@/pages/RecipeDetail.tsx';
import { RecipeList } from '@/pages/RecipeList.tsx';
import { RootLayout } from '@/pages/Root.tsx';
import { SignUpPage } from '@/pages/SignUp.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            { path: '', element: <Home/> },
            { path: 'addrecipe', element: <AddRecipe/> },
            { path: 'recipeList/:id', element: <RecipeDetail/> },
            { path: 'recipeList', element: <RecipeList/> },
            { path: 'edit/:id', element: <EditRecipe /> },
            { path: 'signUp', element: <SignUpPage/> },
        ],
    },
]);

const App: React.FC = () => {
    return (
        <RouterProvider
            router={router}
        />
    );
};

export default App;
