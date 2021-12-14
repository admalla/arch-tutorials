import React from 'react';
import Figa from './figa.jpg';

export function Emptyblock(props) {
  return (
    <div className="block empty-block">
      <img src={Figa} width="32px" height="32px" alt="Figa" />
      <h2>Список фраз пустой</h2>
      <p>Чтобы в этом списке появилась фраза, тебе необходимо нажать на кнопку “Сгенерировать”</p>
    </div>
  );
}
