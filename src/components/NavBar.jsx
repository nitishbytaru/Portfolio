import { motion } from "framer-motion";
function NavBar() {
  return (
    <header className="fixed top-0 w-full backdrop-blur-sm z-40 shadow-sm bg-slate-900/90">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-slate-100"
          >
            Bytaru Nitish durga
          </motion.div>
          <div className="flex gap-6">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="transition-colors text-slate-300 hover:text-slate-100"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
