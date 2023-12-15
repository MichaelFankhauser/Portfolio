import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import AboutMe from "./components/aboutme/AboutMe";
import Contact from "./components/contact/Contact";
import Video from "./components/video/Video";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects"
import Freizeit from "./components/freizeit/Freizeit";

const App = () => {
  return (
  <div>
    <Cursor/>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="About Me">
      <Parallax type="aboutme"/>
      </section>
    <section>
      <AboutMe />
    </section>
    <section id="Video">
      <Video />
    </section>
    <section id="Skills">
      <Skills />
    </section>
    <section id="Projekte">
      <Projects />
    </section>
    <section id="Freizeit">
      <Parallax type="freetime"/>
    </section>
    <section>
      <Freizeit/>
    </section>
    <section id="Kontakt">
      <Contact />
    </section>
  </div>
  );
};

export default App;
