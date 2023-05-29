import React, { useEffect, useState } from "react";
import Avatar from "./assets/avatar.png";

const EditCard = ({ setIsEditing, setData }) => {
  const [input, setInput] = useState({ fn: "", ln: "", loc: "" });
  console.log(input);

  const handleClick = () => {
    if (
      input.fn.trim() === "" ||
      input.ln.trim() === "" ||
      input.loc.trim() === ""
    )
      return;
    setData(input);
    localStorage.setItem("items", JSON.stringify(input));
    setIsEditing(false);
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setInput(items);
    }
  }, []);
  return (
    <div>
      <div className="App">
        <form>
          <img src={Avatar} className="img" alt="true" />
          <div>
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              placeholder="Enter your First name"
              onChange={(e) => setInput({ ...input, fn: e.target.value })}
              value={input.fn}
            />
          </div>
          <div>
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              placeholder="Enter your Last name"
              onChange={(e) => setInput({ ...input, ln: e.target.value })}
              value={input.ln}
            />
          </div>
          <div>
            <label htmlFor="">Office Location</label>
            <input
              type="text"
              placeholder="Enter your office"
              onChange={(e) => setInput({ ...input, loc: e.target.value })}
              value={input.loc}
            />
          </div>
          <span style={{ marginRight: "6rem" }}>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </span>
          <span>
            <button onClick={handleClick}>Save</button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default EditCard;
