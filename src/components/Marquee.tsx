import React from 'react';

const items = [
  'Classic Cuts',
  'Fades',
  'Beard Grooming',
  'Hot Towel Shaves',
  'Buzz Cuts',
  'Ferndale, Michigan',
];

function Marquee() {
  const track = [...items, ...items];

  return (
    <div className="bg-black border-y border-white/10 py-5 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee w-max">
        {track.map((item, i) => (
          <span
            key={i}
            className="font-display text-2xl md:text-3xl text-white/70 uppercase tracking-wide mx-6 flex items-center gap-6 shrink-0"
          >
            {item}
            <span className="text-white/25 text-lg">&#10022;</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
