import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import Lottie from 'react-lottie';
import Typography from '@mui/material/Typography';
import * as animationData from "./animation.json"
import { Link } from "react-router-dom";

export default function Signin() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg" className='box'>
                <Box sx={{ bgcolor: '#ffffff', opacity: 0.8 }}>
                    <Grid container>
                        <Grid item xs={6} sx={{ marginTop: 2 }}>
                            <Lottie
                                options={defaultOptions}
                                isClickToPauseDisabled={true}
                            />
                        </Grid>
                        <Grid item xs={6} sx={{ padding: 4, marginTop: 2 }}>
                            <div className='top-box'>
                                <h2>Hello Again!</h2>
                                <Typography>
                                    Don't have an account?{" "}
                                    <Link to="/signup">Sign Up</Link>
                                </Typography>
                            </div>
                            <form />
                            <Grid container spacing={4} sx={{ marginTop: 7 }}>
                                <Grid item xs={12}>
                                    <TextField
                                        style={{ color: "#ffffff" }}
                                        variant="outlined"
                                        required={true}
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="off"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required={true}
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="off"
                                    />
                                </Grid>
                            </Grid>
                            <div class="agreement">
                                <span>Forgot Password? &nbsp;
                                    <a href="#">RESET</a>
                                </span>
                            </div>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className='register-btn'
                            >
                                Sign In
                            </Button>
                        </Grid>
                    </Grid>
                </Box >
            </Container>
        </React.Fragment>
    )
}