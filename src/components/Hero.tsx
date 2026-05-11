'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const headline = "Rooted in Truth. Walking in Grace.";
  const words = headline.split(' ');

  return (
    <section id="hero" className={styles.hero}>
      <motion.div className={styles.bgPattern} style={{ y }}>
        <div className={styles.circle1} />
        <div className={styles.circle2} />
        <div className={styles.circle3} />
      </motion.div>

      <motion.div className={styles.content} style={{ y, opacity }}>
        <motion.p
          className={styles.welcome}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Welcome
        </motion.p>

        <h1 className={styles.headline}>
          {words.map((word, i) => (
            <motion.span
              key={i}
              className={styles.word}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5 + i * 0.15,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className={styles.subheadline}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
        >
          Equipping the next generation and the women who lead them to find clarity and identity in God&apos;s Word.
        </motion.p>

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <a href="#about" className={styles.ctaBtn}>
            Discover More
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.div
          className={styles.scrollLine}
          animate={{ height: [20, 60, 20] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className={styles.flowerDecor}>
        <motion.svg
          viewBox="0 0 100 100"
          className={styles.flower}
          initial={{ rotate: -180, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ delay: 1.8, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <circle cx="50" cy="50" r="8" fill="var(--secondary)" opacity="0.6" />
          <ellipse cx="50" cy="25" rx="12" ry="20" fill="var(--accent)" opacity="0.4" />
          <ellipse cx="50" cy="75" rx="12" ry="20" fill="var(--accent)" opacity="0.4" />
          <ellipse cx="25" cy="50" rx="20" ry="12" fill="var(--primary)" opacity="0.3" />
          <ellipse cx="75" cy="50" rx="20" ry="12" fill="var(--primary)" opacity="0.3" />
        </motion.svg>
      </div>
    </section>
  );
}