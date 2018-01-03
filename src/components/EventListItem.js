import React from "react";

const EventListItem = props => {
  return (
    <div>
      <div className="container">
        <div>
          <h5 style={{ color: "#00b4b3" }}>{props.date}</h5>
        </div>
        <div>
          <h5>{props.venue}</h5>
        </div>

        <p style={{ marginRight: 10, fontSize: "12px", position: "relative" }}>
          {props.city.city}, {props.city.region}
        </p>

        {props.button ? (
          <a className="button" href={props.button}>
            Tickets
          </a>
        ) : null}

        <style jsx>
          {`
            .container {
              display: flex;
              flex-direction: row;
              align-items: center;
              width: 80%;
              justify-content: space-between;
              margin: 0 auto;
              margin-top: 20px;
            }
            .divider {
              border-top: #8c8b8b 1px solid;
              width: 82%;
              align-items: center;
              margin: 0 auto;
            }
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
              border: none;
              color: white;
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
            .dateVenue {
              align-self: flex-start;
            }
            .cityButton {
              align-self: flex-end;
            }
          `}
        </style>
      </div>
      <div className="divider" />
    </div>
  );
};

export default EventListItem;
