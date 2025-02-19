import "./ProjectPage.scss";

import { Link } from "react-router-dom";
import chat from "../../assets/photos/woofmeet-chat.png";
import login from "../../assets/photos/woofmeet-login.png";
import main from "../../assets/photos/woofmeet-main.png";
import profile from "../../assets/photos/woofmeet-profile.png";
import signup from "../../assets/photos/woofmeet-signup.png";
import start from "../../assets/photos/woofmeet-start.png";

const ProjectPage = () => {
  return (
    <div className="project">
      <div className="project__one">
        <h3 className="project__one-title">WOOFMeet</h3>
        <div className="carousel">
          <div className="project__one-photos">
            <img className="project__one-photo" src={start} alt="start page" />
            <img className="project__one-photo" src={login} alt="login page" />
            <img
              className="project__one-photo"
              src={signup}
              alt="signup page"
            />
            <img className="project__one-photo" src={main} alt="home page" />
            <img
              className="project__one-photo"
              src={profile}
              alt="profile edit page"
            />
            <img className="project__one-photo" src={chat} alt="chat page" />
          </div>
        </div>
        <p className="project__one-description">
          WOOFMeet is my capstone project for my bootcamp at Brainstation. The
          purpose of the app is for people who have dogs with social anxiety. It
          is made to be like "Dog Tindr" and allow you to connect with people
          who are in the same area as you with the same problem. After chatting
          you are able to set a meet to allow the dogs to meet in a smaller
          social situation to hopefully allow them to be better in larger scale
          situations. The project was made using HTML, CSS, React, Knex, Node,
          Socket.io, Axios and Motion
        </p>
        <p className="project__github">Check out the Github here: </p>
        <Link
          className="project__link"
          to="https://github.com/imarcus14/ivan-marcus-capstone"
        >
          <p>Front End: https://github.com/imarcus14/ivan-marcus-capstone</p>
        </Link>
        <Link
          className="project__link"
          to="https://github.com/imarcus14/ivan-marcus-capstone-server"
        >
          <p>
            Back End: https://github.com/imarcus14/ivan-marcus-capstone-server
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectPage;
