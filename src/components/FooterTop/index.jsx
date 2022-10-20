import React from "react";

function FooterTop(props) {
  return (
    <div className="footerTop">
      <div className="footerTop-text">
        <p>
          *NO PURCHASE NECESSARY. Participating stores only. Ends 10/23/22. To
          enter and for Official Rules, visit{" "}
          <a href="#" style={{ color: "black" }}>
            starbucksstardays.com.
          </a>
        </p>
        <p>Entrants can receive a maximum of 2 entries per day.</p>
      </div>
      <div className="footerTop-text">
        <p>
          **Excludes taxes and gratuities. At participating stores. Some
          restrictions apply. 150 Stars deposited after first qualifying
          Starbucks purchase. Flights purchased close to departure may not earn
          double Stars. Stars may not be earned on purchases of alcohol,
          Starbucks Cards and Starbucks Card reloads. For details, visit{" "}
          <a href="#" style={{ color: "black" }}>
            deltastarbucks.com/terms
          </a>
        </p>
      </div>
    </div>
  );
}

export default FooterTop;
