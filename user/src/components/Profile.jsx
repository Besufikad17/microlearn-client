import React from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { useUser } from "../store";
import { FaEyeSlash, FaEye } from "react-icons/fa";

function Profile() {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [toggled, setToggled] = useState(false);
  const logout = useUser((state) => state.logout);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`http://localhost:5000/api/users/${username}`)
        .then((res) => {
          setUser(res.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  const handleClick = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      <Header links={[["SignUp", "/signup"]]} title="microlearn" />
      <div className="parent">
        {user ? (
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-4">
                <div className="card mb-4">
                  <div className="card-body text-center">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                      alt="avatar"
                      className="rounded-circle img-fluid"
                      style={{ width: "150px" }}
                    />
                    <h5 className="my-3">{user.username}</h5>
                  </div>
                </div>
              </div>

              <div className="col-lg-8">
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Full Name</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{user.fullname}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Email</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{user.email}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Password</p>
                      </div>
                      <div className="col-sm-9">
                        <form>
                          <div class="form-group">
                            <div class="input-group" id="show_hide_password">
                              <input
                                class="form-control"
                                type={toggled ? "text" : "password"}
                                value={user.password}
                              />
                              <div class="input-group-addon">
                                {toggled ? (
                                  <FaEyeSlash
                                    onClick={() => setToggled(false)}
                                  />
                                ) : (
                                  <FaEye onClick={() => setToggled(true)} />
                                )}
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Joined</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{user.joinedDate}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Achievments</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{user.achievments}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <button className="btn btn-primary" onClick={handleClick}>
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          navigate("/signup")
        )}
      </div>
      <Footer
        links={[
          ["Logout", "/logout"],
          ["Instructor", "/instructor"],
        ]}
      />
    </div>
  );
}

export default Profile;
