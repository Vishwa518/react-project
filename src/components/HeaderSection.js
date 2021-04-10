import React from "react";
import { Layout, Header, Navigation, Drawer } from "react-mdl";
import { Link } from "react-router-dom";
import Main from "./Main";

const HeaderSection = () => {
  return (
    <div className="demo-big-content">
      <Layout fixedHeader>
        <Header
        style={{backgroundColor:'none'}}
          className="header-color"
          title={
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              MY PORTFOLIO
            </Link>
          }
        >
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/Resume">Resume</Link>
            <Link to="/About">About</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/Contact">Contact</Link>
          </Navigation>
        </Header>

        <Drawer
          title={
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              MY PORTFOLIO
            </Link>
          }
          style={{ color: "lightcoral" }}
        >
          <Navigation>
            {/* <Link to="/">Home</Link> */}
            <Link to="/Resume">Resume</Link>
            <Link to="/About">About</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/Contact">Contact</Link>
          </Navigation>
        </Drawer>
        <div className="page-content" />
        <Main />
      </Layout>
    </div>
  );
};

export default HeaderSection;
