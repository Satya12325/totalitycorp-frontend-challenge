import "./App.css";
import FinalContainer from "./components/FinalContainer";
import FirstContainer from "./components/FirstContainer";
import Footermiddle from "./components/Footermiddle";
import FooterTop from "./components/FooterTop";
import Navbar from "./components/Navbar";
import SecoundContainer from "./components/SecondContainer";
import SocialIconCard from "./components/SocialIconCard";
import {useState,useEffect} from "react";
import Accorditions from "./components/Accordions";
function App() {

  const [mobile,setMobile] = useState(false)
  const footerdata = [
    {
      head: "About Us",
      subtitle: [
        "Our Company",
        "Our Company",
        "Our Coffee",
        "Stories and News",
        "Starbucks Archive",
        "Investor Relations",
        "Customer Service",
      ],
    },
    {
      head: "Career",
      subtitle: [
        "Culture and Values",
        "Inclusion, Diversity, and Equity",
        "College Achievement Plan",
        "Alumni Community",
        "U.S. Careers",
        "International Careers",
      ],
    },
    {
      head: "Social Impact",
      subtitle: [
        "People",
        "Planet",
        "Environmental and Social Impact Reporting",
      ],
    },
    {
      head: "For Business Partners",
      subtitle: [
        "Landlord Support Center",
        "Suppliers",
        "Corporate Gift Card Sales",
        "Office and Foodservice Coffee",
      ],
    },
    {
      head: "Order and Pickup",
      subtitle: [
        "Order on the App",
        "Order on the Web",
        "Delivery",
        "Order and Pickup Options",
        "Explore and Find Coffee for Home",
      ],
    },
  ];

  const icon = [
    "fa-facebook-f",
    "fa-pinterest-p",
    "fa-instagram",
    "fa-youtube",
    "fa-twitter",
  ];
 
  




  return (
    <div className="App">
      <Navbar />
      <FirstContainer />
      <SecoundContainer />
      <FinalContainer
        head={"Perfectly pumpkin"}
        details={
          "Savor the season with a Pumpkin Spice Latte or Pumpkin Cream Cold Brew."
        }
        btnName={"Order now"}
        images={
          "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-81152.jpg"
        }
      />
      {/* <FinalContainer
        head={"Layers of baked apple yum"}
        details={
          "Try the Apple Crisp Oatmilk Macchiato, now nondairy and with Starbucks® Blonde Espresso."
        }
        btnName={"Learn more"}
        images={
          "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-79282.jpg"
        }
       style={style}
      /> */}
       <div  className="first-container final response-finalcontainer">
      <div>
        <img
          className="cfi-img"
          src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-79282.jpg"
          alt=""
        />
      </div>
      <div>
        <div className="first-container-text">
          <h1 style={{color: "white"}}>Layers of baked apple yum</h1>
          <h3 style={{color: "white"}}>
          Try the Apple Crisp Oatmilk Macchiato, now nondairy and with Starbucks® Blonde Espresso.
          </h3>
        <button style={{color: "white"}} className="btn btn-trans">{"Learn more"}</button>
        </div>
      </div>
      
    </div>
      <FooterTop />
      <div className="hr"></div>

      <div className="midFooter">
        {footerdata?.map((item) => (
          <Footermiddle footerhead={item.head} footersub={item.subtitle} />
        ))}
      </div>
      <div className="Accorditions">
      {footerdata?.map((item) => (
          <Accorditions footerhead={item.head} footersub={item.subtitle} />
        ))}
          
      </div>
      <div style={{ width: "90vw", margin: "30px auto" }} className="hr"></div>

      <div style={{ width: "90vw", margin: "30px auto" }}>
        <div className="socialIcons">
          <i style={{ fontSize: "40px" }} class="fa-brands fa-spotify"></i>
          {icon?.map((item) => (
            <SocialIconCard key={item} icon={item} />
          ))}
        </div>
        <div className="termCondition">
          <p>
            <a href="">Privacy Policy</a>&nbsp; &nbsp; &nbsp; |
          </p>
          <p>
            <a href="">Terms of Use</a> &nbsp; &nbsp; &nbsp; |
          </p>
          <p>
            <a href="">CA Supply Chain Act</a> &nbsp; &nbsp; &nbsp; |
          </p>
          <p>
            <a href="">Cookie Preferences</a>
          </p>
        </div>
        <div className="termCondition response-termCondition">
        <p>
            <a href="">Privacy Policy</a>
          </p>
          <p>
            <a href="">Terms of Use</a> 
          </p>
          <p>
            <a href="">CA Supply Chain Act</a> 
          </p>
          <p>
            <a href="">Cookie Preferences</a>
          </p>
        </div>
        <div className="starbucks">
          <p>© 2022 Starbucks Coffee Company. All rights reserved.</p>
        </div>
        
      </div>
    </div>
  );
}

export default App;
