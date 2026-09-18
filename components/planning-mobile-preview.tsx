'use client';
import {useEffect,useRef} from 'react';
export function PlanningMobilePreview(){
 const ref=useRef<HTMLVideoElement>(null);
 useEffect(()=>{const video=ref.current;if(!video)return;const media=window.matchMedia('(max-width: 760px)'),motion=window.matchMedia('(prefers-reduced-motion: reduce)');let visible=false;
 const sync=()=>{if(visible&&media.matches&&!motion.matches&&!document.hidden){if(!video.src)video.src='/mobile-previews/academic-planning.mp4';video.play().catch(()=>{});}else video.pause()};
 const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;sync()},{threshold:.3});observer.observe(video);media.addEventListener('change',sync);motion.addEventListener('change',sync);document.addEventListener('visibilitychange',sync);
 return()=>{observer.disconnect();video.pause();media.removeEventListener('change',sync);motion.removeEventListener('change',sync);document.removeEventListener('visibilitychange',sync)}},[]);
 return <figure className="planning-mobile-preview"><video ref={ref} width={720} height={840} muted loop playsInline controls preload="none" poster="/mobile-previews/academic-planning-poster.jpg" aria-label="Academic Planning: create a yearly plan, set the class and subject, plan a lesson, generate materials, and view the teaching week."/><figcaption className="sr-only">Create a yearly lesson plan, choose its subject and class, add a topic and teaching day, attach a worksheet and generate lesson notes, then review plans across subjects.</figcaption></figure>
}
