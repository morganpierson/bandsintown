import React from "react";

const EventListItem = props => {
  return (
    <div>
      <div className="container">
        <div className="dateVenue" style={{ position: "relative" }}>
          <div style={{ position: "absolute" }}>
            <h5 style={{ color: "#00b4b3" }}>{props.date}</h5>
          </div>
          <div style={{ paddingLeft: "7em" }}>
            <h5>{props.venue}</h5>
          </div>
        </div>

        <div className={!props.mobile && "cityButton"}>
          <div style={{ position: "abolute", paddingLeft: "7em" }}>
            <p style={{ fontSize: "12px" }}>
              {props.city.city}, {props.city.region}
            </p>
          </div>
          <div style={{ alignSelf: "end" }}>
            {props.button ? (
              <a className="button" href={props.button}>
                Tickets
              </a>
            ) : null}
          </div>
        </div>
        <style jsx>
          {`
            .button {
              background-color: white;
              border: none;
              color: #00b4b3;
              padding: 8px 20px;
              text-align: center;
              text-decoration: none;
              display: inline-block;
              font-size: 12px;
              margin: 4px 2px;
              cursor: pointer;
              border-radius: 5%;
              border-color: #00b4b3;
              border: 1px solid;
              font-weight: bold;
            }
            .button:hover {
              background-color: #00b4b3;
              color: white;
            }
            .container {
              display: flex;
              justify-content: space-between;
              flex-direction: row;
              align-items: center;
              width: 80%;
              margin: 0 auto;
              margin-top: 20px;
            }
            .cityButton {
              display: flex;
              align-items: center;
              width: 50%;
              justify-content: space-between;
            }
            .dateVenue {
              display: flex;
              width: 50%;
              align-items: center;
              justify-content: space-between;
            }
            .divider {
              border-top: #8c8b8b 1px solid;
              width: 82%;
              align-items: center;
              margin: 0 auto;
            }
          `}
        </style>
      </div>
      <div className="divider" />
    </div>
  );
};

export default EventListItem;
