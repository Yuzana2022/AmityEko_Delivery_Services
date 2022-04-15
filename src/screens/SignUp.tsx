import React from "react";

// style
import styles from '../styles/pages.module.css';

import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

import {
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import LockIcon from "@mui/icons-material/Lock";

import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import PersonIcon from "@mui/icons-material/Person";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
const green = {
    color: "rgba(52, 168, 83, 1)"
}
const SignupPage = () => {
  const [values, setValues] = React.useState({
    id: "6438 1234", //mobile
    name: "Simon Sia",
    email: "simonsia@send.com",
    password: "yuzana",
    showPassword: false,
  });

  const handleChange = (prop: any) => (event: any) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const inputStyle = {
    background: "rgba(132, 73, 2, 0.08)",
    width: "315px",
    margin: "8px",
    padding: "8px",
    marginBottom: "16px",
  };

  return (
    <>
      <div
        className="content"
        style={{
          textAlign: "center",
          backgroundColor: "rgb(237 236 236)",
          padding: "15px",
          height: "calc(100vh - 94px)",
          overflowY: "auto",
        }}
      >
        <Container maxWidth="sm">
          <div
            style={{
              backgroundColor: "#FFF",
              padding: "16px",
              width: "350px",
            }}
          >
            <Typography className={styles.send_typography}
              variant="subtitle1"
              p={1}
              component="div"
              sx={{ flexGrow: 1 }}
              align="center"
            >
              CREATE A NEW ACCOUNT
            </Typography>
            <div style={inputStyle}>
              <IconButton
                sx={{ mt: 1, mr: 1, color: "rgba(227, 148, 53, 1)" }}
                aria-label="name"
              >
                <PersonIcon />
              </IconButton>
              <FormControl
                variant="standard"
                sx={{ width: "calc(100% - 50px)" }}
              >
                <TextField className={styles.send_textfield} 
                  label="Name"
                  id="standard-size-normal"
                  defaultValue={values.name}
                  variant="standard"
                />
              </FormControl>
            </div>
            <div style={inputStyle}>
              <IconButton
                sx={{ mt: 1, mr: 1, color: "rgba(227, 148, 53, 1)" }}
                aria-label="id"
              >
                <PhoneIphoneIcon />
              </IconButton>
              <FormControl
                variant="standard"
                sx={{ width: "calc(100% - 50px)" }}
              >
                <TextField className={styles.send_textfield} 
                  label="Mobile"
                  id="standard-size-normal"
                  defaultValue={values.id}
                  variant="standard"
                />
              </FormControl>
            </div>
            <div style={inputStyle}>
              <IconButton
                sx={{ mt: 1, mr: 1, color: "rgba(227, 148, 53, 1)" }}
                aria-label="email"
              >
                <LocalPostOfficeIcon />
              </IconButton>
              <FormControl
                variant="standard"
                sx={{ width: "calc(100% - 50px)" }}
              >
                <TextField className={styles.send_textfield} 
                  label="Email"
                  id="standard-size-normal"
                  defaultValue={values.email}
                  variant="standard"
                />
              </FormControl>
            </div>
            <div style={inputStyle}>
              <IconButton
                sx={{ mt: 1, mr: 1, color: "rgba(227, 148, 53, 1)" }}
                aria-label="password"
              >
                <LockIcon />
              </IconButton>
              <FormControl
                variant="standard"
                sx={{ width: "calc(100% - 50px)" }}
              >
                <InputLabel htmlFor="standard-adornment-password">
                  Password
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
            <Typography className={styles.send_typography}
              variant="subtitle2"
              p={1}
              component="div"
              sx={{ flexGrow: 1 }}
              align="left"
            >
              By continuing you agree to our <span style={green}>Terms of Service</span> and <span style={green}>Privacy
              Policy</span>.
            </Typography>
            <br></br>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#E39435",
                color: "#FFF",
                width: "330px",
                height: "45px",
                marginBottom: "8px",
              }}
            >
              SIGNUP NOW
            </Button>
            <Button
              variant="contained"
              style={{
                width: "330px",
                height: "45px",
                marginBottom: "8px",
              }}
              startIcon={<GoogleIcon />}
            >
              <span>Continue with Google</span>
            </Button>
            <Button
              variant="contained"
              style={{
                width: "330px",
                height: "45px",
                marginBottom: "8px",
              }}
              startIcon={<FacebookIcon />}
            >
              <span>Continue with Facebook</span>
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SignupPage;
