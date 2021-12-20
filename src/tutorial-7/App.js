import React from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import './styles.css';

const schema = yup.object({
  firstName: yup.string().min(2, 'Слишком короткое имя'),
  lastName: yup.string().min(3, 'Слишком короткая фамилия'),
  email: yup.string().email('неверная почта'),
  password: yup.string().min(6, 'Введите минимум 6 символов'),
});

function App() {
  const { handleSubmit, register, formState, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => console.log('ФОРМА!', values);

  const onSubmitClear = () => reset();

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmitClear)}>
        <div className="row">
          <TextField
            name="firstName"
            label="Имя"
            {...register('firstName')}
            helperText={formState.errors.firstName && formState.errors.firstName.message}
            error={!!formState.errors.firstName}
            fullWidth
          />
          <TextField
            name="lastName"
            label="Фамилия"
            {...register('lastName')}
            helperText={formState.errors.lastName && formState.errors.lastName.message}
            error={!!formState.errors.lastName}
            fullWidth
          />
        </div>
        <div className="row">
          <TextField
            {...register('email')}
            helperText={formState.errors.email && formState.errors.email.message}
            error={!!formState.errors.email}
            name="email"
            label="E-Mail"
            defaultValue=""
            fullWidth
          />
          <TextField
            {...register('password')}
            helperText={formState.errors.password && formState.errors.password.message}
            error={!!formState.errors.password}
            name="password"
            type="password"
            label="Пароль"
            fullWidth
          />
        </div>
        <div className="row">
          <TextField name="about" label="Обо мне" fullWidth />
        </div>
        <br />
        <div className="row">
          <Button onClick={handleSubmit(onSubmit)} variant="contained" color="primary">
            Зарегистрироваться
          </Button>
          <Button type="submit" variant="contained" color="secondary">
            Очистить
          </Button>
        </div>
      </form>
    </div>
  );
}

export default App;
