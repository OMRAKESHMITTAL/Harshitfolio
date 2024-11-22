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
    style={{x: yB}}>
    {type === "services" ? "I’m a passionate and dedicated B.Tech graduate in Computer Science Engineering from Delhi Technical Campus, affiliated with Guru Gobind Singh Indraprastha University. Currently, I’m pursuing an MBA at MAIT (Maharaja Agrasen Institute of Technology), also under Guru Gobind Singh Indraprastha University.\n" +
    "I have a keen interest in Ethical Hacking, Cloud Computing, and Cybersecurity. My technical journey has equipped me with strong analytical and problem-solving skills, as well as a deep understanding of emerging technologies in the digital security domain.\n" +
    "Beyond academics, I’m a gamer and an avid traveler who enjoys exploring new places and cultures, which fuels my creativity and broadens my perspective.\n" +
    "I’m always eager to tackle complex challenges, share innovative ideas, and collaborate with others to turn possibilities into reality. If you’re interested in connecting or discussing, feel free to reach out. Let’s create something amazing together!" : ""}
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