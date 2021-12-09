import React from 'react';

export function Profilefunc(props) {
  let firstName = props.name.slice(0, 4);
  return (
    <div>
      Привет <b>{firstName}!</b>
      <p>Дата регистрации: {props.registredAt}</p>
    </div>
  );
}
