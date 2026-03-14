import React from 'react';
import { TICKER_ITEMS } from '../lib/data';

interface TickerProps {
  items?: string[];
}

export default function Ticker({ items = TICKER_ITEMS }: TickerProps): React.JSX.Element {
  return (
    <section className="bg-white/5 border-y border-white/10 py-4 overflow-hidden whitespace-nowrap">
      <div className="ticker-animation inline-flex">
        {[...items, ...items].map((item, idx) => (
          <div 
            key={`${item}-${idx}`} 
            className="flex items-center gap-3 px-10 text-sm font-display font-bold uppercase text-accent"
          >
            <span className="text-brand text-lg">•</span>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
