import RestaurantIcon from '@mui/icons-material/Restaurant';
import AppBar from '@mui/material/AppBar';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export const Header = (): JSX.Element => {
    return (

        <AppBar >
            <Toolbar>

                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="logo"
                >
                    <RestaurantIcon/>
                </IconButton>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1 }}
                >
                      RECIPES DEPOSIT
                </Typography>

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
