import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import forgotPassword from "../../Image/password.svg";
import { ThemeProvider } from "@mui/material/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import { defaultTheme } from "../../Additional/Theme/Default";
import { ForgetPassword } from "../../Additional/API/Auth";

const ForgotPassword = () => {
  AOS.init();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console

    const email = data.get("email");

    await ForgetPassword(email);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          data-aos="zoom-in"
          item
          xs={false}
          sm={4}
          md={7}
          // sx={{
          //   backgroundImage: `url(${forgotPassword})`,
          //   backgroundRepeat: "no-repeat",
          //   backgroundColor: (t) =>
          //     t.palette.mode === "light"
          //       ? t.palette.grey[50]
          //       : t.palette.grey[900],
          //   backgroundSize: "cover",
          //   // backgroundPosition: "right",
          // }}
        >
          <img
            src={forgotPassword}
            alt={forgotPassword}
            width="95%"
            height={"100%"}
            style={{
              display: "flex",
              alignContent: "center",
              justifyItems: "center",
            }}
          />
        </Grid>
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
              Forgot Password
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
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/signIn" variant="body2">
                    {"Sign In"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default ForgotPassword;
