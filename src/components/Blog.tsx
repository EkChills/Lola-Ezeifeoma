'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import styles from './Blog.module.css';

const blogPosts = [
  {
    id: 1,
    slug: "wait-was-i-being-rude",
    title: "Wait, Was I Being Rude?",
    subtitle: "The Art of the Re-Up: Mastering Respectful Speech",
    date: "May 8, 2026",
    excerpt: "Ever had that happen? You say something you think is totally basic, only to have an adult look at you like you just started a fire...",
    category: "Communication",
    readTime: "8 min read",
  },
  {
    id: 2,
    slug: "beyond-the-flex",
    title: "Beyond the Flex",
    subtitle: "Why Skills are the Future's Real Currency",
    date: "April 22, 2026",
    excerpt: "Let's be real: being a teenager in a material-driven world is a massive burden. Between Instagram and TikTok, it's easy to believe that 'cheap popularity' is the ultimate goal...",
    category: "Growth",
    readTime: "10 min read",
  },
  {
    id: 3,
    slug: "the-shortcut-trap",
    title: "The Shortcut Trap",
    subtitle: "Why the Long Way is Actually a Hack",
    date: "April 10, 2026",
    excerpt: "There's an old proverb that says: 'There is a way that seems right to a person, but in the end, it leads to destruction.' In the age of technology, we've been sold the concept of the shortcut...",
    category: "Wisdom",
    readTime: "12 min read",
  },
];

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className={styles.blog}>
      <div className={styles.container}>
        <motion.div
          ref={ref}
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className={styles.label}>Blog</p>
          <h2 className={styles.headline}>Words of Wisdom</h2>
          <p className={styles.subheadline}>
            Reflections and insights to guide you on your journey.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className={styles.card}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.2 * (index + 1),
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8 }}
            >
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <span className={styles.category}>{post.category}</span>
                  <span className={styles.readTime}>
                    <svg
                      className={styles.clockIcon}
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {post.readTime}
                  </span>
                </div>
                <h3 className={styles.title}>{post.title}</h3>
                <p className={styles.subtitle}>{post.subtitle}</p>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.date}>{post.date}</span>
                  <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                    Read More
                    <svg
                      className={styles.arrowIcon}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}