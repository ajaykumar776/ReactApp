import "bootstrap/dist/css/bootstrap.min.css";
import {Routes,Route} from "react-router-dom";
import View from "./components/View";
function App() {
  return (


    <div className="container-fluid">
        <div className='container'>
        <Routes>
          <Route path='/' element={<View />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
