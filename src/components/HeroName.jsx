import { useEffect, useState } from "react";

function Letters({ text, start = 0 }) {
  return [...text].map((letter, index) => (
    <span
      className="typing-glyph"
      style={{ "--glyph-index": start + index }}
      key={index}
    >
      {letter}
    </span>
  ));
}

export default function HeroName() {
  const [complete, setComplete] = useState(false);
  useEffect(() => {
    // One cleanup timer, rather than a JavaScript timer for every letter.
    const timer = window.setTimeout(() => setComplete(true), 1700);
    return () => window.clearTimeout(timer);
  }, []);
  return (
    <h1
      className={`hero-name typing-name ${complete ? "typing-complete" : ""}`}
      aria-label="Arjun Ramesh."
    >
      <span aria-hidden="true">
        <Letters text="Arjun " />
        <em>
          <Letters text="Ramesh" start={6} />
        </em>
        <span className="name-period">
          <Letters text="." start={12} />
        </span>
      </span>
    </h1>
  );
}
