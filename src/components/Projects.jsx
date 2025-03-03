import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { MessageSquare, PiggyBank, Gamepad2, ExternalLink } from "lucide-react";

import ProjectModal from "./ui/ProjectModal";

function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "EchoRealm",
      description:
        "A real-time chatting application with modern UI and seamless communication features. EchoRealm provides users with a smooth messaging experience, complete with typing indicators, read receipts, and media sharing capabilities. The application is built with a focus on performance and user experience.",
      image:
        "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800",
      tags: ["React", "WebSocket", "Node.js"],
      icon: <MessageSquare className="w-8 h-8" />,
      liveLink: "https://echorealm24.vercel.app/",
      codeLink: "https://github.com/nitishbytaru/EchoRealm",
      linkedinPost:
        "https://www.linkedin.com/feed/update/urn:li:activity:7273430448007995392/",
    },
    {
      title: "Expense Tracker",
      description:
        "Smart expense tracking app with analytics and budget management features. This application helps users monitor their spending habits, set budgets, and visualize their financial data through intuitive charts and reports. The app includes features like expense categorization, recurring expenses, and financial goal setting.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
      tags: ["JavaScript", "LocalStorage", "Charts.js"],
      icon: <PiggyBank className="w-8 h-8" />,
      liveLink: "https://expense-nd-trackers.netlify.app/",
      codeLink: "https://github.com/nitishbytaru/ExpenseTracker",
      linkedinPost:
        "https://www.linkedin.com/posts/nitishbytaru_webdevelopment-reactjs-nodejs-activity-7221061857871060993-kjVe",
    },
    {
      title: "Rock Paper Scissors",
      description:
        "Interactive game with beautiful animations and score tracking. This classic game has been reimagined with modern design principles and engaging animations. Features include a score history, game statistics, and different game modes including playing against an AI opponent with varying difficulty levels.",
      image:
        "https://images.unsplash.com/photo-1614854262318-831574f15f1f?auto=format&fit=crop&q=80&w=800",
      tags: ["JavaScript", "CSS Animations", "HTML5"],
      icon: <Gamepad2 className="w-8 h-8" />,
      codeLink: "https://github.com/nitishbytaru/rock-paper-scissor",
      linkedinPost:
        "https://www.linkedin.com/posts/nitishbytaru_nodejs-express-mongodb-activity-7158445230201995265-jf0y",
    },
  ];

  return (
    <section ref={ref} className="py-20 px-6 bg-slate-800" id="projects">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-bold text-center mb-16 text-slate-100"
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer bg-slate-700"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 p-2 rounded-full shadow-md bg-slate-800 text-slate-300">
                  {project.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-slate-100">
                  {project.title}
                </h3>
                <p className="mb-4 line-clamp-2 text-slate-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-sm bg-slate-800 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center text-slate-300 hover:text-slate-100"
                >
                  View Details <ExternalLink className="w-4 h-4 ml-2" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

export default Projects;
