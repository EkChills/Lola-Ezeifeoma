'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './About.module.css';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <motion.div
          ref={ref}
          className={styles.imageWrapper}
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src="/author_lola.jpg"
            alt="Lola Ezeifeoma"
            className={styles.authorImage}
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.style.display = 'none';
              const parent = img.parentElement;
              if (parent) {
                const placeholder = parent.querySelector('.placeholder');
                if (placeholder) (placeholder as HTMLElement).style.display = 'flex';
              }
            }}
          />
          <div className={styles.imagePlaceholder} style={{ display: 'none' }}>
            <div className="placeholder" style={{ display: 'none', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
              <span>Photo Coming Soon</span>
            </div>
          </div>
          <div className={styles.decorativeFrame} />
        </motion.div>

        <div className={styles.content}>
          <motion.p
            className={styles.label}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            About
          </motion.p>

          <motion.h2
            className={styles.headline}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            A Heart for the Word
          </motion.h2>

          <motion.div
            className={styles.divider}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          />

          <motion.p
            className={styles.body}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            Based in the vibrant heart of Lagos, my calling is found at the intersection of faith and life. As a minister of the Word, I wear many hats—from hosting intimate Women&apos;s Bible Studies to teaching the bright, inquisitive minds in Junior Church.
          </motion.p>

          <motion.p
            className={styles.body}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            In every word I write and every lesson I teach, my goal is to foster a generation that is not just &quot;data literate,&quot; but &quot;Spirit-led&quot;—discernment-focused individuals who know who they are because they know Whose they are.
          </motion.p>
        </div>
      </div>
    </section>
  );
}