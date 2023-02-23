import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import Lottie from 'react-lottie';
import * as animationData from "./animation.json"
import './signup.css';

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
        <Box sx={{ bgcolor: '#ffffff', height: '85vh', opacity: 0.8 }}>
            <Grid container>
                <Grid item xs={6}>
                    <Lottie
                        options={defaultOptions}
                        isClickToPauseDisabled={true}
                    />
                </Grid>
                <Grid item xs={6} sx={{padding: 4}}>
                    <div className='signup-box'>
                        <h2>Get started.</h2>
                        <p>Already have an account? <a href="#">Log in</a></p>
                    </div>
                    <form />
                    <Grid container spacing={2}>
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
                                <a href="#">Privacy Policy</a>
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
    );
}