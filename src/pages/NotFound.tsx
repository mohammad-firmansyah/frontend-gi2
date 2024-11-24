import { Box, Typography } from "@mui/material"
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export const NotFound : React.FC = () => {
    return (
        <Box 
            sx={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundColor: '#f0f2f5', // Facebook-like light background
                color: '#55B76B',
                textAlign: 'center',
                padding: '1rem',
            }}
        >

            <ErrorOutlineIcon sx={{fontSize:'80px',marginBottom:'1rem'}}></ErrorOutlineIcon>

            <Typography
                variant="h3"
                sx={{
                fontWeight: 'bold',
                marginBottom: '0.5rem',
                fontSize: { xs: '2rem', md: '3rem' }, // Responsive font size
                }}
            >
                Not Found
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                    fontSize: { xs: '1rem', md: '1.25rem' },
                    }}
                >
                    Oops! The page you're looking for doesn't exist.
                </Typography>
        </Box>
    )
}
