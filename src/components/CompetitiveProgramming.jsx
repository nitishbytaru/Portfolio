import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Trophy, Code, ExternalLink, Code2 } from "lucide-react";

function CompetitiveProgramming() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // LeetCode stats
  const leetcodeStats = {
    totalSolved: 350,
    easySolved: 120,
    mediumSolved: 180,
    hardSolved: 50,
    ranking: 25000,
    contestRating: 1850,
    badges: [
      "Daily Streak - 100 days",
      "Monthly Challenge - June",
      "Problem Solving Badge",
    ],
  };

  // CodeChef stats
  const codechefStats = {
    rating: 1920,
    stars: 5,
    globalRank: 5000,
    countryRank: 500,
    division: "Division 1",
    contests: [
      { name: "June Long Challenge 2023", rank: 120, participants: 5000 },
      { name: "May Cook-Off 2023", rank: 85, participants: 3000 },
      { name: "April Lunchtime 2023", rank: 200, participants: 4000 },
    ],
  };
  return (
    <section ref={ref} className="py-20 px-6 bg-slate-900" id="competitive">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center"
        >
          <Trophy className="w-12 h-12 mx-auto mb-6 text-slate-300" />
          <h2 className="text-4xl font-bold mb-12 text-slate-100">
            Competitive Programming
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* LeetCode Stats */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-lg shadow-mdbg-slate-800"
            >
              <Code className="w-8 h-8 mx-auto mb-4 text-slate-300" />
              <h3 className="text-2xl font-semibold mb-4 text-slate-100">
                LeetCode
              </h3>
              <div className="flex justify-center mb-6">
                <img
                  src="https://leetcard.jacoblin.cool/nitishbytaru?theme=light&font=Poppins&ext=contest"
                  alt="LeetCode Stats"
                  className="w-full rounded-lg shadow-md"
                />
              </div>

              {/* Additional LeetCode Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6 text-center text-slate-300">
                <div className="p-3 rounded-lg bg-slate-700">
                  <div className="text-2xl font-bold">
                    {leetcodeStats.easySolved}
                  </div>
                  <div className="text-xs uppercase mt-1">Easy</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-700">
                  <div className="text-2xl font-bold">
                    {leetcodeStats.mediumSolved}
                  </div>
                  <div className="text-xs uppercase mt-1">Medium</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-700">
                  <div className="text-2xl font-bold">
                    {leetcodeStats.hardSolved}
                  </div>
                  <div className="text-xs uppercase mt-1">Hard</div>
                </div>
              </div>

              <div className="mb-6 text-slate-300">
                <div className="flex justify-between mb-2">
                  <span>Contest Rating:</span>
                  <span className="font-semibold">
                    {leetcodeStats.contestRating}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Global Ranking:</span>
                  <span className="font-semibold">
                    Top {leetcodeStats.ranking}
                  </span>
                </div>
              </div>

              <motion.a
                href="https://leetcode.com/nitishbytaru"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-4 py-2 rounded-md bg-slate-700 hover:bg-slate-600 text-slate-200"
              >
                View Full Profile <ExternalLink className="w-4 h-4 ml-2" />
              </motion.a>
            </motion.div>

            {/* CodeChef Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-lg shadow-md bg-slate-800"
            >
              <Code2 className="w-8 h-8 mx-auto mb-4 text-slate-300" />
              <h3 className="text-2xl font-semibold mb-4  text-slate-100">
                CodeChef
              </h3>
              <div className="flex justify-center mb-6">
                <img
                  src="https://codechef-badges.herokuapp.com/nitishbytaru"
                  alt="CodeChef Stats"
                  className="w-full rounded-lg shadow-md"
                />
              </div>

              {/* Additional CodeChef Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6 text-slate-300">
                <div className="p-4 rounded-lg text-center  bg-slate-700">
                  <div className="text-3xl font-bold">
                    {codechefStats.rating}
                  </div>
                  <div className="text-xs uppercase mt-1">Rating</div>
                </div>
                <div className="p-4 rounded-lg text-center bg-slate-700">
                  <div className="text-3xl font-bold">
                    {codechefStats.stars}★
                  </div>
                  <div className="text-xs uppercase mt-1">Stars</div>
                </div>
              </div>

              <div className="mb-6 text-slate-300">
                <div className="flex justify-between mb-2">
                  <span>Global Rank:</span>
                  <span className="font-semibold">
                    {codechefStats.globalRank}
                  </span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Country Rank:</span>
                  <span className="font-semibold">
                    {codechefStats.countryRank}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Division:</span>
                  <span className="font-semibold">
                    {codechefStats.division}
                  </span>
                </div>
              </div>

              <div className="mb-6 text-slate-300">
                <h4 className="text-sm uppercase font-semibold mb-2 text-slate-400">
                  Recent Contests
                </h4>
                <ul className="space-y-2">
                  {codechefStats.contests.map((contest, index) => (
                    <li key={index} className="text-sm">
                      {contest.name}: Rank {contest.rank}/{contest.participants}
                    </li>
                  ))}
                </ul>
              </div>

              <motion.a
                href="https://www.codechef.com/users/nitishbytaru"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-4 py-2 rounded-md bg-slate-700 hover:bg-slate-600 text-slate-200"
              >
                View Full Profile <ExternalLink className="w-4 h-4 ml-2" />
              </motion.a>
            </motion.div>
          </div>

          {/* Problem Solving Approach */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="p-6 rounded-lg shadow-md bg-slate-800"
          >
            <h3 className="text-xl font-semibold mb-4 text-slate-100">
              My Problem Solving Approach
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-slate-300">
              <div className="p-4 rounded-lg bg-slate-700">
                <h4 className="font-semibold mb-2">Analyze</h4>
                <p className="text-sm">
                  I break down complex problems into smaller, manageable
                  components to understand the core challenge.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-slate-700">
                <h4 className="font-semibold mb-2">Optimize</h4>
                <p className="text-sm">
                  I focus on time and space complexity, always seeking the most
                  efficient solution possible.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-slate-700">
                <h4 className="font-semibold mb-2">Implement</h4>
                <p className="text-sm">
                  I write clean, maintainable code with proper error handling
                  and edge case consideration.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default CompetitiveProgramming;
