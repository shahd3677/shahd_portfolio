import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Code2, Server, Database, Wrench, GraduationCap, BriefcaseBusiness,
  ExternalLink, Download, Sparkles, Globe2, CheckCircle2
} from 'lucide-react';
import './styles.css';

const projects = [
  {
    number: '01',
    title: 'International Export Gateway',
    type: 'Full-Stack Web Application',
    description: 'A digital platform concept designed to support international trade and export operations, helping businesses manage export-related activities and information.',
    stack: ['React.js', 'Node.js', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
    featured: true,
    visual: 'ieg',
    highlights: ['Responsive React interface', 'Export-management focused experience', 'Full-stack application architecture'],
    github: '',
    demo: ''
  },
  {
    number: '02',
    title: 'News Application',
    type: 'Frontend Web Application',
    description: 'A news browsing experience that presents articles in a clear, organized interface and makes it easy for users to explore current stories.',
    stack: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
    featured: false,
    visual: 'news',
    highlights: ['Component-based React UI', 'Organized news presentation', 'Responsive page layout'],
    github: '',
    demo: ''
  },
  {
    number: '03',
    title: 'To-Do List Application',
    type: 'Frontend Web Application',
    description: 'A simple, interactive task manager for creating and organizing everyday tasks through a clean and easy-to-use interface.',
    stack: ['JavaScript', 'HTML5', 'CSS3'],
    featured: false,
    visual: 'todo',
    highlights: ['Create, edit and delete tasks', 'Task organization', 'Interactive user interface'],
    github: '',
    demo: ''
  }
];

const skillGroups = [
  { icon: Code2, title: 'Frontend Development', skills: ['HTML5', 'CSS3', 'JavaScript ES6+', 'React.js', 'Angular', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'Responsive Design'] },
  { icon: Server, title: 'Backend Development', skills: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Authentication', 'Middleware'] },
  { icon: Database, title: 'Database & Storage', skills: ['MongoDB', 'Mongoose', 'MySQL', 'CRUD Operations', 'Data Modeling'] },
  { icon: Wrench, title: 'Tools & Workflow', skills: ['Git & GitHub', 'VS Code', 'Postman', 'Figma', 'npm', 'Agile Methodologies'] }
];

function ProjectVisual({ type }) {
  if (type === 'ieg') return <div className="visual visual-ieg"><div className="visual-top"><span className="mini-logo">IEG<span>.</span></span><span className="mini-pill">TRADE PORTAL</span></div><div className="visual-copy"><span>GLOBAL TRADE,</span><strong>CONNECTED.</strong><small>International Export Gateway</small></div><div className="route route-one"></div><div className="route route-two"></div><div className="globe"><Globe2 size={82} strokeWidth={1}/></div><div className="visual-stat"><b>IEG</b><span>Export Gateway</span></div></div>;
  if (type === 'news') return <div className="visual visual-news"><div className="news-nav"><b>daily<span>brief.</span></b><i></i><i></i><i></i></div><div className="news-feature"><div className="news-image"><span>THE WORLD<br/>IN FOCUS</span></div><div className="news-lines"><b>Today's top stories</b><i></i><i></i><i></i><small>Latest updates · Discover</small></div></div><div className="news-cards"><i></i><i></i><i></i></div></div>;
  return <div className="visual visual-todo"><div className="todo-window"><div className="todo-heading"><span>My tasks</span><b>Today</b></div><div className="todo-progress"><span></span></div>{['Plan the day','Review project tasks','Learn something new'].map((t,i)=><div className="todo-row" key={t}><span className={i===0?'done':''}>{i===0?'✓':''}</span>{t}<small>{i===0?'Done':'To do'}</small></div>)}<div className="todo-add">+ Add a new task</div></div></div>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [['About','about'],['Skills','skills'],['Projects','projects'],['Experience','experience'],['Contact','contact']];
  return <header className="header"><a className="brand" href="#home">shahd<span>.</span></a><button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button><nav className={open?'nav nav-open':'nav'}>{links.map(([label,id])=><a key={id} href={'#'+id} onClick={()=>setOpen(false)}>{label}</a>)}<a className="nav-cta" href="#contact" onClick={()=>setOpen(false)}>Let's talk <ArrowUpRight size={15}/></a></nav></header>;
}

function App() {
  const [activeProject, setActiveProject] = useState('All');
  const filtered = activeProject === 'All' ? projects : projects.filter(p => p.type.startsWith(activeProject));
  return <><Header/><main>
    <section className="hero section-wrap" id="home">
      <div className="hero-grid">
        <div className="hero-content"><div className="eyebrow"><span className="status-dot"></span> AVAILABLE FOR OPPORTUNITIES</div><p className="hello">Hello, I'm</p><h1>Shahd Abd<br/><span>Almoiez.</span></h1><h2>Full-Stack Developer</h2><p className="hero-description">I build modern, responsive web experiences — from thoughtful interfaces to reliable server-side solutions.</p><div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a><a className="button button-ghost" href="#contact">Get in touch <ArrowRight size={16}/></a></div><div className="hero-socials"><a href="https://www.linkedin.com/in/shahd-abd-almoiez" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a><span></span><a href="mailto:shahd.eelu.2020@gmail.com"><Mail size={17}/> Email</a></div></div>
        <div className="hero-art"><div className="orbit orbit-a"></div><div className="orbit orbit-b"></div><div className="hero-card"><div className="code-head"><span></span><span></span><span></span><small>developer.js</small></div><div className="code-body"><p><i>const</i> developer = {'{'}</p><p className="indent">name: <em>'Shahd'</em>,</p><p className="indent">role: <em>'Full-Stack Developer'</em>,</p><p className="indent">focus: [</p><p className="indent deeper"><em>'React.js'</em>, <em>'Node.js'</em>,</p><p className="indent deeper"><em>'JavaScript'</em></p><p className="indent">],</p><p className="indent">mindset: <em>'Always learning'</em></p><p>{'}'};</p><div className="code-cursor"></div></div></div><div className="floating-chip chip-react"><span>⚛</span> React.js</div><div className="floating-chip chip-node"><span>⌘</span> Node.js</div><div className="floating-chip chip-js">JS</div><div className="art-caption">Turning ideas into digital experiences <Sparkles size={14}/></div></div>
      </div><a className="scroll-hint" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
    </section>

    <section className="section section-light" id="about"><div className="section-wrap"><div className="section-heading"><span className="section-kicker">01 / ABOUT ME</span><h2>Building with purpose.<br/><span>Learning every day.</span></h2></div><div className="about-grid"><div className="about-lead"><p className="lead-text">I'm a Full-Stack Developer with a background in Software Engineering and a passion for creating useful, intuitive web applications.</p><p>My work spans frontend development with React and Angular, as well as backend development with Node.js and database technologies. I enjoy turning ideas into practical digital experiences and continuously improving the way I build.</p><a className="text-link" href="#contact">Let's connect <ArrowUpRight size={16}/></a></div><div className="about-facts"><div className="fact"><span className="fact-icon"><GraduationCap/></span><div><b>Education</b><p>Bachelor's degree in Computer Science and Information Technology<br/>The Egyptian E-Learning University · 2020–2024</p></div></div><div className="fact"><span className="fact-icon"><BriefcaseBusiness/></span><div><b>Development experience</b><p>Full-stack and frontend development training and project work, including DIGILians and the Digital Egypt Pioneers Initiative.</p></div></div><div className="fact"><span className="fact-icon"><Globe2/></span><div><b>Based in</b><p>Assiut, Egypt · Open to remote opportunities</p></div></div></div></div></div></section>

    <section className="section section-dark" id="skills"><div className="section-wrap"><div className="section-heading"><span className="section-kicker">02 / TOOLKIT</span><h2>Skills & <span>technologies.</span></h2><p className="section-intro">The tools I use to design, develop, and bring web applications to life.</p></div><div className="skills-grid">{skillGroups.map(({icon:Icon,title,skills})=><article className="skill-card" key={title}><div className="skill-icon"><Icon size={22}/></div><h3>{title}</h3><div className="skill-tags">{skills.map(s=><span key={s}>{s}</span>)}</div></article>)}</div></div></section>

    <section className="section section-light projects-section" id="projects"><div className="section-wrap"><div className="section-heading projects-title"><div><span className="section-kicker">03 / SELECTED WORK</span><h2>Projects that bring<br/><span>ideas to life.</span></h2></div><p className="section-intro">A selection of web applications that reflect my learning, problem-solving, and development journey.</p></div><div className="project-filters">{['All','Full-Stack','Frontend'].map(f=><button key={f} className={activeProject===f?'filter active':'filter'} onClick={()=>setActiveProject(f)}>{f}</button>)}</div><div className="projects-grid">{filtered.map(p=><article className={'project-card '+(p.featured?'project-featured':'')} key={p.number}><div className="project-visual-wrap"><ProjectVisual type={p.visual}/><span className="project-number">{p.number}</span></div><div className="project-info"><div className="project-type">{p.type}</div><h3>{p.title}</h3><p>{p.description}</p><div className="project-highlights">{p.highlights.map(h=><span key={h}><CheckCircle2 size={14}/>{h}</span>)}</div><div className="project-stack">{p.stack.map(s=><span key={s}>{s}</span>)}</div><div className="project-links">{p.demo?<a href={p.demo} target="_blank" rel="noreferrer">Live demo <ExternalLink size={15}/></a>:<span className="link-placeholder">Live demo link to be added</span>}{p.github?<a href={p.github} target="_blank" rel="noreferrer">GitHub <Github size={15}/></a>:<span className="link-placeholder">GitHub link to be added</span>}</div></div></article>)}</div></div></section>

    <section className="section section-blue" id="experience"><div className="section-wrap"><div className="section-heading"><span className="section-kicker">04 / MY JOURNEY</span><h2>Experience & <span>education.</span></h2></div><div className="timeline"><article className="timeline-item"><div className="timeline-date">JAN 2026 — JUN 2026</div><div className="timeline-marker"></div><div className="timeline-content"><span className="timeline-label">DEVELOPMENT EXPERIENCE</span><h3>Full-Stack React Developer (MERN Stack)</h3><h4>DIGILians · Egyptian Military Academy</h4><p>Worked on full-stack web application development using React.js, Node.js, Express, and MongoDB. CV highlights include RESTful API development, authentication, database optimization, and collaborative Git/Agile workflows.</p><div className="timeline-tags"><span>React.js</span><span>Node.js</span><span>Express</span><span>MongoDB</span></div></div></article><article className="timeline-item"><div className="timeline-date">OCT 2024 — MAY 2025</div><div className="timeline-marker"></div><div className="timeline-content"><span className="timeline-label">TRAINING PROGRAM</span><h3>Angular Front-End Developer</h3><h4>Digital Egypt Pioneers Initiative · Remote</h4><p>Completed 120+ hours of training in Angular, TypeScript, and modern frontend development. Built Angular applications and practiced responsive UI development, reusable components, and debugging.</p><div className="timeline-tags"><span>Angular</span><span>TypeScript</span><span>RxJS</span><span>Responsive UI</span></div></div></article><article className="timeline-item"><div className="timeline-date">2020 — 2024</div><div className="timeline-marker"></div><div className="timeline-content"><span className="timeline-label">EDUCATION</span><h3>Bachelor of Computer Science and Information Technology</h3><h4>The Egyptian E-Learning University · Assiut</h4><p>Relevant coursework included Web Development, Database Management Systems, Software Engineering, Data Structures and Algorithms, and Object-Oriented Programming.</p></div></article></div></div></section>

    <section className="section contact-section" id="contact"><div className="section-wrap"><div className="contact-panel"><div className="contact-orb"></div><span className="section-kicker">05 / GET IN TOUCH</span><h2>Have a project<br/>in <span>mind?</span></h2><p>I'm always interested in connecting, learning about new opportunities, and discussing ideas that make a difference.</p><a className="button button-white" href="mailto:shahd.eelu.2020@gmail.com">Say hello <ArrowUpRight size={17}/></a><div className="contact-details"><a href="mailto:shahd.eelu.2020@gmail.com"><Mail size={17}/> shahd.eelu.2020@gmail.com</a><a href="https://www.linkedin.com/in/shahd-abd-almoiez" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn profile</a><span><Globe2 size={17}/> Assiut, Egypt</span></div></div></div></section>
  </main><footer className="footer"><div className="section-wrap footer-inner"><a className="brand" href="#home">shahd<span>.</span></a><p>Designed & built with care by Shahd Abd Almoiez.</p><span>© {new Date().getFullYear()} · All rights reserved</span></div></footer></>;
}

createRoot(document.getElementById('root')).render(<App/>);