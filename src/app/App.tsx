import './assets/css/App.css';
import Navbar from './components/ui/navbar';
import { useRoutes } from 'react-router-dom';
import { routes } from './routes';

function App() {
  const element = useRoutes(routes);

  return (
    <>
      <Navbar />
      {element}
    </>
  );
}

export default App;
