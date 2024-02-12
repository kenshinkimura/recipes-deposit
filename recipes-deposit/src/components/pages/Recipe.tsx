import { Link, useParams } from 'react-router-dom';
import { PRODUCTS } from '@/components/pages/RecipeList.tsx';

export const Recipe: React.FC = () => {
    const params = useParams();
    const data = PRODUCTS.find(p => p.id === params.recipeId);

    return (
        <><div>Recipe details</div>
            <div>{data?.title}</div>
            <Link to={'/'}>go to home page</Link></>
    );
};
