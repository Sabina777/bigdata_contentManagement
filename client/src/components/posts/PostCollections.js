import React, { useEffect, Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import Post from "../layout/Post";
import { getPosts } from "../../actions/post";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
const PostCollections = ({
  getPosts,
  auth: { user },
  post: { posts, loading },
}) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
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

      {posts !== null ? (
        <Fragment>
          {posts.map((post) => (
            <Post name={post.name} text={post.text} date={post.date} />
          ))}

          <Carousel activeIndex={index} onSelect={handleSelect}>
            {posts.map((post) => (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>{post.name}</h3>
                  <p>{post.text}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
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

PostCollections.propTypes = {
  getPosts: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  posts: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(PostCollections);
