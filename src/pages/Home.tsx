import { Button, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
    return (
        <Container
            maxWidth="sm"
            sx={{ mt: 10 }}
        >
            <Typography
                variant="h4"
                align="center"
                gutterBottom={true}
            >
                Welcome to My Recipes
            </Typography>
            <Typography
                variant="body1"
                align="center"
                gutterBottom={true}
            >
                Explore and manage your recipes easily!
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                    variant="contained"
                    component={Link}
                    to="/addrecipe"
                    sx={{ mr: 2 }}
                >
                    Add Recipe
                </Button>
                <Button
                    variant="outlined"
                    component={Link}
                    to="/recipeList"
                >
                    View Recipes
                </Button>
            </div>
        </Container>
    );
};
