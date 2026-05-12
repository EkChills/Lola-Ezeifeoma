'use client';

import { motion } from 'framer-motion';
import styles from './BlogPost.module.css';
import { ContentBlock } from '@/data/blogData';

interface BlogPostProps {
  post: {
    slug: string;
    title: string;
    subtitle: string;
    date: string;
    category: string;
    readTime: string;
    content: ContentBlock[];
  };
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <motion.article
      className={styles.article}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <header className={styles.header}>
        <div className={styles.meta}>
          <span className={styles.category}>{post.category}</span>
          <span className={styles.separator}>|</span>
          <span className={styles.date}>{post.date}</span>
          <span className={styles.separator}>|</span>
          <span className={styles.readTime}>{post.readTime}</span>
        </div>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.subtitle}>{post.subtitle}</p>
      </header>

      <div className={styles.content}>
        {post.content.map((block, index) => (
          block.type === 'heading' ? (
            <h2 key={index} className={styles.heading}>{block.text}</h2>
          ) : (
            <p key={index} className={styles.paragraph}>{block.text}</p>
          )
        ))}
      </div>

      <footer className={styles.footer}>
        <a href="/#blog" className={styles.backLink}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to Blog
        </a>
      </footer>
    </motion.article>
  );
}