import "./ABout.scss";

// import { motion } from "motion/react";
import profilePic from "../../assets/photos/website-pic.jpg";

const About = () => {
  return (
    <div className="about">
      {/* <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="about"> */}
      <div className="about__desc">
        <h3 className="about__title">A little about me:</h3>
        <div className="about__paragraphs">
          <p>
            My name is Ivan, and I am a software engineer. I come from a
            background in luxury retail, but I recently graduated from a 12-week
            bootcamp at Brainstation that gave me first-hand experience using
            HTML, CSS, React, JavaScript and a variety of other tools.
          </p>
          <p>
            The idea of wanting to be a software engineer wasn’t clear to me
            until I had taken a Comp Sci course in university. I was struggling
            on a problem and could not figure out the answer, and so I went to
            bed frustrated. Later in the night I woke up with an idea of how to
            get my code to work, and it ended up working. The feeling of the
            “Eureka” moment is something I haven’t forgotten, and it is what
            pushed me further down this career path.
          </p>
          <p>
            A little extra about me, I am a big sneakerhead and I love fashion,
            hence the background in luxury retail. I’m a lover of food and being
            able to try dishes I have never tried before, as well I have
            recently started to dive deeper into gaming.{" "}
          </p>
          <p>I also have an very cute dog if you ever want to see pictures.</p>
        </div>
      </div>
      <img
        className="about__pic"
        src={profilePic}
        alt="profile picture of me"
      />
    </div>
    // </motion.div>
  );
};

export default About;
