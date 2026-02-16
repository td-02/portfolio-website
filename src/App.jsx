import { motion } from 'framer-motion';
import ProjectCard from './components/ProjectCard';
import Section from './components/Section';
import SkillBar from './components/SkillBar';
import { links, projectArtifacts, researchItems, skillGroups } from './data';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#research', label: 'Research' },
  { href: '#publications', label: 'Publications' },
  { href: '#skills', label: 'Skills' },
  { href: '#writing', label: 'Writing' },
  { href: '#contact', label: 'Contact' }
];

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-serif text-lg font-semibold tracking-tight text-navy">
            Tapesh C. Das
          </a>
          <ul className="hidden gap-5 text-sm text-slate-600 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a className="transition-colors hover:text-navy" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <Section id="home" className="pt-24 md:pt-32">
          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500"
          >
            Hybrid Research + Industry Engineer
          </motion.p>
          <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-tight text-navy md:text-7xl">Tapesh Chandra Das</h1>
          <p className="mt-6 text-lg font-medium text-slate-700 md:text-xl">AI | Systems | Execution Infrastructure</p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Designing intelligent, event-driven, and scalable systems at the intersection of machine learning, market
            microstructure, and distributed execution.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-md bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90">
              View Research
            </a>
            <a
              href={`${import.meta.env.BASE_URL}Tapesh_Chandra_Das_CV.txt`}
              download
              className="rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-navy hover:text-navy"
            >
              Download CV
            </a>
          </div>
        </Section>

        <Section id="about" title="About">
          <p className="max-w-4xl text-lg leading-8 text-slate-700">
            Tapesh Chandra Das is a B.Tech Computer Science engineer and Associate Software Engineer at Accenture, with
            active research collaboration experience at the Indian Statistical Institute. He is a Springer LNNS
            published author working at the convergence of event-driven systems, NLP, financial machine learning,
            execution engines, and applied security analysis. His long-term direction is focused on scalable,
            intelligent infrastructure for real-world, high-stakes decision environments.
          </p>
        </Section>

        <Section id="projects" title="Selected Systems & Research Artifacts" className="bg-slate-50">
          <div className="grid gap-6 md:grid-cols-2">
            {projectArtifacts.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>

        <Section id="research" title="Research">
          <div className="space-y-6">
            {researchItems.map((item) => (
              <article key={item.title} className="rounded-lg border border-slate-200 p-6">
                <h3 className="font-serif text-2xl text-navy">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-700">{item.description}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="publications" title="Publications" className="bg-slate-50">
          <article className="max-w-4xl rounded-lg border border-slate-200 bg-white p-8">
            <p className="text-lg leading-8 text-slate-700">
              Das, T. C. (2025).
              <br />
              <span className="font-medium italic">Semantic Understanding of Legal Texts: A BERT-Focused Classification Framework.</span>
              <br />
              International Conference on Information Technology and Artificial Intelligence (ITAI 2025).
              <br />
              Lecture Notes in Networks and Systems, Springer (SCOPUS indexed).
            </p>
            <a
              href={links.springer}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-md border border-navy px-4 py-2 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
            >
              View on Springer
            </a>
          </article>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid gap-8 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.category} className="rounded-lg border border-slate-200 p-6">
                <h3 className="mb-5 font-serif text-2xl text-navy">{group.category}</h3>
                <div className="space-y-4">
                  {group.items.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="writing" title="Research & Technical Writing" className="bg-slate-50">
          <p className="max-w-4xl text-lg leading-8 text-slate-700">
            Long-form writing on AI systems, execution infrastructure, scalable architectures, and research engineering.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={links.substack}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-navy px-5 py-3 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
            >
              Substack
            </a>
            <a
              href={links.medium}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-navy hover:text-navy"
            >
              Medium
            </a>
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="grid gap-5 text-base md:grid-cols-2">
            <a className="rounded-lg border border-slate-200 p-5 transition hover:border-navy" href={links.email}>
              tapeshdas2002@gmail.com
            </a>
            <a className="rounded-lg border border-slate-200 p-5 transition hover:border-navy" href={links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="rounded-lg border border-slate-200 p-5 transition hover:border-navy" href={links.scholar} target="_blank" rel="noreferrer">
              Google Scholar
            </a>
            <a className="rounded-lg border border-slate-200 p-5 transition hover:border-navy" href={links.substack} target="_blank" rel="noreferrer">
              Substack
            </a>
          </div>
        </Section>
      </main>

      <footer className="border-t border-slate-200 py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Tapesh Chandra Das</p>
          <p>Designed for research, built with intent.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
