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
            <a href="https://www.instagram.com/_fanki/"><img className="socialimage"src="/instagram.png"></img></a>
            <a href="https://www.facebook.com/michael.fankhauser.37"><img className="socialimage"src="/facebook.png"></img></a>
            <a href="https://github.com/MichaelFankhauser"><img className="socialimage"src="/github.png"></img></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
