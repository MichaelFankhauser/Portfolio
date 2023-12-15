import { useRef } from "react";
import "./video.scss";
import { motion, useInView } from "framer-motion";

const varaints = {
    initial: {
        x: 0,
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

const Video = () => {
    const ref = useRef();

    const isInView= useInView(ref, { margin: "-100px" });

    return (
        <motion.div className="video" id="Video" variants={varaints}
            initial="initial"
            // animate="animate"
            whileInView="animate"
            ref={ref}
            animate={"animate"}>
            <motion.div className="videoContainer" variants={varaints}>
                <video controls width="85%">
                    <source src="/Bewerbungsvideo.mp4" type="video/mp4"></source>
                </video>
            </motion.div>
        </motion.div>
    )
}

export default Video;