import React, {Component} from "react";
import { Link } from 'react-router-dom';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }

        this.handleFirstName = this.handleFirstName.bind(this)
        this.handleLastName = this.handleLastName.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleFirstName(event) {
        this.setState((state) => ({
            firstName: event.target.value
        }))
    }

    handleLastName(event) {
        this.setState((state) => ({
            lastName: event.target.value
        }))
    }

    handleEmail(event) {
        this.setState((state) => ({
            email: event.target.value
        }))
    }

    handlePassword(event) {
        this.setState((state) => ({
            password: event.target.value
        }))
    }

    handleSubmit(event) {
        event.preventDefault();
        // alert('Welcome! ' + this.state.email);
        console.log(this.state)
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

                    <h5>Register</h5>
                    <form className="mt-1" onSubmit={this.handleSubmit}>
                        <Box sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                        onChange={this.handleFirstName}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="family-name"
                                        onChange={this.handleLastName}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        onChange={this.handleEmail}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                        onChange={this.handlePassword}
                                    />
                                </Grid>
                            </Grid>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Register
                            </Button>

                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link to="/login">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
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
        )
    }
}

export default Register;
