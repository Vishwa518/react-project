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

function ProjectDetailsCard({
  url,
  title,
  button1,
  button2,
  button3,
  discription,
}) {
  return (
    <div className="projects-grid">
      <Card shadow={5} style={{ minWidth: "420", margin: "auto" }}>
        <CardTitle
          style={{
            color: "black",
            height: "170px",
            background: `url(${url}) center / cover`,
          }}
        >
          {title}
        </CardTitle>
        <CardText>{discription}</CardText>
        <CardActions border className="card-button">
          <Button colored>{button1}</Button>
          <Button colored>{button2}</Button>
          <Button colored>{button3}</Button>
        </CardActions>
        <CardMenu style={{ color: "fff" }}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
    </div>
  );
}

export default ProjectDetailsCard;
