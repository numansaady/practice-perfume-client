import React from "react";
import { Link } from "react-router-dom";
import usePerfumes from "../../hooks/usePerfumes";
import Perfume from "../Perfume/Perfume";
import PageTitle from "../Shared/PageTitle/PageTitle";
import "./Perfumes.css";

const Perfumes = () => {
  const [perfumes, setPerfumes] = usePerfumes();

  return (
    <div id="perfumes" className="container">
      <PageTitle title="All Perfumes"></PageTitle>
      <div className="row">
        <h1 className="text-primary text-center my-5"> Our All Perfumes</h1>
        <div className="perfumes-container">
          {perfumes.map((perfume) => (
            <Perfume key={perfume._id} perfume={perfume}></Perfume>
          ))}
        </div>
      </div>
      <div>
          <Link className="btn btn-primary my-4" to="/manage">Manage Inventories</Link>
      </div>
    </div>
  );
};

export default Perfumes;
