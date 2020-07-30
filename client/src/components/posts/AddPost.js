import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createPost } from "../../actions/auth";
import { setAlert } from "../../actions/alert";
const AddPost = ({ setAlert, createPost, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    text: "",
    date: "",
  });

  const { name, text, date } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    createPost({ name, text, date });
  };
  // //redirect if authenticated
  // if (isAuthenticated) {
  //   return <Redirect to="/create-post" />;
  // }

  return (
    <Fragment>
      <h1 className="large text-primary">Create Post</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Create Your Own Post
      </p>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Text"
            name="text"
            value={text}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Date"
            name="date"
            value={date}
            onChange={(e) => onChange(e)}
          />
        </div>

        <input type="submit" className="btn btn-primary" value="Create Post" />
      </form>
    </Fragment>
  );
};

AddPost.propTypes = {
  setAlert: PropTypes.func.isRequired,
  createPost: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { setAlert, createPost })(AddPost);
