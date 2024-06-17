import RestaurantIcon from '@mui/icons-material/Restaurant';
import AppBar from '@mui/material/AppBar';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack/Stack';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import { ADD_C, HOME_C, RECIPE_C, RECIPIES_C, SIGN_UP_C } from '@/constants';

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
                    >{HOME_C}</Button>
                    <Button
                        component={Link}
                        to={'/recipeList'}
                        color="inherit"
                    >{RECIPIES_C}</Button>
                    <Button
                        component={Link}
                        to={'/addrecipe'}
                        color="inherit"
                    >{ADD_C} {RECIPE_C}</Button>
                    <Button
                        component={Link}
                        to={'/signUp'}
                        color="inherit"
                    >{SIGN_UP_C}</Button>

                </Stack>
            </Toolbar>
        </AppBar>

    );
};
