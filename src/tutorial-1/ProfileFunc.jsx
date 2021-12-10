import React from 'react';

export function Profilefunc(props) {
  const firstName = props.name.split(' ')[0];
  return (
    <div>
      Привет, <b>{firstName}!</b>
      <p>Дата регистрации: {props.registredAt}</p>
    </div>
  );
}
