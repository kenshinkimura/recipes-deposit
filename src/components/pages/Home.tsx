import { Container } from '@mui/material';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
    return (
        <Container
            maxWidth="xs"
            sx={{ m: 10, display: 'flex', alignItems: 'center' }}
        >
            <div>My home page</div>

            <div><Link to="/recipe/:recipeId">Add Recipe</Link></div>

            <div><Link to="/recipeList">Recipes</Link></div>
        </Container>
    );
};
