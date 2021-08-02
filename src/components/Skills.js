import React from "react";
import { Cell, Grid, ProgressBar } from "react-mdl";

function Skills({ skill, progressStatus }) {
  return (
    <div>
      <Grid>
        <Cell col={12}>
          <div style={{ display: "flex" }}>
            {skill}{" "}
            <ProgressBar
              style={{
                marginLeft: "auto",
                width: "75%",
                justifyContent: "center",
                alignItems: "center",
              }}
              progress={progressStatus}
            />
          </div>
        </Cell>
      </Grid>
    </div>
  );
}

export default Skills;
