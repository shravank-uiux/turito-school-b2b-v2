'use client';
import {useEffect,useRef,useState} from 'react';
import type {CSSProperties} from 'react';
import {ArrowUpRight} from 'lucide-react';

const chapters=[
 {id:'schools',name:'For Schools',lead:'Know where to put your attention.',body:'Engagement and subject-level performance across your county, schools, and classrooms, with AI summaries that point leaders to where support is needed.',photo:'/performance-hero.png',focus:'50% 40%',href:'/for-administration',tone:'#c9b6e8'},
 {id:'teachers',name:'For Teachers',lead:'Get the week back before it starts.',body:'Plan the year, generate teaching material, build tests, and review AI-assisted marking, with the teacher approving everything before a class sees it.',photo:'/learning-together.png',focus:'50% 34%',href:'/for-teachers',tone:'#f2a894'},
 {id:'students',name:'For Students',lead:'Help that does not stop at the bell.',body:'Explanations on demand from a Virtual AI Tutor, study material organised by subject and chapter, and practice that carries into SAT and ACT preparation.',photo:'/college-hero.png',focus:'50% 36%',href:'/for-students',tone:'#bcd89e'},
];

export function HomeStory(){
 const section=useRef<HTMLElement>(null);
 const pinned=useRef<HTMLDivElement>(null);
 const [pos,setPos]=useState(0);        // continuous 0..chapters.length-1
 const [live,setLive]=useState(false);  // section has taken over the viewport
 const [stacked,setStacked]=useState(false);

 useEffect(()=>{
  let frame=0;
  const compact=window.matchMedia('(max-width:900px), (max-height:700px)');
  const update=()=>{
   frame=0;
   const el=section.current,view=pinned.current;
   if(!el||!view||document.hidden)return;
   if(compact.matches){setStacked(true);setLive(false);return}
   setStacked(false);
   const rect=el.getBoundingClientRect();
   // the stage lights up only while the sticky viewport actually owns the screen
   setLive(rect.top<=2&&rect.bottom>window.innerHeight*.6);
   const distance=el.offsetHeight-view.offsetHeight;
   const p=Math.max(0,Math.min(1,-rect.top/Math.max(1,distance)));
   // equal slice per chapter; the deck lands on a card at the centre of its slice
   setPos(Math.max(0,Math.min(chapters.length-1,p*chapters.length-.5)));
  };
  const schedule=()=>{if(!frame)frame=requestAnimationFrame(update)};
  schedule();
  window.addEventListener('scroll',schedule,{passive:true});
  window.addEventListener('resize',schedule);
  compact.addEventListener('change',schedule);
  document.addEventListener('visibilitychange',schedule);
  return()=>{cancelAnimationFrame(frame);window.removeEventListener('scroll',schedule);window.removeEventListener('resize',schedule);compact.removeEventListener('change',schedule);document.removeEventListener('visibilitychange',schedule)};
 },[]);

 const active=Math.max(0,Math.min(chapters.length-1,Math.round(pos)));
 const cardStyle=(i:number):CSSProperties=>{
  const d=i-pos,away=Math.abs(d);
  return {
   transform:`translate3d(0, ${d*34}px, 0) rotate(${d*2.4}deg) scale(${Math.max(.74,1-away*.06)})`,
   opacity:d<-.85?0:Math.max(0,1-Math.max(0,d)*.2-Math.max(0,-d)*1.1),
   zIndex:chapters.length-Math.round(away*10),
  };
 };

 return <section className={`hs-section ${live?'is-live':''}`} ref={section} aria-label="How TuritoSchools fits your school">
  <div className="hs-pinned" ref={pinned}>
   <div className="wrap hs-stage">
    <div className="hs-title">
     <div className="eyebrow">A closer look</div>
     <h2>What this looks like,<br/><em>day to day.</em></h2>
    </div>
    <div className="hs-deck">
     {chapters.map((c,i)=><figure className={`hs-card ${i===active?'is-front':''}`} key={c.id} style={{...cardStyle(i),'--tone':c.tone} as CSSProperties}>
      <img src={c.photo} alt="" loading="lazy" style={{objectPosition:c.focus,transform:`translate3d(0,${(i-pos)*-16}px,0) scale(1.09)`}}/>
      <span className="hs-veil" aria-hidden="true"/>
      <figcaption className="hs-card-body">
       <span className="hs-count"><b>{String(i+1).padStart(2,'0')}</b><i/>{String(chapters.length).padStart(2,'0')}</span>
       <h2>{c.name}</h2>
       <p className="hs-lead">{c.lead}</p>
       <p className="hs-body">{c.body}</p>
       <a href={c.href} className="hs-link" tabIndex={i===active?0:-1}>Explore {c.name} <ArrowUpRight size={17}/></a>
      </figcaption>
     </figure>)}
    </div>
    <ul className="hs-dots" aria-hidden="true">{chapters.map((c,i)=><li key={c.id} className={i===active?'is-active':''} style={{'--tone':c.tone} as CSSProperties}/>)}</ul>
   </div>
  </div>

  {/* below the pinning breakpoint the chapters read as a plain stacked list */}
  {stacked&&<div className="wrap hs-stacked"><div className="hs-title">
   <div className="eyebrow">A closer look</div>
   <h2>What this looks like,<br/><em>day to day.</em></h2>
  </div>{chapters.map((c,i)=><article key={c.id} style={{'--tone':c.tone} as CSSProperties}>
   <div className="hs-stacked-media">
    <img src={c.photo} alt="" loading="lazy" style={{objectPosition:c.focus}}/>
    <span className="hs-veil" aria-hidden="true"/>
    <div className="hs-stacked-copy">
     <span className="hs-count"><b>{String(i+1).padStart(2,'0')}</b><i/>{String(chapters.length).padStart(2,'0')}</span>
     <h2>{c.name}</h2>
     <p className="hs-lead">{c.lead}</p>
    </div>
   </div>
   <p className="hs-body">{c.body}</p>
   <a href={c.href} className="hs-link">Explore {c.name} <ArrowUpRight size={17}/></a>
  </article>)}</div>}
 </section>;
}
