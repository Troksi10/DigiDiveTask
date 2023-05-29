import React, { useEffect } from "react";
import "./Card.css";
import Avatar from "./assets/avatar.png";

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
  }, []);
  return (
    <div className="App">
      <form>
        <img src={Avatar} className="img" alt="true" />
        <div>
          <label htmlFor="fname">First Name</label>
        </div>
        <div>
          <label htmlFor="lname">Last Name</label>
        </div>
        <div>
          <label htmlFor="">Office Location</label>
        </div>
        <div>
          <button onClick={handleOnClick} className="btn">
            Edit my profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default Card;
