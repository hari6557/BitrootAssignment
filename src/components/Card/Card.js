import React, { useState } from "react";
import "./Card.css";

function Card(props) {
  const [modal, setModal] = useState(false);
  const [tempdata, setTempData] = useState({});

  const date = new Date(props.date);
  var year = date.getFullYear();
  var month = date.getMonth();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
  ];
  var monthName = monthNames[month];
  var day = ("0" + date.getDate()).slice(-2);

  const setData = (image, title, content, author, role, avatar) => {
    setTempData({
      image: image,
      title: title,
      content: content,
      author: author,
      role: role,
      avatar: avatar
    });
    return setModal(true);
  };

  return (
    <>
      <div className="card">
        <div className="image">
          <img src={props.image} alt="" />
          <div
            className="overlay"
            onMouseEnter={() =>
              setData(
                props.image,
                props.title,
                props.content,
                props.author,
                props.role,
                props.avatar
              )
            }
            onMouseMove={() => props.setData(tempdata)}
          >
            <h3 className="text" onClick={() => props.setModal(modal)}>
              Learn More
            </h3>
          </div>
        </div>
        <div className="card-body">
          <span class="dot" id="dot1"></span>
          <span class="dot" id="dot2"></span>
          <h2>{props.title}</h2>
          <p>{props.content}</p>
          <div className="sub__heading">
            <h5>
              {props.author} - {props.role}
            </h5>
            <h5>
              {monthName} {day}, {year}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
