import React from 'react';
import './App.css';
import { Emptyblock } from './components/EmptyBlock';
import { Phrase } from './components/Phrase';

export default function App(props) {
  const adjectivesArr = [
    'абсолютный',
    'адский',
    'азартный',
    'активный',
    'ангельский',
    'астрономический',
    'баснословный',
    'безбрежный',
    'безвозвратный',
    'безграничный',
    'бездонный',
    'бездушный',
    'безжалостный',
    'замечательно',
    'замечательный',
    'записной',
    'запредельный',
    'заядлый',
    'звериный',
    'зверский',
    'зеленый',
    'злой',
    'злостный',
    'значительный',
    'неоспоримый',
    'неотразимый',
    'неоценимый',
    'непередаваемый',
  ];
  const nounsArr = [
    'лгун',
    'день',
    'конь',
    'олень',
    'человек',
    'программист',
    'ребёнок',
    'конец',
    'город',
    'дурак',
  ];

  const [state, setState] = React.useState([]);

  function onGenPhrase() {
    const noun = nounsArr[Math.floor(Math.random() * nounsArr.length)];
    const adjective = adjectivesArr
      .sort(() => Math.random() - Math.random())
      .slice(0, 2)
      .join(' ');
    setState((prev) => [[adjective, noun], ...prev]);
  }

  function onClearArr() {
    setState([]);
  }

  return (
    <div className="wrapper">
      {state.length ? <Phrase state={state} /> : <Emptyblock />}
      <button onClick={onGenPhrase} className="btn btn_generate">
        Сгенерировать
      </button>
      <button onClick={onClearArr} className="btn btn_clear">
        Очистить
      </button>
    </div>
  );
}
