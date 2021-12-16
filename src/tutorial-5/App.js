import React, { useEffect, useState } from 'react';
import AlignItemsList from './AlignItemsList';
import styles from './App.module.scss';

export default function App(props) {
  const [comments, setComments] = useState([]);
  const [value, setValue] = useState({ fullName: '', email: '', text: '' });

  const handleChangeValue = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    setComments([
      ...comments,
      {
        ...value,
        createAt: Date.now(),
      },
    ]);
    setValue({ fullName: '', email: '', text: '' });
  }

  useEffect(() => {
    const comment = JSON.parse(localStorage.getItem('comments')) || [];
    setComments(comment);
  }, []);

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  const handleDeleteMessage = (id) => {
    setComments(comments.filter((_, i) => id !== i));
  };

  return (
    <div className={styles.wrapper}>
      <AlignItemsList onDeleteMessage={handleDeleteMessage} comment={comments} />
      <form onSubmit={handleSubmit}>
        <label>Обратная связь:</label>
        <div>
          <input
            name="fullName"
            value={value.fullName}
            type="text"
            placeholder="имя"
            onChange={handleChangeValue}
          />
        </div>
        <div>
          <input
            name="email"
            value={value.email}
            type="email"
            placeholder="почта"
            onChange={handleChangeValue}
          />
        </div>
        <div>
          <textarea
            name="text"
            value={value.text}
            type="text"
            placeholder="текст"
            onChange={handleChangeValue}
          />
        </div>
        <div>
          <button>Отправить</button>
        </div>
      </form>
    </div>
  );
}
