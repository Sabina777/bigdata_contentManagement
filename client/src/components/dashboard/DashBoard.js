import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getCurrentProfile } from "../../actions/profile";
import { Link } from "react-router-dom";
const DashBoard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large text-primary">DashBoard</h1>

      <p className="lead">
        <i className="fas fa-user"></i>
        Welcome {user && user.name}
      </p>

      {profile !== null ? (
        <Fragment>has</Fragment>
      ) : (
        <Fragment>
          <p>You havent yet setup a profile. Please add some info.</p>
          <Link to="/get-posts" className=" btn btn-primary my-1">
            Go to Post Collections
          </Link>
          <Link to="/create-post" className=" btn btn-primary my-1">
            Wanna create new posts?
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

DashBoard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(DashBoard);
