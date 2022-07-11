import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card.js";
import Modal from "../Modal/Modal.js";
import "./Cards.css";

function Cards() {
  const [datas, setDatas] = useState([]);
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);

  const getDatas = async () => {
    try {
      const response = await axios.get(
        "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
      );
      setDatas(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDatas();
  }, []);
  return (
    <>
      <div className="cards">
        {datas &&
          datas.map((data) => {
            return (
              <Card
                image={data.thumbnail.large}
                title={data.title}
                content={data.content}
                avatar={data.author.avatar}
                author={data.author.name}
                role={data.author.role}
                date={data.date}
                setModal={setModal}
                setData={setData}
              />
            );
          })}
      </div>
      {modal && (
        <Modal
          image={data.image}
          title={data.title}
          content={data.content}
          author={data.author}
          avatar={data.avatar}
          role={data.role}
          setModal={setModal}
        />
      )}
    </>
  );
}

export default Cards;
