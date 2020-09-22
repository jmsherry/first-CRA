import React from 'react';
import Header from "./../../components/Header/Header";
import { Link } from "react-router-dom";

function Home(){
  return (
    <>
      <Header />
      <h1>Homepage</h1>
      <p>lorem sajkdfl asjdfkl asjdfkl ;jasdklf <Link to="/about">About page</Link></p>
    </>
  );
}

export default Home;