import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  root: {
    border: "1px solid rgba(0, 0, 0, 20)",
  },
  media: {
    height: 260,
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  cartActions: {
    justifyContent: "space-between",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
  },
}));