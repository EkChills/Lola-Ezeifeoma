'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import styles from './Contact.module.css';

const audienceOptions = [
  { value: '', label: 'Select...' },
  { value: 'parent', label: 'Parent' },
  { value: 'teen', label: 'Teen' },
  { value: 'woman', label: 'Woman' },
  { value: 'church-leader', label: 'Church Leader' },
];

const inquiryOptions = [
  { value: '', label: 'Select...' },
  { value: 'speaking', label: 'Speaking or Teaching Inquiry' },
  { value: 'book', label: 'Book Question' },
  { value: 'testimony', label: 'Personal Testimony' },
  { value: 'general', label: 'General Inquiry' },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    audience: '',
    inquiry: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFocused, setIsFocused] = useState<string | null>(null);
  const [hasValue, setHasValue] = useState<{ [key: string]: boolean }>({
    audience: false,
    inquiry: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <motion.div
          ref={ref}
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className={styles.label}>Connect</p>
          <h2 className={styles.headline}>Let&apos;s Start a Conversation</h2>
          <p className={styles.intro}>
            If you are a parent looking for resources, a teen with a question, or a ministry leader interested in a speaking engagement or Bible study facilitation, please reach out. I look forward to connecting with you.
          </p>
        </motion.div>

        <motion.div
          className={styles.formWrapper}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {isSubmitted ? (
            <motion.div
              className={styles.successMessage}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <CheckCircle size={48} color="var(--primary)" />
              <h3>Message Sent</h3>
              <p>Thank you for reaching out. I&apos;ll get back to you soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <div className={`${styles.formGroup} ${isFocused === 'name' ? styles.focused : ''}`}>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    onFocus={() => setIsFocused('name')}
                    onBlur={() => setIsFocused(null)}
                    required
                    className={styles.input}
                  />
                  <label htmlFor="name" className={styles.floatingLabel}>Name</label>
                </div>

                <div className={`${styles.formGroup} ${isFocused === 'email' ? styles.focused : ''}`}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    onFocus={() => setIsFocused('email')}
                    onBlur={() => setIsFocused(null)}
                    required
                    className={styles.input}
                  />
                  <label htmlFor="email" className={styles.floatingLabel}>Email Address</label>
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={`${styles.formGroup} ${isFocused === 'audience' || hasValue.audience ? styles.focused : ''}`}>
                  <select
                    id="audience"
                    name="audience"
                    value={formState.audience}
                    onChange={(e) => {
                      setFormState({ ...formState, audience: e.target.value });
                      setHasValue({ ...hasValue, audience: !!e.target.value });
                    }}
                    onFocus={() => setIsFocused('audience')}
                    onBlur={() => setIsFocused(null)}
                    required
                    className={styles.select}
                  >
                    {audienceOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <label htmlFor="audience" className={styles.floatingLabel}>I am reaching out as a...</label>
                </div>

                <div className={`${styles.formGroup} ${isFocused === 'inquiry' || hasValue.inquiry ? styles.focused : ''}`}>
                  <select
                    id="inquiry"
                    name="inquiry"
                    value={formState.inquiry}
                    onChange={(e) => {
                      setFormState({ ...formState, inquiry: e.target.value });
                      setHasValue({ ...hasValue, inquiry: !!e.target.value });
                    }}
                    onFocus={() => setIsFocused('inquiry')}
                    onBlur={() => setIsFocused(null)}
                    required
                    className={styles.select}
                  >
                    {inquiryOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <label htmlFor="inquiry" className={styles.floatingLabel}>How can I serve you today?</label>
                </div>
              </div>

              <div className={`${styles.formGroup} ${isFocused === 'message' ? styles.focused : ''}`}>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  onFocus={() => setIsFocused('message')}
                  onBlur={() => setIsFocused(null)}
                  required
                  className={styles.textarea}
                  rows={5}
                />
                <label htmlFor="message" className={styles.floatingLabel}>Your Message</label>
              </div>

              <motion.button
                type="submit"
                className={styles.submitBtn}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Send Message</span>
                <Send size={18} />
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}