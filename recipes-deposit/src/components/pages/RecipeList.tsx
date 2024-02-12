import { Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

export const PRODUCTS = [
    { id: 'p1', title: 'Kuře na paprice', img: 'gulas.jpg' },
    { id: 'p2', title: 'Guláš', img: 'kureNaPap.jpg' },
    { id: 'p1', title: 'Lasagne', img: 'lasagne.jpg' },
];
const imageUrl: string = 'src/photos/';

export const RecipeList: React.FC = () => {
    return (
        <>
            <h1> Recepty </h1>

            <Grid>
                {PRODUCTS.map((prod) => (
                    <Box
                        sx={{ height: 50 }}
                        key={prod.id}
                    >
                        <Link to={`/recipe/${prod.id}`}>{prod.title}</Link>
                        <Box
                            component="img"
                            sx={{ height: 60 }}
                            src={imageUrl + prod.img}
                        />
                    </Box>
                ))}
            </Grid>
        </>
    );
};
