import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Online from "../../Image/Isometric.svg";
import { ThemeProvider } from "@mui/material/styles";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { defaultTheme } from "../../Additional/Theme/Default";
import { RegisterWithEmail } from "../../Additional/API/Auth";
import { AddUserOnDB } from "../../Additional/API/Users";
import { useLocation, useNavigate } from "react-router-dom";
// ..

const Register = () => {
  AOS.init();

  const navigate = useNavigate();
  const { state } = useLocation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    const name = data.get("name");

    if (email && password && name) {
      const result = await RegisterWithEmail(email, password);
      if (result.user) {
        await AddUserOnDB(name, result.user);
        alert(`Welcome ${name}`);
        navigate(state?.path || "/", { replace: true });
      } else {
        alert("Something went wrong, please try again");
      }
    } else {
      alert("Please fill complete details");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                data-aos="flip-up"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="text"
                autoComplete="name"
                autoFocus
              />
              <TextField
                data-aos="flip-up"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <TextField
                data-aos="flip-up"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
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
                  <Link href="/forgot-password" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signIn" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid
          data-aos="zoom-in"
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${Online})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Grid>
    </ThemeProvider>
  );
};

export default Register;
