import React from "react";

const Articolo = (props) => {
  return (
    <article>
      <div style={{ position: "relative", height: "fit-content" }}>
        <h4> {props.title} </h4>
        <div className="underline"></div>
      </div>
      <p> {props.body}</p>
    </article>
  );
};

export default Articolo;
