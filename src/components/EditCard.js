import React, { useEffect, useState } from "react";
import Avatar from "./assets/avatar.png";

const EditCard = ({ setIsEditing, setData }) => {
  const [input, setInput] = useState({ fn: "", in: "", loc: "" });
  console.log(input);

  const handleClick = () => {
    if (
      input.fn.trim() === "" ||
      input.in.trim() === "" ||
      input.loc.trim() === ""
    )
      return;
  };
  setData(input);
  localStorage.setItem("items", JSON.stringify(input));
  setIsEditing(false);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setInput(items);
    }
  });
  return (
    <div>
      <div className="App">
        <form>
          <img src={Avatar} className="img" alt="true" />
          <div>
            <label htmlFor="fname">First Name</label>
            <input type="text" placeholder="Enter your First name" />
          </div>
          <div>
            <label htmlFor="lname">Last Name</label>
            <input type="text" placeholder="Enter your Last name" />
          </div>
          <div>
            <label htmlFor="">Office Location</label>
            <input type="text" placeholder="Enter your office" />
          </div>
          <div className="form-actions">
            <button>Cancel</button>
          </div>
          <div>
            <button onClick={handleClick}>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCard;
