import { makeStyles } from "@material-ui/core";
import React from "react";
import { Cell, Grid } from "react-mdl";
import { constantText } from "../helpers";
import profile from '../assets/Vishwa-photo.jpg';

const useStyles = makeStyles({
  divContainer: {
    width: "100%",
    margin: 0,
    flex: 1
  },
});
function InitialPage() {
  const classes = useStyles();
  return (
    <div className={classes.divContainer}>
      <Grid className="landing-grid">
        <Cell col={12}>
          <img
            src={profile}
            alt="avatar"
            className="avatar-img"
          />
          <div className="banner-text">
            <h1>{constantText.title}</h1>
            <hr />
            <p>{constantText.skills}</p>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/vishwa-s-635b201a1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa fa-linkedin-square" aria-hidden="true" />
              </a>

              <a
                href="https://github.com/Vishwa518"
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
