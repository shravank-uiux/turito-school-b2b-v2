'use client';
import {useEffect,useState} from 'react';

import styles from './hero-audience.module.css';

const audiences=['Schools.','Teachers.','Students.'];
const interval=2400;

/* The rotating audience word. All three words share one grid cell, so the cell is as wide as
   the widest of them and the headline never reflows as the word swaps. The visible line is
   aria-hidden by the caller, which supplies the full phrase for assistive tech instead. */
export function HeroAudience(){
 const [index,setIndex]=useState(0);
 const [rotate,setRotate]=useState(true);
 useEffect(()=>{
  const preference=window.matchMedia('(prefers-reduced-motion: reduce)');
  const sync=()=>setRotate(!preference.matches);sync();
  preference.addEventListener('change',sync);
  return()=>preference.removeEventListener('change',sync);
 },[]);
 useEffect(()=>{
  if(!rotate)return;
  const timer=window.setInterval(()=>{if(!document.hidden)setIndex(i=>(i+1)%audiences.length)},interval);
  return()=>window.clearInterval(timer);
 },[rotate]);
 if(!rotate)return <>schools, teachers, and students.</>;
 return <span className={styles.rotator}>{audiences.map((word,i)=><span key={word} className={styles.word} data-active={i===index||undefined}>{word}</span>)}</span>;
}
