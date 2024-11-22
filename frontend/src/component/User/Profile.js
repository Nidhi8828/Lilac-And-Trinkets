import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "./Profile.css";

const Profile = () => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  const navigate = useNavigate(); // Use the useNavigate hook

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login"); // Navigate to login page
    }
  }, [navigate, isAuthenticated]); // Dependency array includes navigate and isAuthenticated

  // Check for loading state
  if (loading) return <Loader />;

  if (!isAuthenticated || !user) {
    return <div>Please login to view your profile.</div>; // Handle case when user is not authenticated
  }

  return (
    <Fragment>
      <MetaData title={`${user.name}'s Profile`} />
      <div className="profileContainer">
        <div>
          <h1>My Profile</h1>
          <img
            src="https://e7.pngegg.com/pngimages/81/570/png-clipart-profile-logo-computer-icons-user-user-blue-heroes-thumbnail.png"
            alt={user.name}
          />
          <Link to="/me/update">Edit Profile</Link>
        </div>
        <div>
          <div>
            <h4>Full Name</h4>
            <p>{user.name}</p>
          </div>
          <div>
            <h4>Email</h4>
            <p>{user.email}</p>
          </div>
          <div>
            <h4>Joined On</h4>
            <p>{String(user.createdAt).substr(0, 10)}</p>
          </div>

          <div>
            <Link to="/">Go To Homepage</Link>
            <Link to="/password/update">Change Password</Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
