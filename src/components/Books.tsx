'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Books.module.css';

const books = [
  {
    title: "Unravelling Sex and the Bible",
    description: "A bold, honest, and Bible-based guide for teens and the people who love them.",
    details: "In a world full of confusion about sex, identity, and self-worth, this book speaks clearly. Written with love and without judgment by a mother with teenage children.",
    perfectFor: "Christian teens, parents, youth workers, and mentors",
    availableOn: ["Amazon", "Selar"],
    color: "var(--primary)",
    image: "/Unravelling_Sex_and_the_Bible_Cover.png",
  },
  {
    title: "Dear Daughter: A Letter from the Heart of Jesus",
    description: "If Jesus were to write you a letter, what would you expect?",
    details: "Dear Daughter is not your regular book; it is a meditation with Jesus. Together, we walk through scenes involving the woman at the well, the disciples, and the people of Samaria.",
    perfectFor: "Women seeking deeper intimacy with Christ",
    availableOn: ["Selar"],
    color: "var(--accent)",
    image: "/Dear_Daughter_Front_Cover.jpg",
  },
  {
    title: "YouVersion Devotionals",
    description: "Short-form daily reflections to keep you grounded in the Word throughout your busy week.",
    details: "Daily devotionals designed to spark conversation and deep reflection on God's Word.",
    perfectFor: "Anyone seeking daily spiritual nourishment",
    availableOn: ["YouVersion"],
    color: "var(--secondary)",
  },
];

export default function Books() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="books" className={styles.books}>
      <div className={styles.container}>
        <motion.div
          ref={ref}
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className={styles.label}>Resources</p>
          <h2 className={styles.headline}>Tools for Transformation</h2>
          <p className={styles.subheadline}>
            Resources designed to spark conversation and deep reflection.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {books.map((book, index) => (
            <motion.div
              key={book.title}
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
              {book.image && (
                <div className={styles.bookImageWrapper}>
                  <img src={book.image} alt={book.title} className={styles.bookImage} />
                </div>
              )}
              <div className={styles.cardAccent} style={{ background: book.color }} />
              <div className={styles.cardContent}>
                <h3 className={styles.bookTitle}>{book.title}</h3>
                <p className={styles.bookDescription}>{book.description}</p>
                <p className={styles.bookDetails}>{book.details}</p>
                <div className={styles.bookMeta}>
                  <p className={styles.perfectFor}>
                    <span className={styles.metaLabel}>Perfect for:</span> {book.perfectFor}
                  </p>
                  <div className={styles.availableOn}>
                    {book.availableOn.map((platform) => (
                      <span key={platform} className={styles.platform}>
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}