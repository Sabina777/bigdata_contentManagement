import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getPosts } from "../../actions/post";
import { Link } from "react-router-dom";
const MyPosts = ({ getPosts, auth: { user }, post: { posts, loading } }) => {
  const myPosts = posts.find((post) => post.user === user.name);
  console.log(myPosts);
  useEffect(() => {
    getPosts();
  }, []);
  return loading && posts === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large text-primary">Here are the user posts</h1>

      <p className="lead">
        <i className="fas fa-user"></i>
        Welcome {user && user.name}
      </p>

      {posts.find((post) => post.user === user) !== null ? (
        <Fragment>
          {myPosts.map((post) => (
            <Fragment>
              <p className="lead">This is the post created by {post.name}</p>
              <p className="lead">The contents of the post is:{post.text}</p>
              <p className="lead">Created on:{post.date}</p>
              <p className="lead">The comments on the post are:</p>
              {post.comments.map((comment) => (
                <p>{comment.text}</p>
              ))}
            </Fragment>
          ))}
        </Fragment>
      ) : (
        <Fragment>
          <p>No posts is created.</p>
          <Link to="/create-post" className=" btn btn-primary my-1">
            Create Post
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

MyPosts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  posts: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(MyPosts);
