'use client';
import {useEffect,useRef,useState} from 'react';
import {PlanningStory} from './planning-story';
export function ScaledPlanningPreview(){const ref=useRef<HTMLDivElement>(null);const [width,setWidth]=useState(545);useEffect(()=>{const el=ref.current;if(!el)return;const observer=new ResizeObserver(([entry])=>setWidth(entry.contentRect.width));observer.observe(el);return()=>observer.disconnect()},[]);const scale=Math.min(1,width/545);return <div ref={ref} className="scaled-planning-preview" style={{height:450*scale}}><div className="scaled-planning-canvas" style={{width:545,zoom:scale}}><PlanningStory/></div></div>}
