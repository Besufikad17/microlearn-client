import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router";
import axios from "axios";

//TODO: check user from redux, if user redirect to checkout page/add course to saved courses/generate link else redirect to signup
//TODO: replace chapter list with table and save and share button with fontawesome icons
const CourseDetails = () => {
  let { id } = useParams();

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

  var i = 0;

  return (
    <div>
      <Header links={[["SignUp", "/signup"]]} title="microlearn" /><br/>
      <div className="main-container">
        {/* Header section */}
        <div>
          <img className="bg" alt="" src={data.coverPictureUrl} />
          <p className="title">{data.title}</p>
          <p style={{ fontFamily: "monospace", fontSize: "18px" }}>
            {data.instructor} | {data.rating + "/10"}
          </p>
        </div>

        {/* Description section */}
        <div>
          <article>
            <p>{data.description}</p>
          </article>
          <ul>
            {data.chapters ? (
              data.chapters.map((chapter) => {
                i++;
                return (
                  <li key={i}>
                    {chapter.title} | {chapter.estimatedHour}
                  </li>
                );
              })
            ) : (
              <div></div>
            )}
          </ul>
          <span>{data.estimatedHours}</span>
        </div>

        {/* Action section */}
        <div className="action-section">
          <button className="enroll">Enroll</button>
          <button className="btn">Save</button>
          <button className="btn">Share</button>
        </div><br/>

        {/* <Footer /> */}
      </div>
      <Footer links={[["Logout", "/logout"]]} />
    </div>
  );
};

export default CourseDetails;
