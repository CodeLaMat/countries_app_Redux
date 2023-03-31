import React from "react";
import { Link } from "react-router-dom";
import classes from "./styles/Home.module.css";
import bgVideo from "../assets/videos/Rotation of The Planet Earth.mp4";

const Home = () => {
  return (
    <div className={classes.home}>
      <div className={classes.home_header_container}>
        <video
          src={bgVideo}
          autoPlay
          muted
          loop
          type="video/mp4"
          className={classes.header_container_video_bg}
        />
        <div className={classes.bg_overlay}></div>
        <div className={classes.header_container_content}>
          {" "}
          <h1>CountriesAPP</h1>
          <h3>
            The app will help you to find detailed information about the
            countries. All data is fetched from https://restcountries.com
          </h3>
          <Link to="/countries">
            <button type="button">Discover Countries</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
