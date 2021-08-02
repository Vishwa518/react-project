import React from "react";
import { Cell, Grid, List, ListItem, ListItemContent } from "react-mdl";

function Contact() {
  return (
    <div className="contact-body">
      <Grid className="contact-grid">
        <Cell col={6}>
          <h2>Vishwanath S</h2>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFE6MIefLRm7YXTlEGhnLJToS1jQG1OY39S_nXZ9hsksSjHuQE9Yc3VI8e3yCmsR6FmiI&usqp=CAU"
            alt="avatar"
            style={{ height: "250px" }}
          />
          <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
            I am looking to work in a challenging environment and use my
            technical skills in a suitably challenging role. I always look to
            extend my knowledge and try to apply it practically with creativity
            and innovation.
          </p>
        </Cell>
        <Cell col={6}>
          <h2> Contact Me</h2>
          <hr />
          <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent
                  style={{ fontSize: "30px", fontFamily: "Anton" }}
                >
                  <i class="fa fa-phone-square" aria-hidden="true" />
                  7760392920
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent
                  style={{ fontSize: "30px", fontFamily: "Anton" }}
                >
                  <i class="fa fa-envelope" aria-hidden="true" />
                  vishwanathsomavarad@gmail.com
                </ListItemContent>
              </ListItem>
            </List>
          </div>
        </Cell>
      </Grid>
    </div>
  );
}

export default Contact;
