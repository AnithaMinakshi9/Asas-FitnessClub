import React from "react";
import "./Home.css";
import Appoint from "./appoint";
import Message from "./Message";

function Home() {
  return (
    <>
      <div className="top">
        <div class="info">
          <div class="large">Get Fit Go!</div>
          <div class="small">
            All progress takes place outside the comfort zone
          </div>
        </div>
        <div className="buttons">
          <Appoint variant="contained" color="default"></Appoint>
          <br />
          <Message variant="contained" color="default">
            Visit us
          </Message>
        </div>
      </div>
    </>
  );
}

export default Home;
