import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import {motion} from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
            initial={{ opacity: 0, sclae: 0.5 }}
            animate={{ opacity: 1, sclae: 1 }}
            transition={{ duration: 0.5 }}
            >
            Michael Fankhauser
        </motion.span>
        <div className="social">
            <a href="#"><img src="/instagram.png"></img></a>
            <a href="#"><img src="/facebook.png"></img></a>
            <a href="#"><img src="/youtube.png"></img></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
