import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteComment } from "../../actions/post";
import { Link } from "react-router-dom";
import Moment from "react-moment";
const CommentItem = ({
  auth,
  deleteComment,
  postId,
  comment: { _id, text, name, avatar, user, date },
}) => {
  return (
    <div class="posts">
      <div class="post bg-white p-1 my-1">
        <div>
          <p class="my-1">{text}</p>
          <p class="post-date">
            <Moment format="YYYY-MM-DD">Posted on:{date}</Moment>
          </p>
        </div>
      </div>

      {!auth.loading && user === auth.user._id && (
        <button
          onClick={(e) => deleteComment(postId, _id)}
          type="button"
          className="btn btn-danger"
        >
          <i className="fas fa-times"></i>
        </button>
      )}
    </div>
  );
};

CommentItem.propTypes = {
  postId: PropTypes.number.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { deleteComment })(CommentItem);
