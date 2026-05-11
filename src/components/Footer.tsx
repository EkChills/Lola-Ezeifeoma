'use client';

import { motion } from 'framer-motion';
import styles from './Footer.module.css';

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/omolola.author',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    name: 'YouVersion',
    href: 'https://www.youversion.com/people/omolola-author',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
      </svg>
    ),
  },
  {
    name: 'Selar',
    href: 'https://selar.com/omolola-author',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <motion.div
        className={styles.quoteWrapper}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <svg className={styles.quoteIcon} viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.77-.71-1.33-.895-.56-.185-1.2-.278-1.92-.278-.72 0-1.36.093-1.92.278-.56.185-1 .483-1.33.895-.46.6-.69 1.337-.69 2.22 0 1.4.5 2.5 1.5 3.3.34.27.73.5 1.16.7.43.2.88.35 1.35.46.47.11.96.16 1.47.16.76 0 1.47-.14 2.12-.42.65-.28 1.18-.66 1.58-1.12.4-.46.6-.97.6-1.52 0-.66-.25-1.2-.75-1.63-.5-.43-1.15-.69-1.96-.77l-1.03-.08c-.26-.02-.47-.1-.64-.26-.17-.16-.25-.38-.25-.66 0-.33.12-.62.37-.88.25-.26.56-.39.94-.39.38 0 .7.13.95.39.25.26.38.55.38.88zM19.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.71-1.33-.895-.56-.185-1.2-.278-1.92-.278-.72 0-1.36.093-1.92.278-.56.185-1 .483-1.33.895-.46.6-.69 1.337-.69 2.22 0 1.4.5 2.5 1.5 3.3.34.27.73.5 1.16.7.43.2.88.35 1.35.46.47.11.96.16 1.47.16.76 0 1.47-.14 2.12-.42.65-.28 1.18-.66 1.58-1.12.4-.46.6-.97.6-1.52 0-.66-.25-1.2-.75-1.63-.5-.43-1.15-.69-1.96-.77l-1.03-.08c-.26-.02-.47-.1-.64-.26-.17-.16-.25-.38-.25-.66 0-.33.12-.62.37-.88.25-.26.56-.39.94-.39.38 0 .7.13.95.39.25.26.38.55.38.88z"/>
        </svg>
        <blockquote className={styles.quote}>
          &ldquo;The grass withers, the flower fades, but the word of our God will stand forever.&rdquo;
        </blockquote>
        <cite className={styles.cite}>— Isaiah 40:8</cite>
      </motion.div>

      <div className={styles.bottom}>
        <div className={styles.location}>
          <span>Lagos, Nigeria</span>
          <span className={styles.separator}>|</span>
          <span>Serving Globally</span>
        </div>

        <div className={styles.social}>
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.name}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Omolola Ezeifeoma
        </p>
      </div>
    </footer>
  );
}