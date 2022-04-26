import React from "react";
import { Grid, Typography, Divider } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import useStyles from "./styles";

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="h6"
          style={{
            fontFamily: "Roboto Mono",
            fontWeight: "bold",
            fontStyle: "italic",
          }}
        >
          "Our mission statement is to sell PC components &amp; services at
          unmatched prices" -Ellis Chung
        </Typography>
        <div className={classes.grow} />
        <Grid>
          <Typography variant="h5">Contact Us</Typography>
          <Divider />
          <br />
          <div className={classes.contact}>
            <EmailIcon sx={{ mr: 2 }} />
            <Typography variant="h6">overclockedus@gmail.com</Typography>
          </div>
          <div className={classes.contact}>
            <PhoneIcon sx={{ mr: 2 }} />
            <Typography variant="h6">1-(917)-459-2640</Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;