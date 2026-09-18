'use client';
import {useEffect,useRef,useState} from 'react';
import {PlanningStory} from './planning-story';
import {AIToolsStory} from './ai-tools-story';
import {TestBuilderStory} from './test-builder-story';
import {ScaledAsset} from './scaled-asset';
import {PerformanceStory} from './performance-story';
import {ArrowUpRight, BookOpen, CalendarDays, ChartNoAxesCombined, Check, ClipboardCheck, GraduationCap, Layers3, RotateCcw, Sparkles, MousePointer2} from 'lucide-react';
import {solutionHref} from './marketing';
const workflows=[
 {id:'plan',icon:CalendarDays,title:'Plan your academic year, down to each lesson.',body:'Organize your academic year, schedule topics, and attach or generate resources for each lesson.',label:'Academic planning',link:'teacher-tools'},
 {id:'prepare',icon:Sparkles,title:'Create teaching materials faster with AI.',body:'Create lesson plans, worksheets, rubrics, and explanations with AI tools. Review and adapt them for your class.',label:'AI tools',link:'teacher-tools'},
 {id:'assess',icon:ClipboardCheck,title:'Build tests and evaluate responses.',body:'Choose questions and answer keys, assign tests, and review scores and written responses.',label:'Test management',link:'teacher-tools'},
 {id:'respond',icon:ChartNoAxesCombined,title:'Identify learning gaps at every level.',body:'Track engagement and subject-level performance—from county and school views to individual classrooms and students—with AI summaries to help focus support.',label:'Performance insights',link:'school-performance'}
];
const productScenes:Record<string,{label:string;detail:string}>={
 plan:{label:'Academic planning',detail:'Connect the year plan to the resources for a teaching day.'},
 prepare:{label:'AI teaching tools',detail:'Turn a teaching objective into material you can review and adapt.'},
 assess:{label:'Test builder',detail:'Choose questions and shape an assessment around your lesson.'},
 respond:{label:'Performance insights',detail:'Connect learning evidence to a focused teaching decision.'}
};
function TeachingGraphic({scene}:{scene:string}){if(['plan','prepare','assess','respond'].includes(scene))return <ScaledAsset>{scene==='plan'?<PlanningStory/>:scene==='prepare'?<AIToolsStory/>:scene==='assess'?<TestBuilderStory/>:<PerformanceStory/>}</ScaledAsset>;const item=productScenes[scene];return <figure className={`ts-product ts-product-${scene} ts-original`}><div className="ts-product-frame"><div className="ts-product-bar"><img src="/turito-logo.svg" alt="Turito"/><span>{item.label}</span></div><div className="ts-original-canvas">

</div></div><figcaption><span>{item.detail}</span></figcaption></figure>}
export function TeacherJourney(){
 const section=useRef<HTMLElement>(null);const track=useRef<HTMLDivElement>(null);const [active,setActive]=useState(0);
 useEffect(()=>{let frame=0;const update=()=>{frame=0;const el=track.current;if(!el||document.hidden)return;
 if(window.matchMedia('(max-width:760px), (max-height:700px)').matches){const chapters=Array.from(section.current?.querySelectorAll<HTMLElement>('.ts-mobile-stories .ts-chapter')||[]);let distance=Infinity,index=0;chapters.forEach((chapter,i)=>{const r=chapter.getBoundingClientRect();const d=Math.abs(r.top+r.height/2-window.innerHeight*.5);if(d<distance){distance=d;index=i}});setActive(index);return;}
 const viewport=el.querySelector<HTMLElement>('.ts-pinned-pair');if(!viewport)return;const distance=el.offsetHeight-viewport.offsetHeight;const progress=(96-el.getBoundingClientRect().top)/Math.max(1,distance);setActive(Math.max(0,Math.min(3,Math.floor(progress*4))));};
 const schedule=()=>{if(!frame)frame=requestAnimationFrame(update)};schedule();window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',schedule);return()=>{cancelAnimationFrame(frame);window.removeEventListener('scroll',schedule);window.removeEventListener('resize',schedule)};
 },[]);
 const jump=(event:React.MouseEvent<HTMLAnchorElement>,i:number)=>{const el=track.current;const viewport=el?.querySelector<HTMLElement>('.ts-pinned-pair');if(!el||!viewport)return;event.preventDefault();const target=window.scrollY+el.getBoundingClientRect().top-96+(el.offsetHeight-viewport.offsetHeight)*(i+.05)/4;window.scrollTo({top:target,behavior:'auto'});};
 const w=workflows[active];
 return <section className="hj-teacher ts-section ts-scrolly" id="how-it-works" ref={section} data-story={workflows[active].id}><div className="wrap"><div className="hj-heading"><div className="eyebrow">FOR TEACHERS & SCHOOL TEAMS</div><h2>Plan, teach, assess.<br/><em>Support your team at every stage.</em></h2><p>Reduce preparation work, manage assessments, and identify where students need support with connected tools for teachers and school leaders.</p></div>
 <div className="ts-scroll-track" ref={track}>
 {workflows.map((story,i)=><span className="ts-scroll-marker" id={`teacher-story-${story.id}`} style={{top:`calc((100% - 100svh + 96px) * ${(i+.05)/4})`}} key={story.id}/>)}
 <div className="ts-pinned-pair"><nav className="ts-story-nav" aria-label="Teacher story chapters">{workflows.map((story,i)=><a key={story.id} href={`#teacher-story-${story.id}`} onClick={e=>jump(e,i)} aria-current={active===i?'step':undefined} aria-label={story.label}><story.icon size={18}/><span>{story.id==='plan'?'Plan':story.id==='prepare'?'Prepare':story.id==='assess'?'Assess':'Respond'}</span></a>)}</nav>
 <div className="ts-pair-content"><article className="ts-pinned-copy" key={w.id}><div className="ts-story-label"><w.icon size={22}/>{w.label}</div><h3>{w.title}</h3><p>{w.body}</p><a className="hj-explore" href={solutionHref(w.link)}>Explore {w.label.toLowerCase()} <ArrowUpRight size={17}/></a></article><div className="ts-pinned-art ts-stage" key={`art-${w.id}`}><TeachingGraphic scene={w.id}/></div></div>
 </div></div>
 <div className="ts-mobile-stories">{workflows.map(story=><article className="ts-chapter" key={story.id}><div className="ts-story-label"><story.icon size={22}/>{story.label}</div><h3>{story.title}</h3><p>{story.body}</p><a className="hj-explore" href={solutionHref(story.link)}>Explore {story.label.toLowerCase()} <ArrowUpRight size={17}/></a><div className="ts-mobile-graphic"><TeachingGraphic scene={story.id}/></div></article>)}</div>
 </div></section>
}
export {StudentJourney} from './student-journey';
