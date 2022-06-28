import './App.css'
import Navbar from './components/Navbar'
import PageRoutes from './components/Routing'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router} from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App">    
        <Navbar />
        <PageRoutes />  
      </div>
    </Router>
  )
}

export default App
