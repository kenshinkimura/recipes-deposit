import { Container, List } from '@mui/material';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

export const RecipeDetail: React.FC = () => {
    const params = useParams();
    return (
        <>
            <Container
                maxWidth="md"
                sx={{ mt: 6 }}
            ><List>
                    <h1> Recept {params.recipeId} </h1>
                    <p> Popis receptu</p>
                    <Link to="/recipeList">RecipeList</Link>
                </List>
            </Container>
        </>
    );
};
