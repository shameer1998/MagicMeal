import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://magicmeal.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),

  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function RestaurantSignup() {
  const classes = useStyles();

  const [genders, setGender] = React.useState('M');


  const gender = [
    {
      value: 'Multan',
      label: 'Multan',
    },
    {
      value: 'Lahore',
      label: 'Lahore',
    },
   
  ];

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" style={{color: "black"}}>
          Partener Form
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            
            </Grid>

            <Grid item xs={12} sm={10}>
                        <TextField
                    id="outlined-select-currency-native"
                    select
                    label="City"
                    value={gender}
                    onChange={handleChange}
                    SelectProps={{
                        native: true,
                    }}
                    helperText="Please select your City"
                    variant="outlined"
                    >
                        {gender.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
                   
                    </TextField>


            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="restaurant_name"
                label="Restaurant Name"
                name="restaurant_name"
              />
            </Grid>
           
              
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="location"
                label="Restaurant Location"
                name="description"
              />
            </Grid>
             <Grid item xs={12}>
            <TextField
                variant="outlined"
                required
                fullWidth
                id="mobile"
                label="Mobile Number"
              />
            </Grid>


            <Grid item xs={12}>
                <TextField
                    id="outlined-textarea"
                    label="Description about Restaurant"
                    placeholder="Placeholder"
                    multiline
                    variant="outlined"
                />
            </Grid>
            
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Apply for Partener Program
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2" to="/restaurant-login">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}