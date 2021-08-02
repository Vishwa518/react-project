import React from "react";
import { Layout, Header, Navigation, Drawer } from "react-mdl";
import { Link } from "react-router-dom";
import Main from "./Main";
import { makeStyles } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { constantText } from "../helpers";

const useStyles = makeStyles({
  linkContainer: {
    textDecoration: "none",
    color: "white",
    fontFamily: "Josefin sans",
  },
  drawerTitle: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Josefin sans",
  },
  navbarButtons: {
    fontSize: "1.2rem",
    color: "white",
    fontFamily: "Josefin Sans",
  },
  navbarButtons2: {
    fontSize: "1.2rem",
    color: "white",
    fontFamily: "Josefin Sans",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
const HeaderSection = () => {
  const classes = useStyles();
  const isMobileView = useMediaQuery("(max-width: 400px)");
  return (
    <div className="demo-big-content">
      <Layout fixedHeader>
        <Header
          style={{ backgroundColor: "none" }}
          className="header-color"
          title={
            <Link className={classes.linkContainer} to="/">
              {constantText.myPortFolio}
            </Link>
          }
        >
          {!isMobileView && (
            <Navigation>
              <Link className={classes.navbarButtons} to="/">
                {constantText.home}
              </Link>
              <Link className={classes.navbarButtons} to="/Resume">
                {constantText.resume}
              </Link>
              {/* <Link to="/About">About</Link> */}
              <Link className={classes.navbarButtons} to="/Projects">
                {constantText.projects}
              </Link>
              {/* <Link to="/Contact">Contact</Link> */}
            </Navigation>
          )}
        </Header>

        <Drawer
          title={
            <Link className={classes.drawerTitle} to="/">
              {constantText.myPortFolio}
            </Link>
          }
          style={{ color: "lightcoral" }}
        >
          <Navigation>
            {/* <Link to="/">Home</Link> */}
            <Link className={classes.navbarButtons2} to="/Resume">
              {constantText.resume}
            </Link>
            {/* <Link to="/About">About</Link> */}
            <Link className={classes.navbarButtons2} to="/Projects">
              {constantText.projects}
            </Link>
            {/* <Link to="/Contact">Contact</Link> */}
          </Navigation>
        </Drawer>
        <div className="page-content" />
        <Main />
      </Layout>
    </div>
  );
};

export default HeaderSection;
