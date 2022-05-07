import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import usePerfumes from "../../../hooks/usePerfumes";
import Perfume from "../../Perfume/Perfume";
import Loading from "../../Shared/Loading/Loading";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import Advantages from "../Advantages/Advantages";
import HowItWork from "../HowItWork/HowItWork";
import Slider from "../Slider/Slider";

const Home = () => {
  const [perfumes, setPerfumes] = usePerfumes();
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <PageTitle title="Home"></PageTitle>
      <Slider></Slider>
      <div className="perfumes-area">
        <div className="container">
          <div className="sect my-5 text-center">
            <h1 className="text-center text-primary">Our Perfumes</h1>
          </div>
          <div className=" perfumes-container">
            {perfumes.slice(0, 6).map((perfume) => (
              <Perfume key={perfume._id} perfume={perfume}></Perfume>
            ))}
          </div>
          <div>
            <Link className="btn btn-primary my-5" to="/manage">
              Manage Inventories
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Advantages></Advantages>
      </div>
      <div>
        <HowItWork></HowItWork>
      </div>
    </div>
  );
};

export default Home;
