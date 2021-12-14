import React from 'react';

export function Phrase({ state }) {
  return (
    <div className="list">
      {state.map((el, i) => {
        return (
          <div key={i} className="block">
            <h3>{el.join(' ')}</h3>
          </div>
        );
      })}
    </div>
  );
}
