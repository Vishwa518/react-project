import { makeStyles, useMediaQuery } from "@material-ui/core";
import React, { useState } from "react";
import { Cell, Grid, Tab, Tabs } from "react-mdl";
import { constantText } from "../../helpers";
import ProjectDetailsCard from "./ProjectDetailsCard";

const useStyles = makeStyles({
  divContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  divContainer2: {
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
function Projects() {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(0);
  const isMobileView = useMediaQuery("(max-width:400px)");
  const toggleCategorys = () => {
    if (activeTab === 0) {
      return (
        <div
          className={
            isMobileView ? classes.divContainer2 : classes.divContainer
          }
        >
          {/* project 1 details */}
          <ProjectDetailsCard
            url={constantText.url1}
            title={"Weather App"}
            button1={"GitHub"}
            // button2={"CodePen"}
            // button3={"Demo"}
            discription={constantText.url1Desc}
          />
          <ProjectDetailsCard
            url={constantText.url2}
            title={"Image-gram"}
            button1={"GitHub"}
            discription={constantText.url2Desc}
          />
          <ProjectDetailsCard
            url={constantText.url3}
            title={"Recipe-app"}
            button1={"GitHub"}
            discription={constantText.url3Desc}
          />
          {/* <ProjectDetailsCard
            url={`https://firebasestorage.googleapis.com/v0/b/image-gram-ce881.appspot.com/o/2021-06-27%20(3).png?alt=media&token=2051e8e2-ec80-4f43-bc38-6c19c3382e1e`}
            title={"Lavish"}
            button1={"GitHub"}
            // button2={"CodePen"}
            // button3={"Demo"}
            discription={`This one i built using react`}
          /> */}
        </div>
      );
    }
    // else if (activeTab === 1) {
    //   return (
    //     <div
    //       style={{
    //         display: "flex",
    //         alignItems: "center",
    //         justifyContent: "space-evenly",
    //       }}
    //     >
    //       {/* project 1 details */}
    //       <ProjectDetailsCard
    //         url={`https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png`}
    //         title={"React Native Project #1"}
    //         button1={"GitHub"}
    //         // button2={"CodePen"}
    //         // button3={"Demo"}
    //         discription={`React Native is an open-source mobile application framework created by Facebook,
    //         Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers
    //         to use React's framework along with native platform capabilities.`}
    //       />
    //       {/* project 2 details */}
    //       <ProjectDetailsCard
    //         url={`https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png`}
    //         title={"React Native Project #2"}
    //         button1={"GitHub"}
    //         // button2={"CodePen"}
    //         // button3={"Demo"}
    //         discription={`React Native is an open-source mobile application framework created by Facebook,
    //         Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers
    //         to use React's framework along with native platform capabilities.`}
    //       />
    //     </div>
    //   );
    // }
  };

  return (
    <div className="category-tabs">
      <Tabs
        activeTab={activeTab}
        onChange={(tabId) => setActiveTab(tabId)}
        ripple
      >
        <Tab>React</Tab>
        {/* <Tab>React Native</Tab> */}
      </Tabs>
      <Grid>
        <Cell col={12}>
          <div className="content">{toggleCategorys()}</div>
        </Cell>
      </Grid>
    </div>
  );
}

export default Projects;
