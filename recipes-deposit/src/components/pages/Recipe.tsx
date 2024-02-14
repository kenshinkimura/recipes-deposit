import { Link, useParams } from 'react-router-dom';
import { PRODUCTS, imageUrl } from '@/components/pages/RecipeList.tsx';
import { Box } from '@mui/material';

export const Recipe: React.FC = () => {
    const params = useParams();
    const data = PRODUCTS.find(p => p.id === params.recipeId);

    return (
        <><div>Recipe details</div>
            <div>{data?.title}</div>
            <Box
                component="img"
                src={imageUrl + data?.img}
            />
            <Link to={'/'}>go to home page</Link></>
    );
};
