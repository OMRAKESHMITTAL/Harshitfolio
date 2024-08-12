import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Online Reservation System",
    img: "/public/ORS.png",
    desc: "I designed an Online Reservation System using Java with SQL connectivity via JDBC, ensuring seamless database interaction. The project highlighted my expertise in software development and database management, delivering an efficient and reliable reservation solution.",
    link: "https://github.com/OMRAKESHMITTAL/reservationsystem.git"
  },
  {
    id: 2,
    title: " Field Fusion",
    img: "/public/ff.jpg",
    desc: "Field Fusion is a football ground booking platform built with React, Tailwind CSS, Express, and MongoDB, offering real-time availability updates. Administrators can efficiently manage bookings with comprehensive validations, ensuring a seamless user experience.",
    link:"https://github.com/OMRAKESHMITTAL/fieldfusion.git"
  },
  {
    id: 3,
    title: "Customer Segmentation Analysis",
    img: "/public/CSA.jpg",
    desc: "For the Customer Segmentation Analysis project, I used Python and Streamlit with K-means clustering, leveraging NumPy, Pandas, and Scikit-learn for data preprocessing. I created visualizations with Matplotlib and Seaborn, offering actionable insights into customer behavior.",
    link: "https://github.com/OMRAKESHMITTAL/customer-segmentation.git"
  },
  {
    id: 4,
    title: "SecureCompact",
    img: "/public/sc.webp",
    desc: "Developed SecureCompact using C++ with advanced Huffman coding for compression and Caesar cipher for encryption. Implemented secure storage, generating encrypted zip files and managing passwords, highlighting expertise in algorithmic design and data security.",
    link :"https://github.com/OMRAKESHMITTAL/SECURECOMPACT.git"
  },

  {
    id: 4,
    title: "Emotion Detection",
    img: "/public/ED.jpg",
    desc: "I developed an emotion detection system using Python on Google Colab, building a CNN with TensorFlow and Keras for accurate emotion classification. The project included extensive model tuning, evaluation, and advanced visualization for robust performance analysis.",
    link : "https://github.com/OMRAKESHMITTAL/emotion-detection.git"
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
