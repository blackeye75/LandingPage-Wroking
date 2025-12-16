import React, { useEffect, useRef, useState } from "react";

/**
 * Auto-sliding responsive carousel.
 * - No external deps
 * - Duplicates items internally for seamless infinite scroll
 * - Pauses on hover or keyboard focus
 *
 * Props:
 * - items: array of { title, desc, icon } (icon can be JSX)
 * - autoPlayMs: milliseconds between auto-advances (default 3000)
 * - transitionMs: smooth scroll duration for each advance (default 600)
 */

export default function AutoCarouselFeatures({
  items = [],
  autoPlayMs = 2000,
  transitionMs = 600,
}) {
  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // duplicate items once to enable seamless loop
  const doubled = [...items, ...items];

  // auto-advance index (counts physical items, not clones)
  const indexRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || items.length === 0) return;

    // helper: get visible card width (one card width) at runtime
    const getCardWidth = () => {
      const card = track.querySelector("[data-card]");
      if (!card) return track.clientWidth;
      // card margin accounted by offsetWidth
      return card.offsetWidth;
    };

    let timerId = null;

    function advance() {
      if (isPaused) return;
      const cardWidth = getCardWidth();
      // target scrollLeft to move by cardWidth
      const start = track.scrollLeft;
      const target = start + cardWidth;

      // smooth scroll; fallback to CSS smooth by using scrollTo
      track.scrollTo({ left: target, behavior: "smooth" });

      // update indexRef after a short delay (transition)
      indexRef.current += 1;

      // if we've moved half the track (original items length), reset without visual jump
      const halfScroll = (track.scrollWidth / 2);
      // schedule reset after transition completed
      setTimeout(() => {
        if (track.scrollLeft >= halfScroll - 2) {
          // jump back to equivalent position in first half
          track.scrollLeft = track.scrollLeft - halfScroll;
          // also reset indexRef accordingly
          indexRef.current = indexRef.current - items.length;
        }
      }, transitionMs + 30);
    }

    // interval runner
    timerId = setInterval(() => {
      advance();
    }, autoPlayMs);

    // cleanup
    return () => {
      clearInterval(timerId);
    };
  }, [items, autoPlayMs, transitionMs, isPaused]);

  // pause handlers (hover / focus)
  const pause = () => setIsPaused(true);
  const resume = () => setIsPaused(false);

  // accessibility: keyboard left/right controls for manual navigation
  const onKeyDown = (e) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("[data-card]");
    if (!card) return;
    const cardW = card.offsetWidth;
    if (e.key === "ArrowRight") {
      track.scrollBy({ left: cardW, behavior: "smooth" });
    } else if (e.key === "ArrowLeft") {
      track.scrollBy({ left: -cardW, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-[#3b1630]">Lead the Future</h2>
          <div className="w-16 h-1 bg-[#caa84a] mx-auto mt-4 rounded" />
        </div>

        {/* TRACK */}
        <div
          ref={trackRef}
          onMouseEnter={pause}
          onMouseLeave={resume}
          onFocus={pause}
          onBlur={resume}
          onKeyDown={onKeyDown}
          tabIndex={0}
          aria-label="Lead the Future features carousel. Use left and right arrow keys to navigate."
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4"
          style={{
            // ensure smoothness on some browsers
            WebkitOverflowScrolling: "touch",
            scrollBehavior: "smooth",
          }}
        >
          {doubled.map((item, idx) => (
            <article
              data-card
              key={idx}
              className="flex-none w-[88%] sm:w-[47%] lg:w-[18%] rounded-lg overflow-hidden shadow-lg h-full flex flex-col"
              aria-hidden={idx >= items.length ? true : false}
            >
              <div className="bg-[#34142a] p-6 min-h-[150px] flex flex-col justify-between relative">
                <h3 className="text-white text-lg font-semibold leading-snug wrap-break-word pr-12">{item.title}</h3>
                <div className="absolute right-4 bottom-4">{item.icon}</div>
              </div>

              <div className="bg-[#d0aa60] p-6 flex-1">
                <p className="text-[#231815] text-sm leading-relaxed">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* small decorative svgs */}
      {/* <svg className="absolute left-6 bottom-6 opacity-10 w-48 h-48 pointer-events-none" viewBox="0 0 200 200" fill="none">
        <rect x="10" y="10" width="180" height="120" rx="8" stroke="#34142a" strokeWidth="4" />
      </svg> */}
    </section>
  );
}
