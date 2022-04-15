import React from "react";

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
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import LockIcon from "@mui/icons-material/Lock";

import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { NavLink } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

const LoginPage = () => {
  const [values, setValues] = React.useState({
    id: "6438 1234",
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

  //sociallogin
  const handleSocialLogin = (user: any) => {
    console.log(user);
  };

  const handleSocialLoginFailure = (err: any) => {
    console.error(err);
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
              Tell us about you

            </Typography>
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
            <NavLink
              to=""
              style={{
                float: "left",
                marginLeft: "8px",
                marginBottom: "16px",
                color: "rgba(52, 168, 83, 1)",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              Forgot Password
            </NavLink>
            <br></br>
            <br></br>
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
              LOGIN NOW
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

            <NavLink
              to="/signup"
              style={{
                marginLeft: "8px",
                marginBottom: "8px",
                color: "rgba(227, 148, 53, 1)",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              CREATE AN ACCOUNT
            </NavLink>
          </div>
        </Container>
      </div>
    </>
  );
};

export default LoginPage;
