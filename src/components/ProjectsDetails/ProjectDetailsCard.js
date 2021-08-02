import { makeStyles } from "@material-ui/core";
import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardMenu,
  CardText,
  CardTitle,
  IconButton,
} from "react-mdl";

const useStyles = makeStyles({
  cardStyle: { minWidth: "420", margin: "auto" },
  divContainer: { display: "flex", padding: "0.5rem" },
});
function ProjectDetailsCard({
  url,
  title,
  button1,
  button2,
  button3,
  discription,
}) {
  const classes = useStyles();
  return (
    <div className={classes.divContainer}>
      <Card shadow={5} className={classes.cardStyle}>
        <CardTitle
          style={{
            color: "black",
            height: "170px",
            background: `url(${url}) center / cover`,
            fontSize: "2rem",
            fontFamily: "'Josefin Sans'",
            fontWeight: "600",
          }}
        >
          {title}
        </CardTitle>
        <CardText
          style={{
            color: "black",
            fontSize: "1.2rem",
            fontFamily: "'Josefin Sans'",
            fontWeight: "500",
            letterSpacing: "0.03%",
          }}
        >
          {discription}
        </CardText>
        <CardActions border className="card-button">
          <Button
            colored
            // onClick={window.open(`https://github.com/Vishwa518/`, "_blank")}
          >
            {button1}
          </Button>
          {/* <Button colored>{button2}</Button>
          <Button colored>{button3}</Button> */}
        </CardActions>
        <CardMenu style={{ color: "fff" }}>
          {/* <IconButton name="share" /> */}
        </CardMenu>
      </Card>
    </div>
  );
}

export default ProjectDetailsCard;
