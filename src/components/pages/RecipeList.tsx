import { Button, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Form {
    id: 'string';
    recipeName: 'string';
    description: 'string';
}

interface FormData {
    formData: Form[];
    id: string;
    recipeName: 'string';
    description: 'string';
}

export const imageUrl: string = 'src/photos/';

export const RecipeList: React.FC = () => {
    const [formData, setFormData] = useState <FormData[] | null>(null);

    useEffect(() => {
        const dataString = localStorage.getItem('formData');
        if (dataString) {
            const parsedData: FormData[] = JSON.parse(dataString);
            setFormData(parsedData);
            // console.log(parsedData);
        }
    }, []);

    return (
        <>

            <Container
                maxWidth="md"
                sx={{ mt: 6 }}
            >
                <h1> Recepty </h1>

                <Grid
                    container={true}
                    spacing={2}
                >
                    {formData === null ? (
                        <Grid
                            item={true}
                            xs={12}
                        >
                            {/* <Typography*/}
                            {/*    variant="body1"*/}
                            {/*    align="center"*/}
                            {/* >No data to be mapped</Typography>*/}
                            <Button
                                component={Link}
                                to="/product-1"
                            >product 1</Button>
                        </Grid>
                    ) : (
                        formData.map((form: FormData) => (
                            <Grid
                                item={true}
                                key={form.id}
                                xs={12}
                                sm={6}
                                md={3}
                            >
                                <Box
                                    component={Link}
                                    to={`${form.id}`}
                                >
                                    <Card
                                        sx={{ height: '100%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}
                                    >
                                        <CardContent>
                                            <Typography
                                                variant="h6"
                                                gutterBottom={true}
                                            >Recept</Typography>
                                            <Typography variant="body1">{form.recipeName}</Typography>
                                            <Typography
                                                variant="h6"
                                                gutterBottom={true}
                                                style={{ marginTop: '16px' }}
                                            >Popis</Typography>
                                            <Typography variant="body2">{form.description}</Typography>
                                        </CardContent>
                                    </Card>
                                </Box>
                            </Grid>
                        ))
                    )}
                </Grid>
            </Container>

        </>
    );
};
