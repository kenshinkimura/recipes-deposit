import RestaurantIcon from '@mui/icons-material/Restaurant';
import AppBar from '@mui/material/AppBar';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack/Stack';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';

export const Header = (): JSX.Element => {
    return (

        <AppBar
            sx={{ pl: 50, pr: 50 }}
            color="secondary"

        >
            <Toolbar >
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="logo"
                    component={Link}
                    to={'/'}
                >
                    <RestaurantIcon />
                </IconButton>

                <Stack
                    direction="row"
                    spacing={4}
                >
                    <Button
                        component={Link}
                        to={'/'}
                        color="inherit"
                    >Home</Button>
                    <Button
                        component={Link}
                        to={'/recipeList'}
                        color="inherit"
                    >Recipes</Button>
                    <Button
                        component={Link}
                        to={'/addrecipe'}
                        color="inherit"
                    >Add Recipe</Button>
                    <Button
                        component={Link}
                        to={'/signUp'}
                        color="inherit"
                    >Sign Up</Button>

                </Stack>
            </Toolbar>
        </AppBar>

    );
};
