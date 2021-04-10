import React from "react";
import { Cell, Grid } from "react-mdl";
import EducationDetails from "./EducationDetails";
import Experience from "./Experience";
import Skills from "./Skills";

function Resume() {
  return (
    <div>
      <Grid>
        <Cell col={4}>
          <div style={{ textAlign: "center" }}>
            <img
              src="https://www.shareicon.net/data/256x256/2016/01/25/708694_man_512x512.png"
              alt="avatar"
              style={{ height: "200px" }}
            />
          </div>
          <h2 style={{ paddingTop: "2em" }}>Vishwanath S</h2>

          <h4 style={{ color: "gray" }}>Full Stack Web developer</h4>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          <p>
            MongoDB is a source-available cross-platform document-oriented
            database program. Classified as a NoSQL database program, MongoDB
            uses JSON-like documents with optional schemas. MongoDB is developed
            by MongoDB Inc. and licensed under the Server Side Public License.
          </p>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          <h5>Address</h5>
          <p>MongoDB is a source-available cross-platform</p>
          <h5>Phone</h5>
          <p>123456789</p>
          <h5>Email</h5>
          <p>vishwa@gmail.com</p>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
        </Cell>
        <Cell className="resume-right-col" col={8}>
          <h2>Education</h2>
          <EducationDetails
            startYear={2016}
            endYear={2020}
            schoolName="SKSVMACET LXR"
            schoolDescription="MongoDB is a source-available cross-platform document-oriented database program. 
            Classified as a NoSQL database program."
          />

          <EducationDetails
            startYear={2014}
            endYear={2016}
            schoolName="SKSVMACET LXR"
            schoolDescription="MongoDB is a source-available cross-platform document-oriented database program. 
            Classified as a NoSQL database program."
          />
          <hr style={{ marginTop: "3px solid #e22947" }} />

          <h2>Job Details</h2>
          <Experience
            startYear={2020}
            endYear={2022}
            jobName="Software Engineer"
            jobDescription="MongoDB is a source-available cross-platform document-oriented database program. 
            Classified as a NoSQL database program."
          />
          <hr style={{ marginTop: "3px solid #e22947" }} />
          <h2>Skills</h2>
          <Skills skill="JavaScript" progressStatus={60} />
          <Skills skill="React" progressStatus={60} />
          <Skills skill="React Native" progressStatus={70} />
          <Skills skill="MongoDB" progressStatus={30} />
        </Cell>
      </Grid>
    </div>
  );
}

export default Resume;
