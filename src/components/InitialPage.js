import React from "react";
import { Cell, Grid } from "react-mdl";

function InitialPage() {
  return (
    <div style={{ width: "100%", margin: 0 }}>
      <Grid className="landing-grid">
        <Cell col={12}>
          <img
            // src="https://mpng.subpng.com/20180403/awe/kisspng-computer-icons-avatar-male-super-b-5ac405d5122261.8229479815227959890743.jpg"
            src="https://www.shareicon.net/data/256x256/2016/01/25/708694_man_512x512.png"
            alt="avatar"
            className="avatar-img"
          />
          <div className="banner-text">
            <h1>Full Stack Web Developer</h1>
            <hr />
            <p>
              HTML/CSS | JavaScript | React | React Native | NodeJS | MongoDB |
              Java
            </p>
            <div className="social-links">
              <a
                href="http:www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa fa-linkedin-square" aria-hidden="true" />
              </a>

              <a
                href="http:www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa fa-github-square" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Cell>
      </Grid>
    </div>
  );
}

export default InitialPage;
