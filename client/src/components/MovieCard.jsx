import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const MovieCard = ({ movie }) => {
    return (
        <Card
            sx={{
                height: 400, // Adjusted height for better spacing
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 3, // Add a subtle shadow for better appearance
                borderRadius: 2, // Rounded corners
                overflow: 'hidden', // Ensure content doesn't overflow
                transition: 'transform 0.3s, box-shadow 0.3s', // Smooth transition for hover effects
                '&:hover': {
                    transform: 'scale(1.05)', // Slightly scale the card on hover
                    boxShadow: 6, // Increase shadow on hover
                },
            }}
        >
            {/* Movie Poster */}
            <CardMedia
                component="img"
                sx={{
                    height: 220, // Adjusted height for the image
                    objectFit: 'cover', // Ensure the image covers the area without distortion
                }}
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
            />

            {/* Movie Details */}
            <CardContent
                sx={{
                    padding: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    flexGrow: 1, // Ensure content stretches to fill the card
                }}
            >
                {/* Movie Title */}
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        marginBottom: 1,
                        textAlign: 'center', // Center-align the title
                    }}
                >
                    {movie.title}
                </Typography>

                {/* Movie Overview */}
                <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{
                        fontSize: '0.875rem',
                        textAlign: 'justify', // Justify the text for better readability
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 3, // Limit to 3 lines
                        WebkitBoxOrient: 'vertical',
                    }}
                >
                    {movie.overview || 'No description available.'}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default MovieCard;