import React, { useState } from 'react';

export default function App() {
  const [users, setUsers] = useState([]);

  async function handleClickUsers() {
    try {
      let response = await fetch('https://61c080ad33f24c0017823463.mockapi.io/users');
      let result = await response.json();
      setUsers(result);
    } catch {
      alert('Произошла ошибка!');
    }
  }

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.fullName}</li>
        ))}
      </ul>
      <button onClick={handleClickUsers}>Получить список пользователей</button>
    </div>
  );
}
