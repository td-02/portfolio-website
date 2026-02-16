import { motion } from 'framer-motion';

export default function SkillBar({ name, level }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-navy">{name}</span>
        <span className="text-slate-500">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-200">
        <motion.div
          className="h-full rounded-full bg-navy"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}
