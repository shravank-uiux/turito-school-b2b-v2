'use client';
import {useEffect,useRef,useState} from 'react';
import type {CSSProperties, ReactNode} from 'react';

import {ArrowRight,ArrowUpRight,BookOpen,Check,ClipboardCheck,Clock,Eye,FileText,Gauge,KeyRound,LayoutGrid,Lightbulb,Lock,Moon,PenLine,RefreshCw,School,Search,Sparkles,Store,Target,TrendingUp,UserCheck,Users,Zap} from 'lucide-react';
import {Header,Footer} from './marketing';
import {ScaledAsset} from './scaled-asset';

const audiencePaths=[
 {href:'/for-administration',name:'For Schools',accent:'#c9b6e8',photo:'/principal-emily-carter.png',focus:'50% 24%',note:'See where students need help—and where to focus next.'},
 {href:'/for-teachers',name:'For Teachers',accent:'#f2a894',photo:'/teacher-tools-hero.png',focus:'50% 26%',note:'Spend less time preparing for your next class.'},
 {href:'/for-students',name:'Student support',accent:'#bcd89e',photo:'/academics-hero.png',focus:'50% 22%',note:'Give every student guided practice, whenever they get stuck.'},
];
const whyPoints=[
 [Gauge,'green','Meets every student where they are','Topic-level results show where a student actually is, not where the lesson assumes they are.'],
 [Moon,'gold','Gives teachers their evenings back','Planning, teaching material, and first-pass marking drafted in minutes. The teacher still holds the pen.'],
 [Zap,'red','Surfaces problems while they can still be fixed','Engagement and subject results name the students who need help now, not a report card confirming it in December.'],
] as const;
const integrationPartners=[
 {name:'Google Workspace',file:'google.png',role:'Sign-in'},
 {name:'Apple',file:'apple.png',role:'Sign-in'},
 {name:'Clever',file:'clever.png',role:'Sign-in & rostering'},
 {name:'ClassLink',file:'classlink.svg',role:'Sign-in, rostering & marketplace'},
];
const integrationCapabilities=[
 [KeyRound,'Single sign-on','Students and staff sign in with the account they already use. No new passwords for your team to issue or reset.'],
 [RefreshCw,'Automatic rostering','Classes, teachers, and student lists sync from your existing systems and stay current through the school year.'],
 [Store,'ClassLink marketplace','Add TuritoSchools from the marketplace and deploy it alongside the rest of your district\u2019s apps.'],
] as const;
const trustPoints=[
 [UserCheck,'green','Teachers review what AI produces','A teacher edits and approves before anything reaches a student.'],
 [School,'purple','Schools control their own data','You decide which solutions are used, who has access, and what is shared.'],
 [Eye,'coral','Insights exist to support learning','Reporting helps educators find where students need help — nothing else.'],
 [Lock,'gold','Access follows the school','People see what their role requires, and no more.'],
] as const;
const trustStandards=[
 ['soc-2-type-ii','SOC 2 Type II','Security, availability, and confidentiality controls, audited annually.'],
 ['ferpa','FERPA','We act as a school official with a legitimate educational interest, under your direction.'],
 ['coppa','COPPA','Consent is obtained by the school on behalf of parents, as the regulation permits.'],
 ['gdpr','GDPR & UK GDPR','Your school is the controller; we are the processor, under standard contractual clauses.'],
 ['iso-27001','ISO 27001','Information security management across production infrastructure.'],
 ['wcag-2-2-aa','WCAG 2.2 AA','Student and teacher interfaces audited, with known gaps published.'],
] as const;
const amplifyPoints=[[Clock,'gold','Hours back in every week'],[Target,'green','Support shaped to each student'],[TrendingUp,'sky','Progress your team can act on']] as const;
const amplifyTools=[[LayoutGrid,'Presentation Generator'],[BookOpen,'Lesson Plan'],[PenLine,'Writing Feedback'],[FileText,'Worksheet Generator'],[Lightbulb,'Multiple Explanations'],[ClipboardCheck,'Rubric Generator']] as const;
function AmplifyWorkspace(){return <ScaledAsset baseWidth={520}><div className="eh-amp-app"><div className="eh-amp-bar"><img src="/turito-logo-black.svg" alt="" width={74} height={29}/><span className="eh-amp-dots"><i/><i/><i/></span></div><div className="eh-amp-body"><span className="eh-amp-mark"><Sparkles size={19}/></span><h4>Good morning, Ms. Rao.</h4><div className="eh-amp-search"><Search size={13}/><span/></div><div className="eh-amp-tools">{amplifyTools.map(([Icon,name],i)=>{const I=Icon as typeof Sparkles;return <div key={name} className={i===1?'eh-amp-tool eh-amp-tool-active':'eh-amp-tool'}><I size={16}/><b>{name}</b><span/></div>})}</div></div></div></ScaledAsset>}
export function EcosystemHome({hero}: {hero: ReactNode}){
 const root=useRef<HTMLElement>(null);
 const [motion,setMotion]=useState(true);
 useEffect(()=>{
  const el=root.current;if(!el)return;
  const preference=window.matchMedia('(prefers-reduced-motion: reduce)');
  const syncPreference=()=>setMotion(!preference.matches);syncPreference();
  preference.addEventListener('change',syncPreference);
  const visibility=()=>{el.dataset.hidden=String(document.hidden)};
  visibility();document.addEventListener('visibilitychange',visibility);
  const sections=Array.from(el.querySelectorAll(':scope > section, :scope > nav'));
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
   entry.target.classList.toggle('eh-in-view',entry.isIntersecting);
   if(entry.isIntersecting)entry.target.classList.add('eh-revealed');
  }),{threshold:.08});
  sections.forEach(section=>observer.observe(section));
  el.dataset.ready='true';
  return()=>{observer.disconnect();preference.removeEventListener('change',syncPreference);document.removeEventListener('visibilitychange',visibility)};
 },[]);
 return <><Header/><main id="main" className="ecosystem-home" ref={root} data-motion={motion?'on':'off'}>{hero}<section className="eh-offerings" id="solutions"><div className="wrap"><div className="eh-section-head"><div><div className="eyebrow">Who it’s for</div><h2>Support for<br/><em>your whole school.</em></h2></div><p>Start where your school needs support most. Every part connects to the rest.</p></div><div className="eh-paths">{audiencePaths.map(s=><a className="eh-path-card" href={s.href} key={s.href} style={{'--path-accent':s.accent} as CSSProperties}><span className="eh-path-media"><img src={s.photo} alt="" loading="lazy" style={{objectPosition:s.focus}}/></span><span className="eh-path-veil" aria-hidden="true"/><span className="eh-path-body"><span className="eh-path-rule" aria-hidden="true"/><h3>{s.name}</h3><span className="eh-path-note">{s.note}</span><span className="eh-path-go">Explore <ArrowUpRight size={16}/></span></span></a>)}</div></div></section><section className="eh-why"><div className="wrap eh-why-grid"><div className="eh-why-head"><div className="eyebrow">Why schools switch</div><h2>A platform built<br/><em>around the classroom.</em></h2></div><div className="eh-why-media"><img src="/classroom-support.png" width={1672} height={941} alt="A teacher working through a problem with students during class" loading="lazy"/></div><ul className="eh-why-list">{whyPoints.map(([Icon,tone,title,body])=>{const I=Icon as typeof Users;return <li key={title} className={`eh-why-${tone}`}><span className="eh-why-icon"><I size={22}/></span><div><h3>{title}</h3><p>{body}</p></div></li>})}</ul></div></section><section className="eh-example" id="see-an-example"><div className="wrap eh-example-grid"><div className="eh-example-copy"><div className="eyebrow">One example</div><h2>A lesson drafted<br/><em>before the bell.</em></h2><p>A teacher asks for a Grade 8 science lesson on photosynthesis. TuritoSchools drafts the objective, the starter, the practice, and a check for understanding. The teacher changes whatever does not suit the class, then assigns it.</p><a className="text-link" href="/request-demo">Talk about your school’s needs <ArrowUpRight size={17}/></a></div><figure className="eh-example-card"><figcaption className="eh-example-head"><Sparkles size={15}/><span>Lesson plan · Grade 8 Science · Photosynthesis</span></figcaption><dl className="eh-example-body"><dt>Objective</dt><dd>Students explain how a plant turns light into stored energy, and write the word equation for it.</dd><dt>Starter · 5 min</dt><dd>Two photographs: one plant grown in light, one grown in the dark. What changed, and why?</dd><dt>Guided practice · 15 min</dt><dd>Label the inputs and outputs on a leaf diagram, then write the equation in your own words.</dd><dt>Check for understanding</dt><dd>Three questions, one per level, with a marking key for the teacher.</dd></dl><div className="eh-example-foot"><Check size={15}/> A draft. The teacher edits and approves it before the class sees it.</div></figure></div></section><section className="eh-trust"><div className="wrap eh-trust-grid"><div className="eh-trust-copy"><div className="eyebrow">Trust &amp; privacy</div><h2>Safe, school-ready AI.<br/><em>Answerable to you.</em></h2><p>TuritoSchools sits close to teaching and learning, so how it handles student work matters as much as what it can do. Four commitments shape how the product behaves.</p><a href="/trust-privacy" className="text-link">Read how we handle student data <ArrowRight size={17}/></a></div><ul className="eh-trust-points">{trustPoints.map(([Icon,tone,title,body])=>{const I=Icon as typeof Users;return <li key={title} className={`eh-trust-${tone}`}><span className="eh-trust-icon"><I size={21}/></span><div><h3>{title}</h3><p>{body}</p></div></li>})}</ul></div><div className="wrap"><div className="eh-standards"><div className="eh-standards-head"><span>Certifications &amp; compliance</span></div><ul>{trustStandards.map(([slug,name,body])=><li key={name}><span className="eh-std-badge"><img src={`/compliance/${slug}.png`} alt="" loading="lazy"/></span><h3>{name}</h3><p>{body}</p></li>)}</ul></div></div></section><section className="eh-integrations" id="integrations"><div className="wrap"><div className="eh-section-head"><div><div className="eyebrow">Works with your district</div><h2>Connects to the tools<br/><em>your school already uses.</em></h2></div><p>Sign-in, rostering, and app access run through the systems your IT team already manages.</p></div><ul className="eh-partner-row">{integrationPartners.map(p=><li key={p.name}><span className="eh-partner-logo"><img src={`/integrations/${p.file}`} alt={p.name} loading="lazy"/></span><small>{p.role}</small></li>)}</ul><div className="eh-integration-grid">{integrationCapabilities.map(([Icon,title,body])=>{const I=Icon as typeof Users;return <article key={title}><span className="eh-integration-icon"><I size={21}/></span><h3>{title}</h3><p>{body}</p></article>})}</div></div></section><section className="eh-closing" id="start-with-your-school"><div className="wrap"><div className="eh-closing-copy"><div className="eyebrow">LET’S START WITH YOUR SCHOOL</div><h2>What would make the<br/><em>biggest difference for your school?</em></h2><p>Bring your priorities, grade levels, and the questions you want to solve. We’ll explore the right combination together.</p><a href="/request-demo" className="button">Request a demo <ArrowUpRight size={18}/></a></div><div className="eh-closing-portrait"><img src="/principal-emily-carter.png" alt="A school principal wearing a name badge in a bright school hallway" width={1536} height={1024} loading="lazy"/></div></div></section></main><Footer/></>}
