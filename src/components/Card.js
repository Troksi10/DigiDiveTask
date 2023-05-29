import React, { useEffect } from "react";
import "./Card.css";
import Avatar from "./assets/avatar.png";
import { TbRotateClockwise } from "react-icons/tb";

const Card = ({ setIsEditing, data, setData }) => {
  console.log(data);

  const handleOnClick = () => {
    setIsEditing(true);
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setData(items);
    }
  }, [setData]);
  return (
    <div className="App">
      <TbRotateClockwise className="arrow" onClick={handleOnClick} />
      <form>
        <img src={Avatar} className="img" alt="true" />
        <div>
          <label htmlFor="fname">{data.fn}</label>
        </div>
        <div>
          <label htmlFor="lname">{data.fn}</label>
        </div>
        <div>
          <label htmlFor="">{data.loc}</label>
        </div>
      </form>
    </div>
  );
};

export default Card;
