'use client';

import { JourneyHero } from './journey-motion';
import { Ecosystem, SchoolStory, SolutionChapters, Adoption, Closing } from './experiences';
import { ArrowUpRight, BookOpen, ChartNoAxesCombined, GraduationCap, Menu, PencilRuler } from 'lucide-react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
export const solutions = [
  { id:'teacher-tools', name:'Teacher Tools', icon:PencilRuler, color:'blue', subtitle:'Make room for teaching.' },
  { id:'academics', name:'Academics', icon:BookOpen, color:'teal', subtitle:'Keep curiosity moving.' },
  { id:'school-performance', name:'School Performance', icon:ChartNoAxesCombined, color:'violet', subtitle:'See the next opportunity.' },
  { id:'college-readiness', name:'College Readiness', icon:GraduationCap, color:'gold', subtitle:'Open up what comes next.' },
];
export const navLinks = [
  { href:'/for-administration', label:'For Schools' },
  { href:'/for-teachers', label:'For Teachers' },
  { href:'/for-students', label:'For Students' },
  { href:'/trust-privacy', label:'Trust & Privacy' },
];
const solutionRoutes:Record<string,string> = {
  'teacher-tools':'/for-teachers',
  'academics':'/for-students#academics',
  'college-readiness':'/for-students#college-readiness',
  'school-performance':'/for-administration',
};
export function solutionHref(id:string){return solutionRoutes[id] ?? `/#${id}`}
export function SolutionLink({id,children,className=''}:{id:string;children:React.ReactNode;className?:string}) {return <a className={className} href={solutionHref(id)}>{children}</a>}
export function Brand(){return <a href="/" className="brand" aria-label="TuritoSchools home"><img src="/turito-logo-black.svg" alt="Turito Schools"/></a>}
function MobileNav(){return <DropdownMenu><DropdownMenuTrigger className="nav-button" aria-label="Open navigation"><Menu size={24}/></DropdownMenuTrigger><DropdownMenuContent className="mobile-nav-menu" align="end" sideOffset={18}>{navLinks.map(l=><DropdownMenuItem key={l.href} className="mobile-nav-item" render={<a href={l.href}/>}>{l.label}<ArrowUpRight size={16}/></DropdownMenuItem>)}<DropdownMenuItem className="mobile-nav-item mobile-nav-demo" render={<a href="/request-demo"/>}>Request a demo <ArrowUpRight size={16}/></DropdownMenuItem></DropdownMenuContent></DropdownMenu>}
export function Header(){return <><a className="skip-link" href="#main">Skip to content</a><header className="header"><div className="wrap header-inner"><Brand/><nav className="nav" aria-label="Main navigation">{navLinks.map(l=><a key={l.href} href={l.href}>{l.label}</a>)}</nav><a href="/request-demo" className="button small">Request a demo <ArrowUpRight size={16}/></a><div className="mobile-menu"><MobileNav/></div></div></header></>}
export function Footer(){return <footer className="footer"><div className="wrap footer-inner"><Brand/><span>Made for the possibilities ahead.</span><span>© 2026 Turito. All rights reserved.</span></div></footer>}
export function Hero(){return <JourneyHero/>}
export function HomePage(){return <><Header/><main id="main"><Hero/><div className="solution-strip"><div className="wrap strip-inner">{solutions.map(s=><SolutionLink id={s.id} key={s.id}><s.icon className={s.color}/>{s.name}</SolutionLink>)}</div></div><Ecosystem/><SchoolStory/><SolutionChapters/><Adoption/><Closing/></main><Footer/></>}
