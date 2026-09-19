import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import classroom from "@/public/learning-together.png";
import { HeroAudience } from "./hero-audience";
import styles from "./home-hero.module.css";

const integrations = [
  { name: "Google Workspace", file: "google.png", width: 112, height: 38 },
  { name: "Apple", file: "apple.png", width: 100, height: 38 },
  { name: "Clever", file: "clever.png", width: 108, height: 38 },
  { name: "ClassLink", file: "classlink.svg", width: 115, height: 38 },
];

export function HomeHero() {
  return (
    <section className={styles.hero} aria-labelledby="home-hero-title">
      <div className={styles.stage}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>AI support for your school</p>
          <h1 id="home-hero-title" className={styles.title}>
            One intelligent learning ecosystem.
            <em className={styles.audience}>
              <span className={styles.srOnly}>Built for schools, teachers, and students.</span>
              <span aria-hidden="true">
                Built for <HeroAudience />
              </span>
            </em>
          </h1>
          <p className={styles.description}>
            Help teachers prepare lessons, give students guided practice, and see where extra
            support is needed.
          </p>
          <div className={styles.actions}>
            <Link className={styles.primary} href="/request-demo">
              Request a demo <ArrowUpRight size={19} aria-hidden="true" />
            </Link>
            <Link className={styles.secondary} href="/for-teachers#teacher-workflow">
              See how it works <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className={styles.visual}>
          <span className={styles.arc} aria-hidden="true" />
          <div className={styles.photo}>
            <Image
              src={classroom}
              alt="A teacher helping two students work through a problem together"
              fill
              sizes="(max-width: 760px) calc(100vw - 32px), (min-width: 1680px) 730px, 50vw"
              loading="eager"
              fetchPriority="high"
              placeholder="blur"
            />
          </div>
          <svg className={styles.spark} viewBox="0 0 80 80" fill="none" aria-hidden="true">
            <path
              d="M40 3C43 28 52 37 77 40C52 43 43 52 40 77C37 52 28 43 3 40C28 37 37 28 40 3Z"
              fill="currentColor"
            />
          </svg>
          <div className={styles.photoNote}>
            <span className={styles.noteLine} aria-hidden="true" />
            <span>
              For the moments
              <br />
              <em>that make teaching matter.</em>
            </span>
          </div>
        </div>
      </div>

      <div className={styles.integrations}>
        <div className={styles.integrationsInner}>
          <p>
            Works with the tools
            <br />
            <strong>your school already uses.</strong>
          </p>
          <ul aria-label="Compatible school tools">
            {integrations.map((integration) => (
              <li key={integration.name}>
                <img
                  src={`/integrations/${integration.file}`}
                  alt={integration.name}
                  width={integration.width}
                  height={integration.height}
                />
              </li>
            ))}
          </ul>
          <a className={styles.integrationLink} href="#integrations">
            See integrations <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
