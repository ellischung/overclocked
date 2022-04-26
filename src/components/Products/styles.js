import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: "110px 25px 110px 25px",
  },
  spacing: {
    padding: "0px 20px 0px 20px",
  },
  root: {
    flexGrow: 1,
  },
}));