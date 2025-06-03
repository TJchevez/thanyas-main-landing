import React from "react";
import NavBar from "../Components/NavBar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <NavBar />
      <div>Home Page For Now - Soon to Be designed </div>
      <Link to={`/Poems`}>
        <button className="button-test">Click Here For Poems</button>
      </Link>
    </>
  );
}

export default Home;
