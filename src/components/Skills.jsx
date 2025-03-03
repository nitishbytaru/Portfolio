import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Server, Database } from "lucide-react";

function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Frontend",
      items: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend",
      items: ["Node.js", "Express", "Python"],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database",
      items: ["PostgreSQL", "MongoDB", "Redis"],
    },
  ];

  return (
    <section ref={ref} className="py-20 px-6 bg-slate-900" id="skills">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-bold text-center mb-16 text-slate-100"
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="p-6 rounded-lg transition-shadow hover:shadow-md bg-slate-800 text-slate-100"
            >
              <div className="mb-4 text-slate-300">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{skill.title}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-slate-300">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
