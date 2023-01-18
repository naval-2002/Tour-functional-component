import React, { useState } from "react";
import "../index.css";

function Tour(props) {
  const [readMore, setReadMore] = useState(false);
  const { handlechange } = props;
  const { image, price, name, info, id } = props.data;

  const readmorehandler = () => {
    setReadMore((prevstate) => {
      return !prevstate;
    });
  };

  return (
    <div className="Tour-cont">
      <div className="Tour-cont2">
        <img className="image" src={image}></img>
        <p className="price">{price}</p>
        <h3>{name}</h3>
        <p className="para">
          {readMore ? info : `${info.substring(0, 192)}...`}
          <button onClick={readmorehandler}>
            {readMore ? "see Less" : "see More"}
          </button>
        </p>

        <button
          onClick={() => {
            handlechange(id);
          }}
        >
          {" "}
          Not Intereasted{" "}
        </button>
      </div>
    </div>
  );
}
export default Tour;
