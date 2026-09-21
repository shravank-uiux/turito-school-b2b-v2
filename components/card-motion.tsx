"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Card groups that get a staggered reveal. Selectors that match nothing on the
 * current page are simply skipped, so this list can cover every page at once.
 */
const CARD_GROUPS = [
  // Homepage (.eh-path-card is skipped: it already has its own eh-rise entry animation)
  ".eh-why-list > li",
  ".eh-trust-points > li",
  ".eh-standards ul > li",
  ".eh-integration-grid > article",
  // For Teachers
  ".teacher-benefits > div",
  ".teacher-focused-asset",
  ".related-grid > a",
  // For Schools & Districts
  ".sp-loop-grid > article",
  // Academic Support
  ".ac-rollout > div",
  // College Readiness (.cr-study-tools is now an auto-advancing tab set)
  // Trust & Privacy
  ".tp-grid > article",
  ".tp-role-grid > article",
];

const STAGGER_MS = 60;
const MAX_STAGGER_STEPS = 5;

export function CardMotion() {
  const pathname = usePathname();

  useEffect(() => {
    // Respect the reader's setting: leave the DOM completely untouched.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).dataset.revealed = "";
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    const touched: HTMLElement[] = [];
    const seen = new Set<Element>();

    CARD_GROUPS.forEach((selector) => {
      document.querySelectorAll<HTMLElement>(selector).forEach((el, i) => {
        if (seen.has(el)) return;
        seen.add(el);

        el.style.setProperty("--card-delay", `${Math.min(i, MAX_STAGGER_STEPS) * STAGGER_MS}ms`);
        if (el.matches("a, button") || el.querySelector("a, button")) {
          el.dataset.cardInteractive = "";
        }
        el.dataset.cardMotion = "";
        touched.push(el);

        // Anything already on screen is shown at once, in the same frame, so
        // the first paint never flashes empty cards.
        const box = el.getBoundingClientRect();
        if (box.top < window.innerHeight && box.bottom > 0) {
          el.dataset.revealed = "";
        } else {
          observer.observe(el);
        }
      });
    });

    return () => {
      observer.disconnect();
      touched.forEach((el) => {
        delete el.dataset.cardMotion;
        delete el.dataset.revealed;
        delete el.dataset.cardInteractive;
        el.style.removeProperty("--card-delay");
      });
    };
  }, [pathname]);

  return null;
}
