import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { headerApp } from './components/HeaderApp';
import { LisProducts } from './components/LisProducts';

const App = () => {
  return (
    <container>
<div className="App">
   <headerApp />
   <LisProducts />
    </div>
    </container>
    
  );
}

export default App;
