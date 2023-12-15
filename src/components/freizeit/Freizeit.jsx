import { useRef } from "react";
import "./freizeit.scss";
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

const Freizeit = () => {
    const ref = useRef();

    const isInView= useInView(ref, { margin: "-100px" });

    return (
        <motion.div className="freizeit" variants={varaints}
            initial="initial"
            // animate="animate"
            // whileInView="animate"
            ref={ref}
            animate={"animate"}>

            <motion.div className="titleContainer" variants={varaints}>
                <div className="title">
                    <h1>
                        Meine <motion.b whileHover={{color:"orange"}}>Hobbys</motion.b> 
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        in meiner <motion.b whileHover={{color:"orange"}}>Freizeit</motion.b> 
                    </h1>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={varaints}>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black"}}>
                    <h2>Kochen</h2>
                    <p>
                        Eine gesunde Ernährung zu Hause ist mir wichtig. Deshalb koche ich viel am Abend oder am Wochenende. Die asiatische Küche gehört zu meinen Favoriten.
                        Gelegentlich versuche ich auch Vegan zu kochen. 
                    </p>
                    <button className="fillerbutton"></button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black"}}>
                    <h2>Lesen</h2>
                    <p>
                        Ich lese im Schnitt 2-3 Bücher pro Monat. Lesen gehört zu meiner Abendroutine, anstatt den Fernseher an zu machen und eine Serie zu schauen, lese ich ein Buch.
                        Die Zugfahrten nutze ich ebenfalls zum lesen, ausser ich habe Hausaufgaben oder ich kann arbeiten im Zug.
                        Mein Lieblingsgenre ist Fantasy. Eine alternative Welt, sehr ausgiebig beschrieben lockt mein Interesse.
                    </p>
                    <button className="fillerbutton"></button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black"}}>
                    <h2>Guggenmusik</h2>
                    <p>
                        Bereits seit 9 Jahren bin ich bei den Latärneguugger Schötz dabei. Wir sind eine mittelgrosse Gruppe von Menschen, die die Fasnacht schätzen und gerne musizieren.
                        Ich habe 6 Jahre Sousaphon gespielt und habe dann auf die Posaune gewechselt. Ich liebe es Lieder zu spielen wie "Not Afraid" von Eminem oder "The Middle" von Jimmy eat World.
                        Von meinen 9 Jahren im Verein, war ich 8 davon im OK. 5 Jahre hatte ich die ganze Deko unserer Events unter mir und jetzt die letzten 3 Jahre das ganze Marketing. 
                    </p>
                    <button className="fillerbutton"></button>
                </motion.div>
            </motion.div>         
        </motion.div>
    )
}

export default Freizeit;