// React Router
import MainRouter from './Components/MainRouter'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (  
    <BrowserRouter>
      <MainRouter/>
    </BrowserRouter>
  );
}

export default App;
