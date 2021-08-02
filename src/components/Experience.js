import React from "react";
import { Cell, Grid } from "react-mdl";

function Experience({ startYear, endYear, jobName, jobDescription }) {
  return (
    <Grid>
      <Cell col={8}>
        <h5 style={{ marginTop: "5px" }}>{jobName}</h5>
        <p>{jobDescription}</p>
        {/* <p>Implemented firebase push notification for both IOS and Android. </p>
        <p>Have a piece of knowledge in Trello and Jira .</p> */}
        <p>
          {""}
          Dec-2020 to July-2021
        </p>
      </Cell>
    </Grid>
  );
}

export default Experience;
