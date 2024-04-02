import { Card, Container, Grid, Typography } from '@mui/material';
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
                    {
                        formData === null ? (<p>Nod data to be mapped</p>) : formData.map((form) => (
                            <Grid
                                item={true}
                                key={form.id}
                                xs={12}
                                sm={6}
                                md={3}
                            >
                                <Card sx={{ height: '100%' }}>

                                    <Typography>Recept: {form.input1}</Typography>
                                    <Typography>Popis: {form.input2}</Typography>
                                </Card>
                            </Grid>
                        ))}
                </Grid>
            </Container>

        </>
    );
};
