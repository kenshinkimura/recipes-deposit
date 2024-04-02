import {
    Box, Button, Container,
    Grid, TextField,
} from '@mui/material';
import React, { useState } from 'react';
import { generateRandomId } from '@/components/utils/utils.ts';

interface FormData {
    id: string;
    input1: string;
    input2: string;
}

export const AddRecipe: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({ input1: '', input2: '', id: '' });
    const handleInputRecipeName = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value;
        setFormData((prevFormData) => ({ ...prevFormData, input1: value }));
    };
    const handleInputDescription = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value;
        setFormData((prevFormData) => ({ ...prevFormData, input2: value }));
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        formData.id = generateRandomId();
        // console.log(formData);

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
        setFormData({ input1: '', input2: '', id: '' });
    };
    // const generateRandomId = (): string => {
    //     return Math.random().toString(36).substr(2, 9);
    // };

    return (

        <Container
            component="main"
            maxWidth="xs"
        >

            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Box
                    component="form"
                    noValidate={true}
                    onSubmit={handleSubmit}
                    sx={{ mt: 3 }}
                >
                    <Grid
                        container={true}
                        spacing={2}
                    >
                        <Grid
                            item={true}
                            xs={12}
                            sm={12}
                        >
                            <TextField
                                autoComplete="recipe-name"
                                name="recipeName"
                                required={true}
                                fullWidth={true}
                                id="recipeName"
                                label="Název Receptu"
                                autoFocus={true}
                                value={formData.input1}
                                onChange={handleInputRecipeName}
                            />
                        </Grid>
                        <Grid
                            item={true}
                            xs={12}
                            sm={12}
                        >
                            <TextField
                                required={true}
                                id="description"
                                label="Popis Receptu"
                                name="description"
                                variant="outlined"
                                fullWidth={true}
                                multiline={true}
                                minRows={3}
                                size="small"
                                value={formData.input2}
                                onChange={handleInputDescription}
                            />
                        </Grid>

                        <Grid
                            item={true}
                            xs={12}
                            sm={12}
                        >
                            <Button
                                type="submit"
                                fullWidth={true}
                                variant="contained"
                                sx={{ mb: 2 }}
                            >Uložit Recept</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>

    );
};
