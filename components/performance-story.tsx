'use client';
import {useEffect,useRef,useState} from 'react';
import {ArrowRight,ChevronRight,MousePointer2,Pause,Play,RotateCcw,Sparkles} from 'lucide-react';
const levels=['County','School','Classroom','Student'];
const reports=[
 {title:'Maple County',context:'3 schools · September',score:74,engagement:82,label:'School',rows:[['Oakwood School',69,76],['Cedar Grove School',78,86],['Westfield School',75,84]],summary:'Oakwood trails other schools in scores and participation. Review its classrooms to focus support.',action:'Oakwood School'},
 {title:'Oakwood School',context:'Mathematics · September',score:69,engagement:76,label:'Classroom',rows:[['Grade 8 · Section A',62,83],['Grade 8 · Section B',73,72],['Grade 9 · Section A',72,73]],summary:'Grade 8 A participates regularly but scores lower. Review student responses to understand the gap.',action:'Grade 8 · Section A'},
 {title:'Grade 8 · Section A',context:'Mathematics · September',score:62,engagement:83,label:'Student',rows:[['Liam Carter',58,86],['Emma Wilson',81,88],['Sofia Martinez',72,79]],summary:'Liam participates regularly but struggles with multi-step equations. Review his topic results.',action:'Liam Carter'},
 {title:'Liam Carter',context:'Grade 8 · Section A · Mathematics',score:58,engagement:86,label:'Topic',rows:[['Linear equations',42,88],['Geometry',76,84],['Data interpretation',56,86]],summary:'Geometry is a strength. Revisit inverse operations with guided practice, then check progress with a short quiz.',action:''}
];
export function PerformanceStory(){
 const [step,setStep]=useState(0),[playing,setPlaying]=useState(true),[hold,setHold]=useState(false),[phase,setPhase]=useState('reading'),[cursor,setCursor]=useState({x:0,y:0});const ref=useRef<HTMLDivElement>(null);const report=reports[step];
 const go=(i:number)=>{setPlaying(false);setStep(i)};
 useEffect(()=>{setPhase('reading');if(!playing||hold)return;let elapsed=0;const timer=setInterval(()=>{const el=ref.current;if(!el||document.hidden||window.matchMedia('(prefers-reduced-motion: reduce)').matches||el.closest('[data-motion=off]'))return;const box=el.getBoundingClientRect();if(!box.width||box.bottom<0||box.top>window.innerHeight)return;const action=el.querySelector<HTMLElement>('[data-auto-action]');if(!action)return;elapsed+=100;const target=action.getBoundingClientRect();setCursor({x:(target.left-box.left+target.width*.7)/(box.width/el.offsetWidth),y:(target.top-box.top+target.height*.6)/(box.width/el.offsetWidth)});if(elapsed>=3600){setStep(s=>(s+1)%4);return}setPhase(elapsed>=3150?'clicking':elapsed>=2450?'moving':'reading')},100);return()=>clearInterval(timer)},[step,playing,hold]);
 return <div className="ap-story pi-story pi-restyled" ref={ref} data-cursor-phase={phase} onMouseEnter={()=>setHold(true)} onMouseLeave={()=>setHold(false)} onFocusCapture={()=>setHold(true)} onBlurCapture={e=>{if(!e.currentTarget.contains(e.relatedTarget))setHold(false)}}>
 <div className="ps-app-header"><div className="ps-app-brand"><img src="/turito-logo.svg" width={92} height={28} alt="Turito"/><span>Schools</span></div><span className="ps-app-module">Performance insights</span></div>
 <nav className="pi-levels" aria-label="Performance reporting levels">{levels.map((level,i)=><button key={level} data-auto-action={step===3&&i===0?true:undefined} onClick={()=>go(i)} aria-current={step===i?'step':undefined}>{level}{i<3&&<ChevronRight size={11}/>}</button>)}</nav>
 <div className="ap-scene pi-scene" key={step}>
 <div className="ap-heading pi-report-heading"><h4>{report.title}</h4><span className="pi-context">{report.context}</span></div>
 <div className="pi-metrics"><div><span>Average test score</span><strong>{report.score}<small>%</small></strong><div className="pi-track"><i style={{width:report.score+'%'}}/></div></div><div><span>Resource participation</span><strong>{report.engagement}<small>%</small></strong><div className="pi-track pi-engagement"><i style={{width:report.engagement+'%'}}/></div></div></div>
 <div className="pi-summary"><span><Sparkles size={13}/> AI performance summary</span><p>{report.summary}</p></div>
 <table className="pi-table"><thead><tr><th>{report.label}</th><th>Test score</th><th>Participation</th></tr></thead><tbody>{report.rows.map(([name,score,engagement],i)=><tr key={name} className={i===0?'pi-focus':''}><td>{i===0&&step<3?<button data-auto-action onClick={()=>go(step+1)}>{name}<ArrowRight size={12}/></button>:<span>{name}</span>}</td><td><span className="pi-score">{score}%</span></td><td>{engagement}%</td></tr>)}</tbody></table>

 </div>

 <span className="ap-demo-cursor" aria-hidden="true" style={{left:cursor.x,top:cursor.y}}><MousePointer2 size={22}/><i/></span>
 </div>
}
