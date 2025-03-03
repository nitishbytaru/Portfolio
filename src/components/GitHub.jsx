import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Github,
  GitBranch,
  Star,
  GitFork,
  Users,
  GitCommit,
  GitPullRequest,ExternalLink 
} from "lucide-react";
import GitHubCalendar from "react-github-calendar";

function GitHub() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // GitHub stats
  const githubStats = {
    repos: 35,
    stars: 120,
    forks: 45,
    followers: 80,
    contributions: 850,
    languages: [
      { name: "JavaScript", percentage: 45 },
      { name: "TypeScript", percentage: 25 },
      { name: "Python", percentage: 15 },
      { name: "HTML/CSS", percentage: 10 },
      { name: "Other", percentage: 5 },
    ],
    topRepos: [
      { name: "EchoRealm", stars: 45, forks: 12 },
      { name: "ExpenseTracker", stars: 32, forks: 8 },
      { name: "Portfolio", stars: 28, forks: 15 },
    ],
  };
  return (
    <section ref={ref} className="py-20 px-6 bg-slate-800" id="github">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center"
        >
          <Github className="w-12 h-12 mx-auto mb-6 text-slate-300" />
          <h2 className="text-4xl font-bold mb-8text-slate-100">
            GitHub Activity
          </h2>

          {/* GitHub Overview Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-slate-300">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="p-4 rounded-lg text-center  bg-slate-700"
            >
              <div className="flex justify-center mb-2">
                <GitBranch className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold">{githubStats.repos}</div>
              <div className="text-xs uppercase mt-1">Repositories</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="p-4 rounded-lg text-center bg-slate-700"
            >
              <div className="flex justify-center mb-2">
                <Star className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold">{githubStats.stars}</div>
              <div className="text-xs uppercase mt-1">Stars</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="p-4 rounded-lg text-center  bg-slate-700"
            >
              <div className="flex justify-center mb-2">
                <GitFork className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold">{githubStats.forks}</div>
              <div className="text-xs uppercase mt-1">Forks</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="p-4 rounded-lg text-center bg-slate-700"
            >
              <div className="flex justify-center mb-2">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold">{githubStats.followers}</div>
              <div className="text-xs uppercase mt-1">Followers</div>
            </motion.div>
          </div>

          {/* Contribution Graph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="rounded-lg shadow-md p-6 mb-8 bg-slate-700"
          >
            <h3 className="text-xl font-semibold mb-4text-slate-100">
              Contribution Graph
            </h3>
            <GitHubCalendar
              username="nitishbytaru"
              colorScheme="dark"
              className="w-full"
            />
            <div className="mt-4 text-center text-slate-300">
              <span className="font-semibold">
                {githubStats.contributions}+ contributions
              </span>{" "}
              in the last year
            </div>
          </motion.div>

          {/* Languages and Top Repos */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="rounded-lg shadow-md p-6  bg-slate-700"
            >
              <h3 className="text-xl font-semibold mb-4 text-slate-100">
                Languages
              </h3>
              <div className="space-y-4">
                {githubStats.languages.map((lang, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-300">{lang.name}</span>
                      <span className="text-slate-400">{lang.percentage}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-600">
                      <div
                        className={`h-2 rounded-full ${
                          lang.name === "JavaScript"
                            ? "bg-yellow-400"
                            : lang.name === "TypeScript"
                            ? "bg-blue-500"
                            : lang.name === "Python"
                            ? "bg-green-500"
                            : lang.name === "HTML/CSS"
                            ? "bg-red-500"
                            : "bg-gray-500"
                        }`}
                        style={{ width: `${lang.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Top Repositories */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="rounded-lg shadow-md p-6 bg-slate-700"
            >
              <h3 className="text-xl font-semibold mb-4  text-slate-100">
                Top Repositories
              </h3>
              <div className="space-y-4">
                {githubStats.topRepos.map((repo, index) => (
                  <div key={index} className="p-3 rounded-lg  bg-slate-800">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-200">
                        {repo.name}
                      </span>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-1  text-slate-400" />
                          <span className="text-slate-300">{repo.stars}</span>
                        </div>
                        <div className="flex items-center">
                          <GitFork className="w-4 h-4 mr-1 text-slate-40" />
                          <span className="text-slate-300">{repo.forks}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* GitHub Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-8 rounded-lg shadow-md p-6 bg-slate-700"
          >
            <h3 className="text-xl font-semibold mb-4 text-slate-100">
              Recent Activity
            </h3>
            <div className="space-y-4 text-slate-300">
              <div className="p-3 rounded-lg flex items-start bg-slate-800">
                <GitCommit className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <div className="font-medium">
                    Committed to{" "}
                    <span className="text-blue-500">EchoRealm</span>
                  </div>
                  <div className="text-sm mt-1">
                    Added real-time notification system and improved UI
                    responsiveness
                  </div>
                  <div className="text-xs mt-1 text-slate-400">2 days ago</div>
                </div>
              </div>

              <div className="p-3 rounded-lg flex items-start  bg-slate-800">
                <GitPullRequest className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <div className="font-medium">
                    Opened PR in{" "}
                    <span className="text-blue-500">ExpenseTracker</span>
                  </div>
                  <div className="text-sm mt-1">
                    Implemented data visualization with interactive charts
                  </div>
                  <div className="text-xs mt-1 text-slate-400">5 days ago</div>
                </div>
              </div>

              <div className="p-3 rounded-lg flex items-start bg-slate-800">
                <Star className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <div className="font-medium">
                    Starred <span className="text-blue-500">react-query</span>
                  </div>
                  <div className="text-sm mt-1">
                    Added to favorites for data fetching solutions
                  </div>
                  <div className="text-xs mt-1  text-slate-400">1 week ago</div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <motion.a
                href="https://github.com/nitishbytaru"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-4 py-2 rounded-md  bg-slate-800 hover:bg-slate-900 text-slate-200"
              >
                View GitHub Profile <ExternalLink className="w-4 h-4 ml-2" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default GitHub;
