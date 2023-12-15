import { useRef } from "react";
import "./aboutme.scss";
import { motion, useInView } from "framer-motion";

const varaints = {
    initial: {
        x: -500,
        y: 100,
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

const AboutMe = () => {
    const ref = useRef();

    const isInView= useInView(ref, { margin: "-100px" });

    return (
        <motion.div className="aboutme" variants={varaints}
            initial="initial"
            // animate="animate"
            // whileInView="animate"
            ref={ref}
            animate={"animate"}>

            <motion.div className="textContainer" variants={varaints}>
                <p>I am Michael
                <br/>and I like to create things
                </p>
                <hr/>
            </motion.div>
            <motion.div className="titleContainer" variants={varaints}>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{color:"orange"}}>About</motion.b> Me
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{color:"orange"}}>Alles</motion.b> auf einen Blick
                    </h1>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={varaints}>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black"}}>
                    <h2>Persönliche Info</h2>
                    <p>
                        Ich bin 30 Jahre alt und wohne in Bern. Im Sommer 2021 habe ich die Ausbildung zum Informatiker Fachrichtung Applikationsentwickler EFZ an der WISS Schulen für Wirtschaft, Immobilien und Informatik angefangen.
                        Im Sommer 2023 habe ich den schulischen Teil der Ausbildung abgeschlossen. Für meinen EFZ Abschluss absolviere ich jetzt an der Santis Training AG in Altstetten ein Praktikum. Im Sommer 2025 schliesse ich dann meine Ausbildung ab.

                    </p>
                    <a href=""><button className="fillerbutton"></button></a>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black"}}>
                    <h2>Skills</h2>
                    <p>
                        In den 2 Jahren schulischer Ausbildung und in der Santis Training AG habe ich bereits eine breite Palette an Programmiersprachen und Frameworks kennengelernt.
                        Wenn Sie auf den Button "Mehr" drücken, sehen Sie eine genaue Auflistung aller Skills im Frontend, Backend und anderen Bereichen. Unter Projekte habe ich noch zwei, drei GitHub Projekte aufgelistet.
                    </p>
                    <a href="#Skills"><button>Mehr</button></a>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black"}}>
                    <h2>Freizeit</h2>
                    <p>
                        Meine Freizeit verbringe ich vorallem mit Lesen und Kochen. Am Laptop zu Hause versuche ich meine Kreativität auszuleben in den Adobe Programmumgebungen.
                        Die restliche Zeit verteilt sich zwischen Kolleg*innen und der Guuggenmusik. Ich bin seit 9 Jahren bei den Latärneguugger Schötz Mitglied und 7 Jahre davon im OK.
                    </p>
                    <a href="#Freizeit"><button>Mehr</button></a>
                </motion.div>
            </motion.div>         
        </motion.div>
    )
}

export default AboutMe;