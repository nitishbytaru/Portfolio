import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { useInView } from "react-intersection-observer";

function Resume() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 px-6 bg-slate-800" id="resume">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center"
        >
          <FileText className="w-12 h-12 mx-auto mb-6 text-slate-300" />
          <h2 className="text-4xl font-bold mb-8 text-slate-100">Resume</h2>
          <div className="shadow-xl rounded-lg overflow-hidden bg-slate-700">
            <embed
              src="/Resume.pdf"
              type="application/pdf"
              className="w-full h-[500px]"
            />

            <div className="p-6">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition-colors dark:bg-slate-700 dark:hover:bg-slate-600"
              >
                Download Resume
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Resume;
