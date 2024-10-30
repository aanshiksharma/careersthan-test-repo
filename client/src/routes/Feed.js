import React from "react";

// Components
import Navbar from "../components/Navbars/navbar";
import MessageBox from "../components/MessageBox/messageBox";
import Post from "../components/Posts/post";
import Story from "../components/Buttons/story";

// Styles
import "../styles/feed.scss";

function Feed() {
  const mockData = [
    {
      id: 1,
      profilePicture: "profile-pictures/1.jpeg",
      username: "Gajendra Rathore",
      position: "Senior Product Designer",
      company: "Apple",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos recusandae incidunt eius ipsam nemo necessitatibus ratione reprehenderit voluptas delectus fugiat! Necessitatibus minima facilis inventore et corrupti eveniet facere ut cupiditate nisi asperiores obcaecati iste ab ad in corporis laboriosam, numquam praesentium incidunt placeat amet culpa commodi quas similique! Eius id beatae animi quo consequatur enim sapiente totam, error temporibus.",
      media: {
        imageURL: "",
        videoURL: "",
      },
    },
    {
      id: 2,
      profilePicture: "profile-pictures/2.jpeg",
      username: "Ajeet Kumar Bharti",
      position: "3D Artist",
      company: "NCS",
      content:
        "I’m thrilled to share that I’m starting a new chapter as a Designer at Nibble Computer Society! 🎨💻 I’m looking forward to collaborating with a talented team and contributing to innovative projects in the design space. Grateful for this opportunity and excited to continue growing my skills in this dynamic field. A big thank you to everyone who has supported me on this journey! 🙏",
      media: {
        imageURL: "",
        videoURL: "",
      },
    },
    {
      id: 3,
      profilePicture: "profile-pictures/3.jpeg",
      username: "Sambhav Kumar",
      position: "UI/UX Designer",
      company: "NCS",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos recusandae incidunt eius ipsam nemo necessitatibus ratione reprehenderit voluptas delectus fugiat! Necessitatibus minima facilis inventore et corrupti eveniet facer, voluptate doloremque odio dolorem delectus facilis quos praesentium non. Similique cum tempora illum exercitationem, quasi quae officossimus, ducimus aut sunt laboriosam quam, porro minima perferendis iusto itaque nesciunt odit tempore! Temporibus hic, earum quis praesentium eligendi exercitationem quidem quod nam nostrum natus id tenetur odit ab a vel suscipit tempore quam modi rem at laudantium est, impedit eos? Totam, nihil.",
      media: {
        imageURL: "",
        videoURL: "",
      },
    },
  ];

  return (
    <>
      <Navbar />
      <MessageBox />
      <div className="body wrapper-1">
        <div className="left">Left</div>
        <div className="middle">
          {/* STORIES SECTION -> This Section needs to be made dynamic using data from the database. The following data mock data for designing purpose. */}

          <div className="stories flex">
            <Story imgURL={"profile-pictures/1.jpeg"} myStory={true} />
            <Story imgURL={"profile-pictures/2.jpeg"} />
            <Story imgURL={"profile-pictures/3.jpeg"} />
            <Story imgURL={"profile-pictures/2.jpeg"} />
            <Story imgURL={"profile-pictures/1.jpeg"} />
          </div>

          {/* POSTS SECTION -> This Section is pretty dynamic in itself but is not using any database and is still hardcoded. Needs reconsideration. */}
          <div className="posts flex">
            {mockData.map((data) => (
              <Post
                key={data.id}
                profilePicture={data.profilePicture}
                username={data.username}
                position={data.position}
                company={data.company}
                time="50m"
                content={data.content}
                media={data.media}
              />
            ))}
          </div>
        </div>
        <div className="right">Right</div>
      </div>
    </>
  );
}

export default Feed;
