import { useRef } from "react";
import "./skills.scss";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faGlobe, faBrain,} from "@fortawesome/free-solid-svg-icons";
import {faHtml5, faCss3Alt, faSass, faReact, faJs } from "@fortawesome/free-brands-svg-icons";

const varaints = {
    initial: {
        x: 100,
        y: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
}

const Skills = () => {
    const ref = useRef();

    const isInView= useInView(ref, { margin: "-100px" });

    return (
        <motion.div className="skills" id="Skills" variants={varaints}
            initial="initial"
            // animate="animate"
            // whileInView="animate"
            ref={ref}
            animate={"animate"}>
            <motion.div className="titleContainer" variants={varaints}>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{color:"orange"}}>Skills</motion.b> 
                    </h1>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={varaints}>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black"}}>
                <FontAwesomeIcon icon={faGlobe} size="2xl" />
                    <h2>Frontend</h2>
                    <div className="skillContainer">
                        <FontAwesomeIcon icon={faHtml5} size="xl" />
                        <p>HTML</p>
                    </div>
                    <div className="skillContainer">
                        <FontAwesomeIcon icon={faCss3Alt} size="xl"  />
                        <p>CSS</p>
                    </div>
                    <div className="skillContainer">
                        <FontAwesomeIcon icon={faSass} size="xl" />
                        <p>Sass</p>
                    </div>
                    <div className="skillContainer">
                        <FontAwesomeIcon icon={faJs} size="xl" />
                        <p>Javascript</p>
                    </div>
                    <div className="skillContainer">
                        <FontAwesomeIcon icon={faReact} size="xl" />
                        <p>React</p>
                    </div>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black"}}>
                <FontAwesomeIcon icon={faCode} size="2xl" />
                    <h2>Backend</h2>
                    <p>Hallo</p>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black"}}>
                <FontAwesomeIcon icon={faBrain} size="2xl" />
                    <h2>Sonstiges</h2>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black"}}>
                <FontAwesomeIcon icon={faBrain} size="2xl" />
                    <h2>Sozial</h2>
                </motion.div>
            </motion.div>           
        </motion.div>
    )
}

export default Skills;