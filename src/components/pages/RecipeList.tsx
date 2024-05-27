import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

export const PRODUCTS = [
    { id: 'p1', title: 'Guláš', img: 'gulas.jpg' },
    { id: 'p2', title: 'Kuře na paprice', img: 'kureNaPap.jpg' },
    { id: 'p1', title: 'Lasagne', img: 'lasagne.jpg' },
];

interface Form {
    id: 'string';
    input1: 'string';
    input2: 'string';
}

interface FormData {
    formData: Form[];
    id: string;
    input1: string;
    input2: string;
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
                            <Typography
                                variant="body1"
                                align="center"
                            >No data to be mapped</Typography>
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
                                <Card sx={{ height: '100%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
                                    <CardContent>
                                        <Typography
                                            variant="h6"
                                            gutterBottom={true}
                                        >Recept</Typography>
                                        <Typography variant="body1">{form.input1}</Typography>
                                        <Typography
                                            variant="h6"
                                            gutterBottom={true}
                                            style={{ marginTop: '16px' }}
                                        >Popis</Typography>
                                        <Typography variant="body2">{form.input2}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    )}
                </Grid>
            </Container>

        </>
    );
};
