import "./parallax.scss"
import {motion,useScroll,useTransform} from "framer-motion";
import {useRef} from "react";

const textVariants = {
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
};

const Parallax =({type} ) =>{

    const ref = useRef(null);
    const{scrollYProgress} = useScroll({
        target : ref,
        offset:["start start","end start"],
    })

    const yBg=useTransform(scrollYProgress, [0,1],["0%","400%"])
    const yText=useTransform(scrollYProgress, [0,1],["0%","100%"])
    const yB=useTransform(scrollYProgress, [0,1],["0%","90%"])
    return(
        <div
            className="parallax"
            ref={ref}
            style={{
                background:
                    type === "services"
                        ? "linear-gradient(180deg, #111132, #0c0c1d)"
                        : "linear-gradient(180deg, #111132, #505064)",
            }}
        >
            <motion.h1 style={{y: yBg}}>  {type === "services" ? "About Me!" : ""}</motion.h1>
            <motion.h2 style={{y: yBg}}>  {type !== "services" ? "Here’s What I’ve Been Working On" : ""}</motion.h2>
            <motion.h3
                style={{x: yB}}>{type === "services" ? "I’m Om Mittal, a Computer Science Engineering student with a passion for AI and Machine Learning.\n" +
                "                I have experience in programming with languages like Java, Python, C++, and SQL, and have worked on\n" +
                "                various projects\n" +
                "                that involve machine learning,data processing, and software development.In my internships, I’ve led the\n" +
                "                creation of\n" +
                "                a course recommendation system at IBM, gaining expertise in user authentication, data preprocessing, and\n" +
                "                NLP.\n" +
                "                At CodeClause, I focused on data visualization and model training, ensuring data quality.\n" +
                "                I’m also dedicated to community service, having developed a computer literacy program during my social\n" +
                "                work internship.\n" +
                "                I enjoy tackling complex challenges and turning ideas into reality, as seen in my projects like\n" +
                "                \"SecureCompact and an\n" +
                "                emotion detection system. My portfolio showcases my skills and accomplishments, reflecting my commitment\n" +
                "                to continuous\n" +
                "                learning and growth in the field of technology." : ""}

            </motion.h3>
            {type !== "services" && (<div className="myscroll"> <motion.img
                variants={textVariants}
                animate="scrollButton"
                src="/scroll.png"
                alt=""
            />
            </div>
            )}
            <motion.div style={{x: yText}} className="mountains"></motion.div>
            {type === "services" && (<motion.div style={{x: yText}} className="planets"></motion.div>)}
            <motion.div style={{x: yText}} className="stars"></motion.div>
        </div>
    );
};

export default Parallax;