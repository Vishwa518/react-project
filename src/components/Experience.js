import React from "react";
import { Cell, Grid } from "react-mdl";

function Experience({ startYear, endYear, jobName, jobDescription }) {
  return (
    <Grid>
      <Cell col={4}>
        {startYear} - {endYear}
      </Cell>
      <Cell col={8}>
        <h5 style={{ marginTop: "8px" }}>{jobName}</h5>
        <p>{jobDescription}</p>
      </Cell>
    </Grid>
  );
}

export default Experience;
