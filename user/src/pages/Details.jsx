import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Rating from "../components/Rating";
import axios from "axios";
import { useParams } from "react-router";
import { useUser } from "../store";
import { FaChalkboardTeacher } from "react-icons/fa";

function Details() {
  const [isHover, setIsHover] = useState(false);
  const user = useUser((state) => state.user);
  let { id } = useParams();
  let i = 0;
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`http://localhost:5000/api/course/${id}`)
        .then((res) => {
          console.log(res.data);
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div>
      {/* Header */}
      <Header
        title="Template"
        links={[
          ["SignUp", "/signup"],
          ["Login", "/login"],
        ]}
      />

      <div>
        <section></section>
        <form>
          <div className="container">
            <div className="row" style={{ paddingTop: "23px" }}>
              <div className="col">
                <picture>
                  <img width="80%" height="80%" src={data.coverPictureUrl} />
                </picture>
              </div>
            </div>
          </div>
        </form>

        <div className="container">
          <h1>{data.title}</h1>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-8">
              <p>{data.description}</p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-8">
              <FaChalkboardTeacher size={16} /> <small>{data.instructor}</small>
              <p>
                <Rating rating={Math.round(data.rating / 2)} />
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12" style={{ paddingTop: "9px" }}>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Chapters</th>
                      <th>Estimated Hours</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.chapters ? (
                      data.chapters.map((chapter) => {
                        i++;
                        return (
                          <tr>
                            <td>{chapter.title}</td>
                            <td>{chapter.estimatedHour}</td>
                          </tr>
                        );
                      })
                    ) : (
                      <div />
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div
              className="col-md-4"
              style={{ paddingRight: "284px", marginRight: "-304px" }}
            >
              <button className="btn btn-primary">Enroll</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer links={[]} />
    </div>
  );
}

export default Details;
