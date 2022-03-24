import React, { useState } from 'react'
// import Classes from ""
import { Box, Button, Container, TextareaAutosize, TextField } from "@mui/material"
import { ContactUseMessage } from '../../Additional/API/Users'

const ContactForm = () => {

    const [userData, setUserData] = useState({ email: "", msg: "" })

    const onSubmit = () => {
        if (userData.email && userData.msg) {
            ContactUseMessage(userData.email, userData.msg, userData)
            userData.email = "";
            userData.msg = "";
        }
    }
    return (
        // <ThemeProvider theme={defaultTheme}>
        <Container maxWidth={"md"}>
            <Box
                component="form"
                noValidate
                alignContent={"center"}
                justifyContent={"center"}
                sx={{
                    display: "grid",
                    gridTemplateColumns: "0.8fr 0fr",
                    gap: 1,
                }}
            >
                <TextField
                    label="Name"
                    placeholder="Full Name"
                    // variant="filled"
                    style={{ marginTop: 11 }}
                    onChange={(e) =>
                        setUserData({ ...userData, email: e.target.value })
                    }
                    value={userData.email}
                />
                <br />
                <TextareaAutosize
                    aria-label="minimum height"
                    minRows={9}
                    placeholder="Write your message"
                    onChange={(e) => setUserData({ ...userData, msg: e.target.value })}
                    value={userData.msg}
                />

            </Box>
            <Button style={{ margin: "10px" }} variant="contained" onClick={onSubmit}>
                Add Todo
            </Button>
        </Container>
        // </ThemeProvider>
    )
}

export default ContactForm