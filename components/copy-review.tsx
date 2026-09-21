"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { copyChangesByRoute, pageNames, type CopyChange } from "./site-copy-changes";
import styles from "./copy-review.module.css";

const MARK = "data-copy-review";

/** Wrap each changed string in the live page with its previous wording. */
function annotate(changes: CopyChange[]): number {
  const root = document.getElementById("main");
  if (!root) return 0;
  let applied = 0;

  // Longer phrases go first so a short terminology change cannot split a larger sentence.
  for (const change of [...changes].sort((a, b) => b.after.length - a.after.length)) {
    if (change.offPage) continue;

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const value = node.nodeValue;
        if (!value || !value.includes(change.after)) return NodeFilter.FILTER_REJECT;
        if (node.parentElement?.closest(`[${MARK}]`)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      },
    });

    const node = walker.nextNode() as Text | null;
    if (!node?.nodeValue) continue;

    // Isolate the changed run into its own text node, then swap in before/after.
    const target = node.splitText(node.nodeValue.indexOf(change.after));
    target.splitText(change.after.length);

    const pair = document.createElement("span");
    pair.setAttribute(MARK, "");
    pair.className = styles.pair;

    const before = document.createElement("del");
    before.className = styles.before;
    before.textContent = change.before;

    const after = document.createElement("ins");
    after.className = styles.after;
    after.textContent = change.after;

    pair.append(before, after);
    target.replaceWith(pair);
    applied += 1;
  }

  return applied;
}

/** Put the page back exactly as it was. */
function clear() {
  document.querySelectorAll(`[${MARK}]`).forEach((el) => {
    const parent = el.parentNode;
    el.replaceWith(document.createTextNode(el.querySelector("ins")?.textContent ?? ""));
    parent?.normalize();
  });
}

function ChangeRow({ change }: { change: CopyChange }) {
  return (
    <li className={styles.row}>
      <span className={styles.kind}>{change.kind}</span>
      <del className={styles.before}>{change.before}</del>
      <ins className={styles.after}>{change.after}</ins>
      <p className={styles.reason}>
        {change.offPage ? <strong>Not in the page body. </strong> : null}
        {change.reason}
      </p>
    </li>
  );
}

export function CopyReview() {
  const pathname = usePathname();
  const changes = useMemo(() => copyChangesByRoute[pathname] ?? [], [pathname]);
  const [on, setOn] = useState(false);
  const [openList, setOpenList] = useState(false);
  const [applied, setApplied] = useState(0);

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("copy-review") === "1") {
      setOn(true);
    }
  }, []);

  useEffect(() => {
    if (!on) {
      clear();
      setApplied(0);
      return;
    }
    setApplied(annotate(changes));
    return clear;
  }, [changes, on]);

  const toggle = useCallback(() => setOn((v) => !v), []);
  const inPage = changes.filter((c) => !c.offPage).length;

  if (!changes.length) return null;

  return (
    <aside className={styles.bar} aria-label="Copy review">
      <div className={styles.controls}>
        <button
          type="button"
          className={styles.switch}
          onClick={toggle}
          aria-pressed={on}
          data-on={on ? "true" : "false"}
        >
          <span className={styles.track} aria-hidden="true">
            <span className={styles.knob} />
          </span>
          Show previous wording
        </button>

        <button
          type="button"
          className={styles.listButton}
          onClick={() => setOpenList((v) => !v)}
          aria-expanded={openList}
        >
          All {pageNames[pathname] ?? "page"} changes ({changes.length})
        </button>
      </div>

      {on ? (
        <p className={styles.status} role="status">
          <del className={styles.before}>previous</del> <ins className={styles.after}>current</ins>
          {" · "}
          {applied} of {inPage} marked in the page
          {applied < inPage ? " · some text may be hidden at this screen size" : null}
        </p>
      ) : null}

      {openList ? (
        <ol className={styles.list}>
          {changes.map((change) => (
            <ChangeRow key={change.after} change={change} />
          ))}
        </ol>
      ) : null}
    </aside>
  );
}
