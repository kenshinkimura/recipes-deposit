import { Container, ThemeProvider, createTheme, colors } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { Footer } from '@/layout/Footer.tsx';
import { Header } from '@/layout/Header.tsx';
import classes from '@/pages/Root.module.css';

const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        secondary: {
            main: colors.orange[500],
        },
        primary: {
            main: colors.orange[500],

        },
        neutral: {
            main: colors.grey[500],
            darker: colors.grey[700],
        },
    },
});

export const RootLayout: React.FC = () => {
    return (

        <ThemeProvider
            theme={theme}
        >
            <Header/>
            <Container
                className={classes.content}
                sx={{ height: '100%', display: 'flex' }}
            >
                <Outlet/>
            </Container>
            <Footer/>
        </ThemeProvider>

    );
};
