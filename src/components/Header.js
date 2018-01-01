import React from "react";

const Header = props => {
  return (
    <div className="headerContainer">
      <img
        src={props.imageUrl}
        alt={props.name}
        width={75}
        height={75}
        style={{ borderRadius: "5%", border: "#8c8b8b 1px solid" }}
      />
      <div>
        <h3 style={{ color: "#00b4b3" }}>{props.artistName}</h3>
        <h3>Upcoming Events</h3>
      </div>
      <style jsx>
        {`
          .headerContainer {
            display: flex;
            align-items: center;
            margin: 0 auto;
          }
        `}
      </style>
    </div>
  );
};

export default Header;
