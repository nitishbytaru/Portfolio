import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, Linkedin, Mail, Sparkles } from "lucide-react";

function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com/nitishbytaru",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://linkedin.com/in/nitishbytaru",
    },
    { icon: <Mail className="w-6 h-6" />, href: "mailto:example@email.com" },
  ];

  return (
    <section ref={ref} className="py-20 px-6 bg-slate-800" id="contact">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center"
        >
          <Sparkles className="w-12 h-12 mx-auto mb-6  text-slate-300" />
          <h2 className="text-4xl font-bold mb-6  text-slate-100">
            Let's Connect
          </h2>
          <p className="text-xl mb-8  text-slate-300">
            I'm always open to new opportunities and interesting projects
          </p>
          <div className="flex justify-center gap-6 mb-12">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full transition-colors  bg-slate-700 text-slate-300 hover:bg-slate-600"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition-colors dark:bg-slate-700 dark:hover:bg-slate-600"
          >
            Send me a message
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
