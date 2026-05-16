'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const navItems = [
    { label: 'Home', href: '/#hero' },
    { label: 'About', href: '/#about' },
    { label: 'Books', href: '/#books' },
    { label: 'Blog', href: '/#blog' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <motion.nav
      className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.container}>
        <a href="/#hero" className={styles.logo}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Omolola
          </motion.span>
        </a>

        <ul className={styles.navLinks}>
          {navItems.map((item, i) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (i + 1) }}
            >
              <a href={item.href} className={styles.navLink}>
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.button
          className={styles.mobileMenuBtn}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      <motion.div
        className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}
      >
        <ul className={styles.mobileNavLinks}>
          {navItems.map((item, i) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <a
                href={item.href}
                className={styles.mobileNavLink}
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  window.location.href = item.href;
                }}
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  );
}