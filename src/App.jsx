import { motion, useScroll, useSpring } from "framer-motion";

import {
  NavBar,
  Hero,
  Resume,
  Skills,
  Projects,
  CompetitiveProgramming,
  GitHub,
  Contact,
} from "./components/index.js";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen transition-colors duration-300 bg-slate-900 text-slate-100">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-slate-700 origin-left z-50"
        style={{ scaleX }}
      />
      <NavBar />
      <Hero />
      <Resume />
      <Skills />
      <Projects />
      <CompetitiveProgramming />
      <GitHub />
      <Contact />
    </div>
  );
}

export default App;
