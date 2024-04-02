import { Link } from 'react-router-dom';

export const ErrorPage: React.FC = () => {
    return (
        <>

            <main>
                <h1>An error occurred</h1>
                <p>Could not find this page</p>
                <Link to={'/'}>go to homepage</Link>

            </main>
        </>
    );
};
