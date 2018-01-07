import React from "react";

const Header = props => {
  return (
    <div className="headerContainer">
      <div className="headerContent">
        <div>
          <img
            src={props.imageUrl}
            alt={props.name}
            width={75}
            height={75}
            style={{ borderRadius: "5%", border: "#8c8b8b 1px solid" }}
          />
        </div>
        <div className="imageAside">
          <h3 style={{ color: "#00b4b3" }}>{props.artistName}</h3>
          <h3>Upcoming Events</h3>
        </div>
      </div>
      <style jsx>{`
        .headerContainer {
          display: flex;
          width: 80%;
          margin: 0 auto;
          position: static;
        }
        .headerContent {
          display: flex;
          align-items: center;
        }
        .imageAside {
          margin-left: 1em;
        }
      `}</style>
    </div>
  );
};

export default Header;
