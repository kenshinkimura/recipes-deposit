import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack/Stack';
import { Link } from 'react-router-dom';

export const Header = (): JSX.Element => {
    return (

        <AppBar position="absolute">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
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
