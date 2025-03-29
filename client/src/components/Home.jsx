import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../redux/actions';
import MovieCard from './MovieCard';
import { Grid, Container, AppBar, Toolbar, Typography, Box, CircularProgress, Pagination } from '@mui/material';

const Home = () => {
    const dispatch = useDispatch();
    const { movies, loading, error } = useSelector((state) => state.movies);
    const [page, setPage] = useState(1); // Track the current page
    const [totalPages, setTotalPages] = useState(10); // Default total pages (can be updated dynamically)

    useEffect(() => {
        const fetchData = async () => {
            const result = await dispatch(fetchMovies(page)); // Fetch movies for the current page
            if (result.total_pages) {
                setTotalPages(Math.min(result.total_pages, 20)); // Limit total pages to a maximum of 20
            }
        };
        fetchData();
    }, [dispatch, page]);

    const handlePageChange = (event, value) => {
        setPage(value); // Update the page when the user clicks on a pagination button
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page
    };

    if (error) return <p>Error: {error}</p>;

    return (
        <>
            {/* Navbar */}
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Animated Movies
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Main Content */}
            <Container sx={{ marginTop: 4 }}>
                {loading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
                        <CircularProgress size={60} thickness={4} />
                    </Box>
                ) : (
                    <>
                        <Grid container spacing={3}>
                            {movies.map((movie) => (
                                <Grid item xs={12} sm={6} md={4} key={movie.id}>
                                    <MovieCard movie={movie} />
                                </Grid>
                            ))}
                        </Grid>
                        {/* Pagination */}
                        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
                            <Pagination
                                count={totalPages} // Total number of pages (limited to 20)
                                page={page} // Current page
                                onChange={handlePageChange} // Handle page change
                                color="primary"
                            />
                        </Box>
                    </>
                )}
            </Container>

            {/* Footer */}
            <Box
                component="footer"
                sx={{
                    backgroundColor: '#f5f5f5',
                    padding: 2,
                    marginTop: 4,
                    textAlign: 'center',
                }}
            >
                <Typography variant="body2" color="textSecondary">
                    © {new Date().getFullYear()} Animated Movies App. All rights reserved.
                </Typography>
            </Box>
        </>
    );
};

export default Home;