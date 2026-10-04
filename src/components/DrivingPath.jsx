import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const route =
  "M 130 400 C 95 355 100 300 151 261 L 239 202 Q 255 191 271 205 L 303 230 Q 319 243 333 224 L 424 98 Q 441 76 468 85 L 518 102 Q 540 110 549 143 L 556 225 Q 558 246 540 258 L 448 316 Q 422 333 433 361 L 471 455 Q 486 492 447 514 C 355 570 210 512 153 442 Z";
const waypoints = [
  [130, 400],
  [151, 261],
  [239, 202],
  [303, 230],
  [424, 98],
  [518, 102],
  [556, 225],
  [448, 316],
  [433, 361],
  [471, 455],
  [447, 514],
  [153, 442],
];

export default function DrivingPath({ reduced }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.05 });
  const [tabVisible, setTabVisible] = useState(() => !document.hidden);
  useEffect(() => {
    const updateVisibility = () => setTabVisible(!document.hidden);
    document.addEventListener("visibilitychange", updateVisibility);
    return () =>
      document.removeEventListener("visibilitychange", updateVisibility);
  }, []);
  const moving = !reduced && inView && tabVisible;
  return (
    <div className="driving-study" ref={ref}>
      <svg className="driving-diagram" viewBox="0 0 640 640" fill="none">
        <defs>
          <pattern
            id="driving-grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path d="M 40 0 H 0 V 40" stroke="#d4d4c7" strokeWidth="0.6" />
          </pattern>
          <path id="driving-route" d={route} />
        </defs>
        <rect
          x="64"
          y="64"
          width="512"
          height="512"
          fill="url(#driving-grid)"
          opacity="0.6"
        />
        <path
          d="M 54 64 H 74 M 64 54 V 74 M 566 64 H 586 M 576 54 V 74 M 54 576 H 74 M 64 566 V 586 M 566 576 H 586 M 576 566 V 586"
          stroke="#a8ad96"
          strokeWidth="1"
        />
        <g className="driving-labels">
          <text x="80" y="91" className="driving-kicker">
            NAVIGATION STUDY / 01
          </text>
          <text x="80" y="111">
            An idea, finding its line.
          </text>
        </g>
        <use
          href="#driving-route"
          stroke="#c9cebc"
          strokeWidth="37"
          strokeLinejoin="round"
        />
        <use
          href="#driving-route"
          stroke="#e7e9dc"
          strokeWidth="34"
          strokeLinejoin="round"
        />
        <use
          href="#driving-route"
          stroke="#c4532b"
          strokeWidth="1.4"
          strokeDasharray="5 8"
          opacity="0.65"
        />
        <g>
          {waypoints.map(([x, y], index) => (
            <circle
              key={index}
              cx={x}
              cy={y}
              r="4"
              fill="#f5f3eb"
              stroke="#79865c"
              strokeWidth="1.5"
            />
          ))}
        </g>
        <g className="driving-labels driving-waypoint-labels">
          <text x="72" y="423">
            START / FINISH
          </text>
          <text x="217" y="170">
            WP 03
          </text>
          <text x="564" y="278" textAnchor="end">
            WP 07
          </text>
          <text x="449" y="545">
            WP 11
          </text>
        </g>
        <g className="driving-annotation">
          <path
            d="M 335 297 H 287 V 335"
            fill="none"
            stroke="#a8ad96"
            strokeWidth="1"
          />
          <circle cx="335" cy="297" r="2.5" fill="#79865c" />
          <text x="215" y="360">
            OBSERVE.
          </text>
          <text x="215" y="384">
            STEER. REPEAT.
          </text>
          <text x="215" y="407" className="driving-kicker">
            WAYPOINTS + PID CONTROL
          </text>
        </g>
        <g
          className="driving-vehicle"
          transform={moving ? undefined : "translate(130 400) rotate(-128)"}
        >
          {moving && (
            <animateMotion
              dur="14s"
              repeatCount="indefinite"
              rotate="auto"
              calcMode="paced"
            >
              <mpath href="#driving-route" />
            </animateMotion>
          )}
          <circle
            r="26"
            fill="#79865c"
            fillOpacity="0.09"
            stroke="#79865c"
            strokeOpacity="0.3"
            strokeWidth="1"
          />
          <path d="M 14 -9 L 46 0 L 14 9" fill="#79865c" fillOpacity="0.12" />
          <path
            d="M 16 0 H 46"
            stroke="#79865c"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
          <circle cx="46" r="2.5" fill="#79865c" />
          <rect x="-12" y="-7" width="25" height="14" rx="4" fill="#c4532b" />
          <rect x="2" y="-5" width="4" height="10" rx="1.5" fill="#f5f3eb" />
          <path d="M -7 -4 V 4" stroke="#83391f" strokeWidth="2" />
        </g>
        <g className="driving-labels">
          <circle cx="80" cy="597" r="3" fill="#79865c" />
          <text x="91" y="601">
            AUTONOMOUS PATH FOLLOWING
          </text>
          <text x="568" y="601" textAnchor="end" className="driving-kicker">
            ILLUSTRATIVE STUDY
          </text>
        </g>
      </svg>
    </div>
  );
}
