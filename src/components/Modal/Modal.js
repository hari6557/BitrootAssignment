import React from "react";
import "./Modal.css";

function Modal(props) {
  return (
    <>
      <div className="modal">
        <div className="modal_card">
          <div className="close_btn" onClick={() => props.setModal(false)}>
            &times;
          </div>
          <img src={props.image} alt="" />
          <div className="card-body">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <div className="sub_heading">
              <img src={props.avatar} alt="" />
              <h5>
                {props.author} - {props.role}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
