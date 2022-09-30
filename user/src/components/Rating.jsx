import React from "react";

function StarRating (props) {
    return (
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              style={{backgroundColor: "transparent", border: "none", outline: "none", cursor: "pointer"}}
              className={index <= props.rating ? "on" : "off"}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
    );
}

export default StarRating;