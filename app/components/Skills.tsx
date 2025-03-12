'use client';

import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML/CSS', level: 75, color: 'from-blue-500 to-cyan-500' },
  { name: 'JavaScript', level: 60, color: 'from-yellow-400 to-yellow-600' },
  { name: 'React', level: 50, color: 'from-cyan-400 to-blue-500' },
  { name: 'Next.js', level: 45, color: 'from-gray-700 to-gray-900' },
  { name: 'TypeScript', level: 40, color: 'from-blue-600 to-blue-800' },
  { name: 'Python', level: 65, color: 'from-blue-500 to-green-500' },
];

const speedcubingSkills = [
  { name: '3x3 Cube', level: 85, color: 'from-red-500 to-orange-500', time: '25 seconds' },
  { name: '2x2 Cube', level: 80, color: 'from-green-500 to-emerald-500', time: '8 seconds' },
  { name: 'Pyraminx', level: 70, color: 'from-purple-500 to-pink-500', time: '15 seconds' },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-indigo-50/50 dark:bg-indigo-950/10">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <motion.h3
              className="text-2xl font-bold mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Coding Skills
            </motion.h3>
            <motion.div
              className="space-y-6"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.map((skill) => (
                <motion.div key={skill.name} variants={item}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-foreground/70">{skill.level}%</span>
                  </div>
                  <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <motion.h3
              className="text-2xl font-bold mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Speedcubing Skills
            </motion.h3>
            <motion.div
              className="space-y-6"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {speedcubingSkills.map((skill) => (
                <motion.div key={skill.name} variants={item}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-foreground/70">Best Time: {skill.time}</span>
                  </div>
                  <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-12 p-6 bg-white dark:bg-gray-800/50 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-2xl mr-2">🏆</span> Special Skill
              </h4>
              <p className="text-foreground/70 mb-4">
                I can spin a basketball on my finger for over a minute! This skill took months of practice to master.
              </p>
              <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '90%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 }}
                ></motion.div>
              </div>
              <div className="flex justify-between mt-2">
                <span className="font-medium">Ball Spinning</span>
                <span className="text-foreground/70">90%</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 