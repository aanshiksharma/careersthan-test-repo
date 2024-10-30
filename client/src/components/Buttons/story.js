import React from "react";

// Styles
import "./story.scss";

function Story({ imgURL, myStory }) {
  let classes = "story";
  if (myStory) classes += " myStory";

  return (
    <button type="button" className={classes}>
      <img src={imgURL} alt="" />
    </button>
  );
}

export default Story;
