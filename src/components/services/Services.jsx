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
          <h2> Ethical Hacking with Cyber Security  Intern |<br/> Techobytes Technologies </h2>
          <hr/>
          <br/>
          <p>
          During my internship in Ethical Hacking and Cybersecurity, I worked on identifying and mitigating vulnerabilities in systems and networks through tasks such as vulnerability assessments, penetration testing, and security audits. Using tools like Nmap, Burp Suite, and Wireshark, I conducted risk analysis and helped implement preventive measures like firewalls and encryption.
          </p>
          <br/>

        </motion.div>
        <motion.div
            className="box"
            whileHover={{background: "lightgray", color: "black"}}
        >
          <h2>Web Development Intern |<br/> OctaNet Services Pvt Ltd</h2>
          <br/>
          <br/>
          <hr/>
          <br/>
          <p>
            During my internship as a Web Development Intern, I gained hands-on experience in designing, developing, and
            optimizing dynamic websites and web applications. My responsibilities included creating responsive user
            interfaces using HTML, CSS, and JavaScript, and developing backend functionality with tools. I also worked
            with databases such as MySQL to manage and retrieve data efficiently.
          </p>
          <br/>

        </motion.div>
        <motion.div
            className="box"
            whileHover={{background: "lightgray", color: "black"}}
        >
          <h2>Ethical Hacking with Cyber Security Intern | <br/>TechnoHacks EduTech </h2>
          <br/>
          <hr/>
          <br/>
          <p>
            During my internship in Ethical Hacking and Cybersecurity, I focused on securing systems by performing
            vulnerability assessments, penetration testing, and security audits using tools like Metasploit and
            Wireshark. I worked on identifying risks, implementing mitigation strategies, and enhancing system defenses
            through encryption and firewall setups. Additionally, I contributed to incident response efforts and
            educated teams on cybersecurity best practices. </p>
          <br/>

        </motion.div>

      </motion.div>
    </motion.div>
  );
};

export default Services;
