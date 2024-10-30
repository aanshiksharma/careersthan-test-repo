import React from "react";
import { useRef } from "react";
import { useState } from "react";

// Components
import SearchBar from "../FormFields/searchBar";

// Styling
import "./messageBox.scss";

function MessageBox() {
  const box = useRef(null);
  const arrow = useRef(null);
  const [visible, setVisibility] = useState(false);

  function handleButton() {
    if (visible) {
      arrow.current.style.transform = "rotate(0deg)";
      box.current.style.transform = `translateY(${
        box.current.offsetHeight - 16 * 3
      }px)`;
      setVisibility(false);
    } else {
      arrow.current.style.transform = "rotate(180deg)";
      box.current.style.transform = "translateY(0)";
      setVisibility(true);
    }
  }

  return (
    <>
      <section className="messageBox" ref={box}>
        <div className="heading">
          <span>Messaging</span>
          <button type="button" className="button" onClick={handleButton}>
            <img src="icons/messaging.svg" alt="" ref={arrow} />
          </button>
        </div>
        <div className="chatContainer">
          <SearchBar
            placeholder={"Search Messages"}
            placeholderFontSize={"0.75rem"}
          />
        </div>
      </section>
    </>
  );
}

export default MessageBox;
