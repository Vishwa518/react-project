import React from "react";
import { Layout, Header, Navigation, Drawer } from "react-mdl";
import { Link } from "react-router-dom";
import Main from "./Main";

const HeaderSection = () => {
  return (
    <div>
      <Layout fixedHeader>
        <Header title={<strong>MY PORTFOLIO</strong>}>
          <Navigation>
            <Link to="/Resume">Resume</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/About">About</Link>
          </Navigation>
        </Header>

        <Drawer
          title="Title"
          style={{ alignItems: "flex-start", color: "lightcoral" }}
        >
          <Navigation>
            <Link to="/Resume">Resume</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/About">About</Link>
          </Navigation>
        </Drawer>

        <Main />
      </Layout>
    </div>
  );
};

export default HeaderSection;
