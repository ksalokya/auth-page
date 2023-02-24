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


export default function Signup() {
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
                        <Grid item xs={6} sx={{ padding: 4, marginTop: 2}}>
                            <Lottie
                                options={defaultOptions}
                                isClickToPauseDisabled={true}
                            />
                        </Grid>
                        <Grid item xs={6} sx={{ padding: 4,marginTop: 1 }}>
                            <div className='top-box'>
                                <h2>Get Started!</h2>
                                <Typography>
                                    Already have an account?{" "}
                                    <Link to="/signin">Sign In</Link>
                                </Typography>
                            </div>
                            <form />
                            <Grid container spacing={2} sx={{marginTop: 2}}>
                                <Grid item xs={12}>
                                    <TextField
                                        style={{ color: "#ffffff" }}
                                        variant="outlined"
                                        required={true}
                                        fullWidth
                                        id="username"
                                        label="Username"
                                        name="username"
                                        autoComplete="off"
                                    />
                                </Grid>
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
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required={true}
                                        fullWidth
                                        name="passwordConfirmation"
                                        label="Password Confirmation"
                                        type="password"
                                        id="password-confirmation"
                                        autoComplete="off"
                                    />
                                </Grid>
                            </Grid>
                            <div class="agreement">
                                <input type="checkbox" />
                                <span>I agree to Plataform's &nbsp;
                                    <a href="#">Terms of Service</a> and&nbsp;
                                    <a href="#">Privacy Policy.</a>
                                </span>
                            </div>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className='register-btn'
                            >
                                Sign Up
                            </Button>
                        </Grid>
                    </Grid>
                </Box >
            </Container>
        </React.Fragment>
    )
}