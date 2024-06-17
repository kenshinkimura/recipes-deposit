import {
    Card,
    CardContent,
    Container,
    Typography,
    CircularProgress,
    Button, Box,
} from '@mui/material';

import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ConfirmationDialog } from '@/components/ConfirmationDialog.tsx';
import { BACK_TO_HOME_C, DELETE_RECIPE_C, EDIT_RECIPE_C, NO_RECIPE_FOUND } from '@/constants';
import { getRecipeDetail } from '@/services/resipeServices.ts';
import { FormData } from '@/types/FormData.ts';

export const RecipeDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [recipe, setRecipe] = useState<FormData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [openDialog, setOpenDialog] = useState<boolean>(false);
    const navigate = useNavigate();

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

    const handleDelete = () => {
        setOpenDialog(true);
    };
    const confirmDelete = () => {
        const dataString = localStorage.getItem('formData');
        if (dataString) {
            const parsedData: FormData[] = JSON.parse(dataString);
            const updatedData = parsedData.filter(item => item.id !== id);
            localStorage.setItem('formData', JSON.stringify(updatedData));
            navigate('/recipeList');
        }
        setOpenDialog(false);
    };

    const cancelDelete = () => {
        setOpenDialog(false);
    };

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
                    >{BACK_TO_HOME_C}</Typography>
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
                    {NO_RECIPE_FOUND}
                </Typography>
                <Box
                    component={Link}
                    to="/"
                >
                    <Typography
                        variant="body1"
                        color="primary"
                    >{BACK_TO_HOME_C}</Typography>
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
            <Box
                mt={2}
                sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate(`/edit/${id}`)}
                >
                    {EDIT_RECIPE_C}
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleDelete}
                >
                    {DELETE_RECIPE_C}
                </Button>
            </Box>
            <Box mt={2}>
                <Box
                    component={Link}
                    to="/"
                >
                    <Typography
                        variant="body1"
                        color="primary"
                    >{BACK_TO_HOME_C}</Typography>
                </Box>
            </Box>
            {/* Confirmation Dialog */}
            <ConfirmationDialog
                open={openDialog}
                title="Confirm Deletion"
                description="Are you sure you want to delete this recipe? This action cannot be undone."
                onConfirm={confirmDelete}
                onCancel={cancelDelete}
            />
        </Container>
    );
};
