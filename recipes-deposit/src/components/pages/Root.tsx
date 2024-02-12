import { Outlet } from 'react-router-dom';

import classes from '@/components/pages/Root.module.css';
import { Header } from '@/components/layout/Header.tsx';
import { Footer } from '@/components/layout/Footer.tsx';

export const RootLayout: React.FC = () => {
    return (
        <>
            <Header/>

            <main className={classes.content}>
                <Outlet/>
            </main>
            <Footer/>

        </>
    );
};
