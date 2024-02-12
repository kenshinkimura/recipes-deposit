
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
    return (
        <main>
            <div>My home page</div>
            <div><Link to="/recipe/:recipeId">Add Recipe</Link></div>
            <div><Link to="/recipeList">Recipes</Link></div>

        </main>
    );
};
