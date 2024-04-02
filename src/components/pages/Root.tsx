import { Container, ThemeProvider, createTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { Footer } from '@/components/layout/Footer.tsx';
import { Header } from '@/components/layout/Header.tsx';
import classes from '@/components/pages/Root.module.css';

const defaultTheme = createTheme();

export const RootLayout: React.FC = () => {
    return (

        <ThemeProvider
            theme={defaultTheme}
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
