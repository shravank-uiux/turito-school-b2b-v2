"use client";

import { SiteFooter as Footer } from "./site-footer";
import { usePathname } from "next/navigation";
import styles from "./site-header.module.css";
import { JourneyHero } from "./journey-motion";
import { Ecosystem, SchoolStory, SolutionChapters, Adoption, Closing } from "./experiences";
import {
  ArrowUpRight,
  BookOpen,
  ChartNoAxesCombined,
  GraduationCap,
  Menu,
  ChevronDown,
  PencilRuler,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
export const solutions = [
  {
    id: "teacher-tools",
    name: "Teacher Tools",
    icon: PencilRuler,
    color: "blue",
    subtitle: "Make room for teaching.",
  },
  {
    id: "academics",
    name: "Academic Support",
    icon: BookOpen,
    color: "teal",
    subtitle: "Keep curiosity moving.",
  },
  {
    id: "school-performance",
    name: "School & District Insights",
    icon: ChartNoAxesCombined,
    color: "violet",
    subtitle: "See the next opportunity.",
  },
  {
    id: "college-readiness",
    name: "College Readiness",
    icon: GraduationCap,
    color: "gold",
    subtitle: "Open up what comes next.",
  },
];
export const navLinks = [
  { href: "/for-administration", label: "For Schools & Districts" },
  { href: "/for-teachers", label: "For Teachers" },
  { href: "/trust-privacy", label: "Trust & Privacy" },
];
const solutionRoutes: Record<string, string> = {
  "teacher-tools": "/for-teachers",
  academics: "/for-students/academic-support",
  "college-readiness": "/for-students/college-readiness",
  "school-performance": "/for-administration",
};
export function solutionHref(id: string) {
  return solutionRoutes[id] ?? `/#${id}`;
}
export function SolutionLink({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a className={className} href={solutionHref(id)}>
      {children}
    </a>
  );
}
export function Brand() {
  return (
    <a href="/" className="brand" aria-label="TuritoSchools home">
      <img src="/turito-logo-black.svg" alt="Turito Schools" />
    </a>
  );
}
const studentLinks = [
  {
    href: "/for-students/academic-support",
    label: "Academic Support",
    description: "Resources, practice, and Virtual AI Tutor.",
  },
  {
    href: "/for-students/college-readiness",
    label: "College Readiness",
    description: "College planning and Virtual AI Counselor.",
  },
];

function NavigationItem({
  href,
  label,
  description,
  pathname,
}: {
  href: string;
  label: string;
  description?: string;
  pathname: string;
}) {
  return (
    <DropdownMenuItem
      className={styles.menuItem}
      render={<a href={href} aria-current={pathname === href ? "page" : undefined} />}
    >
      <span>
        <strong>{label}</strong>
        {description && <small>{description}</small>}
      </span>
      <ArrowUpRight size={16} aria-hidden="true" />
    </DropdownMenuItem>
  );
}

export function Header() {
  const pathname = usePathname();
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className={styles.header}>
        <div className={styles.inner}>
          <div className={styles.logo}>
            <Brand />
          </div>
          <nav className={styles.desktop} aria-label="Main navigation">
            {navLinks.slice(0, 2).map((link) => (
              <a
                className={styles.navLink}
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </a>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={styles.navLink}
                data-active={pathname.startsWith("/for-students") || undefined}
              >
                For Students <ChevronDown size={15} aria-hidden="true" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className={styles.popup} align="center" sideOffset={14}>
                {studentLinks.map((link) => (
                  <NavigationItem key={link.href} {...link} pathname={pathname} />
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <a
              className={styles.navLink}
              href="/trust-privacy"
              aria-current={pathname === "/trust-privacy" ? "page" : undefined}
            >
              Trust &amp; Privacy
            </a>
          </nav>
          <div className={styles.actions}>
            <a href="/request-demo" className={styles.demo}>
              Request a demo <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <div className={styles.mobile}>
              <DropdownMenu>
                <DropdownMenuTrigger className={styles.menuButton} aria-label="Open navigation">
                  <Menu size={22} aria-hidden="true" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className={`${styles.popup} ${styles.mobilePopup}`}
                  align="end"
                  sideOffset={12}
                >
                  {navLinks.slice(0, 2).map((link) => (
                    <NavigationItem key={link.href} {...link} pathname={pathname} />
                  ))}
                  {studentLinks.map((link) => (
                    <NavigationItem key={link.href} {...link} pathname={pathname} />
                  ))}
                  <NavigationItem
                    href="/trust-privacy"
                    label="Trust & Privacy"
                    pathname={pathname}
                  />
                  <NavigationItem href="/request-demo" label="Request a demo" pathname={pathname} />
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export { SiteFooter as Footer } from "./site-footer";
export function Hero() {
  return <JourneyHero />;
}
export function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <div className="solution-strip">
          <div className="wrap strip-inner">
            {solutions.map((s) => (
              <SolutionLink id={s.id} key={s.id}>
                <s.icon className={s.color} />
                {s.name}
              </SolutionLink>
            ))}
          </div>
        </div>
        <Ecosystem />
        <SchoolStory />
        <SolutionChapters />
        <Adoption />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
