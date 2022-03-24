import { ThemeProvider } from "@emotion/react";
import {
  Button,
  Container,
  CssBaseline,
  Grid,
  //   Link,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ResetPassword } from "../../Additional/API/Auth";
import { defaultTheme } from "../../Additional/Theme/Default";

function useQuery() {
  const location = useLocation();

  return new URLSearchParams(location.search);
}

const Reset = () => {
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const navigate = useNavigate();

  const query = useQuery();
  console.log(query);
  const oobCode = query.get("oobCode");
  console.log(oobCode);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (cpassword === password) {
      try {
        await ResetPassword(oobCode, password);

        alert("Password has been changed, you can login now.");

        navigate("/signIn", { replace: true });
      } catch (error) {
        alert("something went wrong");
      }
    } else {
      alert("Please fill both same password");
    }
  };
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <Container
          component="main"
          maxWidth="xs"
          style={{
            display: "grid",
            alignContent: "center",
            justifyItems: "center",
            height: "100vh",
          }}
        >
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar> */}
            <Typography component="h1" variant="h5">
              Reset Password
            </Typography>
            <Box component="form" noValidate sx={{ mt: 3 }}>
              {/* <ThemeProvider theme={primary}> */}
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="newPassword"
                    label="New Password"
                    type="password"
                    id="newPassword"
                    autoComplete="new-password"
                    onChange={(e) => setCPassword(e.target.value)}
                    value={cpassword}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    autoComplete="confirm-password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={onSubmit}
              >
                Submit
              </Button>
              {/* </ThemeProvider> */}
              {/* optional */}
              {/* <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid> */}
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default Reset;
