import React from "react";
import { Cell, Grid } from "react-mdl";

function EducationDetails({
  startYear,
  endYear,
  schoolName,
  schoolDescription,
}) {
  return (
    <Grid>
      <Cell col={8}>
        <h5 style={{ marginTop: "8px" }}>{schoolName}</h5>
        <p>{schoolDescription}</p>
        <p>
          {" "}
          {startYear} - {endYear}
        </p>
      </Cell>
    </Grid>
  );
}

export default EducationDetails;
