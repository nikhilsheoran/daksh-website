'use client';

import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
    },
  }),
};

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center">
                <span className="text-9xl text-white/90">AS</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-indigo-200 dark:bg-indigo-900/30 rounded-lg -z-10"></div>
            <motion.div
              className="absolute -top-4 -left-4 w-20 h-20 bg-indigo-500/10 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
            ></motion.div>
            <motion.div
              className="absolute -bottom-8 right-20 w-12 h-12 bg-purple-500/20 rounded-full"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}
            ></motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
            <motion.p 
              className="text-foreground/70 mb-4"
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              Hi there! I'm Akhil Sheoran, a 9th grade student with a passion for technology and problem-solving. 
              I'm currently exploring the exciting world of coding and web development.
            </motion.p>
            <motion.p 
              className="text-foreground/70 mb-4"
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              When I'm not coding, you can find me speedcubing - solving Rubik's cubes as fast as possible. 
              I've been practicing this skill for several years and continue to improve my solving times.
            </motion.p>
            <motion.p 
              className="text-foreground/70 mb-6"
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              I also enjoy showing off my ball-spinning skills! I can spin a basketball on my finger, 
              which took a lot of practice and patience to master.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-4"
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Education</h4>
                <p className="text-foreground/70">9th Grade Student</p>
                <p className="text-foreground/70">Soon to be in 10th Grade</p>
              </div>
              <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Interests</h4>
                <p className="text-foreground/70">Coding</p>
                <p className="text-foreground/70">Speedcubing</p>
                <p className="text-foreground/70">Ball Spinning</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 