import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getPosts } from "../../actions/post";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
const DashBoard = ({ getPosts, auth: { user }, post: { loading, posts } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return loading && posts === null ? (
    <Spinner />
  ) : (
    <div
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {posts.map((post) => (
        <div
          style={{
            width: 300,
            // height: 300,
            marginBottom: 20,
            // border: "2px solid black",
            // margin: 10,
          }}
        >
          <Card className="bg-dark text-white">
            <Card.Img
              src="https://img.freepik.com/free-vector/abstract-technology-particle-background_52683-25766.jpg?size=626&ext=jpg&ga=GA1.2.1611239267.1596240000"
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer. This is a wider card with supporting text below as a
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
      ))}
    </div>
  );
};

DashBoard.propTypes = {
  getPosts: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(DashBoard);
