import React, { Fragment } from "react";
import { Card, Button } from "react-bootstrap";
const Post = ({ name, text, date }) => {
  return (
    <Fragment>
      {/* <img
        src={spinner}
        style={{ width: "200px", margin: "auto", display: "block" }}
        alt="Loading..."
      /> */}

      {/* <div
        style={{
          height: 300,
          width: 500,
          backgroundColor: "#dfe6e9",
          borderWidth: 1,
          borderColor: "black",
          borderRadius: 16,
          margin: 20,
          padding: 40,
          justifyContent: "center",
        }}
      >
        <p>Welcome to the post created by</p>
        <p>{name}</p>

        <p>{text}</p>
        <p>created on:</p>
        <p>{date}</p>
      </div> */}

      <Card style={{ width: "18rem", margin: 20 }}>
        <Card.Img
          variant="top"
          src="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg"
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Card.Text>{date}</Card.Text>
          <Button variant="primary">Read Details</Button>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default Post;
