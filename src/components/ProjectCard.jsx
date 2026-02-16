import { motion } from 'framer-motion';

export default function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="rounded-xl border border-slate-200 bg-white p-7 shadow-academic"
    >
      <h3 className="font-serif text-2xl font-semibold text-navy">{project.title}</h3>
      <p className="mt-4 text-base leading-7 text-slate-700">{project.description}</p>

      <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-slate-700">
        {project.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-600">
            {tag}
          </span>
        ))}
      </div>

      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="mt-7 inline-flex rounded-md border border-navy px-4 py-2 text-sm font-medium text-navy transition-colors hover:bg-navy hover:text-white"
      >
        View on GitHub
      </a>
    </motion.article>
  );
}
