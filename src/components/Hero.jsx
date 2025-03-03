import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-5xl font-bold mb-6 text-slate-100">
            Full Stack Developer
          </h1>
          <p className="text-xl mb-8 text-slate-300">
            Building beautiful, interactive, and scalable web applications
          </p>
          <div className="flex justify-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition-colors dark:bg-slate-700 dark:hover:bg-slate-600"
            >
              Get in touch
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 rounded-md transition-colors border-slate-700 text-slate-300 hover:bg-slate-800"
            >
              View projects
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
