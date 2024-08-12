import "./parallax.scss"
import {motion,useScroll,useTransform} from "framer-motion";
import {useRef} from "react";
const Parallax =() =>{

    const ref = useRef(null);
    const{scrollYProgress} = useScroll({
        target : ref,
        offset:["start start","end start"],
    })

    const yBg=useTransform(scrollYProgress, [0,1],["0%","400%"])
    const yText=useTransform(scrollYProgress, [0,1],["0%","100%"])
    const yB=useTransform(scrollYProgress, [0,1],["0%","90%"])
    return(
        <div className="parallax" ref ={ref} style={{background:"linear-gradient(180deg, #111132,#0c0c1d)"}}>
            <motion.h1 style={{y:yBg}}>About Me!</motion.h1>
            <motion.h3 style={{x:yB}}>
                I’m Om Mittal, a Computer Science Engineering student with a passion for AI and Machine Learning.
                I have experience in programming with languages like Java, Python, C++, and SQL, and have worked on various projects
                that involve machine learning,data processing, and software development.In my internships, I’ve led the creation of
                a course recommendation system at IBM, gaining expertise in user authentication, data preprocessing, and NLP.
                At CodeClause, I focused on data visualization and model training, ensuring data quality.
                I’m also dedicated to community service, having developed a computer literacy program during my social work internship.
                I enjoy tackling complex challenges and turning ideas into reality, as seen in my projects like "SecureCompact and an
                emotion detection system. My portfolio showcases my skills and accomplishments, reflecting my commitment to continuous
                learning and growth in the field of technology.
            </motion.h3>
            <motion.div style={{x:yText}} className="mountains"></motion.div>
            <motion.div style={{x:yText}} className="planets"></motion.div>
            <motion.div style={{x:yText}} className="stars"></motion.div>
        </div>
    );
};

export default Parallax;