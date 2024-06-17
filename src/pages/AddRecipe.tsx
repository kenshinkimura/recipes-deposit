import {
    Box, Button, Container,
    Grid, TextField,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Tiptap from '@/components/Tiptap';
import { ADD_C, DESCRIPTION_C, RECIPE_C, RECIPE_NAME_C, SAVE_C } from '@/constants';
import { FormData } from '@/types/FormData.ts';
import { generateRandomId } from '@/utils/utils.ts';

export const AddRecipe: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormData> = (event) => {
        const formData = {
            ...event, id: generateRandomId(),
        };

        const dataString1: string | null = localStorage.getItem('formData');
        if (!dataString1) {
            localStorage.setItem('formData', JSON.stringify([formData]));
        } else {
            const dataString = localStorage.getItem('formData');
            if (dataString) {
                const parsedData: FormData [] = JSON.parse(dataString);
                parsedData.push(formData);
                // console.log(parsedData);
                localStorage.setItem('formData', JSON.stringify(parsedData));
            }
        }

        navigate(`/recipeList/${formData.id}`);
    };
    return (

        <Container
            component="main"
            maxWidth="sm"
        >
            <Box sx={{ marginTop: 14, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography
                    component="h1"
                    variant="h5"
                    gutterBottom={true}
                >
                    {ADD_C} {RECIPE_C}
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
                                label={RECIPE_NAME_C}
                                autoFocus={true}
                                {...register('recipeName', {
                                    required: true,
                                    maxLength: 25,
                                    pattern: /^[a-zA-Z_ ]*$/i,
                                })}
                                error={errors?.recipeName?.type === 'pattern'}
                                helperText={errors?.recipeName?.type === 'pattern' ? 'incorret entry, you can use only letters' : ''}
                            />
                        </Grid>
                        <Grid
                            item={true}
                            xs={12}
                        >
                            <TextField

                                required={true}
                                id="description"
                                label={DESCRIPTION_C}
                                variant="outlined"
                                fullWidth={true}
                                multiline={true}
                                rows={3}
                                size="small"

                                {...register('description', {
                                    required: true,
                                    maxLength: 500,
                                    pattern: /^\S.*(?:\r?\n\S.*)*$/u,
                                })}
                                error={errors?.description?.type === 'pattern'}
                                helperText={errors?.description?.type === 'pattern' ? 'incorret entry, you can use letters and numbers, max to 500size' : ''}
                            />
                        </Grid>
                        <Grid
                            item={true}
                            xs={12}
                        >
                            <Tiptap />
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

