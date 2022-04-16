import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  appBar: {
    boxShadow: "none",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
  },
  title: {
    flexGrow: 1,
    alignItems: "center",
    display: "flex",
    textDecoration: "none",
  },
  image: {
    marginRight: "10px",
  },
  menuButton: {
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "grey",
    },
    marginLeft: 0,
    width: "100%",
  },
  searchIcon: {
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    // vertical padding + font size from searchIcon
    width: "100%",
  },
}));