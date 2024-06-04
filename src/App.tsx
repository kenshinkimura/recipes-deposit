import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { AddRecipe } from '@/components/pages/AddRecipe.tsx';
import { ErrorPage } from '@/components/pages/Error.tsx';
import { Home } from '@/components/pages/Home.tsx';
import { RecipeDetail } from '@/components/pages/RecipeDetail.tsx';
import { RecipeList } from '@/components/pages/RecipeList.tsx';
import { RootLayout } from '@/components/pages/Root.tsx';
import { SignUpPage } from '@/components/pages/SignUp.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            { path: '', element: <Home/> },
            { path: 'addrecipe', element: <AddRecipe/> },
            { path: 'recipeList/:recipeId', element: <RecipeDetail/> },
            { path: 'recipeList', element: <RecipeList/> },
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
