import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github,Linkedin } from "lucide-react";

function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          className="relative max-w-3xl w-full rounded-lg shadow-xl overflow-hidden bg-slate-800"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative h-64">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900/90 to-transparent">
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            </div>
          </div>

          <div className="p-6">
            <p className="text-lg mb-6 text-slate-300">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-sm bg-slate-700 text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="border-t border-b py-6 mb-6 grid gap-4 sm:grid-cols-2 border-slate-700">
              <div>
                <h4 className="text-sm uppercase font-semibold mb-2 text-slate-400">
                  Key Features
                </h4>
                <ul className="list-disc pl-5 text-slate-300">
                  <li>Real-time updates and notifications</li>
                  <li>Responsive design for all devices</li>
                  <li>Intuitive user interface</li>
                  <li>Performance optimized</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm uppercase font-semibold mb-2 text-slate-400">
                  Technologies Used
                </h4>
                <ul className="list-disc pl-5 text-slate-300">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="flex gap-4">
                {project.liveLink && (
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition-colors inline-flex items-center"
                  >
                    Live Demo <ExternalLink className="w-4 h-4 ml-2" />
                  </motion.a>
                )}
                <motion.a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-md inline-flex items-center bg-slate-700 text-slate-200 hover:bg-slate-600"
                >
                  View Code <Github className="w-4 h-4 ml-2" />
                </motion.a>
              </div>

              {project.linkedinPost && (
                <motion.a
                  href={project.linkedinPost}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
                >
                  <span>
                    I want to understand more — read this LinkedIn post
                  </span>
                  <Linkedin className="w-4 h-4 ml-2" />
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ProjectModal;
