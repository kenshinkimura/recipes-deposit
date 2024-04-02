import { Typography, Box, Link } from '@mui/material';

export const Footer = (): JSX.Element => {
    return (
        <Box
            alignItems="center"
            sx={{
                bgcolor: 'primary.main',
                // position: 'relative',
                // left: 0,
                // bottom: 0,
                width: '100%',
                // height: '100px',
                padding: '20px',
                mt: 'auto',
            }}
        >
            <Typography
                variant="body2"
                color="text.secondary"
                align="center"

            >
                {'Copyright © '}
                <Link
                    color="inherit"
                    href="http://localhost/"
                >
                    Recipes Deposit
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Box>

    );
};

