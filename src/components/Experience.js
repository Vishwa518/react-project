import React from "react";
import { Cell, Grid } from "react-mdl";

function Experience({ startYear, endYear, jobName, jobDescription, joinDate }) {
  return (
    <Grid>
      <Cell col={8}>
        <h5 style={{ marginTop: "5px" }}>{jobName}</h5>
        <p>{jobDescription}</p>
        {/* <p>Implemented firebase push notification for both IOS and Android. </p>
        <p>Have a piece of knowledge in Trello and Jira .</p> */}
        <p>
          {joinDate}
        </p>
      </Cell>
    </Grid>
  );
}

export default Experience;
