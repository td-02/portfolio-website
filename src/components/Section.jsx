import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

export default function Section({ id, title, children, className = '' }) {
  return (
    <motion.section
      id={id}
      className={`mx-auto w-full max-w-6xl px-6 py-16 md:py-24 ${className}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      {title && <h2 className="mb-8 font-serif text-3xl font-semibold tracking-tight text-navy md:text-4xl">{title}</h2>}
      {children}
    </motion.section>
  );
}
