'use client';
import {useEffect,useRef} from 'react';
import {BookOpen,CalendarDays,ChartNoAxesCombined,Compass,FileCheck2,Sparkles} from 'lucide-react';
const content={
 'teacher-tools':{image:'/teacher-tools-hero.png',alt:'A teacher preparing lessons with a laptop, planner and worksheets at her classroom desk',first:'Academic planning',second:'AI teaching tools',First:CalendarDays,Second:Sparkles},
 academics:{image:'/academics-hero.png',alt:'A student studying with a laptop, textbook and notebook in a school library',first:'Subject-wise resources',second:'Virtual AI Tutor',First:BookOpen,Second:Sparkles},
 'college-readiness':{image:'/college-hero.png',alt:'Students exploring college options with a school counselor',first:'SAT & ACT preparation',second:'College guidance',First:FileCheck2,Second:Compass},
 'school-performance':{image:'/performance-hero.png',alt:'School leaders and teachers reviewing learning reports together',first:'Subject-level performance',second:'AI performance summaries',First:ChartNoAxesCombined,Second:Sparkles},
};
export function SolutionHeroArt({solution}:{solution:keyof typeof content}){
 const ref=useRef<HTMLDivElement>(null);const c=content[solution];
 useEffect(()=>{const el=ref.current;if(!el)return;const observer=new IntersectionObserver(([entry])=>{el.dataset.visible=String(entry.isIntersecting)},{threshold:.1});observer.observe(el);const sync=()=>{el.dataset.hidden=String(document.hidden)};sync();document.addEventListener('visibilitychange',sync);return()=>{observer.disconnect();document.removeEventListener('visibilitychange',sync)}},[]);
 return <div ref={ref} className={`solution-hero-art sha-${solution}`}><div className="sha-photo"><img src={c.image} width={1536} height={1024} alt={c.alt}/></div><span className="sha-label sha-label-first"><c.First size={19}/>{c.first}</span><span className="sha-label sha-label-second"><c.Second size={19}/>{c.second}</span></div>
}
