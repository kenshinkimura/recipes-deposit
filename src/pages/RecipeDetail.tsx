import { Card, CardContent, Container, Typography, CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getRecipeDetail } from '@/services/resipeServices.ts';
import { FormData } from '@/types/FormData.ts';

export const RecipeDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [recipe, setRecipe] = useState<FormData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
            getRecipeDetail(id)
                .then((data) => {
                    setRecipe(data || null);
                    setLoading(false);
                })
                .catch(() => {
                    setError('Failed to fetch recipe detail');
                    setLoading(false);
                });
        } else {
            setError('Invalid recipe ID');
            setLoading(false);
        }
    }, [id]);

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return (
            <Container>
                <Typography
                    variant="h6"
                    color="error"
                    gutterBottom={true}
                >
                    {error}
                </Typography>
                <Box
                    component={Link}
                    to="/"
                >
                    <Typography
                        variant="body1"
                        color="primary"
                    >Back to Home</Typography>
                </Box>
            </Container>
        );
    }

    if (!recipe) {
        return (
            <Container>
                <Typography
                    variant="h6"
                    color="textSecondary"
                    gutterBottom={true}
                >
                    No recipe found.
                </Typography>
                <Box
                    component={Link}
                    to="/"
                >
                    <Typography
                        variant="body1"
                        color="primary"
                    >Back to Home</Typography>
                </Box>
            </Container>
        );
    }

    return (
        <Container
            maxWidth="md"
            sx={{ mt: 10 }}
        >
            <Card sx={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
                <CardContent>
                    <Typography
                        variant="h4"
                        gutterBottom={true}
                    >
                        {recipe.recipeName}
                    </Typography>
                    <Typography
                        variant="body1"
                        gutterBottom={true}
                    >
                        {recipe.description}
                    </Typography>
                    {/* Add more detailed information about the recipe here */}
                </CardContent>
            </Card>
            <Box mt={2}>
                <Box
                    component={Link}
                    to="/"
                >
                    <Typography
                        variant="body1"
                        color="primary"
                    >Back to Home</Typography>
                </Box>
            </Box>
        </Container>
    );
};
