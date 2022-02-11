import React, { Component } from "react";
import axios from "axios";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';

class Login extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }

        this.handleEmail = this.handleEmail.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        console.log('Login Mounted!');
    }

    handleEmail(event) {
        event.persist()

        this.setState((state) => ({
            email: event.target.value
        }))
        console.log(this.state.email);
    }

    handleSubmit(event) {
        alert(this.email);
    }

    render() {
        return (
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: '#ff1744' }}>
                        <LockOutlinedIcon />
                    </Avatar>

                    <h5>Sign In</h5>

                    <form className="mt-1" onSubmit={this.handleSubmit}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onKeyDown={this.handleEmail}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>

                        <Grid container>
                            <Grid item xs>
                                <Link to="#">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/register">
                                    Don't have an account? Sign Up
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
                

                <div className="mt-5 text-secondary text-center">
                    <span>
                        {'Copyright © '}

                        <Link to="/" className="text-secondary">
                            HumSum
                        </Link>

                        {' ' + new Date().getFullYear() + '.'}
                    </span>
                </div>
            </Container>
        );
    }
}

export default Login;