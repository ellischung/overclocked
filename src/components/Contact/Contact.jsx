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
        <Typography variant="overline">
          "Beating the market at PC components &amp; tech services" &#8212;Ellis
          Chung
        </Typography>
        <div className={classes.grow} />
        <Grid>
          <Typography variant="h6">Contact Us</Typography>
          <Divider />
          <br />
          <div className={classes.contact}>
            <EmailIcon sx={{ mr: 2 }} />
            <Typography variant="subtitle1">overclockedus@gmail.com</Typography>
          </div>
          <div className={classes.contact}>
            <PhoneIcon sx={{ mr: 2 }} />
            <Typography variant="subtitle1">1-(917)-459-2640</Typography>
          </div>
          <br />
          <Typography variant="subtitle2">&copy; Overclocked 2022</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;