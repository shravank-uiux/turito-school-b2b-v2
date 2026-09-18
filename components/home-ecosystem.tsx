'use client';
import {useEffect,useRef,useState} from 'react';
import type {CSSProperties} from 'react';

import {ArrowRight,ArrowUpRight,BookOpen,ChartNoAxesCombined,ClipboardCheck,Clock,Eye,FileText,Gauge,KeyRound,LayoutGrid,Lightbulb,Lock,Moon,PencilRuler,PenLine,RefreshCw,School,Search,Sparkles,Store,Target,TrendingUp,UserCheck,Users,Zap} from 'lucide-react';
import {Header,Footer} from './marketing';
import {ScaledAsset} from './scaled-asset';

const audiences=['Schools','Teachers','Students'];
function RotatingAudience(){
 const [text,setText]=useState(audiences[0]);
 useEffect(()=>{
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  let word=0,chars=audiences[0].length,deleting=false,id:ReturnType<typeof setTimeout>;
  const step=()=>{
   const full=audiences[word];
   if(deleting){
    chars--;setText(full.slice(0,chars));
    if(chars===0){deleting=false;word=(word+1)%audiences.length;id=setTimeout(step,240);}
    else id=setTimeout(step,45);
   }else{
    chars++;setText(full.slice(0,chars));
    if(chars===full.length){deleting=true;id=setTimeout(step,1700);}
    else id=setTimeout(step,80);
   }
  };
  id=setTimeout(()=>{deleting=true;step();},1700);
  return ()=>clearTimeout(id);
 },[]);
 return <span className="eh-rotator"><span className="eh-sr">Schools, Teachers, and Students.</span><span className="eh-rotator-stack" aria-hidden="true">{audiences.map(w=><em key={w} className="eh-rotator-ghost">{w}</em>)}<em className="eh-rotator-live">{text}<i className="eh-caret"/></em></span></span>;
}
const audiencePaths=[
 {href:'/for-administration',name:'For Schools',accent:'#c9b6e8',photo:'/principal-emily-carter.png',focus:'50% 24%',note:'Engagement and subject-level performance across classrooms, schools, and your county.'},
 {href:'/for-teachers',name:'For Teachers',accent:'#f2a894',photo:'/teacher-tools-hero.png',focus:'50% 26%',note:'Academic planning, AI teaching tools, test creation, and AI-assisted evaluation.'},
 {href:'/for-students',name:'For Students',accent:'#bcd89e',photo:'/academics-hero.png',focus:'50% 22%',note:'Subject resources, a Virtual AI Tutor, and practice that connects to college planning.'},
];
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
const whyPoints=[
 [Gauge,'green','Meets every student where they are','Topic-level results show where a student actually is, not where the lesson assumes they are.'],
 [Moon,'gold','Gives teachers their evenings back','Planning, teaching material, and first-pass marking drafted in minutes. The teacher still holds the pen.'],
 [Zap,'red','Surfaces problems while they can still be fixed','Engagement and subject results name the students who need help now, not a report card confirming it in December.'],
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
export function EcosystemHome(){
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
 useEffect(()=>{
  const section=root.current?.querySelector<HTMLElement>('.eh-feedback');
  if(!section)return;
  const preference=window.matchMedia('(prefers-reduced-motion: reduce)');
  if(!motion||preference.matches){section.style.setProperty('--feedback-offset','0px');return;}
  let frame=0;
  const update=()=>{
   frame=0;
   if(document.hidden)return;
   const rect=section.getBoundingClientRect();
   if(rect.bottom<0||rect.top>window.innerHeight)return;
   const offset=Math.max(-55,Math.min(55,(window.innerHeight/2-rect.top-rect.height/2)*.12));
   section.style.setProperty('--feedback-offset',`${offset}px`);
  };
  const schedule=()=>{if(!frame)frame=window.requestAnimationFrame(update)};
  schedule();window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',schedule);document.addEventListener('visibilitychange',schedule);
  return()=>{window.cancelAnimationFrame(frame);window.removeEventListener('scroll',schedule);window.removeEventListener('resize',schedule);document.removeEventListener('visibilitychange',schedule)};
 },[motion]);
 return <><Header/><main id="main" className="ecosystem-home" ref={root} data-motion={motion?'on':'off'}><section className="eh-hero"><div className="wrap eh-hero-grid"><div className="eh-hero-copy"><div className="eyebrow">Turito Schools</div><h1>One intelligent learning ecosystem.<br/>Built for <RotatingAudience/></h1><p className="eh-hero-hook">Save time, empower teachers, and help every student thrive with intelligent, school-ready AI.</p><div className="eh-actions"><a className="button" href="/request-demo">See what’s possible <ArrowUpRight size={18}/></a><a href="#solutions">Explore the ecosystem <ArrowRight size={17}/></a></div><div className="eh-hero-trust"><span>Works with</span><ul>{[['google','Google Workspace'],['apple','Apple'],['clever','Clever'],['classlink','ClassLink']].map(([f,n])=><li key={f}><img src={`/integrations/${f}.${f==='classlink'?'svg':'png'}`} alt={n} loading="lazy"/></li>)}</ul></div></div><div className="ecosystem-hero-image"><img src="/learning-together.png" width={1536} height={1024} alt="A teacher helping two students work through a problem together"/><div className="eh-hero-orbits" aria-hidden="true"><span className="eh-hero-float eh-float-plan"><PencilRuler size={19}/><span>Teaching tools</span></span><span className="eh-hero-float eh-float-tutor"><Sparkles size={19}/><span>AI learning support</span></span><svg className="eh-hero-trail" viewBox="0 0 90 70" fill="none"><path d="M8 55C44 60 73 40 62 19C54 5 37 13 42 28C46 43 69 37 81 10" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 5"/><path d="m72 12 10-4 2 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div></div></div></section><section className="eh-offerings" id="solutions"><div className="wrap"><div className="eh-section-head"><div><div className="eyebrow">Who it’s for</div><h2>One platform.<br/><em>Three ways in.</em></h2></div><p>Start where your school needs support most. Every part connects to the rest.</p></div><div className="eh-paths">{audiencePaths.map(s=><a className="eh-path-card" href={s.href} key={s.href} style={{'--path-accent':s.accent} as CSSProperties}><span className="eh-path-media"><img src={s.photo} alt="" loading="lazy" style={{objectPosition:s.focus}}/></span><span className="eh-path-veil" aria-hidden="true"/><span className="eh-path-body"><span className="eh-path-rule" aria-hidden="true"/><h3>{s.name}</h3><span className="eh-path-note">{s.note}</span><span className="eh-path-go">Explore <ArrowUpRight size={16}/></span></span></a>)}</div></div></section><section className="eh-why"><div className="wrap eh-why-grid"><div className="eh-why-head"><div className="eyebrow">Why schools switch</div><h2>A platform built<br/><em>around the classroom.</em></h2></div><div className="eh-why-media"><img src="/classroom-support.png" width={1672} height={941} alt="A teacher working through a problem with students during class" loading="lazy"/></div><ul className="eh-why-list">{whyPoints.map(([Icon,tone,title,body])=>{const I=Icon as typeof Users;return <li key={title} className={`eh-why-${tone}`}><span className="eh-why-icon"><I size={22}/></span><div><h3>{title}</h3><p>{body}</p></div></li>})}</ul></div></section><section className="eh-feedback"><div className="eh-feedback-photo" aria-hidden="true"/><div className="eh-feedback-overlay" aria-hidden="true"/><div className="wrap"><div className="eh-feedback-title"><ChartNoAxesCombined size={30}/><h2>From everyday teaching<br/>to <em>college readiness.</em></h2></div><div><p>Bring teacher preparation, student learning, college readiness, and performance insights together. Start with the solutions your school needs and connect them to support the people you serve.</p><div className="eh-feedback-levels"><span>Student</span><ArrowRight size={14}/><span>Classroom</span><ArrowRight size={14}/><span>School</span><ArrowRight size={14}/><span>County</span></div><a className="text-link" href="/request-demo">Explore your school’s possibilities <ArrowUpRight size={17}/></a></div></div></section><section className="eh-trust"><div className="wrap eh-trust-grid"><div className="eh-trust-copy"><div className="eyebrow">Trust &amp; privacy</div><h2>Safe, school-ready AI.<br/><em>Answerable to you.</em></h2><p>TuritoSchools sits close to teaching and learning, so how it handles student work matters as much as what it can do. Four commitments shape how the product behaves.</p><a href="/trust-privacy" className="text-link">Read how we handle student data <ArrowRight size={17}/></a></div><ul className="eh-trust-points">{trustPoints.map(([Icon,tone,title,body])=>{const I=Icon as typeof Users;return <li key={title} className={`eh-trust-${tone}`}><span className="eh-trust-icon"><I size={21}/></span><div><h3>{title}</h3><p>{body}</p></div></li>})}</ul></div><div className="wrap"><div className="eh-standards"><div className="eh-standards-head"><span>Certifications &amp; compliance</span></div><ul>{trustStandards.map(([slug,name,body])=><li key={name}><span className="eh-std-badge"><img src={`/compliance/${slug}.png`} alt="" loading="lazy"/></span><h3>{name}</h3><p>{body}</p></li>)}</ul></div></div></section><section className="eh-integrations" id="integrations"><div className="wrap"><div className="eh-section-head"><div><div className="eyebrow">Works with your district</div><h2>Connects to the tools<br/><em>your school already uses.</em></h2></div><p>Sign-in, rostering, and app access run through the systems your IT team already manages.</p></div><ul className="eh-partner-row">{integrationPartners.map(p=><li key={p.name}><span className="eh-partner-logo"><img src={`/integrations/${p.file}`} alt={p.name} loading="lazy"/></span><small>{p.role}</small></li>)}</ul><div className="eh-integration-grid">{integrationCapabilities.map(([Icon,title,body])=>{const I=Icon as typeof Users;return <article key={title}><span className="eh-integration-icon"><I size={21}/></span><h3>{title}</h3><p>{body}</p></article>})}</div></div></section><section className="eh-closing" id="start-with-your-school"><div className="wrap"><div className="eh-closing-copy"><div className="eyebrow">LET’S START WITH YOUR SCHOOL</div><h2>What would make the<br/><em>biggest difference for your school?</em></h2><p>Bring your priorities, grade levels, and the questions you want to solve. We’ll explore the right combination together.</p><a href="/request-demo" className="button">Request a demo <ArrowUpRight size={18}/></a></div><div className="eh-closing-portrait"><img src="/principal-emily-carter.png" alt="A school principal wearing a name badge in a bright school hallway" width={1536} height={1024} loading="lazy"/></div></div></section></main><Footer/></>}
