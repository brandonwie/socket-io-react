import Login from './Login';
import Dashboard from './Dashboard';
import { useLocalStorage } from '../hooks/useLocalStorage';

const App: React.FC = () => {
  const [id, setId] = useLocalStorage('id');

  return <>{id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />}</>;
};

export default App;
