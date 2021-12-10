import Profileclass from './ProfileClass';
import { Profilefunc } from './ProfileFunc';

function App() {
  let date = new Date().toLocaleString('ru', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div>
      <Profilefunc name="Вася Пупкин" registredAt={date} />
      <Profileclass name="Вася Пупкин" registredAt={date} />
    </div>
  );
}

export default App;
