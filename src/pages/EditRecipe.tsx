import { Box, Button, Container, Grid, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { EDIT_C, RECIPE_C, SAVE_C } from '@/constants';
import { getRecipeDetail } from '@/services/resipeServices.ts';
import { FormData } from '@/types/FormData.ts';

export const EditRecipe: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [recipe, setRecipe] = useState<FormData | null>(null);
    const { register, handleSubmit, setValue } = useForm<FormData>();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            getRecipeDetail(id).then(data => {
                if (data) {
                    setRecipe(data);
                    // Set form values
                    setValue('recipeName', data.recipeName);
                    setValue('description', data.description);
                }
            });
        }
    }, [id, setValue]);

    const onSubmit: SubmitHandler<FormData> = (data) => {
        if (recipe) {
            const updatedRecipe = { ...recipe, ...data };
            const dataString = localStorage.getItem('formData');
            if (dataString) {
                const parsedData: FormData[] = JSON.parse(dataString);
                const updatedData = parsedData.map(item => item.id === id ? updatedRecipe : item);
                localStorage.setItem('formData', JSON.stringify(updatedData));
                navigate(`/recipeList/${id}`); // Navigate back to the recipe detail page after saving
            }
        }
    };

    return (
        <Container
            component="main"
            maxWidth="sm"
        >
            <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography
                    component="h1"
                    variant="h5"
                    gutterBottom={true}
                >
                    {EDIT_C} {RECIPE_C}
                </Typography>
                <Box
                    component="form"
                    noValidate={true}
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{ mt: 3 }}
                >
                    <Grid
                        container={true}
                        spacing={2}
                    >
                        <Grid
                            item={true}
                            xs={12}
                        >
                            <TextField
                                autoComplete="recipe-name"
                                required={true}
                                fullWidth={true}
                                id="recipeName"
                                label="Recipe Name"
                                autoFocus={true}
                                {...register('recipeName', { required: true, maxLength: 25, pattern: /^[a-zA-Z_ ]*$/i })}
                            />
                        </Grid>
                        <Grid
                            item={true}
                            xs={12}
                        >
                            <TextField
                                required={true}
                                id="description"
                                label="Description"
                                variant="outlined"
                                fullWidth={true}
                                multiline={true}
                                rows={3}
                                size="small"
                                {...register('description', { required: true, maxLength: 500 })}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth={true}
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        {SAVE_C}
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};
