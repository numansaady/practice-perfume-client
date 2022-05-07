import React from "react";
import './Advantages.css'
import adv1 from "../../../images/advantages/exprt-turial-ico1.png";
import adv2 from "../../../images/advantages/exprt-turial-ico2.png";
import adv3 from "../../../images/advantages/exprt-turial-ico3.png";
import adv4 from "../../../images/advantages/exprt-turial-ico4.png";

const Advantages = () => {
  return (
    <div>
      <section className="advntg-sec">
        <div className="container">
          <div className="sec-hding-hldr">
            <h2 className="hding-title">
              NS Perfumes <span>Advantages</span>
            </h2>
          </div>

          <ul className="exprt-tutoral-ul">
            <li>
              <span className="exprt-tutrl-icon">
                <img src={adv1} alt="expart tutorial" />
              </span>
              <h4>Global Supply Chain Solutions</h4>
              <p>
              With Warehouzez, you get the state-of-the-art, customized and unique logistics solutions.
              </p>
            </li>
            <li>
              <span className="exprt-tutrl-icon">
                <img src={adv2} alt="expart tutorial" />
              </span>
              <h4>Safe and Reliability Warehousing</h4>
              <p>
              We operate on the values of Safety, Reliability and Fairness.
              </p>
            </li>
            <li>
              <span className="exprt-tutrl-icon">
                <img src={adv3} alt="expart tutorial" />
              </span>
              <h4>Fast Transportation Service</h4>
              <p>
              We provide integrated and best-in-class transportation services.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Advantages;
