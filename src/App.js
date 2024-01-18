import EditContact from './redux/EditContact';
import Formulaire from './redux/Formulaire';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Formulaire/>}/>
      <Route path='/edit-contact/:id' element={<EditContact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;