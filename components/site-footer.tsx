import { ArrowUpRight } from "lucide-react";
import styles from "./site-footer.module.css";

const studentLinks = [
  ["/for-students/academic-support", "Academic Support"],
  ["/for-students/college-readiness", "College Readiness"],
];

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <a href="/" aria-label="Turito Schools home">
              <img src="/turito-logo.svg" alt="Turito" width={124} height={42} />
            </a>
            <p>One intelligent learning ecosystem.</p>
            <span>Built for schools, teachers, and students.</span>
            <a className={styles.demo} href="/request-demo">
              Request a demo <ArrowUpRight size={17} />
            </a>
          </div>
          <nav aria-label="Footer solutions">
            <h2>Solutions</h2>
            <a href="/for-administration">For Schools &amp; Districts</a>
            <a href="/for-teachers">For Teachers</a>
            <span className={styles.studentLabel} id="footer-students">
              For Students
            </span>
            <ul className={styles.studentLinks} aria-labelledby="footer-students">
              {studentLinks.map(([href, label]) => (
                <li key={href}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Footer resources">
            <h2>Explore</h2>
            <a href="/trust-privacy">Trust &amp; Privacy</a>
            <a href="/request-demo">Request a demo</a>
          </nav>
        </div>
        <div className={styles.bottom}>
          <span>© 2026 Turito. All rights reserved.</span>
          <span>Made for the possibilities ahead.</span>
        </div>
      </div>
    </footer>
  );
}
