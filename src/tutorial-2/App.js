export default function App() {
  let email = '';
  let password = '';

  const handleSubmit = (e) => {
    e.preventDefault();
    email = e.target[0].value.trim();
    password = e.target[1].value.trim();
    !email || !password ? alert('заполните все поля') : console.log({ email, password });
    e.target[0].value = '';
    e.target[1].value = '';
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input style={{ display: 'block', marginBottom: 10 }} type="text" />
        <input style={{ display: 'block', marginBottom: 10 }} type="password" />
        <button type="submit">кнопка</button>
      </form>
    </div>
  );
}
