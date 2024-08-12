import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"

      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on how to grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>

            <motion.b whileHover={{color:"orange"}}>Building a </motion.b> Legacy
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>of Professional</motion.b> Success.
          </h1>
          <button>Expertise in Action</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
            className="box"
            whileHover={{background: "lightgray", color: "black"}}
        >
          <h2> Software Developer Intern |<br/> IBM</h2>
          <hr/>
          <br/>
          <p>
            During my IBM internship, where I was the project lead, I gained experience in user authentication, data
            preprocessing, and natural
            language processing. I also worked with machine learning for recommendation systems and built interactive
            web applications using
            Streamlit.
          </p>
          <br/>

        </motion.div>
        <motion.div
            className="box"
            whileHover={{background: "lightgray", color: "black"}}
        >
          <h2>Machine Learning Intern |<br/> CodeClause</h2>
          <hr/>
          <br/>
          <p>
            Collaborated with the machine learning team to preprocess, clean, and curate datasets for model training,
            ensuring data quality and
            integrity. Gained hands-on experience in data visualization tools and techniques to communicate findings
            effectively
          </p>
          <br/>

        </motion.div>
        <motion.div
            className="box"
            whileHover={{background: "lightgray", color: "black"}}
        >
          <h2>Social Work Intern | <br/>Sarv Abhiyan Samity</h2>
          <hr/>
          <br/>
          <p>
            Developed a transformative computer literacy program for illiterate individuals, equipping them with
            essential computer skills.
            Continuously enhanced the program's impact through integrating new technologies and resources for an
            enriched learning experience.

          </p>
          <br/>

        </motion.div>

      </motion.div>
    </motion.div>
  );
};

export default Services;
