import React, { Fragment } from "react";

const Post = ({ name, text, date }) => {
  return (
    <Fragment>
      {/* <img
        src={spinner}
        style={{ width: "200px", margin: "auto", display: "block" }}
        alt="Loading..."
      /> */}

      <div
        style={{
          height: 300,
          width: 500,
          backgroundColor: "#dfe6e9",
          borderWidth: 1,
          borderColor: "black",
          borderRadius: 16,
          margin: 20,
          alignItems: "center",
        }}
      >
        <p>Welcome to the post created by</p>
        <p>{name}</p>

        <p>{text}</p>
        <p>created on:</p>
        <p>{date}</p>
      </div>
    </Fragment>
  );
};

export default Post;
