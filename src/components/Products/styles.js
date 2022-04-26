import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: "100px 25px 100px 25px",
  },
  root: {
    flexGrow: 1,
  },
}));