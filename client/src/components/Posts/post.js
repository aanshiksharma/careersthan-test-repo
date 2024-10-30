import React from "react";

// Components
import Button from "../Buttons/button";

// Styles
import "./post.scss";
import { SassColor } from "sass";

function Post({
  profilePicture,
  username,
  position,
  company,
  time,
  content,
  media,
}) {
  return (
    <>
      <article className="postContainer">
        <header className="flex">
          <div className="profilePicture">
            <img src={profilePicture} alt="" />
          </div>

          <div className="userInfo">
            <div className="username">{username}</div>
            <div className="job">
              {position} at {company}
            </div>
            <div className="time">
              {time} <span>&#8226;</span>{" "}
              <img src="icons/earthLittle.svg" alt="" />
            </div>
          </div>
        </header>

        <main className="content">
          <p>{content}</p>
          <div className="media"></div>
        </main>

        {/* Like Comment Repost and Share Buttons */}
        <footer className="interactions flex">
          <div className="left flex">
            <Button type={"button"} imgLink={"icons/like.svg"} label={"Like"} />
            <Button
              type={"button"}
              imgLink={"icons/comment.svg"}
              label={"Comment"}
            />
            <Button
              type={"button"}
              imgLink={"icons/repost.svg"}
              label={"Repost"}
            />
          </div>
          <div className="right">
            <Button
              type={"button"}
              imgLink={"icons/share.svg"}
              label={"Share"}
              classes={"btn flex-reverse"}
            />
          </div>
        </footer>
      </article>
    </>
  );
}

export default Post;
