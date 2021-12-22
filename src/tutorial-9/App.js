import React, { useState } from 'react';
import './style.css';
import axios from 'axios';

export default function App(props) {
  const [gitProfile, setGitProfile] = useState(null);
  const [value, setValue] = useState('');
  const [load, setLoad] = useState(false);

  const onChangeText = (e) => {
    setValue(e.target.value);
  };

  const getProfile = async (e) => {
    e.target[1].disabled = true; // 4 часа пытался отловить button, но никак!! пришлось через индекс
    setLoad(true);
    e.preventDefault();
    try {
      const res = await axios.get(`https://api.github.com/users/${value}`);
      setGitProfile(res.data);
      setValue('');
      e.target[1].disabled = false;
      setLoad(false);
    } catch {
      alert('Странно, но такого юзера нет!');
    }
  };

  return (
    <div id="app">
      <div className="app-container">
        <form onSubmit={getProfile} className="app-form">
          <input
            value={value}
            onChange={onChangeText}
            type="text"
            className="app-input"
            placeholder="Укажите GitHub-аккаунт"
          />
          <button disabled={false} name="button" type="Submit" className="app-form_btn">
            Найти
          </button>
        </form>
        {load && 'Загрузка...'}
        {gitProfile && (
          <div className="app-user">
            <div className="app-user_info">
              <div className="app-user_image">
                <img src={gitProfile.avatar_url} alt="" />
              </div>
              <div className="app-user_data">
                <h1 className="app-user_name">
                  {gitProfile.name}
                  <span>@{gitProfile.login}</span>
                </h1>
                <p className="app-user_about">{gitProfile.bio}</p>
              </div>
            </div>
            <ul className="app-user_stats">
              <li className="app-user_stats-item">
                Репозитории
                <span>{gitProfile.public_repos}</span>
              </li>
              <li className="app-user_stats-item">
                Подписчиков
                <span>{gitProfile.followers}</span>
              </li>
              <li className="app-user_stats-item">
                Подписан
                <span>{gitProfile.following}</span>
              </li>
            </ul>
            <ul className="app-user_location">
              <li className="app-user_location-item">{gitProfile.location}</li>
              <li className="app-user_location-item">
                <a href={gitProfile.blog}>{gitProfile.blog}</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
