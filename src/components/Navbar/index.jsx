import React from "react";
import styles from "./nav.module.css";
import { useState, useEffect } from "react";
function Navbar(props) {
  return (
    <div className={styles.navbar}>
      <div className={styles.Innavbar}>
        <div className={styles.logoContainer}>
          <img
            className={styles.logo}
            src="https://upload.wikimedia.org/wikipedia/sco/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/297px-Starbucks_Corporation_Logo_2011.svg.png?20170312192423"
            alt=""
          />
          <h4>MENU</h4>
          <h4>REWARDS</h4>
          <h4>GIFT CARDS</h4>
        </div>
        <div className={styles.btnContainer}>
          <div className={styles.location}>
            <i class="fa-solid fa-location-dot"></i>
            <h5 style={{ fontSize: "16px", marginRight: "20px" }}>
              Find a store
            </h5>
          </div>
          <button className="btn btn-white"> Sign in</button>
          <button className="btn btn-black">Join now</button>
        </div>
      </div>
      <div className="responseNAv">
        <div className="response-innernav">
          <div className={styles.logoContainer}>
            <img
              className={styles.logo}
              src="https://upload.wikimedia.org/wikipedia/sco/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/297px-Starbucks_Corporation_Logo_2011.svg.png?20170312192423"
              alt=""
            />
          </div>
          <div className={styles.btnContainer}>
          <i class="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
