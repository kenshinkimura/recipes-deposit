import { Container, Typography, Box } from '@mui/material';

export const Footer = (): JSX.Element => {
    return (
        <Box
            sx={{
                bgcolor: 'primary.main',
                position: 'fixed',
                left: 0,
                bottom: 0,
                width: '100%',
                height: '100px',
                padding: '20px',
            }}
        >
            <Container
                maxWidth="lg"
                color="secondary"
            >
                <Typography color="secondary">&#169; {new Date().getFullYear()}</Typography>
            </Container>
        </Box>
    );
};

// position: fixed;
// left: 0;
// bottom: 0;
// width: 100%;
// height: 100px; /* Adjust this value as per your footer height */
// background-color: #f5f5f5;
// padding: 20px;
// box-sizing: border-box;
// j;
