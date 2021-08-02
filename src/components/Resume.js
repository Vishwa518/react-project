import { makeStyles } from "@material-ui/core";
import React from "react";
import { Cell, Grid } from "react-mdl";
import { constantText } from "../helpers";
import EducationDetails from "./EducationDetails";
import Experience from "./Experience";
import Skills from "./Skills";

const useStyles = makeStyles({
  divContainer: {
    textAlign: "center",
  },
  imageStyles: {
    height: "200px",
  },
  textStyle: {
    paddingTop: "2em",
    color: "black",
  },
  subText: {
    color: "gray",
    fontFamily: "Josefin Sans",
  },
  hrLine: {
    borderTop: "3px solid #833fb2",
    width: "100%",
  },
  constantTextStyle: {
    fontSize: 16,
  },
  headerText: {
    fontSize: "3.2rem",
    color: "white",
    fontFamily: "Josefin Sans",
  },
  hrLine2: {
    marginTop: "3px solid #e22947",
  },
});
function Resume() {
  const classes = useStyles();
  return (
    <div>
      <Grid>
        <Cell col={4}>
          <div className={classes.divContainer}>
            <img
              src="https://www.shareicon.net/data/256x256/2016/01/25/708694_man_512x512.png"
              alt="avatar"
              className={classes.imageStyles}
            />
          </div>
          <h2 className={classes.textStyle}>{constantText.nameConstant}</h2>

          <h4 className={classes.subText}>{constantText.skillConstant}</h4>
          <hr className={classes.hrLine} />
          <h5 className={classes.subText}>{constantText.phone}</h5>
          <p className={classes.constantTextStyle}>
            {constantText.phoneNumber}
          </p>
          <h5 className={classes.subText}>{constantText.email}</h5>
          <p className={classes.constantTextStyle}>{constantText.emailId}</p>
          <h5 className={classes.subText}>{constantText.linkedin}</h5>
          <p className={classes.constantTextStyle}>
            {constantText.linkedinUrl}
          </p>
        </Cell>
        <Cell className="resume-right-col" col={8}>
          <h2 className={classes.headerText}>{constantText.education}</h2>
          <EducationDetails
            startYear={2016}
            endYear={2020}
            schoolName={constantText.collageName}
            schoolDescription={constantText.place}
          />

          {/* <EducationDetails
            startYear={2014}
            endYear={2016}
            schoolName="PUC"
            schoolDescription="PC JABIN PU SCIENCE COLLEGE HUBLI."
          /> */}
          <hr className={classes.hrLine2} />

          <h2 className={classes.headerText}>{constantText.jobDetails}</h2>
          <Experience
            jobName={constantText.comapanyName}
            // jobDescription="Worked on responsible UI part design for both IOS and Android."
          />
          <hr className={classes.hrLine2} />
          <h2 className={classes.headerText}>{constantText.skills2}</h2>
          <Skills skill="React Native" progressStatus={70} />
          <Skills skill="React" progressStatus={65} />
          <Skills skill="HTML/CSS" progressStatus={55} />
          <Skills skill="JavaScript" progressStatus={50} />
          <Skills skill="Firebase" progressStatus={30} />
        </Cell>
      </Grid>
    </div>
  );
}

export default Resume;
