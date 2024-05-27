import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface DataObjectForm {
    email?: string;
    firstName?: string;
    lastName?: string;
    password?: string;
}

export const SignUpPage: React.FC = () => {
    const { register,
        handleSubmit,
        formState: { errors } } = useForm<DataObjectForm>();

    const onSubmit: SubmitHandler<DataObjectForm> = () => {

    };

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
                <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography
                    component="h1"
                    variant="h5"
                >
                        Sign up
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
                            sm={6}
                        >
                            <TextField
                                autoComplete="given-name"
                                required={true}
                                fullWidth={true}
                                id="firstName"
                                label="First Name"
                                autoFocus={true}
                                {...register('firstName', {
                                    required: true,
                                    maxLength: 20,
                                    pattern: /^[A-Za-z]+$/i,
                                })}
                                error={errors?.firstName?.type === 'pattern'}
                                helperText={errors?.firstName?.type === 'pattern' ? 'incorret entry, you can use only text' : ''}
                            />
                        </Grid>
                        <Grid
                            item={true}
                            xs={12}
                            sm={6}
                        >
                            <TextField
                                required={true}
                                fullWidth={true}
                                id="lastName"
                                label="Last Name"

                                autoComplete="family-name"
                                {...register('lastName', {
                                    required: true,
                                    maxLength: 20,
                                    pattern: /^[A-Za-z]+$/i,
                                })}
                                error={errors?.lastName?.type === 'pattern'}
                                helperText={errors?.lastName?.type === 'pattern' ? 'incorret entry, you can use only text' : ''}
                            />
                        </Grid>
                        <Grid
                            item={true}
                            xs={12}
                        >
                            <TextField
                                required={true}
                                fullWidth={true}
                                id="email"
                                label="Email Address"
                                autoComplete="email"
                                {...register('email', {
                                    required: true,
                                    maxLength: 20,
                                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                })}
                                error={errors?.email?.type === 'pattern'}
                                helperText={errors?.email?.type === 'pattern' ? 'incorret entry, correct muster: xxx@xxx.xx' : ''}
                            />
                        </Grid>
                        <Grid
                            item={true}
                            xs={12}
                        >
                            <TextField
                                required={true}
                                fullWidth={true}
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                {...register('password', {
                                    required: true,
                                    maxLength: 20,
                                    pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                })}
                                error={errors?.password?.type === 'pattern'}
                                helperText={errors?.password?.type === 'pattern' ? 'incorret entry, min length is 8 digits, must contain at least one number and one letter' : ''}
                            />
                        </Grid>
                        <Grid
                            item={true}
                            xs={12}
                        >
                            <FormControlLabel
                                control={(
                                    <Checkbox
                                        value="allowExtraEmails"
                                        color="primary"
                                    />
                                )}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth={true}
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                            Sign Up
                    </Button>
                    <Grid
                        container={true}
                        justifyContent="flex-end"
                    >
                        <Grid item={true}>
                            <Link
                                href="#"
                                variant="body2"
                            >
                                    Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>

    );
};
