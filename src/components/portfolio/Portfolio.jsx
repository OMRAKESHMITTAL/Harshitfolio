import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "CUSTOMIZED LINUX OS FOR FINDING VULNERABILITY",
    img: "https://www.pesapal.com/media/1597/online-reservation-systems-blog-post-770x335-a.png?anchor=center&mode=crop&width=770&height=375&rnd=132904038070000000",
    desc: "This research introduces a Customized Linux Operating System (CLOS) tailored for efficient vulnerability assessment. Built on a lightweight distribution, the CLOS integrates specialized tools, automated scanning, a user-friendly interface, and a robust reporting framework. Prioritizing simplicity and effectiveness, it offers a purpose-built environment to streamline the identification and analysis of security vulnerabilities. The CLOS contributes to advancing cybersecurity practices by providing a lean, regularly updated platform for comprehensive vulnerability assessments. Through practical testing, this research demonstrates the CLOS's efficacy in providing a focused, efficient environment for security professionals engaged in vulnerability management.",
    link: "https://github.com/"
  {
    id: 2,
    title: " FILE SECURITY APPLICATION USING RIJNDAEL ENCRYPTION",
    img: "https://www.mobius-web.fr/wp-content/uploads/2020/03/Intro-Creation-Site-Web.jpg",
    desc: "This research paper presents the design, implementation, and testing of a comprehensive system for secure file encryption and transfer between Android devices and PCs. The system, named Cyphercraft integrates efficient encryption algorithms, socket programming for secure communication, and key management for enhanced security. The paper discusses the architecture, key components, and the testing process, including the identified issues and recommendations for improvement.",
    link:"https://www.researchgate.net/publication/376757320_File_Security_Application_using_Rijndael_Encryption"
  },
  {
    id: 3,
    title: "ENHANCED SECURITY FRAMEWORK",
    img: "https://www.clootrack.com/hubfs/Customer%20Segmentation%20Analysis.jpg",
    desc: "This project introduces an Enhanced Security Framework integrating White Box Traceable Ciphertext-Policy Attribute-Based Encryption (WBCP-ABE) with Security Information and Event Management (SIEM). Through a Django-based web application, the system ensures granular access control over sensitive data and enhances threat detection and response capabilities. Key features include seamless encryption, dynamic access permissions, and comprehensive logging for regulatory compliance. By combining advanced encryption technologies with robust security management, this framework strengthens data security measures and offers enhanced threat visibility.",
    link: "https://github.com/"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button>Click Here To See Project</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
