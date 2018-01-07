import React from "react";

const EventListItem = props => {
  return (
    <div>
      <div className="container">
        <div className="listContents">
          <div className="date">
            <h5 style={{ color: "#00b4b3", whiteSpace: "nowrap" }}>
              {props.date}
            </h5>
          </div>
          <div className="venue">
            <h5 style={{ whiteSpace: "nowrap" }}>{props.venue}</h5>
          </div>

          <div className="city">
            <p className="cityText">
              {props.city.city}, {props.city.region}
            </p>
          </div>
        </div>
        <div className="button">
          {props.button ? <a href={props.button}>Tickets</a> : null}
        </div>

        <style jsx>
          {`
            a {
              background-color: white;
              border: none;
              color: #00b4b3;
              padding: 7px 15px;
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

            a:hover {
              background-color: #00b4b3;
              color: white;
            }
            p {
              font-size: 12px;
              align: center;
              white-space: nowrap;
            }
            .button {
              transform: translate(0, -50%);
              float: right;
            }
            .divider {
              border-top: #8c8b8b 1px solid;
              width: 100%;
              align-items: center;
              margin: 0 auto;
            }

            .container {
              width: 100%;
              display: flex;
              position: relative;
              justify-content: space-between;
            }
            .listContents {
              display: flex;
              flex-flow: column;
              justify-content: start;
              padding-left: 1em;
              width: 50%;
            }
            .venue {
              width: 25%;
              align-self: start;
              margin-bottom: -2em;
            }
            .date {
              width: 25%;
              margin-bottom: -2em;
              align-self: start;
            }
            .city {
              width: 25%;
              float: right;
            }
            .button {
              align-self: flex-end;
              width: 25%;
            }
            .cityText {
              padding: 0;
            }
            @media screen and (min-width: 720px) {
              .container {
                display: flex;
                justify-content: space-between;
                flex-direction: row;
                align-items: center;
                width: 80%;
                margin: 0 auto;
                margin-top: 20px;
              }
              .listContents {
                flex-flow: row;
                align-items: center;
                margin-bottom: 2em;
                width: 100%;
                padding-left: 0;
                margin-bottom: 0.5em;
              }

              .city {
                width: 33%;
                margin-right: 1em;
              }
              .cityText {
                padding: 5%;
              }
              .venue {
                width: 33%;
                margin-left: -7em;
                margin-right: 9em;
              }
              .date {
                width: 33%;
              }

              .button {
                width: 10%;
                display: flex;
                float: right;
                justify-content: flex-end;
              }
              .divider {
                width: 82%;
              }
            }
          `}
        </style>
      </div>
      <div className="divider" />
    </div>
  );
};

export default EventListItem;
