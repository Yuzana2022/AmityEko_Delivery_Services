import React from "react";

// style
import styles from '../styles/pages.module.css';
import {
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { NavLink } from "react-router-dom";

//otp
import OtpInput from "react-otp-input";

const OTPPage = () => {
  const [values, setValues] = React.useState({
    id: "",
    password: "",
    showPassword: false,
  });

  const [otp, setOtp] = React.useState();

  const handleChangeOTP = (event: any) => {
    setOtp(event.target.value);
  };

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
              Enter OTP
            </Typography>
            <Typography className={styles.send_typography}
              variant="subtitle2"
              p={1}
              component="div"
              sx={{ flexGrow: 1 }}
              align="left"
            >
              An OTP is sent to your mobile number +65 xxxx 1234
            </Typography>
            <OtpInput
              value={otp}
              onChange={() => handleChangeOTP(otp)}
              numInputs={6}
              separator={<span> </span>}
              inputStyle={{
                width: "30px",
                height: "30px",
                borderRadius: "4px",
                marginRight: "8px",
                marginBottom : '8px'
              }}
              containerStyle={{ padding: "8px" }}
            />
            <div style={{ width : '100%',textAlign : 'left' }}>
            <NavLink
              to=""
              style={{
                marginLeft: "8px",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              Didn’t receive the OTP?
            </NavLink>
            </div>
            <br></br>
            <div style={{ width : '100%',textAlign : 'left'}}>
            <NavLink
              to=""
              style={{
                marginLeft: "8px",
                color: "rgba(52, 168, 83, 1)",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              Click here to send again
            </NavLink>
            </div>
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
                Confirm to login
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default OTPPage;
