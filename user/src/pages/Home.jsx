import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get("http://localhost:5000/api/courses")
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

  let i = 0;
  const cols = data.map((col) => {
    i++;
    return (
      <div className="col" key={i}>
        <a href={`/course/${col._id}`} style={{textDecoration: "none", color: "black"}}>
          <Card
            img="http://localhost/img/bg6.jpg"
            title="Lorem libero donec"
            details="Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
            justo odio, dapibus ac facilisis in, egestas eget quam. Donec id
            elit non mi porta gravida at eget metus."
          />
        </a>
      </div>
    );
  });

  return (
    <div>
      <Header links={[["SignUp", "/signup"]]} title="microlearn" />< br/>

      <div className="container py-4 py-xl-5">
        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
          {cols}
        </div>
      </div>

      <Footer links={[["Logout", "/logout"], ["Instructor", "/instructor"]]} />
    </div>
  );
};

export default Home;
