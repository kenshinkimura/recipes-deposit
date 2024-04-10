import { Typography, Box, Link } from '@mui/material';

export const Footer = (): JSX.Element => {
    return (
        <Box
            color="primary.main"
            alignItems="center"
            margine-left="-8px"
            sx={{
                bgcolor: 'primary.main',
                position: 'relative',
                left: 0,
                bottom: 0,
                width: '100%',
                padding: '0px',
                mt: 'auto',
            }}
        >
            <Box
                margin={3}
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
        </Box>

    );
};

