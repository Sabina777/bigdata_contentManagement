import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { Card, Button } from "react-bootstrap";
import { addLike, removeLike, deletePost } from "../../actions/post";
const PostItem = ({
  auth,
  addLike,
  removeLike,
  deletePost,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions,
}) => {
  return (
    <div style={{ margin: 20 }}>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg"
        />
        <Card.Body>
          <Card.Title> Created by:{name}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Card.Text>
            Created on:
            <Moment format="YYYY-MM-DD">{date}</Moment>
          </Card.Text>
          <Card.Text>Likes:{likes.length}</Card.Text>
          <Card.Text>Comments:{comments.length}</Card.Text>
          {showActions && (
            <Fragment>
              <button
                type="button"
                className="btn btn-primary"
                onClick={(e) => addLike(_id)}
              >
                Like
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={(e) => removeLike(_id)}
              >
                Unlike
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={(e) => deletePost(_id)}
              >
                Delete
              </button>

              <Link to={`/posts/${_id}`}>
                <span className="hide-sm">View Details</span>
              </Link>
            </Fragment>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

PostItem.defaultProps = {
  showActions: true,
};
PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
